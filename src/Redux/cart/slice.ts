import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItemType, CartSliceState } from './types';


const initialState : CartSliceState  = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size,
      );
      if (findItem){
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => {
        return obj.id === action.payload.id && obj.size === action.payload.size;
      });
      if(findItem){
        state.totalPrice -= findItem.price * findItem.count;
        state.items = state.items.filter((obj) => {
        return obj.id !== action.payload.id || obj.size !== action.payload.size;
      });
      }
      
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});



export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
