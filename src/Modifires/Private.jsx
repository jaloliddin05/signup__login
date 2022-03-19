import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";

function Private() {
  const { findUser } = useContext(Context);
  const { pathname } = useLocation();

  if (findUser?.id) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}

export default Private;
