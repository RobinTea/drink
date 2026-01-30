import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private drinks: Drink[] = [
    {
      id: 1,
      type: 'Premium Edition',
      color: 'Black',
      name: 'CoolDrink1',
      price: 18,
      discount: 2,
      amount: 19888,
      product: 'drink'
    },
    {
      id: 2,
      type: 'Classic',
      color: 'Blue',
      name: 'OceanWave',
      price: 12,
      discount: 0,
      amount: 5000,
      product: 'drink'
    },
    {
      id: 3,
      type: 'Limited Edition',
      color: 'Red',
      name: 'FireBurst',
      price: 25,
      discount: 5,
      amount: 1000,
      product: 'drink'
    },
    {
      id: 4,
      type: 'Standard',
      color: 'Green',
      name: 'NatureFresh',
      price: 10,
      discount: 0,
      amount: 15000,
      product: 'drink'
    },
    {
      id: 5,
      type: 'Premium Edition',
      color: 'Purple',
      name: 'GrapeBlast',
      price: 20,
      discount: 3,
      amount: 8000,
      product: 'drink'
    },
    {
      id: 6,
      type: 'Classic',
      color: 'Orange',
      name: 'SunriseMix',
      price: 14,
      discount: 1,
      amount: 12000,
      product: 'drink'
    },
    {
      id: 7,
      type: 'Limited Edition',
      color: 'Pink',
      name: 'BerryDream',
      price: 22,
      discount: 4,
      amount: 3000,
      product: 'drink'
    },
    {
      id: 8,
      type: 'Standard',
      color: 'Yellow',
      name: 'LemonZest',
      price: 9,
      discount: 0,
      amount: 20000,
      product: 'drink'
    }
  ];

  getAllDrinks(): Drink[] {
    return this.drinks;
  }

  getDrinkById(id: number): Drink | undefined {
    return this.drinks.find(drink => drink.id === id);
  }

  searchDrinks(query: string): Drink[] {
    if (!query) {
      return this.drinks;
    }
    const lowerQuery = query.toLowerCase();
    return this.drinks.filter(drink =>
      drink.name.toLowerCase().includes(lowerQuery) ||
      drink.type.toLowerCase().includes(lowerQuery) ||
      drink.color.toLowerCase().includes(lowerQuery)
    );
  }
}
