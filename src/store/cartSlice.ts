import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface Product {
  id: string,
  price: number,
  title: string,
}

export interface ProductWithDescription extends Product {
  description: string
}

export interface Item {
  id: string,
  price: number,
  quantity: number,
  totalPrice: number,
  name: string
}

interface CartState {
  items: Item[],
  totalQuantity: number,
  changed: boolean
}

export interface CartContent {
  items: Item[],
  totalQuantity: number
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart: (state, action: PayloadAction<CartContent>) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.totalQuantity++;
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find(i => i.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.totalQuantity--;
      state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter(i => i.id !== id);
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
});

export const selectCart = (state: RootState) => state.cart;
export const selectItems = (state: RootState) => state.cart.items;
export const selectTotalQuantity = (state: RootState) => state.cart.totalQuantity;


export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

