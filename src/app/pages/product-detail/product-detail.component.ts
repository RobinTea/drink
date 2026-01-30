import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DrinkService } from '../../services/drink.service';
import { CartService } from '../../services/cart.service';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  drink: Drink | undefined;
  quantity = 1;
  addedToCart = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private drinkService: DrinkService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.drink = this.drinkService.getDrinkById(id);
    
    if (!this.drink) {
      this.router.navigate(['/']);
    }
  }

  getDiscountedPrice(): number {
    if (!this.drink) return 0;
    return this.drink.price * (1 - this.drink.discount / 100);
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    if (this.drink && this.quantity < this.drink.amount) {
      this.quantity++;
    }
  }

  addToCart(): void {
    if (this.drink) {
      this.cartService.addToCart(this.drink, this.quantity);
      this.addedToCart = true;
      setTimeout(() => {
        this.addedToCart = false;
      }, 2000);
    }
  }

  isOutOfStock(): boolean {
    return this.drink?.amount === 0;
  }
}
