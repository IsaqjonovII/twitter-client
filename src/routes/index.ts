import { HOME, NOTIFICATIONS, PROFILE, SETTINGS } from "../constants";
import { IAppRoutes, ISidebarRoutes } from "../interfaces";
import Home from "../pages/Home";
import Profile from "../pages/User/Profile";

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
  },
  {
    key: 1,
    path: NOTIFICATIONS,
    title: "Notifications",
  },
  {
    key: 2,
    path: PROFILE,
    title: "Profile",
  },
];

export default routes;
