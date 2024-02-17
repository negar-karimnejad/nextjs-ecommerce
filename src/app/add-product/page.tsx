import { addProduct } from "@/actions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Flowmazon",
};

function AddProduct() {
  const addProductHandle = async (formData: FormData) => {
    "use server";
    await addProduct(formData);
    redirect("/");
  };

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
