import React from "react";
import logo from "../logo.png";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  // console.log(location.pathname)

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky z-50">
      <header className="flex items-start px-12  max-w-10xl mx-auto">
        <div>
          <img src={logo} alt="company logo" className="h-11 cursor-pointer px-8" />
        </div>
        <div>
          <ul className="flex space-x-7">
            <li
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              Buy
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              Sell
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              Rent
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              Mortgage
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              Find Realtors
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              My Home
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              News & Insights
            </li>
            <li
              className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/") && "text-black border-b-red500"
                }`}
            >
              Advertise
            </li>
            <li className={`py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/offers") && "text-black border-b-red500"
                }`}>Log in</li>
            <li className={` py-3 cursor-pointer text sm font-semibold text-gray-400 border-b-[3px] 
                border-b-transparent ${
                  pathMathRoute("/signin") && "text-black border-b-red500"
                }`}>Sign up</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
