import { Typography, Stack, Paper, Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { getDayName, getLastDays, getMonthName } from "../../utils/getLastDays";

const SelectDay = () => {
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
        mt={2}
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
                onClick={() => {
                  console.log("elem", elem);
                }}
              >
                <Typography>{elem.dayNumber}</Typography>
                <Typography>
                  {getDayName(elem.day).substring(0, 3).toUpperCase()}
                </Typography>
                <Typography>{getMonthName(elem.month)}</Typography>
              </Paper>
            );
          })}
      </Stack>
    </>
  );
};

export default SelectDay;
