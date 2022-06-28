import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { getLastDays } from "../../utils/getLastDays";

const Schedule = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(getLastDays());
  }, []);

  return (
    <>
      <Typography variant="h3" mt={2}>
        Elija el dia de su cita:
      </Typography>

      <Stack
        maxWidth="lg"
        margin="auto"
        spacing={1}
        direction="row"
        sx={{ overflowX: "auto" }}
      >
        {days &&
          days.map((elem) => {
            return (
              <Paper
                component={Button}
                elevation={2}
                sx={{
                  minWidth: 120,
                  flexDirection: "column",
                  backgroundColor: pink[50],
                }}
                onClick={(e) => {
                  console.log("e.target", e.target);
                  console.log("elem", elem);
                }}
              >
                <Typography>{elem.number}</Typography>
                <Typography>
                  {elem.day.substring(0, 3).toUpperCase()}
                </Typography>
                <Typography>{elem.month}</Typography>
              </Paper>
            );
          })}
      </Stack>
      <Typography variant="h3" mt={2}>
        Elija la hora de su cita:
      </Typography>
      <Stack spacing={2} direction="row">
        {/* map con las horas disponibles de ese dia */}
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  );
};

export default Schedule;
