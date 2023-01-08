import { FaFilm, FaFireAlt } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

const links = [
  {
    name: "Movies",
    icon: (color) => <FaFilm color={color} size={23} />,
    path: "/movies",
  },
  {
    name: "Trending",
    icon: (color) => <FiTrendingUp color={color} size={22} />,
    path: "/trending",
  },
  {
    name: "Popular",
    icon: (color) => <FaFireAlt color={color} size={22} />,
    path: "/popular",
  },
  // {
  // 	name: "Favorites",
  // 	icon: (color) => <FaRegHeart color={color} size={22} />,
  // 	path: "/favorites",
  // },
];

export default links;
