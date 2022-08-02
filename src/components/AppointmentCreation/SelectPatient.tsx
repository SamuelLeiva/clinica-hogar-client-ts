import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MY_PATIENTS_URL } from "../../constants/server_uris";
import useAxiosPrivate from "../../hooks/Auth/useAxiosPrivate";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";

const SelectPatient = () => {
  const axiosPrivate = useAxiosPrivate();
  const { addPatientData, changePage } = useAppointmentCreation();

  const [patients, setPatients] = useState([]);

  //entender mejor esta funcion
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPatients = async () => {
      try {
        const response = await axiosPrivate.get(MY_PATIENTS_URL, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setPatients([...response.data]); //extraer las propiedades de data y ponerlas en profile
      } catch (err) {
        console.error(err);
      }
    };

    getPatients();

    //cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log("patients", patients);
  }, [patients]);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        //bgcolor: "beige",
        margin: "auto",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ fontSize: 20 }}
        >
          Pacientes
        </ListSubheader>
      }
    >
      {patients &&
        patients.map((patient) => (
          <ListItemButton
            sx={{ marginBottom: 2, bgcolor: "beige" }}
            onClick={() => {
              addPatientData(
                patient._id,
                patient.firstName,
                patient.lastNameF,
                patient.lastNameM,
                patient.documentType,
                patient.document,
                patient.birthday,
                patient.sex,
                patient.phoneNumber
              );
              changePage(3);
            }}
          >
            <ListItemText
              primary={
                patient.firstName +
                " " +
                patient.lastNameF +
                " " +
                patient.lastNameM
              }
            />
          </ListItemButton>
        ))}
    </List>
  );
};

export default SelectPatient;
