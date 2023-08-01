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
import TopBar from "../../../components/TopBar";
import Instr from "../Instr";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ChatIcon from "@mui/icons-material/Chat";
import AirQuality from "./AirQuality";

function MapInstructions() {

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
            title={"Welcome to the Port of Corpus Christi!"}
            contents={
               `We are traveling to one of the largest U.S. ports, the Port of Corpus Christi in Texas. It is at the 
               forefront of the maritime industry and energy marketplace.`
            }
         ></Instr>
         <Instr
            title={"Port manager:"}
            contents={
               `The Port handles thousands of vessels containing crude oil, petroleum, liquefied natural gas, and more. 
               Our Environmental Management System (EMS) is ISO 14001-certified, which means we set specific environmental 
               goals and performance measures, then work to achieve them. `
            }
         ></Instr>
         <Instr
            title={"Task:"}
            contents={
               `Click around on the map to learn more about the Port of Corpus Christi’s efforts to operate in a manner 
               “conducive to environmental sustainability and resiliency.” Each window will either ask you a question whose 
               answer is a number, or give a number in <b>bold<\b>. Determine the clue word based on the numerical answers. `
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
                     src={map_chat_animation}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </div>
         </Box>
      </div>
   );
}

export default function MapHome() {
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
               "url('./MapBackground.jsx')",
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
                  content={<MapInstructions />}
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
            </Box>

            <Box>
               <IconButton onClick={() => setOpenMessages(true)}>
                  <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
               </IconButton>
            </Box>
            <Dialog open={openMessages} onClose={() => setOpenMessages(false)}>
               <video controls autoPlay style={{ width: "100%" }}>
                  <source
                     src={map_chat_animation}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </Dialog>
         </Box>

         <CO2 />
         <Hydrogen />
         <Ship />
         <AirQuality />
         <Star />
         <Tree />
    
      </Box>
   );
}
