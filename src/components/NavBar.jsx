import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll'



function NavBar() {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }


  return (
    <div className='w-screen fixed h-20 z-10 bg-zinc-200 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</h1>
                <ul className='hidden md:flex'>
                    <li className='cursor-default hover:bg-indigo-600 rounded-xl'><Link to="home" smooth={true} offset={100} duration={500}>Home</Link></li>
                    <li className='cursor-default hover:bg-indigo-600 rounded-xl'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='cursor-default hover:bg-indigo-600 rounded-xl'><Link to="support" smooth={true} offset={-80} duration={500}>Support</Link></li>
                    <li className='cursor-default hover:bg-indigo-600 rounded-xl'><Link to="platforms" smooth={true} offset={-120} duration={500}>Platforms</Link></li>
                    <li className='cursor-default hover:bg-indigo-600 rounded-xl' ><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Out</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5'/>   }
                
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>

                <li className=' border-b-2 border-zinc-300 w-full cursor-default hover:bg-indigo-600 hover:rounded-xl'><Link to="home" smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-default hover:bg-indigo-600 hover:rounded-xl'><Link to="about" smooth={true} offset={-150} duration={500} onClick={handleClick}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-default hover:bg-indigo-600 hover:rounded-xl'><Link to="support" smooth={true} offset={-80} duration={500} onClick={handleClick}>Support</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-default hover:bg-indigo-600 hover:rounded-xl'><Link to="platforms" smooth={true} offset={-120} duration={500} onClick={handleClick}>Platforms</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-default hover:bg-indigo-600 hover:rounded-xl' ><Link to="pricing" smooth={true} offset={-50} duration={500} onClick={handleClick}>Pricing</Link></li>

            <div className='flex flex-col my-2'>
                <button className='bg-transparent text-indigo-600 px-8 py-1 mb-2'>Sign In</button>
                <button className='px-8 py-1'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default NavBar