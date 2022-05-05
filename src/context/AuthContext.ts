import { createContext } from "react";
import { AuthState } from "../interfaces/auth";

export type AuthContextProps = {
  authState: AuthState;
  login: (email: string, accessToken: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
