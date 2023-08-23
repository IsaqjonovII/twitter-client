import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import StyledSidebar from "./style";
import { twitterLogo } from "../../assets";
import { sidebarRoutes } from "../../routes";
import Wrapper from "../../components/Wrapper";
import { useAppSelector } from "../../hooks";

interface ISidebar {
  children: React.JSX.Element | React.JSX.Element[] | any;
}

const Sidebar = ({ children }: ISidebar) => {
  const { pathname } = useLocation();
  const username = useAppSelector((state) => state.auth.user?.username);

  return (
    <StyledSidebar>
      <div className="sidebar">
        <Wrapper className="sidebar__header">
          <Link to="/">
            <img src={twitterLogo} alt="twitter logo" />
          </Link>
        </Wrapper>
        <Wrapper className="sidebar__links">
          {sidebarRoutes.map(({ key, path, title, Icon, ActiveIcon }) => (
            <NavLink
              to={title.includes("Profile") ? path + username : path}
              key={key}
            >
              <Wrapper className="sidebar__link" flex="flex" align="center">
                {path === pathname || title.includes("Profile") ? (
                  <ActiveIcon className="icon" />
                ) : (
                  <Icon className="icon" />
                )}
                <span>{title}</span>
              </Wrapper>
            </NavLink>
          ))}
        </Wrapper>
      </div>
      <Wrapper className="routes__container">{children}</Wrapper>
    </StyledSidebar>
  );
};

export default Sidebar;
