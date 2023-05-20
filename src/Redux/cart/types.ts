export type CartItemType = {
  id: string;
  title: string;
  classification: string;
  structure: string;
  size: string;
  price: number;
  count: number;
  imageUrl: string;
};

export interface CartSliceState {
  totalPrice:number;
  items: CartItemType[];
}
