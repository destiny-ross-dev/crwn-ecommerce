import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../../assets/crown.svg?react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGNIN
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
