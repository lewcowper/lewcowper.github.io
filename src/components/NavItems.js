import Link from 'next/link';

const NavItems = ({isOpen, setIsOpen}) => {
  return (
    <ul className="h-14 flex items-center space-x-8 px-4">
      <li>
        <Link href={'/'} onClick={() => isOpen && setIsOpen(false)}>
          About
        </Link>
      </li>
      <li>
        <Link href={'/projects'} onClick={() => isOpen && setIsOpen(false)}>
          Projects
        </Link>
      </li>
      <li>
        <Link href={'/interests'} onClick={() => isOpen && setIsOpen(false)}>
          Interests
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
