import { Typography, Stack, Paper, Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useState } from "react";

const SelectHour = () => {
  //const [hours, setHours] = useState([]);

  return (
    <>
      <Typography variant="h3" mt={5}>
        Elija la hora de su cita:
      </Typography>
      <Stack
        maxWidth="lg"
        margin="auto"
        spacing={1}
        direction="row"
        mt={2}
        sx={{ overflowX: "auto" }}
      >
        {/* {schedule &&
          schedule.map((elem) => {
            return (
              <Paper
                component={Button}
                elevation={2}
                disabled={elem.occupied}
                sx={{
                  minWidth: 120,
                  flexDirection: "column",
                  backgroundColor: pink[100],
                }}
                onClick={() => {
                  selectHour(elem.hour);
                }}
              >
                <Typography>{elem.hour}</Typography>
              </Paper>
            );
          })} */}
      </Stack>
    </>
  );
};

export default SelectHour;
