import React from 'react';

import classes from './MainHeader.module.css';
import CartButton from '../Cart/CartButton';

const MainHeader: React.FC = () =>
  <header className={classes.header}>
    <h1>ReduxCart</h1>
    <nav>
      <ul>
        <li>
          <CartButton/>
        </li>
      </ul>
    </nav>
  </header>;

export default MainHeader;