import { createContext, useEffect, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [userData, setUserData] = useState([]);
  const [findUser, setFindUser] = useState(
    JSON.parse(window.localStorage.getItem("userData")) || {}
  );
  const [findPost, setFindPost] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("userData", JSON.stringify(findUser));
  }, [findUser]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((res) => res.json())
      .then((data) => setFindPost(data));
  }, [findPost]);

  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        setFindUser,
        findUser,
        findPost,
        setFindPost,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
