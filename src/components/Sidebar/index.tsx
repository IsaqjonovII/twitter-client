import { Link } from "react-router-dom";
import { twitterLogo } from "../../assets";
import { sidebarRoutes } from "../../routes";
import Wrapper from "../Wrapper";
import StyledSidebar from "./style";

interface ISidebarProps {
  children: React.JSX.Element | React.JSX.Element[] | any;
}
const Sidebar = ({ children }: ISidebarProps) => {
  return (
    <StyledSidebar>
      <div className="sidebar">
        <Wrapper className="sidebar__header">
          <Link to="/">
            <img src={twitterLogo} alt="twitter logo" />
          </Link>
        </Wrapper>
        <Wrapper className="sidebar__links">
          {sidebarRoutes.map(({ key, path, title, Icon }) => (
            <Link to={path} key={key}>
              <Wrapper className="sidebar__link" flex="flex" align="center">
                <Icon className="icon" />
                <span>{title}</span>
              </Wrapper>
            </Link>
          ))}
        </Wrapper>
      </div>
      <Wrapper className="routes__container">{children}</Wrapper>
    </StyledSidebar>
  );
};

export default Sidebar;
