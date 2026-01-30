export interface Drink {
  id: number;
  type: string;        // e.g., "premium edition"
  color: string;       // e.g., "black"
  name: string;        // e.g., "CoolDrink1"
  price: number;       // e.g., 18
  discount: number;    // e.g., 2
  amount: number;      // stock amount, e.g., 19888
  product: string;     // e.g., "drink"
}
