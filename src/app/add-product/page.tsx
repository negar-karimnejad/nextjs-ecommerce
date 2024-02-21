import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Flowmazon",
};

const addProductHandle = async (formData: FormData) => {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price")) || 0;

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
};

async function AddProduct() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <div className="max-w-[320px] sm:max-w-[500px] mx-auto">
      <h1 className="font-bold text-xl mb-3">Add Product</h1>
      <form action={addProductHandle} className="flex flex-col gap-2">
        <Input required type="text" placeholder="Name" name="name" />
        <textarea
          className="textarea textarea-bordered"
          required
          placeholder="Description"
          name="description"
          rows={3}
        />
        <Input required type="url" placeholder="image URL" name="imageUrl" />
        <Input required type="number" placeholder="Price" name="price" />
        <Button type="submit">ADD PRODUCT</Button>
      </form>
    </div>
  );
}

export default AddProduct;
