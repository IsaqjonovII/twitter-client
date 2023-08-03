import { Link } from "react-router-dom";
import { twitterLogo } from "../../assets";
import { sidebarRoutes } from "../../routes";
import Wrapper from "../Wrapper";
import StyledSidebar from "./style";

const Sidebar = () => {
  return (
    <StyledSidebar>
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
    </StyledSidebar>
  );
};

export default Sidebar;
