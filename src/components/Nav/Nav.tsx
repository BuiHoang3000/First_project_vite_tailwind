import React from 'react';
import { BiMenu } from 'react-icons/bi';
//
import { defaultIconSize, items } from './constans';
import NavItem from './NavItem';
import { Item } from './types';

function NavItemsContainer() {
  return (
    <>
      {items.map((item: Item) => (
        <NavItem item={item} key={item.id} />
      ))}
    </>
  );
}

function Nav() {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = React.useState(false);

  return (
    <nav className='col-span-1 bg-cyan-200'>
      <div className='flex mx-4 justify-between items-center md:block'>
        <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>
          Phimmoi.net
        </h4>
        <BiMenu
          className='cursor-pointer md:hidden'
          size={defaultIconSize}
          onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
        />
      </div>

      <ul
        className={`mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}
      >
        <NavItemsContainer />
      </ul>
    </nav>
  );
}

export default Nav;
