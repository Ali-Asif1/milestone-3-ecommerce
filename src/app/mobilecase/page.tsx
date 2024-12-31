import Link from "next/link";
import Image from "next/image";

export default async function MobileCases() {
  const fetchdata = await fetch("https://jsonserver.reactbd.com/phonecase");
  const res = await fetchdata.json();
  console.log(res);
  return (
    <div>
      <h1 className="text-center font-semibold capitalize text-2xl mt-10">make your phone looks cool with beautiful phone case</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-12 md:px-16 lg:px-24">
        {res.map((item: any, i: number) => (
          <Link
            href={{
              pathname: `/mobilecase/${item._id}`,
              query: { _id: item?._id },
            }}
            key={item._id}
          >
            <div className="border-2 border-red-200 rounded-xl shadow-xl hover:border-red-500 duration-300 hover:scale-105 overflow-hidden">
              <Image
                src={item?.image}
                width={100}
                height={100}
                alt="item-image"
                className="w-full object-cover"
              />
              <div className="flex flex-col gap-2 items-center pb-2 text-sm ">
                <p className="">{item.title}</p>
                <p className=" font-semibold">$.{item.price}</p>

                <button className="w-[90%] border-2 border-red-200 hover:bg-red-600 px-2 py-1 rounded-md hover:text-gray-50 duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
