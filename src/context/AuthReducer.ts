import { AuthState } from "../interfaces/auth";

type AuthAction =
  | { type: "login"; payload: AuthState } 
  | { type: "logout" }
  | { type: "refreshToken"; payload: AuthState };

export const authReducer = (state: AuthState, action: AuthAction) => {
  console.log("action", action);

  switch (action.type) {
    case "login":
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
      };
    case "refreshToken":
      return {
        ...state,
        accessToken: action.payload.accessToken,
      }
    case "logout":
      return {};

    default:
      return state;
  }
};
