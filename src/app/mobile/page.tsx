import { getSingleProduct} from "@/helpers";
import Image from "next/image";

export interface searchType {
  searchParams: { [key: string]: string | string[] | undefined };
}

const singleProduct = async ({ searchParams }: searchType) => {
  const _idSting = searchParams._id;
  const _id = Number(_idSting);

  const product = await getSingleProduct(_id);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-0 mb-10">
       <Image
        src={product.image}
        alt="image"
        width={500}
        height={100}
        className="max-h-screen rounded-xl"
      />
      
      <div className="space-y-1 text-justify md:space-y-2 md:pr-14 lg:pr-20">
        <p className="font-bold">{product.title}</p>
        <p>
          <span className="font-semibold">Description:</span>
          {product.description}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${product.price}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {product.category}
        </p>
      </div>
    </div>
  );
};

export default singleProduct;
