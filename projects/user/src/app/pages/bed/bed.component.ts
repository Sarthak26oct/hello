import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/admin/src/app/models/product';
import { ProductsService } from 'projects/admin/src/app/services/products.service';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css'],
})
export class BedComponent implements OnInit {
  bedCategoryId = '62aefcc44ecf3d04f4e34dc9';
  bedCategoryProducts: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProducts(this.bedCategoryId)
      .subscribe((products) => {
        this.bedCategoryProducts = products;
      });
  }
}
