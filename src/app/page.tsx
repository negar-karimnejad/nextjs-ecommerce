import Hero from "@/components/Hero";
import ProductsList from "@/components/ProductsList";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <Hero products={products} />

      <ProductsList>
        <></>
        {/* {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))} */}
      </ProductsList>
    </>
  );
}
