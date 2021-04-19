import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { cartActions, CartContent } from './cartSlice';
import { uiActions } from './uiSlice';

export const fetchCartData = () => {
  return (dispatch: Dispatch) => {
    axios.get('https://react-redux-async-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
      .then(res => {
        dispatch(cartActions.replaceCart({
          totalQuantity: res.data.totalQuantity,
          items: res.data.items || []
        }));
      })
      .catch(() => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        }))
      });
  }
};

export const sendCartData = (cart: CartContent) => {
  return (dispatch: Dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending....',
      message: 'Sending cart data!'
    }))
    axios.put('https://react-redux-async-default-rtdb.europe-west1.firebasedatabase.app/cart.json', cart)
      .then(() => {
        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        }))
      })
      .catch(() => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        }))
      });
  };
}