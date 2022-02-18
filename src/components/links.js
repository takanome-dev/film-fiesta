import {
  BookmarkIcon,
  FeedBackIcon,
  FireIcon,
  HeartIcon,
  HomeIcon,
  RentalIcon,
  SettingsIcon,
  // SignInIcon,
  // SignOutIcon,
  TrendingIcon,
} from "./svg";

export const topLinks = [
  {
    name: "Home",
    icon: (color) => <HomeIcon color={color} />,
    path: "/movies",
    category: "",
  },
  {
    name: "Trending",
    icon: (color) => <TrendingIcon color={color} />,
    path: "/trending",
    category: "trending",
  },
  {
    name: "Popular",
    icon: (color) => <FireIcon color={color} />,
    path: "/popular",
    category: "popular",
  },
  {
    name: "Bookmarks",
    icon: (color) => <BookmarkIcon color={color} />,
    path: "/bookmarks",
    category: "",
  },
  {
    name: "Favorites",
    icon: (color) => <HeartIcon color={color} />,
    path: "/favorites",
    category: "",
  },
  {
    name: "Rentals",
    icon: (color) => <RentalIcon color={color} />,
    path: "/rentals",
    category: "",
  },
];

export const bottomLinks = [
  {
    name: "Settings",
    icon: (color) => <SettingsIcon color={color} />,
    path: "/settings",
    category: "",
  },
  {
    name: "Feedback",
    icon: (color) => <FeedBackIcon color={color} />,
    path: "/feedback",
    category: "",
  },
  // {
  //   name: "Sign in",
  //   icon: (color) => <SignInIcon color={color} />,
  //   path: "/login",
  //   category: "",
  // },
  // {
  //   name: "Sign out",
  //   icon: (color) => <SignOutIcon color={color} />,
  //   path: "/logout",
  //   category: "",
  // },
];
