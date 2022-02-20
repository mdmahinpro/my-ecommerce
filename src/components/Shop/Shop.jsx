import React, { useState } from 'react';
import fakeData from '../../fakeData/products.JSON';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

export default function Shop() {
  const allProducts=fakeData.map(product=>product)
  const [products, setProducts] = useState(allProducts)
  const [cart, setCart] = useState([])
  const handleAddToCart=(product)=>{
    const newCart=[...cart,product]
    setCart(newCart);
    console.log("added",product);
  }
  return (
    <div className='shop_container flex'>
      <div className='shop__product-container w-3/4'>
        {
          products.map(product=><Product product={product}  handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="shop__cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
    
  )
}
