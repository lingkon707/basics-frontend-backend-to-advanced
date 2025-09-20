export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface ProductFormProps {
  product?: Product;
  handleSave: (product: Product) => void;
}

export interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}
