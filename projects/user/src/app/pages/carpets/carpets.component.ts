import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/admin/src/app/models/product';
import { ProductsService } from 'projects/admin/src/app/services/products.service';

@Component({
  selector: 'app-carpets',
  templateUrl: './carpets.component.html',
  styleUrls: ['./carpets.component.css']
})
export class CarpetsComponent implements OnInit {

  CategoryId = "62aa128496785ce8c0ef79be";
  CategoryProducts: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts(this.CategoryId).subscribe((products) => {
      this.CategoryProducts = products;
    })
  }
}
