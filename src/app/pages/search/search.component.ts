import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DrinkCardComponent } from '../../components/drink-card/drink-card.component';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, DrinkCardComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  filteredDrinks: Drink[] = [];
  allDrinks: Drink[] = [];

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.allDrinks = this.drinkService.getAllDrinks();
    this.filteredDrinks = this.allDrinks;
  }

  onSearchChange(): void {
    this.filteredDrinks = this.drinkService.searchDrinks(this.searchQuery);
  }
}
