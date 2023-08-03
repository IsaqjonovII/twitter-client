interface IAppRoutes {
  path: string;
  key: string | number;
  Component?: React.JSXElementConstructor<React.FC> | React.ReactElement | any;
}
interface ISidebarRoutes {
  path: string;
  key: string | number;
  title: string;
}
