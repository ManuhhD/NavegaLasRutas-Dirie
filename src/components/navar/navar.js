import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Catálogo</Link></li>
      <li><Link to="/cart">Carrito</Link></li>
      <li><Link to="/checkout">Checkout</Link></li>
    </ul>
    <CartWidget />
  </nav>
);

export default NavBar;
