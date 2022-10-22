import React from 'react'
import supportImg from '../assets/support.jpeg'
import {PhoneIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import {CpuChipIcon,Cog6ToothIcon } from '@heroicons/react/24/solid'

function Support() {
  return (
    <div className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/70 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative '>
            <div className='px-4 py-12 text-center' >
                <h3 className='text-3xl pt-8 text-slate-300 uppercase '>Support</h3>
                <h2 className='text-5xl font-bold py-6 '>Finding The Right Team</h2>
                <p className='py-4 text-2xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam voluptas repudiandae voluptates. Nulla facilis, culpa consectetur ipsum, voluptatem laborum commodi eos placeat officia expedita velit rem adipisci, a ipsa!</p>
            </div>
            
            <div className='grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black'>
            {/* Sales Cart ************************** */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg -mt-16'/>
                        <h3 className='font-bold text-2xl my-6 '>Sales</h3>
                        <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae esse atque ratione voluptatibus eaque reiciendis placeat, iusto porro nihil impedit?</p>
                    </div>
                    <div className='bg-slate-200 pl-8 py-4 rounded-b-lg'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            {/* Technical Support Cart ************************** */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <Cog6ToothIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg -mt-16'/>
                        <h3 className='font-bold text-2xl my-6 '>Technical Support</h3>
                        <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae esse atque ratione voluptatibus eaque reiciendis placeat, iusto porro nihil impedit?</p>
                    </div>
                    <div className='bg-slate-200 pl-8 py-4 rounded-b-lg'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            {/* Media Inquaries Cart ************************** */}

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <CpuChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg -mt-16'/>
                        <h3 className='font-bold text-2xl my-6 '>Media Inquaries</h3>
                        <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae esse atque ratione voluptatibus eaque reiciendis placeat, iusto porro nihil impedit?</p>
                    </div>
                    <div className='bg-slate-200 pl-8 py-4 rounded-b-lg'>
                        <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support