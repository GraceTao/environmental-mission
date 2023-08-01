import { useState } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   //Tooltip,
   Dialog,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import Instructions from "../../components/Instructions";
import TopBar from "../../components/TopBar";
import Instr from "../water-quality/Instr";
//import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ChatIcon from "@mui/icons-material/Chat";
import AirQuality from "./AirQuality";
import Ship from "./Ship";
import Star from "./Star";
import Tree from "./Tree";
import Hydrogen from "./Hydrogen";
import CO2 from "./CO2";
import chat from "./map_chat_animation.mp4"
//import MapBackground from "./MapBackground";

function MapInstructions() {
   const hasEnabledInstr = sessionStorage.getItem("hasEnabledMapInstr");
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
                     src={chat}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </div>
            <Button
                  variant="contained"
                  sx={{
                     backgroundColor: "#417B88",
                     "&:hover": { backgroundColor: "#4AB0C7 " },
                  }}
                  onClick={() => {
                     setOpenInstr(true);
                     sessionStorage.setItem("hasEnabledMapInstr", true);
                  }}
               >
                  Visit the Port of Corpus Christi!
               </Button>
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
   const [openMessages, setOpenMessages] = useState(false);

   return (
      <Box
         sx={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/d8/Hafen_Corpus_Christi.svg')", //<MapBackground />,
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
            <Box>
               <IconButton onClick={() => setOpenMessages(true)}>
                  <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
               </IconButton>
            </Box>
            <Dialog open={openMessages} onClose={() => setOpenMessages(false)}>
               <video controls autoPlay style={{ width: "100%" }}>
                  <source
                     src={chat}
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
