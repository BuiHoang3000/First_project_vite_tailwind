import { BiHomeAlt, BiInfoCircle, BiMoviePlay } from 'react-icons/bi';
import { Item } from './types';

export const defaultIconSize = '1.875rem';

export const items: Item[] = [
  {
    id: 1,
    label: 'Home',
    icon: <BiHomeAlt size={defaultIconSize} />,
    active: true,
  },
  { id: 2, label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} /> },
  { id: 3, label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> },
];
