// Code Splitting
const Dashboard = lazy(() => import('./Dashboard'));

<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>

// Image Optimization
<img 
  src="image.jpg" 
  loading="lazy"  // Lazy load images
  alt="Description"
/>

// Debouncing Search
const [search, setSearch] = useState('');

const debouncedSearch = useMemo(
  () =>
    debounce((value) => {
      // API call here
      fetchResults(value);
    }, 500),
  []
);

useEffect(() => {
  debouncedSearch(search);
}, [search]);