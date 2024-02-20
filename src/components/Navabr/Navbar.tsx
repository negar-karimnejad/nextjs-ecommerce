import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Input from "../ui/Input";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/cart";
import { useSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserMenuButton from "./UserMenuButton";

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

      <UserMenuButton/>
    </div>
  );
}

export default Navbar;
