import React from 'react'
import Navbar from '../Pages/navbar.jsx'
import About from '../Pages/about.jsx'
import Skill from '../Pages/skill.jsx'

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="bg-gray-50" id='home'>
            <div className="container mx-auto flex flex-col justify-center items-center h-screen">
              <div className='flex items-center justify-center gap-10 flex-col md:flex-row'>
                <div className='max-w-xs'>
                  <img src="/IMG_6707.JPG" alt="" className='rounded max-md:hidden'/>
                </div>
                <div className="flex flex-col max-w-3xl text-justify md:max-w-2xl">
                    <h1 className="text-5xl font-bold text-gray-800 ">Hello, I'm Iang</h1>
                    <p className="text-xl text-gray-800 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit mollitia qui ex deserunt dolor nemo laboriosam odit, eos magnam recusandae incidunt accusantium temporibus quibusdam eius id quod nisi dignissimos.</p>
                    <button className="mt-6 px- py-2 bg-gray-800 w-24 text-white rounded hover:bg-gray-500"><a href="#about">About me</a></button>
                </div> 
              </div> 
            </div>
        </div>
        <div className="bg-gray-800" id='about'>
            <About></About>
        </div>
        <div className="bg-gray-50" id='skill'>

            <Skill></Skill>
        </div>
    </div>
  )
}