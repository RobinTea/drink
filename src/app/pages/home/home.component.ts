import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { DrinkCardComponent } from '../../components/drink-card/drink-card.component';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, DrinkCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.drinks = this.drinkService.getAllDrinks();
  }
}
