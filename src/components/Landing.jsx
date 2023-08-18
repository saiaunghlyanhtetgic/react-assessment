import React from 'react'
import Illustration from "../assets/illustration-working.svg"

const Landing = () => {
  return (
    <section className="flex flex-col items-center md:flex-row py-10 md:py-16 m-8" >
    <div className="flex flex-col md:items-start md:w-1/2 md:pr-16 md:mb-0 mb-4">
        <div className='flex flex-col md:items-start justify-center'>
            <h1 className="text-xl md:text-4xl">More than just shorter links</h1>
            <p className="text-gray-500 font-medium leading-7">
            Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
        </div>
        <a href="#url-shorten-form" className="inline-block text-white text-center font-semibold cursor-pointer border-none outline-none transition duration-300 px-9 py-3 text-lg bg-blue-400 rounded-full mt-2">Get Started</a>
    </div>
      <div className="relative md:block md:w-1/2">
        <img src={Illustration} alt="Working Illustration" />
      </div>
    </section>
  )
}

export default Landing