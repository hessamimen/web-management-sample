import React from 'react'
import {CheckIcon} from '@heroicons/react/24/solid'


function Pricing() {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div>
            <div className='max-w-[1240px] mx-auto py-12 text-center'>
                <h3 className='text-3xl py-8 text-slate-300'>Pricing</h3>
                <h2 className='text-4xl font-bold py-8'>The Right Price For Your Research</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam nulla porro minima quisquam maxime incidunt quod aut tempora. Non!</p>
            </div>

            <div className='grid md:grid-cols-2 xl:mx-20'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>STANDARD</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end '>/mo</span></p>
                        <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus nihil quae provident quis explicabo.</p>
                        <div className='text-xl'>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                         
                            <button className='w-full py-2 my-4'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>PREMIUM</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end '>/mo</span></p>
                        <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus nihil quae provident quis explicabo.</p>
                        <div className='text-xl'>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-4 text-'><CheckIcon className='w-7 mr-5 text-green-600'/>Lorem ipsum dolor sit amet.</p>
                         
                            <button className='w-full py-2 my-4'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing