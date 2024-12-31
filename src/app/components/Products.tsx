"use client";
import Link from "next/link";
import React from "react";
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
      {products.map((product) => (
        <Link
          href={{ pathname: "/singleproduct", query: { _id: product?._id } }}
          key={product._id}
        >
          <div className="border-2 border-red-200 rounded-xl shadow-xl hover:border-red-500 duration-300 hover:scale-105 overflow-hidden">
            <Image
              src={product?.image}
              width={100}
              height={100}
              alt="product-image"
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 items-center pb-2 text-sm ">
              <p className="">{product.title}</p>
              <p className=" font-semibold">$.{product.price}</p>
              
                <button className="w-[90%] border-2 border-red-200 hover:bg-red-600 px-2 py-1 rounded-md hover:text-gray-50 duration-300">
                  Add to Cart
                </button>
             
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
