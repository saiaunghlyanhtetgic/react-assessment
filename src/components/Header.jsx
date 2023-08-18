import React from 'react'
import logo from "../assets/logo.svg"

const NavLink = ({navLinkName}) => {
    return (
        <a className="font-semibold ml-2 text-gray-500 hover:text-black transition duration-300" href="#">{navLinkName}</a>
    )
}

const Header = () => {
  return (
    <header className="w-100 py-4 px-8">
    <div className="flex justify-center items-center gap-4">
        <div className="flex self-center">
          <a href="#">
            <img className="h-8" src={logo} alt="" />
          </a>
        </div>
        <nav className="flex-1 flex justify-between gap-10 items-start">
          <div className="flex justify-between gap-2">
           <NavLink navLinkName={'Features'} />
           <NavLink navLinkName={'Pricing'} />
           <NavLink navLinkName={'Resources'} />
          </div>
          <div className="gap-4 justify-center items-center hidden md:flex">
            <a className="font-semibold text-gray-500 ml-2 hover:text-black transition duration-300" href="#" >Login</a>
            <a href="#" className="text-gray-500 hover:text-black transition duration-300 inline-block rounded-full text-center font-semibold cursor-pointer border-none outline-none  capitalize bg-blue-500 px-3 py-2 text-xs">Sign Up</a>
          </div>
        </nav>
        <div className="text-2xl text-gray-900 cursor-pointer md:hidden">
          <i className="fa-regular fa-bars icon"></i>
        </div>
      </div>
    </header>
  )
}

export default Header