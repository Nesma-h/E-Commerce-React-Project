import React, { useContext } from 'react'
import './Cart.style.css'
import PageHeader from '../../common/PageHeader/PageHeader'
import { CartContext } from '../../context/CartContext'
import { AuthContext } from '../../context/AuthContext'

function Cart() {
  let { cart, addToCart } = useContext(CartContext)
  let { curUser } = useContext(AuthContext)
  let total = 0
  cart.map((item) => total += (item.price * item.amount))

  return (
    <>
      <PageHeader title={'YourCart'} />

      {curUser ? (
        <div className="xl:px-32 md:px-16 sm:px-10 px-5 py-9 flex flex-col lg:flex-row gap-6">

          {/* ---------------- LEFT SIDE - CART ITEMS ---------------- */}
          <div className="lg:w-[70%] w-full">
            {cart.length > 0 ? (
              cart.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-4 gap-4 sm:gap-0"
                >
                  {/* -------- Product Info -------- */}
                  <div className="flex items-center gap-4 sm:w-[40%] w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 sm:w-16 sm:h-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Sold By:{' '}
                        <span className="text-gray-700">
                          {curUser.firstName + ' ' + curUser.lastName}
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Quantity - {item.amount}
                      </p>
                    </div>
                  </div>

                  {/* -------- Price -------- */}
                  <div className="sm:w-[15%] text-sm sm:text-base">
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                    <del className="text-xs text-gray-400">${item.price.toFixed(2)}</del>
                  </div>

                  {/* -------- Quantity Controls -------- */}
                  <div className="sm:w-[15%] flex items-center gap-2 justify-start sm:justify-center">
                    <button
                      className="border px-2 py-1 rounded cursor-pointer"
                      onClick={() =>
                        item.amount - 1 > 0 ? addToCart(item, 'minus') : addToCart(item, 'delete')
                      }
                    >
                      -
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className="border px-2 py-1 rounded cursor-pointer"
                      onClick={() => addToCart(item, 'plus')}
                    >
                      +
                    </button>
                  </div>

                  {/* -------- Total -------- */}
                  <div className="sm:w-[15%] font-semibold text-sm sm:text-base">
                    ${(item.price * item.amount).toFixed(2)}
                  </div>

                  {/* -------- Actions -------- */}
                  <div className="sm:w-[15%] flex flex-row sm:flex-col gap-2 text-xs sm:text-sm">
                    <button className="text-green-600 hover:underline cursor-pointer">
                      Save for later
                    </button>
                    <button
                      className="text-red-600 hover:underline cursor-pointer"
                      onClick={() => addToCart(item, 'delete')}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-10 text-lg">
                Your cart is empty 🛒
              </p>
            )}
          </div>

          
          <div className="bg-white rounded-lg shadow p-5 h-fit lg:w-[30%] w-full">
            <h2 className="font-bold text-lg border-b pb-2 mb-3">Cart Total</h2>

            <div className="mb-3">
              <p className="font-medium mb-2 text-sm sm:text-base">Coupon Apply</p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="border border-gray-300 rounded sm:rounded-l px-3 py-2 w-full focus:outline-none mb-2 sm:mb-0"
                />
                <button className="bg-[var(--main-color,#0c9e8a)] text-white px-4 py-2 rounded sm:rounded-r">
                  Apply
                </button>
              </div>
            </div>

            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span>(-) 0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$6.90</span>
              </div>
            </div>

            <div className="border-t mt-3 pt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total (USD)</span>
                <span className="text-green-600">${(total + 6.9).toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition">
              Process To Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="py-5 px-5 border border-red-900 bg-red-300 text-red-900 text-center rounded">
          You must be registered to see this page !!
        </div>
      )}
    </>
  )
}

export default Cart
