import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../../contexts/user.context";

import CrwnLogo from "../../../assets/crown.svg?react";
import "./navigation.styles.scss";
import { useContext } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);
  };

  console.log(currentUser);
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
