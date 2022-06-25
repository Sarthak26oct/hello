import { Category } from './category';

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  richDescription?: string;
  image?: string;
  price?: number;
  brand?: string;
  category?: Category;
  countInStock?: number;
  dateCreated?: string;
}
