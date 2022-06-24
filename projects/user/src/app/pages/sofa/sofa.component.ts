import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/admin/src/app/models/product';
import { ProductsService } from 'projects/admin/src/app/services/products.service';

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css'],
})
export class SofaComponent implements OnInit {
  sofaCategoryId = '62ac4174ff20bd22e4f0c619';
  sofaCategoryProducts: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProducts(this.sofaCategoryId)
      .subscribe((products) => {
        this.sofaCategoryProducts = products;
      });
  }
}
