import { useState, useEffect } from 'react';

import { MdMenu, MdClose } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import NavItems from './NavItems';
import Link from 'next/link';

const mdBreakpoint = 768;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Monitor window size to close the menu if the screen exceeds the md breakpoint (768px)
  const checkWindowSize = () => {
    if (window.innerWidth >= mdBreakpoint) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-14 flex justify-center bg-gray-100">
        <nav className="w-full h-14 flex justify-between bg-gray-300 max-w-5xl">
          <div className="flex items-center px-4">
            <div className="md:hidden hover:cursor-pointer text-4xl pr-4">
              {isOpen ? (
                <MdClose onClick={() => setIsOpen(false)} />
              ) : (
                <MdMenu onClick={() => setIsOpen(true)} />
              )}
            </div>
            <div className="md:pr-8">
              <Link href={'/'} onClick={() => isOpen && setIsOpen(false)}>
                <h1 className='font-light'>Lewis Cowper</h1>
              </Link>
            </div>
            <div className="hidden md:flex">
              <NavItems setIsOpen={setIsOpen} />
            </div>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 px-4 text-3xl sm:text-4xl">
            <Link
              href="https://www.linkedin.com/in/lewiscowper/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/lewcowper" target="_blank">
              <FaGithub />
            </Link>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="flex md:hidden">
          <NavItems isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
