import React from "react";
import StyledWrapper from "./style";

interface IWrapper {
  children: React.JSX.Element | React.JSX.Element[] | string;
  className?: string;
}

const Wrapper = ({ children, className }: IWrapper) => {
  return <StyledWrapper className={className}> {children}</StyledWrapper>;
};

export default Wrapper;
