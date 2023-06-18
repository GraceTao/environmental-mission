import { useEffect, useState } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   Tooltip,
   Grid,
} from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { Link, useLocation } from "react-router-dom";
import Instructions from "../../components/Instructions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TopBar from "../../components/TopBar";
import DO from "./DO";
import Temperature from "./Temperature";
import HomeIcon from "@mui/icons-material/Home";
import ForwardIcon from "@mui/icons-material/Forward";

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
   const hasVisited = sessionStorage.getItem(useLocation().pathname);
   const [enableInstr, setEnableInstr] = useState(false);
   const [openInstr, setOpenInstr] = useState(hasVisited);

   const handleClick = () => {
      setOpenInstr(true);
   };
   return openInstr ? (
      <Box display="flex" flexDirection="column">
         <Instr
            title={"Task:"}
            contents={
               "Find the water quality index (WQI) of this pond and use the WQI to determine the" +
               " water quality rating. If the rating is correct, you will receive the clue word."
            }
         ></Instr>
         <Instr
            title={"Part One:"}
            contents={
               "Click on the water quality indicators in the picture and calculate the unit-converted readings for each indicator. " +
               'Record the values on the clipboard as you go. Once you’ve filled out all values, click the green arrow to continue.'
            }
         ></Instr>
      </Box>
   ) : (
      <div>
         <Box display="flex" flexDirection="column" justifyContent="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateCalendar
                  onChange={(date) => {
                     const selectedDate = date["$d"].toLocaleDateString();
                     const today = new Date().toLocaleDateString();
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
               to-do: stream visit
            </Button>
         </Box>
      </div>
   );
}

function WQIndicator() {
   return <></>;
}

export default function WQIHome() {
   const name = (
      <Typography variant="button" sx={{ fontSize: "1.2vw" }}>
         Instructions
      </Typography>
   );
   return (
      <Box
         sx={{
            backgroundImage:
               "url('https://upload.wikimedia.org/wikipedia/commons/7/71/Savage_River_%28Maryland%29_from_Allegany_Bridge.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            overflow: "auto",
            backgroundAttachment: "local",
         }}
      >
         <TopBar
            instruction={
               <Instructions
                  name={
                     <Typography
                        color="#33403d"
                        fontWeight="bold"
                        fontSize="1.2rem"
                     >
                        instructions
                     </Typography>
                  }
                  title={null}
                  content={<CalendarAndInstructions />}
                  style={{
                     backgroundColor: "inherit",
                     "&:hover": { backgroundColor: "#94B2B990" },
                  }}
               ></Instructions>
            }
         />
         <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton >
            <Tooltip title="Continue" arrow >
               
                  <ForwardIcon sx={{ fontSize: 60, color: "green" }} />
                   </Tooltip>
               </IconButton>
           
         </Box>

         <div>
            <DO></DO>
            <Temperature></Temperature>
         </div>
      </Box>
   );
}
