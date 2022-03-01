import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const handleAddToCart = props.handleAddToCart;
  const { name, img, price, seller, key } = props.product;

  return (
    <>
      <div className="mx-auto ml-6 my-8 container lg:px-0 px-4">
        
        <a>
          <div className="w-full border md:flex ">
            <div className="md:h-40 h-96 md:w-48">
              <img src={img} className="h-full w-full" />
            </div>
            <div className="px-4 py-2  w-full">
              <div className="lg:flex items-center justify-between">
                <div className="flex items-center lg:justify-left justify-between lg:mt-0 mt-4">
                  <h2 className="text-lg font-semibold">
                    <Link to={"/product/" + key}>{name}</Link>
                  </h2>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2">{seller}</p>
              <div className=" mt-4 md:flex hidden ">
                <div>
                  <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    12 months warranty
                  </p>
                </div>

                <div className="pl-2">
                  <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    Complete box
                  </p>
                </div>
                <div className="pl-2">
                  <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                    Complete box
                  </p>
                </div>
              </div>
              <div className=" mt-4 md:hidden ">
                <div className="flex">
                  <div className="mx-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      12 months warranty
                    </p>
                  </div>
                  <div className="mx-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="mx-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                  <div className="mx-2">
                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                      Complete box
                    </p>
                  </div>
                </div>
              </div>
              {
                props.showAddToCart&& <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => handleAddToCart(props.product)}
                  type="submit"
                  className=" bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>{" "}
                  Add To Cart
                </button>
                <h3 className="text-indigo-700 text-xl font-semibold">
                  ${price}
                </h3>
              </div>
              }
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Product;
