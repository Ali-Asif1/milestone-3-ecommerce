import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="h-20 text-gray-50 px-8 md:px-16 lg:px-24 content-center bg-red-600 text-sm md:text-base">
      <div className="flex items-center justify-between bg-red-600 ">
        <div className="text-2xl font-bold">
          <p className="text-xl md:text-2xl">
            ONLINE|<span className="bg-gray-50 text-red-600 py-1 px-1 rounded-l-xl rounded-r">SHOP</span>
          </p>
        </div>
        <div>
          <Link
            href={"/"}
            className="uppercase font-semibold hover:text-red-600 hover:bg-gray-50 p-2 rounded duration-300"
          >
            Mobile
          </Link>
          <Link
            href={"/mobilecase"}
            className="uppercase font-semibold hover:text-red-600 hover:bg-gray-50 p-2 rounded duration-300"
          >
            Mobile Cover
          </Link>
        </div>
      </div>
    </div>
  );
};
