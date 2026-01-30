import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_KEY = 'drink_shop_cart';
  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  
  cart$ = this.cartSubject.asObservable();

  private loadCart(): CartItem[] {
    const cart = localStorage.getItem(this.CART_KEY);
    return cart ? JSON.parse(cart) : [];
  }

  private saveCart(cart: CartItem[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  addToCart(drink: Drink, quantity: number): void {
    const cart = this.loadCart();
    const existingItem = cart.find(item => item.drink.id === drink.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ drink, quantity });
    }

    this.saveCart(cart);
  }

  removeFromCart(drinkId: number): void {
    let cart = this.loadCart();
    cart = cart.filter(item => item.drink.id !== drinkId);
    this.saveCart(cart);
  }

  updateQuantity(drinkId: number, quantity: number): void {
    const cart = this.loadCart();
    const item = cart.find(item => item.drink.id === drinkId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(drinkId);
      } else {
        item.quantity = quantity;
        this.saveCart(cart);
      }
    }
  }

  getCart(): CartItem[] {
    return this.loadCart();
  }

  getTotal(): number {
    const cart = this.loadCart();
    return cart.reduce((total, item) => {
      const discountedPrice = item.drink.price * (1 - item.drink.discount / 100);
      return total + (discountedPrice * item.quantity);
    }, 0);
  }

  getItemCount(): number {
    const cart = this.loadCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void {
    this.saveCart([]);
  }
}
