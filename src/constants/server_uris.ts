export const AUTH_URL = process.env.REACT_APP_AUTH_ROUTES_URL;
export const USER_URL = process.env.REACT_APP_USER_ROUTES_URL;
export const APPOINTMENT_URL = process.env.REACT_APP_APPOINTMENTS_ROUTES_URL;
export const PATIENT_URL = process.env.REACT_APP_PATIENTS_ROUTES_URL;
export const SPECIALITY_URL = process.env.REACT_APP_SPECIALITIES_ROUTES_URL;
export const MEDIC_URL = process.env.REACT_APP_MEDICS_ROUTES_URL;

export const LOGIN_URL = AUTH_URL + "/login";
export const REGISTER_URL = AUTH_URL + "/register";
export const REFRESH_URL = AUTH_URL + "/refresh";
export const LOGOUT_URL = AUTH_URL + "/logout";

export const MY_PROFILE_URL = USER_URL + "/me";

export const MY_APPOINTMENTS_URL = APPOINTMENT_URL + "/patient";

export const MY_PATIENTS_URL = PATIENT_URL + "/myPatients";
