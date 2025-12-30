import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.login ? (
        <div className="bg-green-400 p-2 m-2">
          <h1>User is logged in</h1>

          <button
            className="bg-red-500 p-2 m-2"
            onClick={() => authCtx.setLogin(false)}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-yellow-300 p-2 m-2">
          <h1>User is logged out</h1>

          <button
            className="bg-blue-400 p-2 m-2"
            onClick={() => authCtx.setLogin(true)}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
