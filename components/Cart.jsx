import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import CartItem from "./CartItem";
function Cart() {
  const cartList = useSelector((state) => state.cart.itemsList);
  const { resetCart } = cartActions;
  const dispatch = useDispatch();

  return (
    <div
      className="block w-screen max-w-sm border border-stone-600 bg-stone-100 p-10 sm:px-12"
      aria-modal="true"
      aria-label="Item added to your cart"
      role="dialog"
      tabIndex={-1}
    >
      {cartList.length > 0 && (
        <div className="flex items-start justify-between">
          <h2 className="flex items-center text-gray-700">
            <span className="ml-2 text-sm"> Items added to your cart </span>
          </h2>
        </div>
      )}
      <div>
        {cartList.length > 0 ? (
          <>
            {cartList.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold">Cart currently empty</h2>
          </div>
        )}
      </div>
      {cartList.length > 0 && (
        <div className="space-y-4 text-center">
          <a
            href="#"
            className="block rounded-lg border border-stone-600 p-3 text-sm text-stone-500 hover:text-stone-600 hover:ring-1 hover:ring-stone-400"
          >
            Total Items - <span className="font-bold">{cartList.length}</span>
          </a>
          <a
            href="#"
            className="block w-full rounded-lg bg-stone-600 p-3 text-sm text-stone-100 hover:bg-stone-500"
          >
            Checkout
          </a>
          <button
            onClick={() => dispatch(resetCart())}
            className="inline-block text-sm tracking-wide text-stone-500 underline underline-offset-4 hover:text-stone-600"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
