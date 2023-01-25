import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { FcFilmReel } from 'react-icons/fc';
import { FiTrendingUp } from 'react-icons/fi';
import { ImFire } from 'react-icons/im';

const links = [
  {
    name: 'Movies',
    Icon: FcFilmReel,
    path: '/movies',
  },
  {
    name: 'Trending',
    Icon: FiTrendingUp,
    path: '/trending',
  },
  {
    name: 'Popular',
    Icon: ImFire,
    path: '/popular',
  },
  {
    name: 'Favorites',
    Icon: FaRegHeart,
    path: '/favorites',
  },
  {
    name: 'Search',
    Icon: FaSearch,
    path: '/search',
  },
];

export default links;
