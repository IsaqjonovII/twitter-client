import { HOME, NOTIFICATIONS, PROFILE, SETTINGS } from "../constants";
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

export default routes;
