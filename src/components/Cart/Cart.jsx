import React from "react";

function Cart({cart}) {
  const totalPrice=Math.round(cart.reduce((total,product)=>total+product.price,0))
  let shipping=0
  if(totalPrice>0){
    shipping=5
  }
  let tax=Math.round(totalPrice*2/100)

  let grandTotal=Math.round(totalPrice+shipping+tax)

  return (
    <div className="mt-10 m-16">
      <div className="bg-gray-50 rounded-lg px-2 py-6 sm:p-6 lg:p-4 mr-4">
        <h2 className="text-lg font-mono mb-4">Order summary </h2>

        <div className="flow-root">
          <dl className="-my-4 text-sm divide-y divide-gray-200">
          <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Total Order Items</dt>
              <dd className="font-medium text-gray-900"> : {cart.length}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="font-medium text-gray-900">${totalPrice}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-900">${shipping}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium text-gray-900">${tax}</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-base mr-3 font-medium text-gray-900">
                Order total
              </dt>
              <dd className="text-base font-medium text-gray-900">${grandTotal}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
