interface IAppRoutes {
  path: string;
  key: string | number;
  Component?: React.JSXElementConstructor<React.FC> | React.ReactElement;
}
