import { NavLink } from "react-router-dom";

const Links = (props) => {
  const { to, children, classname } = props;
  return (
    <NavLink to={to} className={classname}>
      {children}
    </NavLink>
  );
};
export default Links;
