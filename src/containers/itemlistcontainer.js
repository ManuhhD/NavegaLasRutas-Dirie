import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import ItemList from '../Item/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productSnapshot = await db.collection('products').get();
      const productList = productSnapshot.docs.map(doc => doc.data());
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
