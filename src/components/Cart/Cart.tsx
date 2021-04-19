import React from 'react';

import classes from './Cart.module.css';
import Card from '../UI/Card';
import { useTypedSelector } from '../../store/hooks';
import { selectItems } from '../../store/cartSlice';
import CartItem from './CartItem';

const Cart: React.FC = () => {

  const cartItems = useTypedSelector(selectItems);

  const productDisplay = cartItems.map(i =>
    <CartItem key={i.id}
              item={{...i}}/>
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {productDisplay}
      </ul>
    </Card>
  )
};

export default Cart;