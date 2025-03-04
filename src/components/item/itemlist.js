import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => (
  <div>
    {products.map((product) => (
      <Item key={product.id} product={product} />
    ))}
  </div>
);

export default ItemList;
