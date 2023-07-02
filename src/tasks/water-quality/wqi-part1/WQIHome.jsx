import { useEffect, useState, React } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   Tooltip,
   Dialog,
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
import Instr from "../Instr";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ChatIcon from "@mui/icons-material/Chat";
import ImageCredits from "./ImageCredits";
import SampleUnitConversion from "./SampleUnitConversion";
import wqi_chat_animation from "../wqi_chat_animation.mp4";
import PopperTest from "./PopperTest";
import Calculator from "../../../components/Calculator";

function CalendarAndInstructions() {
   const hasEnabledInstr = sessionStorage.getItem("hasEnabledWQIInstr");
   const [enableInstr, setEnableInstr] = useState(Boolean(hasEnabledInstr));
   const [openInstr, setOpenInstr] = useState(Boolean(hasEnabledInstr));

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

   return openInstr ? (
      <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         width="100%"
      >
         <Instr
            title={"Task:"}
            contents={
               `Find the water quality index (WQI) of this pond and use the WQI to determine the
               water quality rating. If the rating is correct, you will receive the clue word.`
            }
         ></Instr>
         <Instr
            title={"Part One:"}
            contents={
               `Click on the water quality indicators in the picture to learn more about them. Then calculate
               the unit-converted measurements for each indicator. Some values are filled in for you.
               Record the values on the top left clipboard as you go. A calculator is provided
               beneath the clipboard. Once you’ve filled out all values, click the arrow on the clipboard to continue.`
            }
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
   const name = (
      <Typography variant="button" sx={{ fontSize: "1.2vw" }}>
         Instructions
      </Typography>
   );
   const [openClipboard, setOpenClipboard] = useState(false);
   const [openMessages, setOpenMessages] = useState(false);

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
            <Box display="flex" justifyContent="flex-start" flexDirection="row">
               <IconButton
                  sx={{
                     backgroundColor: "lightgray",
                     position: { top: 5, left: 5 },
                     borderRadius: 5,
                     width: 70,
                     height: 75,
                     mr: 3,
                     mb: 1,
                     "&:hover": { backgroundColor: "white" },
                  }}
                  onClick={() => setOpenClipboard(true)}
               >
                  <Tooltip title="Clipboard" arrow>
                     <AssignmentTwoToneIcon
                        sx={{ fontSize: 65, color: "black" }}
                     />
                  </Tooltip>
               </IconButton>
               <Readings
                  openClipboard={openClipboard}
                  setOpenClipboard={setOpenClipboard}
               />
               <SampleUnitConversion />
            </Box>

            <Box>
               <IconButton onClick={() => setOpenMessages(true)}>
                  <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
               </IconButton>
            </Box>
            <Dialog open={openMessages} onClose={() => setOpenMessages(false)}>
               <video controls autoPlay style={{ width: "100%" }}>
                  <source
                     src={wqi_chat_animation}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </Dialog>
         </Box>
         {/* <div style={{ marginTop: 5, width: "50px", height: "50px", backgroundImage: "url('https://linangdata.com/calculatorEmbed/icons/48x48.png')"}}>
          <iframe id="linangcalc" src="https://linangdata.com/calculatorEmbed/embeddable.html?placement=right" 
              width="30%" height="60%" scrolling="auto" frameBorder="0" 
              style={{border:0, position: "absolute", zIndex: 1, opacity:1.0}}>
          </iframe>
        </div> */}

         <Readings />
         <div>
         <Calculator />
         </div>
         
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
   );
}
