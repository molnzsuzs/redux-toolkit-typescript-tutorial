import React from 'react';

import classes from './ProductItem.module.css';
import { cartActions, ProductWithDescription } from '../../store/cartSlice';
import { useTypedDispatch } from '../../store/hooks';
import Card from '../UI/Card';

const ProductItem: React.FC<ProductWithDescription> = (props) => {
  const dispatch = useTypedDispatch();
  const {title, price, description, id} = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({id, title, price}));
  };

  return (
    <li>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;