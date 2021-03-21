import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';
import Item from './components/Item';

const commerce = new Commerce(
  "pk_24914c50e3f6ecb8d48c8ad0a1926c6b9dd6e6cf8c500"
);

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;
