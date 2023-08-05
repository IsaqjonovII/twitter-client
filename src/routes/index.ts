import { HOME, NOTIFICATIONS, PROFILE, SETTINGS } from "../constants";
import { IAppRoutes, ISidebarRoutes } from "../interfaces";
import Home from "../pages/Home";
import Profile from "../pages/User/Profile";
import {
  RiHome7Fill,
  RiHome7Line,
  FaBell,
  FaRegBell,
  FaRegUser,
  FaUser,
} from "../assets";
import Notifications from "../pages/Notifications";

const routes: IAppRoutes[] = [
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

export default routes;
