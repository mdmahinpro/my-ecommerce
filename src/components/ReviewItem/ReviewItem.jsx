import React from "react";

function ReviewItem(props) {
  const { name, img, key, price, stock, quantity } = props.product;
  const handleRemoveItem = props.handleRemoveItem;
  const cart = props.cart;
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-0">
        <form className>
          <section aria-labelledby="cart-heading">
            <ul
              role="list"
              className="border-t  border-gray-200 divide-y divide-gray-200"
            >
              <li key={key} className="flex py-6">
                <div className="flex-shrink-0">
                  <img
                    src={img}
                    alt={name}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-sm">
                        <a
                          href={"/product/" + key}
                          className="font-medium text-gray-700 hover:text-gray-800"
                        >
                          {name}
                        </a>
                      </h4>
                      <p className="ml-4 text-sm font-medium text-gray-900">
                        ${price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex-1 flex items-end justify-between">
                    <br />
                    <p>Quantity : {quantity}</p>
                    <p className="flex items-center text-sm text-gray-700 space-x-2">
                      {stock ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}

                      <span>
                        {stock
                          ? "In stock"
                          : `Will be in stock within next week`}
                      </span>
                    </p>
                    <div className="ml-4">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(key)}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </form>
      </div>
    </div>
  );
}

export default ReviewItem;
