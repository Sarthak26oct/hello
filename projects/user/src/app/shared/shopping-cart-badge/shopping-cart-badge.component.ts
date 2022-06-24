import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart-badge',
  templateUrl: './shopping-cart-badge.component.html',
  styleUrls: ['./shopping-cart-badge.component.css'],
})
export class ShoppingCartBadgeComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cartCount = cart?.items.length ?? 0;
    });
  }
}
