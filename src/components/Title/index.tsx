import StyledTitle from "./style";

type Props = {
  children: string | JSX.Element | any;
  className?: string;
};

const PageTitle = ({ children, className }: Props) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default PageTitle;
