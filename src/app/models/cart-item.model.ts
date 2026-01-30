import { Drink } from './drink.model';

export interface CartItem {
  drink: Drink;
  quantity: number;
}
