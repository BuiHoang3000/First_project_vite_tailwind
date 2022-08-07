import PropTypes from 'prop-types';
//
import { Item } from './types';

function NavItem({ item }: { item: Item }) {
  const { label, icon, active } = item;
  return (
    <li
      className={`flex p-2 justify-end items-center cursor-pointer hover:bg-primaryLight hover:text-white${
        active ? ' bg-primary text-white' : ''
      }`}
    >
      <h3 className='mr-2'>{label}</h3>
      {icon}
    </li>
  );
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NavItem;
