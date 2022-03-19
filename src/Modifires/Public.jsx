import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";

function Public({ setOverlay }) {
  const { findUser } = useContext(Context);
  const { pathname } = useLocation();

  if (findUser?.id && pathname === "/login") {
    window.localStorage.setItem("overlay", false);
    setOverlay(JSON.parse(window.localStorage.getItem("overlay")));
    return <Navigate to="/home" />;
  } else if (findUser?.id && pathname === "/signup") {
    window.localStorage.setItem("overlay", false);
    setOverlay(JSON.parse(window.localStorage.getItem("overlay")));
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default Public;
