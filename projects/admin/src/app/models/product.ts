import { Category } from './category';

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  richDescription?: string;
  image?: string;
  images?: string[];
  price?: number;
  brand?: string;
  category?: Category;
  countInStock?: number;
  // rating?: number;
  // numReviews?: number;
  // isFeatured?: boolean;
  dateCreated?: string;
}
