import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'projects/admin/src/app/models/product';
import { ProductsService } from 'projects/admin/src/app/services/products.service';
import { CartItem } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  quantity: number = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['productid']) {
        this.productService
          .getProduct(params['productid'])
          .subscribe((product) => {
            this.product = product;
          });
      }
    });
  }

  addToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity,
    };

    this.cartService.setCartItem(cartItem);

    this.productService.getProduct(this.product.id).subscribe((product) => {
      const updatedProduct: Product = {
        id: product.id,
        name: product.name,
        description: product.description,
        richDescription: product.richDescription,
        image: product.image,
        brand: product.brand,
        price: product.price,
        category: product.category,
        countInStock: product.countInStock - cartItem.quantity,
      };
      this.productService.updateProduct(updatedProduct).subscribe();
    });
  }

  buyNow() {
    this.router.navigate(['/cart'])
  }
}
