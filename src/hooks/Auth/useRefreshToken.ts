import { useAuth } from "./useAuth";
import { refreshTokenService } from "../../services/auth/authServices";

const useRefreshToken = () => {
  const { refreshToken } = useAuth();

  //refresca token
  const refresh = async () => {
    const response = await refreshTokenService();

    //accessToken antes de refrescar
    //console.log("prev accessToken", accessToken);

    //cambiamos el state (valor de accessToken)
    refreshToken(response.data.accessToken);
    //accessToken luego de refrescar
    //console.log("new accessToken", response.data.accessToken);

    return response.data.accessToken; //regresamos el token para usarlo en nuestra request
  };

  return {
    refresh,
  };
};

export default useRefreshToken;
