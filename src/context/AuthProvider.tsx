import { AuthContext } from "./AuthContext";
import { AuthState } from "../interfaces/auth";
import { useReducer, useEffect } from "react";
import { authReducer } from "./AuthReducer";

const INITIAL_STATE: AuthState = {
  
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, () => {
    const localData = localStorage.getItem("hogar-auth");
    return localData ? JSON.parse(localData) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("hogar-auth", JSON.stringify(authState));
  }, [authState]);

  const login = (email: string, accessToken: string) => {
    dispatch({ type: "login", payload: { email, accessToken } });
  };

  const logout = () => {
    dispatch({ type: "logout"});
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//export default AuthContext;
