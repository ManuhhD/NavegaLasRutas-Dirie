import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <span>Carrito</span>
      <span>{totalItems} items</span>
    </div>
  );
};

export default CartWidget;
