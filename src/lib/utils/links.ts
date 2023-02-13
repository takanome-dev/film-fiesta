// import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { ImFire } from 'react-icons/im';
import { MdOutlineExplore } from 'react-icons/md';

const links = [
  {
    name: 'Explore',
    Icon: MdOutlineExplore,
    // name: 'Movies',
    // Icon: FcFilmReel,
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
  // {
  //   name: 'Favorites',
  //   Icon: FaRegHeart,
  //   path: '/favorites',
  // },
  // {
  //   name: 'Search',
  //   Icon: FaSearch,
  //   path: '/search',
  // },
];

export default links;
