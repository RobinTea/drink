import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  cartItemCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
    });
  }

  onMenuClick(): void {
    this.menuToggle.emit();
  }
}
