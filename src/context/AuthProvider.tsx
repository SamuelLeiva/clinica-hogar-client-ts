import { AuthContext } from "./AuthContext";
import { AuthState } from "../interfaces/auth";
import { useReducer } from "react";
import { authReducer } from "./AuthReducer";

const INITIAL_STATE: AuthState = {
  email: "",
  accessToken: "",
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const login = (email: string, accessToken: string) => {
    dispatch({ type: "login", payload: { email, accessToken } });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//export default AuthContext;
