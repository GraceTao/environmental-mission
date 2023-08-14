import { useState, React, useEffect } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   Tooltip,
   Dialog,
   DialogContent,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import Instructions from "../../../components/Instructions";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TopBar from "../../../components/TopBar";
import DO from "./DO";
import Temperature from "./Temperature";
import FC from "./FC";
import PH from "./PH";
import Turbidity from "./Turbidity";
import NitratesPhosphates from "./NitratesPhosphates";
import TS from "./TS";
import Readings from "./Readings";
import Instr from "../../../components/Instr";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ChatIcon from "@mui/icons-material/Chat";
import ImageCredits from "./ImageCredits";
import SampleUnitConversion from "./SampleUnitConversion";
import wqi_chat_animation from "../wqi_chat_animation.mp4";
import Calculator from "../../../components/Calculator";

function CalendarAndInstructions() {
   const hasEnabledInstr = Boolean(sessionStorage.getItem("hasEnabledWQIInstr"));
   const [enableInstr, setEnableInstr] = useState(hasEnabledInstr);
   const [openInstr, setOpenInstr] = useState(hasEnabledInstr);
   const [videoPlayed, setVideoPlayed] = useState(hasEnabledInstr);

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

   useEffect(() => {
      setTimeout(() => setVideoPlayed(true), 24000)
   }, []);

   return openInstr ? (
      <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         width="100%"
      >
         <Instr
            title={"Task:"}
            contents={`Find the water quality index (WQI) of this pond and use the WQI to determine the
               water quality rating. If the rating is correct, you will receive the clue word.`}
         ></Instr>
         <Instr
            title={"Part One:"}
            contents={`Click on the water quality indicators in the picture to learn more about them. Then calculate
               the unit-converted measurements for each indicator. Some values are filled in for you.
               Record the values on the top left clipboard as you go. A calculator is provided
               beneath the clipboard. Once you’ve filled out all values, click the arrow on the clipboard to continue.`}
         ></Instr>
      </Box>
   ) : (
      <div>
         <Box
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            justifyContent="center"
            margin="auto"
         >
            <div>
               <video controls autoPlay style={{ width: "90%" }}>
                  <source
                     src={wqi_chat_animation}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </div>
            <Box display="flex" flexDirection="column">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                     disabled={!videoPlayed}
                     onChange={(date) => {
                        const selectedDate = date["$d"].toLocaleDateString();
                        const today = new Date().toLocaleDateString();
                        setEnableInstr(selectedDate === today);
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
                  onClick={() => {
                     setOpenInstr(true);
                     sessionStorage.setItem("hasEnabledWQIInstr", true);
                  }}
               >
                  to-do: stream visit
               </Button>
            </Box>
         </Box>
      </div>
   );
}

export default function WQIHome() {
   const [openClipboard, setOpenClipboard] = useState(false);
   const [openMessages, setOpenMessages] = useState(false);

   return (
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
      >
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
               position: "relative",
               
            }}
         >
            <Box
               display="flex"
               flexDirection="row"
               justifyContent="space-between"
               mt={8}
            >
               <Box display="flex" flexDirection="row" mt={0.5}>
                  <IconButton
                     sx={{
                        backgroundColor: "lightgray",
                        borderRadius: 5,
                        width: 70,
                        height: 75,
                        "&:hover": { backgroundColor: "white" },
                        mr: "5px",
                        ml: "5px"
                     }}
                     onClick={() => setOpenClipboard(true)}
                  >
                     <Tooltip title="Clipboard" arrow>
                        <AssignmentTwoToneIcon
                           sx={{ fontSize: 65, color: "black" }}
                        />
                     </Tooltip>
                  </IconButton>
                  <Calculator />
               </Box>
               <Readings
                  openClipboard={openClipboard}
                  setOpenClipboard={setOpenClipboard}
               />
               <IconButton onClick={() => setOpenMessages(true)}>
                  <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
               </IconButton>
               <Dialog
                  open={openMessages}
                  onClose={() => setOpenMessages(false)}
               >
                  <video controls autoPlay style={{ width: "100%" }}>
                     <source
                        src={wqi_chat_animation}
                        alt="text messages"
                        type="video/mp4"
                     />
                  </video>
               </Dialog>
            </Box>
            <Box ml="5px" mt="5px">
               <SampleUnitConversion />
            </Box>
            <Box>
               <DO />
               <Temperature upstream={true}></Temperature>
               <Temperature upstream={false}></Temperature>
               <FC />
               <PH />
               <Turbidity />
               <NitratesPhosphates />
               <TS />

               <ImageCredits />
            </Box>
         </Box>
      </TopBar>
   );
}
