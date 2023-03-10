import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import kickslogo from "../assets/kickslogo.png";

export default function NavBar({ darkModeToggle, darkMode }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-[#191818] fixed z-40 px-[15%]">
      <div className="justify-between mx-auto  md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:py-4 md:block">
            <a href="javascript:void(0)">
              <img src={kickslogo} alt="" srcset="" width={60} />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Contact US</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:hidden">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Toggle me
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:flex items-center gap-8">
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                className={
                  darkMode
                    ? "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 dark:bg-gray-700"
                    : "peer-checked:after:translate-x-full w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer   peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800 dark:bg-gray-700"
                }
                onClick={darkModeToggle}
              />
            </label>
            <span className="ml-2 text-sm font-medium text-gray-300 ">
              {darkMode ? "Dark" : "Light"}
            </span>
          </div>
          <div className="relative p-2">
            <button className="text-zinc-50/80">
              <FaShoppingBasket size={30} />
            </button>
            <p className="absolute top-0 right-0 text-white bg-red-500 px-1 font-bold">
              0
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
