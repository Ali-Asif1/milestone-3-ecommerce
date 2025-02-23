import Link from "next/link";
import Image from "next/image";

export default async function MobileCases() {
  const fetchdata = await fetch("https://jsonserver.reactbd.com/phonecase");
  const res = await fetchdata.json();
  console.log(res);
  return (
    <main className="px-12 md:px-16 lg:px-24">
      <h1 className="text-center font-semibold uppercase text-xl md:text-2xl mt-10">
        Get Your Favourite Phone
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {res.map((item:any, index: number) => (
          <div
            className="border-2 border-red-200 rounded-xl shadow-xl  hover:border-red-500 duration-300 overflow-hidden flex flex-col"
            key={index}
          >
            <div>
              <Image
                src={item?.image}
                width={500}
                height={100}
                priority
                alt="item-image"
                className="object-cover hover:scale-105 duration-300 overflow-hidden"
              />
            </div>
            <div>
              <p className="text-lg text-center capitalize mb-3">{item.title}</p>
            </div>
            <div className="flex items-center justify-between px-6 lg:px-4">
              <p className=" font-semibold text-sm">$.{item.price}</p>

              <Link
                href={{ pathname: `/mobilecase/${item._id}`, query: { _id: item?._id } }}
                key={item._id}
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
}
