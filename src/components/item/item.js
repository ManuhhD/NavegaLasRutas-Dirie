import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => (
  <div>
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <Link to={`/product/${product.id}`}>Ver detalles</Link>
  </div>
);

export default Item;
