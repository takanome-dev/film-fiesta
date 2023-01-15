import { FaFilm, FaSearch, FaFireAlt } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { FcFilmReel } from 'react-icons/fc';

const links = [
  {
    name: 'Movies',
    icon: (color) => <FcFilmReel className={color} size={22} />,
    path: '/movies',
  },
  {
    name: 'Trending',
    icon: (color) => <FiTrendingUp className={color} size={22} />,
    path: '/trending',
  },
  {
    name: 'Popular',
    icon: (color) => <FaFireAlt className={color} size={22} />,
    path: '/popular',
  },
  {
    name: 'Search',
    icon: (color) => <FaSearch className={color} size={22} />,
    path: '/search',
  },
  // {
  // 	name: "Favorites",
  // 	icon: (color) => <FaRegHeart color={color} size={22} />,
  // 	path: "/favorites",
  // },
];

export default links;
