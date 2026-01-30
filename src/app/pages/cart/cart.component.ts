import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
    this.cartService.cart$.subscribe(() => {
      this.loadCart();
    });
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  getDiscountedPrice(item: CartItem): number {
    return item.drink.price * (1 - item.drink.discount / 100);
  }

  getItemTotal(item: CartItem): number {
    return this.getDiscountedPrice(item) * item.quantity;
  }

  increaseQuantity(item: CartItem): void {
    if (item.quantity < item.drink.amount) {
      this.cartService.updateQuantity(item.drink.id, item.quantity + 1);
    }
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.drink.id, item.quantity - 1);
    }
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.drink.id);
  }

  checkout(): void {
    if (this.cartItems.length > 0) {
      alert('Order placed successfully! Your cart has been cleared.');
      this.cartService.clearCart();
    }
  }
}
