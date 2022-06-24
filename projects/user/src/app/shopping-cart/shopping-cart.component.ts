import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'projects/admin/src/app/services/products.service';
import { Subject, take, takeUntil } from 'rxjs';
import { cartItemDetail } from '../models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cartItems: cartItemDetail[] = [];
  endSubs: Subject<any> = new Subject();
  totalPrice: number;

  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCartDetails();
    this.getTotalPrice();
  }

  ngOnDestroy(): void {
    this.endSubs.next;
    this.endSubs.complete();
  }

  private getCartDetails() {
    this.cartService.cart.pipe(takeUntil(this.endSubs)).subscribe((res) => {
      this.cartItems = [];
      res.items.forEach((cartItem) => {
        this.productService
          .getProduct(cartItem.productId)
          .subscribe((product) => {
            this.cartItems.push({
              product: product,
              quantity: cartItem.quantity,
            });
          });
      });
    });
  }

  private getTotalPrice() {
    this.cartService.cart.pipe(takeUntil(this.endSubs)).subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items.map((item) => {
          this.productService
            .getProduct(item.productId)
            .pipe(take(1))
            .subscribe((product) => {
              this.totalPrice += product.price * item.quantity;
            });
        });
      }
    });
  }

  updateQuantity(event, item) {
    this.cartService.setCartItem(
      {
        productId: item.product.id,
        quantity: event.target.value,
      },
      true
    );
  }

  onCheckout() {
    this.router.navigate(['/checkout']);
  }

  back() {
    this.router.navigate(['/home']);
  }

  delete(item: cartItemDetail) {
    this.cartService.deleteCartItem(item.product.id);
  }
}
