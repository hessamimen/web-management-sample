import React from 'react'
import {CloudArrowUpIcon, ShieldCheckIcon, PaperAirplaneIcon, ServerStackIcon  } from "@heroicons/react/24/solid"
import bgImage from '../assets/cyber-bg.png'

function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto mt-10'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='text-5xl py-3 md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our tech brand.</p>
                <button className='py-3 px-6 my-2 sm:w-[60%]'>Get Started</button>
            </div>
            <div>
            <img  className='w-full' src={bgImage} alt="/"/>
            </div>
            <div className='absolute flex flex-col py-6 md:min-w-[760px] -bottom-[5%] md:bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
              <p>Data Services</p>
              <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><ShieldCheckIcon className='w-6 text-indigo-600'/> App Security</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerStackIcon className='w-6 text-indigo-600'/> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500'><CloudArrowUpIcon className='w-6 text-indigo-600'/> Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='w-6 text-indigo-600'/> API</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero