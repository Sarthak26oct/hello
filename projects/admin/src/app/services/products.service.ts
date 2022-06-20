import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/api/v1/products/');
  }

  getProduct(id: string) {
    return this.http.get<Product>(
      `http://localhost:3000/api/v1/products/${id}`
    );
  }

  addProduct(product: Product) {
    return this.http.post('http://localhost:3000/api/v1/products/', product);
  }

  updateProduct(product: Product) {
    return this.http.put(
      `http://localhost:3000/api/v1/products/${product.id}`,
      product
    );
  }

  deleteProduct(id: string) {
    return this.http.delete(`http://localhost:3000/api/v1/products/${id}`);
  }

  getProductNumber() {
    return this.http.get('http://localhost:3000/api/v1/products/get/count');
  }

  uploadCsv(csv) {
    return this.http.post('http://localhost:3000/api/v1/products/csv', csv);
  }
}
