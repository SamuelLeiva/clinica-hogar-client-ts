import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  MY_APPOINTMENTS_URL,
  MY_PATIENTS_URL,
} from "../../constants/server_uris";
import useAxiosPrivate from "../../hooks/Auth/useAxiosPrivate";

const Appointments = () => {
  //Accordion logic
  const [expanded, setExpanded] = useState<string | false>(false);

  const [patients, setPatients] = useState([]);
  const [patientsIds, setPatientsIds] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getAppointments = async (id: string) => {
    const response = await axiosPrivate.get(`${MY_APPOINTMENTS_URL}/${id}`);
    setAppointments([...appointments, ...response.data]);
    setPatientsIds(patientsIds.concat(id));
  };

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
        //navigate("/");
      }
    };

    getPatients();

    //cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleChange =
    (panel: string, id: string) =>
    async (event: React.SyntheticEvent, isExpanded: boolean) => {
      //o si ya se consulto a esa id de usuario. Idea: consultar los ids en un
      const found = patientsIds.find((elem) => elem === id);
      if (isExpanded && !found) await getAppointments(id);
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box mx={5}>
      {patients.length > 0 ? (
        patients.map((patient) => {
          return (
            <Accordion
              expanded={expanded === `panel${patients.indexOf(patient)}`}
              onChange={handleChange(
                `panel${patients.indexOf(patient)}`,
                patient._id
              )}
              key={patient._id}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${patients.indexOf(patient)}bh-content`}
                id={`panel${patients.indexOf(patient)}bh-header`}
              >
                {/* <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  General settings
                </Typography> */}
                <Typography sx={{ color: "text.secondary", width: "100%" }}>
                  {patient.firstName +
                    " " +
                    patient.lastNameF +
                    " " +
                    patient.lastNameM}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {appointments ? (
                  appointments
                    .filter((appointment) => {
                      return appointment.patient._id === patient._id;
                    })
                    .map((appo: any) => {
                      return (
                        <Box key={appo._id} mb={2} borderBottom={1}>
                          <Grid container spacing={1}>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={7} textAlign={"end"}>
                              <Typography variant="h5">
                                {appo.medic.firstName +
                                  " " +
                                  appo.medic.lastNameF +
                                  " " +
                                  appo.medic.lastNameM}
                              </Typography>
                            </Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={7} textAlign={"end"}>
                              <Typography variant="h6">
                                {appo.medic.speciality.name}
                              </Typography>
                            </Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={7} textAlign={"end"}>
                              <Typography variant="h6">
                                {`CITA ${appo.appointmentType}`}
                              </Typography>
                            </Grid>
                            <Grid item xs={6} textAlign={"start"}>
                              <b>Paciente: </b>
                            </Grid>
                            <Grid item xs={6} textAlign={"end"}>
                              <Typography>
                                {patient.firstName +
                                  " " +
                                  patient.lastNameF +
                                  " " +
                                  patient.lastNameM}
                              </Typography>
                            </Grid>

                            <Grid item xs={6} textAlign={"start"}>
                              <b>Fecha de cita:</b>
                            </Grid>
                            <Grid item xs={6} textAlign={"end"}>
                              <Typography>{appo.date.slice(0, 10)}</Typography>
                            </Grid>

                            <Grid item xs={6} textAlign={"start"}>
                              <b>Hora de cita:</b>
                            </Grid>
                            <Grid item xs={6} textAlign={"end"}>
                              <Typography>{appo.date.slice(11, 16)}</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      );
                    })
                ) : (
                  <Typography>No hay citas</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          );
        })
      ) : (
        <h1>No tiene ninguna cita registrada</h1>
      )}
    </Box>
  );
};

export default Appointments;
