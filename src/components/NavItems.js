import Link from 'next/link';

const NavItems = ({isOpen, setIsOpen}) => {
  return (
    <ul className="h-14 flex items-center space-x-8 px-4">
      <li>
        <Link href={'/'} onClick={() => isOpen && setIsOpen(false)}>
          <h2>About</h2>
        </Link>
      </li>
      <li>
        <Link href={'/projects'} onClick={() => isOpen && setIsOpen(false)}>
          <h2>Projects</h2>
        </Link>
      </li>
      <li>
        <Link href={'/interests'} onClick={() => isOpen && setIsOpen(false)}>
          <h2>Interests</h2>
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
