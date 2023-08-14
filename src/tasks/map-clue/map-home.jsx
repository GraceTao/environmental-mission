import { useState, useEffect } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   Tooltip,
   Dialog,
} from "@mui/material";
import Instructions from "../../components/Instructions";
import TopBar from "../../components/TopBar";
import Instr from "../../components/Instr";
//import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ChatIcon from "@mui/icons-material/Chat";
import AirQuality from "./AirQuality";
import Ship from "./Ship";
import Star from "./Star";
import Tree from "./Tree";
import Hydrogen from "./Hydrogen";
import CO2 from "./CO2";
import PolicyClue from "./PolicyClue";
import chat from "./map_chat_animation.mp4"
import Calculator from "../../components/Calculator";


function MapInstructions() {
   const hasEnabledInstr = localStorage.getItem("hasEnabledMapInstr");
   const [openInstr, setOpenInstr] = useState(Boolean(hasEnabledInstr));

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
               <Typography sx={{ p: 2, fontSize: "1.2rem"}}>
                  Click around on the map to learn more about the Port of Corpus Christi’s efforts to operate in a manner 
                  “conducive to environmental sustainability and resiliency.” Each window will either ask you a question whose 
                  answer is a number, or give a number in <b>bold</b>. Determine the clue word based on the numerical answers. You 
                  may need to scroll. 
               </Typography>
            }
         ></Instr>

      </Box>
   ) : (
      <div>
         <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignContent="center"
            margin="auto"
         >
            <Box display='flex' alignContent="center" justifyContent={"center"}>
               <video controls autoPlay style={{ width: "50%" }}>
                  <source
                     src={chat}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </Box>
            <Box display='flex' alignContent="center" justifyContent={"center"} marginTop="10px">
            <Button
               disabled={!videoPlayed}
               variant="contained"
               sx={{
                  backgroundColor: "#417B88",
                  "&:hover": { backgroundColor: "#4AB0C7 " },
                  width:"50%"
               }}
               onClick={() => {
                  setOpenInstr(true);
                  localStorage.setItem("hasEnabledMapInstr", true);
               }}
            >
               Visit the Port of Corpus Christi!
            </Button>
            </Box>
         </Box>
      </div>
   );
}

export default function MapHome() {
   useEffect(() => {
      setTimeout(() => setVideoPlayed(true), 18000);
   }, []);

   const [openMessages, setOpenMessages] = useState(false);
   const [videoPlayed, setVideoPlayed] = useState(false);

   return (
      <Box
         sx={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/d8/Hafen_Corpus_Christi.svg')", //<MapBackground />,
            backgroundSize: 'cover',
            width: '150vw',
            height: '150vh',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            overflowY: "scroll",
            overflowX: "scroll",
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
         <Box display="flex" flexDirection="column" justifyContent="space-between" marginTop='70px' marginLeft='20px' position='fixed'>
            <Box>
               <IconButton
                  onClick={() => setOpenMessages(true)}
                  sx={{
                     borderRadius: 2,
                     backgroundColor: "green ",
                     width: 64,
                     height: 64,
                     position: { top: 2, left: 5 },
                     "&:hover": { backgroundColor: "green" },
                     marginBottom: '10px'
                  }} >
                  <Tooltip title="Chat" arrow>
                     <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
                  </Tooltip>
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
            <Calculator />
            <PolicyClue/>
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
