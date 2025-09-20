// Product type
export interface Product {
  name: string;
  price: string;
}

// Props for ProductForm component
export interface ProductFormProps {
  name: string;
  price: string;
  setName: (value: string) => void;
  setPrice: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  editingIndex: number | null;
}

// Props for ProductCard component
export interface ProductCardProps {
  product: Product;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}
