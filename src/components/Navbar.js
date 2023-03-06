import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import {MdMenu, MdClose} from 'react-icons/md';
import {FaLinkedinIn, FaGithub, FaStrava, FaGoodreadsG} from 'react-icons/fa';

import self from '../../public/assets/self-s.jpg';

const Navbar = ({pageTitle}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='w-full h-20 bg-neutral-100'>
      {/* menu */}
      <div className='flex items-center w-full h-full px-6'>
          <div onClick={handleNav} className='w-12'>
            <MdMenu size={30}/>
          </div>
          <div className='flex-grow text-center'>
            <h2>{pageTitle}</h2>
          </div>
          <div  className='w-12'>

          </div>
        {/* <ul className='hidden md:flex'>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:font-bold'>Home</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:font-bold'>About</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:font-bold'>Projects</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:font-bold'>Running</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:font-bold'>Reading</li>
          </Link>
        </ul> */}
      </div>

      {/* side bar */}
      <div className={nav ? 'fixed right-0 top-0 w-full h-screen bg-black/40' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[200px] bg-white ease-in duration-200' : 'fixed left-[-200px] top-0 w-[200px] bg-white ease-in duration-200'}>
          <div className='flex items-center justify-between h-20 px-6 bg-neutral-100'>
            <div>
              <h1>Lew</h1>
            </div>
            <div onClick={handleNav}>
              <MdClose size={30}/>
            </div>
          </div>
          <div className='flex px-6'>
            <div className='flex-grow'>
              <ul className='text-lg'>
                <Link href='/' onClick={() => setNav(false)}>
                  <li className='py-4 hover:font-bold'>About</li>
                </Link>
                <Link href='/projects' onClick={() => setNav(false)}>
                  <li className='py-4 hover:font-bold'>Projects</li>
                </Link>
                <Link href='/interests' onClick={() => setNav(false)}>
                  <li className='py-4 hover:font-bold'>Interests</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='px-6 pt-6'>
            <div className='w-full justify-center'>
              <Image src={self} alt="self" width={150} height={150} className='rounded-full'/>
            </div>
            <div className='flex justify-between items-center py-6'>
              <Link href='https://github.com/lewcowper' target='_blank'>
                <FaGithub size={24}/>
              </Link>
              <Link href='https://www.linkedin.com/in/lewiscowper/' target='_blank'>
                <FaLinkedinIn size={24}/>
              </Link>
              <Link href='/'>
                <FaStrava size={24}/>
              </Link>
              <Link href='/'>
                <FaGoodreadsG size={24}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;