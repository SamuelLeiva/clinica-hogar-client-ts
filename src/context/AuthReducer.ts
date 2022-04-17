import { AuthState } from "../interfaces/auth";

type AuthAction = { type: "login"; payload: AuthState };

export const authReducer = (state: AuthState, action: AuthAction) => {
  console.log("action", action);

  switch (action.type) {
    case "login":
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
      };

    default:
      return state;
  }
};
