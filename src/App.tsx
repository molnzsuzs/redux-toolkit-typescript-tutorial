import React, { Fragment, useEffect } from 'react';

import { useTypedDispatch, useTypedSelector } from './store/hooks';
import { selectNotification, selectShowCart } from './store/uiSlice';
import { selectCart } from './store/cartSlice';
import { fetchCartData, sendCartData } from './store/cartActions';
import Notification from './components/UI/Notification';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { RootState } from './store';

let isInitial = true;

function App() {
  const dispatch = useTypedDispatch();
  const showCart = useTypedSelector(selectShowCart);
  const cart = useTypedSelector(selectCart);
  const notification = useTypedSelector(selectNotification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData({items: cart.items, totalQuantity: cart.totalQuantity}));
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status}
                                     title={notification.title}
                                     message={notification.message}/>}
      <Layout>
        {showCart && <Cart/>}
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Products/>
      </Layout>
    </Fragment>
  );
}

export default App;
