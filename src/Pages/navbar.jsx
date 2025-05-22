import React from "react"

export default function Navbar() {
    return (
        <nav className="container">
            <div className="fixed w-full top-0 z-40">
                <div className="flex justify-between item-center bg-gray-800 p-5 w-full">
                  <div className="flex ml-10">
                      <h1 className="text-2xl font-semibold text-slate-50">Iang</h1>
                      <h1 className="text-2xl font-bold text-blue-500">Profile</h1>
                  </div>
                  <div className="flex  gap-5 ">
                      <ul className="flex text-slate-50 gap-7">
                          <li className="mr-6 hover:text-gray-300" >
                              <a href="#home"  text="home" className="">Home</a>
                          </li>
                          <li className="mr-6 hover:text-gray-300">
                              <a href="#about" text='about' className="">About</a>
                          </li>
                          <li className="mr-6 hover:text-gray-300">
                              <a href="#skill" text='skill' className="">Skill</a>
                          </li>
                          <li className="mr-6 hover:text-gray-300">
                              <a href="/test" className="">Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div className="px-4">
                          <button>
                              <span className="burgerMenu"></span>
                          </button>
                  </div>
              </div>
          </div>
        </nav>
    )
}