// import { useEffect } from "react";
import {
  BookmarkIcon,
  // FeedBackIcon,
  FireIcon,
  HeartIcon,
  HomeIcon,
  RentalIcon,
  SettingsIcon,
  SignOutIcon,
  TrendingIcon,
  UserIcon,
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
    icon: (color) => <HeartIcon color={color} fillColor="none" />,
    path: "/favorites",
  },
  {
    name: "Rentals",
    icon: (color) => <RentalIcon color={color} />,
    path: "/rentals",
  },
];

export const bottomLinks = [
  {
    name: "Settings",
    icon: (color) => <SettingsIcon color={color} />,
    path: "/settings",
  },
  // {
  // 	name: "Feedback",
  // 	icon: (color) => <FeedBackIcon color={color} />,
  // 	path: "/feedback",
  // },
];

export const profileLinks = [
  {
    name: "Profile",
    icon: <UserIcon color="var(--color-dark-60)" />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <SettingsIcon color="var(--color-dark-60)" />,
    path: "/settings",
  },
  // {
  //   name: "Feedback",
  //   icon: <FeedBackIcon color="var(--color-dark-80)" />,
  //   path: "/feedback",
  // },
  {
    name: "Sign out",
    icon: <SignOutIcon color="var(--color-dark-80)" />,
    path: "/logout",
  },
];
