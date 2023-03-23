import { useState, useEffect } from 'react';

import { MdMenu, MdClose } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import NavItems from './NavItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth >= 768) {
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
        <div className="flex items-center space-x-4 p-4">
          <div className="md:hidden hover:cursor-pointer">
            {isOpen ? (
              <MdClose size={35} onClick={() => setIsOpen(false)} />
            ) : (
              <MdMenu size={35} onClick={() => setIsOpen(true)} />
            )}
          </div>
          <div>
            <h1>lewcowper</h1>
          </div>
          <div className="hidden md:flex">
            <NavItems />
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4">
          <FaLinkedin size={30} />
          <FaGithub size={30} />
        </div>
      </nav>
      {isOpen && <div className="flex md:hidden"><NavItems /></div>}
    </>
  );
};

export default Navbar;
