"use client";

import { ShoppingCart } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import shoppingCartIcon from "../../assets/shopping-cart.png";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}
function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  const closeDropdown = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <Image
            src={shoppingCartIcon}
            alt="shopping-cart"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>

      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{cart?.size || 0} Items</span>
          <span className="text-info">
            Subtotal: {formatCurrency(cart?.subtotal || 0)}
          </span>
          <div onClick={closeDropdown} className="card-actions">
            <Link href="/cart" className="btn btn-primary btn-block">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartButton;
