import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MY_APPOINTMENTS_URL } from "../../constants/server_uris";
import useAxiosPrivate from "../../hooks/Auth/useAxiosPrivate";

const Appointments = () => {
  //Accordion logic
  const [expanded, setExpanded] = useState<string | false>(false);

  const [appointments, setAppointments] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getAppointments = async () => {
      try {
        const response = await axiosPrivate.get(MY_APPOINTMENTS_URL, {
          signal: controller.signal,
        });
        //console.log(response.data);
        isMounted && setAppointments([...response.data]); //extraer las propiedades de data y ponerlas en profile
      } catch (err) {
        console.error(err);
        //navigate("/");
      }
    };

    getAppointments();

    //cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log("appointments", appointments);
  }, [appointments]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box mt={2} mx={5}>
      {appointments.length > 0 ? (
        appointments.map((appo) => {
          return (
            <Accordion
              expanded={expanded === `panel${appointments.indexOf(appo)}`}
              onChange={handleChange(`panel${appointments.indexOf(appo)}`)}
              key={appo._id}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  General settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {appo.date}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
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
