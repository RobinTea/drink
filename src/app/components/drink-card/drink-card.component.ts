import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css']
})
export class DrinkCardComponent {
  @Input() drink!: Drink;

  getDiscountedPrice(): number {
    return this.drink.price * (1 - this.drink.discount / 100);
  }
}
