import { HOME, NOTIFICATIONS, PROFILE, SETTINGS, TWEET } from "../constants";
import { IAppRoutes, ISidebarRoutes } from "../interfaces";
import Notifications from "../pages/Notifications";
import Profile from "../pages/User/Profile";
import {
  RiHome7Fill,
  RiHome7Line,
  FaBell,
  FaRegBell,
  FaRegUser,
  FaUser,
} from "../assets";
import TWeetInfo from "../pages/Home/Tweet";
import Home from "../pages/Home";
import Login from "../pages/User/Auth/Login";
import Register from "../pages/User/Auth/Register";

export const publicRoutes: IAppRoutes[] = [
  {
    key: 0,
    path: HOME,
    Component: Login,
  },
  {
    key: 1,
    path: "/register",
    Component: Register,
  }
]

const privateRoutes: IAppRoutes[] = [
  {
    key: 0,
    path: HOME,
    Component: Home,
  },
  {
    key: 1,
    path: PROFILE,
    Component: Profile,
  },
  {
    key: 2,
    path: NOTIFICATIONS,
    Component: Notifications,
  },
  {
    key: 3,
    path: SETTINGS,
  },
  {
    key: 4,
    path: TWEET + ":id",
    Component: TWeetInfo,
  },
];

export const sidebarRoutes: ISidebarRoutes[] = [
  {
    key: 0,
    path: HOME,
    title: "Home",
    Icon: RiHome7Line,
    isActiveIcon: RiHome7Fill,
  },
  {
    key: 1,
    path: NOTIFICATIONS,
    title: "Notifications",
    Icon: FaRegBell,
    isActiveIcon: FaBell,
  },
  {
    key: 2,
    path: PROFILE,
    title: "Profile",
    Icon: FaRegUser,
    isActiveIcon: FaUser,
  },
];

export default privateRoutes;
