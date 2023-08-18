import React from 'react'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'

const ColDiv = ({mainTab, first, second, third}) => {
    return (
        <div className="flex flex-col items-start md:mt-0 mt-1">
            <span className="text-white text-right">{mainTab}</span>
            <div className="flex flex-col items-start text-gray-400">
              <a href="#" className="mb-2">{first}</a>
              <a href="#" className="mb-2">{second}</a>
              <a href="#">{third}</a>
            </div>
          </div>
    )
}

const Footer = () => {
  return (
    <footer className="pt-8 bg-[#232127]" id="resources">
      <div className="flex justify-evenly items-start flex-wrap gap-4">
        
        <div className="logo">
          <a href="#">
            <h1 className="text-white text-4xl">Shortify</h1>
          </a>
        </div>
        
        <div className="flex gap-4 md:flex-row flex-col md:items-center md:text-center md:gap-30 pb-8">
          <ColDiv mainTab={'Features'} first={'Link Shortening'} second={'Branded Links'} third={'Analytics'} />
          <ColDiv mainTab={'Resources'} first={'Blog'} second={'Developers'} third={'Support'} />
          <ColDiv mainTab={'Company'} first={'About'} second={'Our Team'} third={'Careers'} />
        </div>
        
        <div className="flex items-center space-x-4 md:mb-0 mb-4">
          <a href="#">
            <img className="max-w-85 transition-transform hover:scale-110 hover:filter hover:invert-0 hover:sepia-59 hover:saturate-6585 hover:hue-rotate-125 hover:brightness-86 hover:contrast-85" src={Facebook} alt="Facebook Logo"/>
          </a>
          <a href="#">
            <img className="max-w-85 transition-transform hover:scale-110 hover:filter hover:invert-0 hover:sepia-59 hover:saturate-6585 hover:hue-rotate-125 hover:brightness-86 hover:contrast-85" src={Twitter} alt="Twitter Logo"/>
          </a>
          <a href="#"> 
            <img className="max-w-85 transition-transform hover:scale-110 hover:filter hover:invert-0 hover:sepia-59 hover:saturate-6585 hover:hue-rotate-125 hover:brightness-86 hover:contrast-85" src={Pinterest} alt="Pinterest Logo"/>
          </a>
          <a href="#">
            <img className="max-w-85 transition-transform hover:scale-110 hover:filter hover:invert-0 hover:sepia-59 hover:saturate-6585 hover:hue-rotate-125 hover:brightness-86 hover:contrast-85" src={Instagram} alt="Instagram Logo"/>
          </a>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer