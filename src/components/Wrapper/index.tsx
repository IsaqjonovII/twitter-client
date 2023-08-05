import React from "react";
import StyledWrapper from "./style";

type TCenterStartEnd = "center" | "flex-end" | "flex-start";

type Props = {
  align?: TCenterStartEnd | "stretch";
  justify?: "space-between" | "space-around" | "space-evenly" | TCenterStartEnd;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  children: React.JSX.Element | React.JSX.Element[] | any;
  className?: string;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  flex?: "flex" | "grid";
};

const Wrapper = ({
  children,
  className,
  align,
  justify,
  direction,
  wrap,
  flex,
}: Props) => {
  return (
    <StyledWrapper
      className={className}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        display: flex,
      }}
    >
      {children}
    </StyledWrapper>
  );
};
export default Wrapper;
