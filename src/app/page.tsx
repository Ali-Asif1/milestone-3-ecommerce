import { Products } from "../components/Products";

const getData = async () => {
  const response = await fetch("https://jsonserver.reactbd.com/phone");
  if (!response.ok) {
    throw new Error("fetch data failed!");
  }
  return response.json();
};

export default async function Home() {
  const products = await getData();

  return (
    <main className="px-12 md:px-16 lg:px-24">
      <Products products={products} />
    </main>
  );
}
