import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import Input from "./ui/Input";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/cart";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`);
  }
}

async function Navbar() {
  const cart = await getCart();
  return (
    <div className="navbar bg-base-100 md:px-14">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={Logo} alt="" width={30} height={30} />
          <h1 className="font-bold text-xl hidden sm:block">Flowmazon</h1>
        </Link>
      </div>
      <div className="max-w-40 sm:max-w-xl">
        <form action={searchProducts}>
          <Input type={"text"} placeholder={"Search"} name="searchQuery" />
        </form>
      </div>
      <div className="flex-none mx-2">
        <ShoppingCartButton cart={cart} />
      </div>

      <div className="dropdown dropdown-end">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href={""}>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
