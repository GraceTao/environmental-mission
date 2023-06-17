import { useState } from "react";
import { Typography, Box, IconButton, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Instructions from "../components/Instructions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import HomeIcon from "@mui/icons-material/Home";

function Instr({ title, contents }) {
   return (
      <Box
         display="flex"
         flexDirection="column"
         alignItems="center"
			margin="10px 10px 20px 10px"
      >
         <Typography
            fontSize="1.5rem"
            fontWeight="700"
            align="center"
            lineHeight={2}
         >
            {title}
         </Typography>
         <Typography fontSize="1.2rem" align="center">
            {contents}
         </Typography>
      </Box>
   );
}

function CalendarAndInstructions() {
   const [enableInstr, setEnableInstr] = useState(false);
   const [openInstr, setOpenInstr] = useState(false);

   const handleClick = () => {
      setOpenInstr(true);
   };
   return openInstr ? (
      <Box display="flex" flexDirection="column">
         <Instr
            title={"Task:"}
            contents={
               "Find the water quality index (WQI) of this pond and use the WQI to determine the" +
               "water quality rating. If the rating is correct, you will receive a clue."
            }
         ></Instr>
         <Instr
            title={"Part One:"}
            contents={
               "Click on the water quality indicators in the picture and calculate the unit-converted readings for each indicator. " +
               "Record the values on the clipboard as you go. Once you’ve filled out all values, click the green arrow to continue."
            }
         ></Instr>
      </Box>
   ) : (
      <div>
         <Box display="flex" flexDirection="column" justifyContent="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateCalendar
                  onChange={(date) => {
                     const selectedDate = date["$d"].toJSON().slice(0, 10);
                     const today = new Date().toJSON().slice(0, 10);
                     setEnableInstr(selectedDate === today ? true : false);
                  }}
               />
            </LocalizationProvider>
            <Button
               variant="contained"
               disabled={!enableInstr}
               sx={{
                  backgroundColor: "#417B88",
                  "&:hover": { backgroundColor: "#4AB0C7 " },
               }}
               onClick={handleClick}
            >
               To-do: watershed visit
            </Button>
         </Box>
      </div>
   );
}

export default function WQIHome() {
   const name = (
      <Typography variant="button" sx={{ fontSize: "1.2vw" }}>
         Instructions
      </Typography>
   );
   return (
      <>
         <Button component={Link} to="/">
            Home
         </Button>
         <Instructions
            name={name}
            title={null}
            content={<CalendarAndInstructions />}
            position={{ left: "12%", top: "15px" }}
         ></Instructions>
      </>
   );
}
