import React from 'react'
import Image from 'next/image'


const MobileCase = async ({params}:{params:{case:string}}) => {
    const fetchdata= await fetch(`https://jsonserver.reactbd.com/phonecase/${params.case}`)
    const res = await fetchdata.json()
   
  return (
    <div key={res._id} className="flex flex-col md:gap-4 md:flex-row items-center justify-center px-8 my-10 ">
      
      <Image
        src={res.image}
        alt="image"
        width={500}
        height={100}
        className="max-h-screen rounded-xl"
      />
      <div className="space-y-1 text-justify md:space-y-2 md:pr-14 lg:pr-20">
        <p className="font-bold">{res.title}</p>
        <p className="font-semibold">Description:<span className='font-normal ml-2'>{res.description}</span>
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${res.price}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {res.category}
        </p>
      </div>
    </div>
  )
}

export default MobileCase