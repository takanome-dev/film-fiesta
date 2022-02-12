import {
  BookmarkIcon,
  FeedBackIcon,
  FireIcon,
  HeartIcon,
  HomeIcon,
  SettingsIcon,
  SignInIcon,
  TrendingIcon,
} from "./svg";

export const topLinks = [
  {
    name: "Home",
    icon: (color) => <HomeIcon color={color} />,
    path: "/movies",
  },
  {
    name: "Trending",
    icon: (color) => <TrendingIcon color={color} />,
    path: "/trending",
  },
  {
    name: "Popular",
    icon: (color) => <FireIcon color={color} />,
    path: "/popular",
  },
  {
    name: "Bookmarks",
    icon: (color) => <BookmarkIcon color={color} />,
    path: "/bookmarks",
  },
  {
    name: "Favorites",
    icon: (color) => <HeartIcon color={color} />,
    path: "/favorites",
  },
];

export const bottomLinks = [
  {
    name: "Settings",
    icon: (color) => <SettingsIcon color={color} />,
    path: "/settings",
  },
  {
    name: "Feedback",
    icon: (color) => <FeedBackIcon color={color} />,
    path: "/feedback",
  },
  {
    name: "Sign in",
    icon: (color) => <SignInIcon color={color} />,
    path: "/register",
  },
];
