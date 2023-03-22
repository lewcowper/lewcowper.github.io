import { MdMenu, MdClose } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full h-10 flex justify-between bg-gray-100">
      <div className="flex items-center space-x-4 p-2">
        <div className="md:hidden">
          <MdMenu size={30} />
        </div>
        <div>
          <h1>lewcowper</h1>
        </div>
        <ul className="hidden items-center md:flex">
          <li>About</li>
          <li>Projects</li>
          <li>Interests</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 p-2">
        <FaLinkedin size={30} />
        <FaGithub size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
