import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function Products() {
  const queryClient = useQueryClient();
  
  // Fetch products
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('/api/products');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
  
  // Create product mutation
  const createMutation = useMutation({
    mutationFn: (newProduct) => axios.post('/api/products', newProduct),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
  
  // Delete product mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`/api/products/${id}`),
    onMutate: async (deletedId) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['products'] });
      const previousProducts = queryClient.getQueryData(['products']);
      
      queryClient.setQueryData(['products'], (old) =>
        old.filter((product) => product.id !== deletedId)
      );
      
      return { previousProducts };
    },
    onError: (err, deletedId, context) => {
      // Rollback on error
      queryClient.setQueryData(['products'], context.previousProducts);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
  
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {data.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onDelete={() => deleteMutation.mutate(product.id)}
        />
      ))}
    </div>
  );
}