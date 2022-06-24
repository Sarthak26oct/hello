import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/admin/src/app/models/product';
import { ProductsService } from 'projects/admin/src/app/services/products.service';

@Component({
  selector: 'app-wall-accessories',
  templateUrl: './wall-accessories.component.html',
  styleUrls: ['./wall-accessories.component.css']
})
export class WallAccessoriesComponent implements OnInit {

  CategoryId = "62b34584a91aee3aac220dcf";
  CategoryProducts: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts(this.CategoryId).subscribe((products) => {
      this.CategoryProducts = products;
    })
  }
}
