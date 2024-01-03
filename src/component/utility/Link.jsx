import { Link } from "react-router-dom";

const Links = (props) => {
  const { link, children, classname } = props;
  return (
    <Link to={link} className={classname}>
      {children}
    </Link>
  );
};
export default Links;
