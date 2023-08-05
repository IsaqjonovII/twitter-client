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
          {sidebarRoutes.map(({ key, path, title }) => (
            <Wrapper key={key}>
              <Link to={path}>{title}</Link>
            </Wrapper>
          ))}
        </Wrapper>
      </div>
      <Wrapper>{children}</Wrapper>
    </StyledSidebar>
  );
};

export default Sidebar;
