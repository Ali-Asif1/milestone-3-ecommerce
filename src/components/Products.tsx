import Link from "next/link";
import Image from "next/image";

export interface ProductType {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  inNew: boolean;
  category: string;
  brand: string;
}

export interface Props {
  products: ProductType[];
}

export const Products = ({ products }: Props) => {
  return (
    <main>
      <h1 className="text-center font-semibold uppercase text-xl md:text-2xl mt-10">
        Get Your Favourite Phone
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {products.map((product, index: number) => (
          <div
            className="border-2 border-red-200 rounded-xl shadow-xl  hover:border-red-500 duration-300 overflow-hidden flex flex-col"
            key={index}
          >
            <div>
              <Image
                src={product?.image}
                width={500}
                height={100}
                priority
                alt="product-image"
                className="object-cover hover:scale-105 duration-300 overflow-hidden"
              />
            </div>
            <div>
              <p className="text-lg text-center capitalize mb-3">{product.title}</p>
            </div>
            <div className="flex items-center justify-between px-6 lg:px-4">
              <p className=" font-semibold text-sm">$.{product.price}</p>

              <Link
                href={{ pathname: "/mobile", query: { _id: product?._id } }}
                key={product._id}
              >
                <button className="text-sm md:text-xs hover:text-blue-600">
                  View Detail
                </button>
              </Link>
            </div>
            <Link
              href={"/cart"}
              className="w-[90%] text-center mx-auto border-2 border-red-200 hover:bg-red-600 py-1 rounded-md hover:text-gray-50 duration-300 my-3"
            >
              <button>Add to Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
