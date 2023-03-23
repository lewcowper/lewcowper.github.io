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
      <nav className="w-full h-10 flex justify-between bg-gray-100">
        <div className="flex items-center space-x-4 px-4">
          <div className="md:hidden hover:cursor-pointer">
            {isOpen ? (
              <MdClose size={35} onClick={() => setIsOpen(false)} />
            ) : (
              <MdMenu size={35} onClick={() => setIsOpen(true)} />
            )}
          </div>
          <div>
            <Link href={'/'}>
              <h1>lewcowper</h1>
            </Link>
          </div>
          <div className="hidden md:flex">
            <NavItems />
          </div>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <Link href="https://www.linkedin.com/in/lewiscowper/" target="_blank">
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://github.com/lewcowper" target="_blank">
            <FaGithub size={30} />
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="flex md:hidden">
          <NavItems />
        </div>
      )}
    </>
  );
};

export default Navbar;
