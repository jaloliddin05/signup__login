import { useContext } from "react";
import { Context } from "../Context/Context";

function useLogin() {
  const { login, setLogin } = useContext(Context);

  return [login, setLogin];
}

export default useLogin;
