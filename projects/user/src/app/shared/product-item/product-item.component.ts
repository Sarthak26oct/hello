import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'projects/admin/src/app/models/product';
import { ProductsService } from 'projects/admin/src/app/services/products.service';
import { CartItem } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {}

  addToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
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
      this.productService.updateProduct(updatedProduct, updatedProduct.id).subscribe();
    });

    if (this.product.countInStock < 10) {
      this.productService.sendMail().subscribe();
    }
  }

  addToWishlist() {
    const wishlistItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.wishlistService.setWishlistItem(wishlistItem);
  }
}
