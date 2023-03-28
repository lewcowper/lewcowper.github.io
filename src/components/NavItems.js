import Link from 'next/link';

import navData from '../../public/assets/data/nav-data.json';

const NavItems = ({ isOpen, setIsOpen, activePage }) => {
  return (
    <ul className="h-14 flex items-center space-x-8 px-4">
      {navData.map((navItem) => {
        return (
          <li key={navItem.id}>
            <Link
              href={navItem.link}
              onClick={() => isOpen && setIsOpen(false)}
            >
              <div className={activePage === navItem.id ? "h-14 flex items-center border-y-4 border-transparent border-b-neutral-700" : "h-14 flex items-center border-y-4 border-transparent hover:border-b-neutral-700"}>
                <h2>{navItem.title}</h2>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
