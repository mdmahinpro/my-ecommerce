import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/products.JSON';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

export default function Shop() {
  const allProducts=fakeData.map(product=>product)
  const [products, setProducts] = useState(allProducts)
  const [cart, setCart] = useState([])

  useEffect(()=>{
    const saveCart=getStoredCart()
    const productKeys=Object.keys(saveCart)
    let previousCart=productKeys.map(pdKey=>{
      const product=fakeData.find(prd=>prd.key===pdKey)
      product.quantity=saveCart[pdKey]
      return product;
      
    })
    setCart(previousCart);
  },[])

  const handleAddToCart=(product)=>{
    const sameProduct=cart.find(pd=>pd.key===product.key)
    let count=1
    let newCart
    if(sameProduct){
      count=sameProduct.quantity+1
      sameProduct.quantity=count
      const others=cart.filter(pd=>pd.key!==product.key)
      newCart=[...others,sameProduct]
    }else{
      product.quantity=1
      newCart=[...cart,product]
    }
    setCart(newCart);
    addToDb(product.key,count)
  }

  return (
    <div className='shop_container flex'>
      <div className='shop__product-container w-3/4'>
        {
          products.map(product=><Product key={product.key} showAddToCart={true} product={product}  handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="shop__cart-container">
        <Cart cart={cart}>
        <Link to="/orderreview">
        <button
          type="submit"
          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Checkout
        </button>
        </Link>
        </Cart>
      </div>
    </div>
    
  )
}
