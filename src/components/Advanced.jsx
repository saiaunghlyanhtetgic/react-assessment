import React from 'react'
import Customizable from "../assets/icon-fully-customizable.svg"
import Recoginition from "../assets/icon-brand-recognition.svg"
import Record from  "../assets/icon-detailed-records.svg"

const Feature = ({ iconSrc, title, description }) => {
    return (
      <div className="relative bg-white rounded-6 md:mb-0 mb-4">
        <div className="absolute top-[-32.5px] left-[25px] grid place-items-center w-[65px] h-[65px] bg-[#3b3054] rounded-full md:mb-1 mb-4">
          <img src={iconSrc} alt="Feature Illustration Icon" className='mb-4' />
        </div>
        <div className="p-0 md:p-4 md:mt-4 mt-8">
          <h3>{title}</h3>
          <p className="text-gray-500 font-medium leading-7">{description}</p>
        </div>
      </div>
    );
  };

const Advanced = () => {
  return (
    <div>
         <div className="mt-12">
        <div className="text-center">
          <h2>Advanced Statistics</h2>
          <p className="text-gray-500 font-medium leading-7">
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mx-12 mt-12 gap-6">
          <Feature
            iconSrc={Recoginition}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content."
          />
          <Feature
            iconSrc={Record}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Feature
            iconSrc={Customizable}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  )
}

export default Advanced