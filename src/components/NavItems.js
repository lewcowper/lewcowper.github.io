import Link from 'next/link';

const NavItems = () => {
  return (
    <ul className="h-10 flex items-center space-x-4 px-4">
      <li><Link href={'/'}>About</Link></li>
      <li><Link href={'/projects'}>Projects</Link></li>
      <li><Link href={'/interests'}>Interests</Link></li>
    </ul>
  );
};

export default NavItems;
