import React from 'react';

import classes from './CartItem.module.css';
import { useTypedDispatch } from '../../store/hooks';
import { cartActions, Item } from '../../store/cartSlice';

type CartItemProps = {
  key: string,
  item: Item,
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useTypedDispatch();
  const {name, quantity, price, id, totalPrice} = props.item;

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({id, title: name, price}));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{'  '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  )
};

export default CartItem;