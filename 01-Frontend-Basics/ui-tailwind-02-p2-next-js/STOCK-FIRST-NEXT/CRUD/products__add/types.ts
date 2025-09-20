export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string; // base64
}

export interface ProductFormProps {
  product?: Product;
  handleSave: (product: Product) => void;
}
