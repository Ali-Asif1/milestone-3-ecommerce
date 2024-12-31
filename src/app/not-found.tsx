import Link from 'next/link'
import React from 'react'

const notFoundPage = () => {
  return (
    <div className=' flex flex-col justify-center items-center p-10 '>
        <p>OOps! Your Page Not Found &#128532;</p>
        <Link href={"/"} className='border-b border-gray-900 mt-2'>Back to Home</Link>
    </div>
  )
}
export default notFoundPage