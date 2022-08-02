import { useAuth } from "./useAuth";
import { refreshTokenService } from "../../services/auth/authServices";

const useRefreshToken = () => {
  const { refreshToken } = useAuth();

  //refresca token
  const refresh = async () => {
    const response = await refreshTokenService();

    //cambiamos el state (valor de accessToken)
    refreshToken(response.data.accessToken);

    return response.data.accessToken; //regresamos el token ya refrescado para usarlo en nuestra request
  };

  return refresh;
};

export default useRefreshToken;
