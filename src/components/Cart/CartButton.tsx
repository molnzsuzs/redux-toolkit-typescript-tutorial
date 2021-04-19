import React from 'react';

import classes from './CartButton.module.css';
import { useTypedDispatch, useTypedSelector } from '../../store/hooks';
import { selectTotalQuantity } from '../../store/cartSlice';
import { uiActions } from '../../store/uiSlice';

const CartButton: React.FC = () => {
  const dispatch = useTypedDispatch();
  const totalQuantity = useTypedSelector(selectTotalQuantity);

  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;