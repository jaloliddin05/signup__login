import React from "react";
import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";

const Navigation = ({ overlay }) => {
  const logOut = () => {
    window.localStorage.setItem("overlay", !overlay);
    window.localStorage.removeItem("userData");
    document.location.reload();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="#" className="header_logo_link"></a>
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <Link to="/home" className="nav_link">
                  Home
                </Link>
              </li>
              <li className="nav_item nav_login">
                <Link
                  to="/login"
                  className={
                    overlay
                      ? "nav_link nav_login_link"
                      : "nav_link nav_login_link none"
                  }
                >
                  Log in
                </Link>
              </li>
              <li className="nav_item nav_signup">
                <Link
                  to="/signup"
                  className={
                    overlay
                      ? "nav_link nav_signup_link"
                      : "nav_link nav_signup_link none"
                  }
                >
                  Sign up
                </Link>
              </li>
              <li className="nav_item nav_signup">
                <button
                  className={
                    overlay
                      ? "nav_link nav_link_logout none"
                      : "nav_link nav_link_logout"
                  }
                  onClick={logOut}
                >
                  Log out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={overlay ? "overly" : "overly none"}></div>
      <Outlet />
    </>
  );
};

export default Navigation;
