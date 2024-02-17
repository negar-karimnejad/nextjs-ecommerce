import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";

function CartPage() {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-5">Shopping Cart</h1>
      {/* cart products */}
      <div className="flex flex-col gap-2">
        <div className="border-b border-gray-300 pb-2 card card-side">
          <Image
            width={140}
            height={170}
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="cart product"
            className="object-cover rounded-lg"
          />
          <div className="card-body text-gray-600">
            <h2 className="text-md text-gray-900 font-bold">
              New movie is released!
            </h2>
            <div className="">Price: {formatCurrency(399)}</div>
            <form action="">
              <label htmlFor="">Quantity:</label>
              <select name="" id="" className="ml-2 p-2 rounded-md">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </form>
            <p>Total: {formatCurrency(399)}</p>
          </div>
        </div>
        <div className="border-b border-gray-300 pb-2 card card-side">
          <Image
            width={140}
            height={170}
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="cart product"
            className="object-cover rounded-lg"
          />
          <div className="card-body text-gray-600">
            <h2 className="text-md text-gray-900 font-bold">
              New movie is released!
            </h2>
            <div className="">Price: {formatCurrency(399)}</div>
            <form action="">
              <label htmlFor="">Quantity:</label>
              <select name="" id="" className="ml-2 p-2 rounded-md">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </form>
            <p>Total: {formatCurrency(399)}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center">
        <p className="font-bold mt-4 mb-2">Total: {formatCurrency(399)}</p>
        <button className="btn btn-warning px-5">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartPage;
