import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fakeData from "../../fakeData/products.JSON";
import successful from '../../images/successfull.png';
import { deleteFromDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

function OrderReview() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false)
  let navigate=useNavigate()

  const handleProceedCheckout=()=>{
    navigate('/shipment')
    console.log("SHipment clicked");
  }
  ///Remove Item from DB
  const handleRemoveItem = (key) => {
    const newCart = cart.filter((pd) => pd.key != key);
    setCart(newCart);
    deleteFromDb(key);
  };
  useEffect(() => {
    const savedCart = getStoredCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-center ">
        </div>

        {cart.map((pd) => (
          <ReviewItem
            handleRemoveItem={handleRemoveItem}
            cart={cart}
            product={pd}
          ></ReviewItem>
        ))}
      </div>
      <div className="text-center w-full">
       {
         orderPlaced && <img src={successful}></img>
       }
        <Cart cart={cart}>
        
        <button
          onClick={handleProceedCheckout}
          type="submit"
          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Proceed Checkout
        </button>
  
        </Cart>
      </div>
    </div>
  );
}

export default OrderReview;
