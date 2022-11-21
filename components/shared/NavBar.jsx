import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../Cart";

function NavBar() {
  const { toggleCart } = cartActions;
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <nav className="p-4 py-[2rem] bg-yellow-500">
      <div className="max-w-6xl mx-auto flex w-full items-center justify-between">
        <Link href={"/"}>
          <h2 className="font-bold text-2xl">ShopUp</h2>
        </Link>

        <div className="flex items-center gap-2 relative">
          <button className="text-lg p-3 bg-slate-100 hover:bg-slate-200 transition-all" onClick={() => dispatch(toggleCart())}>
            <HiShoppingCart />
          </button>
          <AnimatePresence>
            {showCart && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                className="absolute top-[50px] right-[0] origin-top"
              >
                <Cart />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
