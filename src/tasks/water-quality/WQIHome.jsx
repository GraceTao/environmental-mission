import { useEffect, useState } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   Tooltip,
   Grid,
   Popover
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Instructions from "../../components/Instructions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TopBar from "../../components/TopBar";
import DO from "./DO";
import Temperature from "./Temperature";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ForwardIcon from "@mui/icons-material/Forward";
import Readings from "./Readings";

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
   const [enableInstr, setEnableInstr] = useState(hasVisited);
   const [openInstr, setOpenInstr] = useState(false);

   const handleClick = () => {
      setOpenInstr(true);
   };
   return openInstr ? (
      <Box display="flex" flexDirection="column" justifyContent="center">
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
               "Record the values on the clipboard as you go. Once you’ve filled out all values, click the green arrow to continue."
            }
         ></Instr>
      </Box>
   ) : (
      <div>
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            margin="auto"
         >
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
   const [openClipboard, setOpenClipboard] = useState(false);
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
         <Box display="flex" flexDirection="row" justifyContent="space-between">
            
            <IconButton
               sx={{
                  backgroundColor: "white",
                  position: { top: 10, left: 10 },
                  "&:hover": { backgroundColor: "white" },
               }}
               onClick={() => setOpenClipboard(true)}
            >
               <Tooltip title="Clipboard">
                  <AssignmentIcon sx={{ fontSize: 55, color: "black" }} />
               </Tooltip>
            </IconButton>
            <Readings openClipboard={openClipboard} setOpenClipboard={setOpenClipboard}/>
            <IconButton>
               <Tooltip title="Continue" arrow>
                  <ForwardIcon sx={{ fontSize: 60, color: "green" }} />
               </Tooltip>
            </IconButton>
         </Box>

         <Readings/>

         <Box>
            <DO></DO>
            <Temperature upstream={true}></Temperature>
            <Temperature upstream={false}></Temperature>
            <img
               width="4%"
               alt="dissolved oxygen"
               src="data:image/png;base64,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"
            ></img>
            <img
               width="4%"
               alt="Secchi disk pattern"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Secchi_disk_pattern.svg/64px-Secchi_disk_pattern.svg.png"
            ></img>
            <img
               width="4%"
               alt="fecal coliform"
               src="data:image/png;base64,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"
            ></img>
            <img
               width="4%"
               alt="pH"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE4UlEQVR4nO2b+08TWRTH56/qBIyAj7gSfKybqJHHgsiCRiT+4CvxBzXuRt1VE81GfP7gD2Y1vh+4/qagO1BaqoUWKEV3FXwm2lJWoAIe87062E5n2jttZ26V/vBNYObeO+d85t57zj0MEkUHaTZLEm2AaEmiDRAtSbQBoiWJNuCbAjA92kcvzv1J3TVrqKN4LikOh6XCM/Csl38do4//94sFEH3uIm/5SsudNpK3YiWzQQiA6dE+oc7PQKhclfWZIPE0wrQX7byql+eb7QfQXVMeZ0TEfZsirhbLndV7Ts/acvsBODUbHowa6bxlbLwsk7dqNQ2d+J1GnDdpLNhG02E/09hAK7uGe5jSSQHoPMdZUmQ/AIX3rckyBXY00fjgfW4DACewrZH1TSdKeH5aRoN7t9OI85ZYAJ4VS2n04R3DMVw/LGQyuh/x3KGu5WUZLZnA1kaaCvvtB+BvqKHJN4+SjuGrr2ZK1mby9UPyNVRnBAF5A6KWbQD8DTX08X2AtUv24Cf7dzIZ3Vf7IsxlCuHfg7vsAeBZsXTmzQ+fOUS9TfVEE0Hza3EiyPpiDHUmJFsOar+pt90Uun+FJUmx99vnFFL0hdtiALI8s+bx9uAAriNnMAtAzTMwhjoTIl1/G26M2v5TIR95flwS12b4zGFrAQR2NCW8RTiCjcgsAPRh4DSzB9d5AECvLhyPa9PbWGchAFk2FerSFXIGXgCwJ7aNe0mpdQC8Vaszc24iSK+vnKbejetSttVLlvTaIcmKbdNRNNc6AEMn/0jbebwp/4ZaNg4gpGo/dPwAFwA9Oy0DMOK8acpphMl3rZfov8N7qL2wgI3RU1fFFTHC7ddzD8C4ifUP5331P8eHqcICet93lztVTuVYz7pKw5DJQGcbwFTIx653LlrAEqHH+4wTnFDrpcRE5dBuw/YYC2NibPyOZ6UCkCwpSjUTJKsBYOpr+7+7d/HbBjBucgn01FZ8nZK1FaaqOlxLoK7K0Hksv6wDCHfc4HZAhYCZAKnnBl7xboLae7wboZQOABQzzDiRiZ4d2597ALyVq2wDoFeMFQ5AkWW2Nq12fmwgcf3nBgCHg5WxdA9D2uscQh+9w1C/icOQ7QAUWWZlLMuOw6gGcx6HxQBwOKhrWRl9eOVhbZ6fPfL5CJpmQaRv83oaPnWQ/Y4iC4otZuK6EAAK4mxD9Uxcz1pJ7Jf41DmnAShfIKCMlWlRFLMplfNGTrlLFyX8LQHXbAGgYDksL2NlrLTL4q4WtqR4nqXX/+mRXxPaPT36m30AlC8bI8pYqOTwjKuGOqPd3gwALB1AwFuH8DNPyi1lFYAmWUIxA6ksgOAPFhB+xrVnzQcSqrmZAEhXklUArJSRnWHlGjs9QuF/rs4+AEoaM0XKA4jmZwDxLgF8sJDNDciMYj+UELYEIq4WYQBiP5TI7wHR/CZI+SgQzYdBEpYHRHSigfZzNt6IwdNP20b4HkAc7czs8NkaOw/AkZ8BZM8e4EpMiLRfdPImTTz9cm4PUGbbadBZUiTcaVXO+SX2A+jfslG446qSfYVmGYCxYBt1Lpwv3HnYMP74gaGd7rLF1nwlRviXmeFOCmzfRM55xfZP+3nF7M0nc179GgUQ4Hyo7XJ2AdB3Kkm0AaIliTZAtCTRBoiWJNoA0ZJEGyBanwDbFoStKaVw/wAAAABJRU5ErkJggg=="
            ></img>
            <img
               width="4%"
               alt="nitrates and phosphates"
               src="data:image/png;base64,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"
            ></img>
            <img
               width="4%"
               alt="total solids"
               src="data:image/png;base64,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"
            ></img>
         </Box>
      </Box>
   );
}
