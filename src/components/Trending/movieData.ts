import BatmanBegins from '../../assets/batman_begins.jpeg';
import Dune from '../../assets/dune.jpeg';
import Sing2 from '../../assets/sing_2.jpeg';
import SpiderMan from '../../assets/spider_man.jpeg';
import TDKRises from '../../assets/the_dark_knight_rises.jpeg';
import TDK from '../../assets/the_dark_knight.jpeg';

export type Movie = {
  id: number;
  src: string;
  title: string;
  main: string;
  runtime: string;
};

export const moviesData: Movie[] = [
  {
    id: 1,
    src: BatmanBegins,
    title: 'Batman Begins',
    main: 'Christian Bale',
    runtime: '120m',
  },
  {
    id: 2,
    src: Dune,
    title: 'Dune',
    main: 'Timothée Chalamet',
    runtime: '120m',
  },
  {
    id: 3,
    src: Sing2,
    title: 'Sing 2',
    main: 'Matthew McConaughey',
    runtime: '120m',
  },
  {
    id: 4,
    src: SpiderMan,
    title: 'Spider-Man: No Way Home',
    main: 'Tom Holland',
    runtime: '120m',
  },
  {
    id: 5,
    src: TDKRises,
    title: 'The Dark Knight Rises',
    main: 'Christian Bale',
    runtime: '120m',
  },
  {
    id: 6,
    src: TDK,
    title: 'The Dark Knight',
    main: 'Christian Bale',
    runtime: '120m',
  },
];
