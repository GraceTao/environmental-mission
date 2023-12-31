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

import chat from "./map-chat-animation.mp4";
import Calculator from "../../components/Calculator";
import ChatButton from "../../components/ChatButton";

const instructions = (
   <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%"
   >
      <Instr
         title="Welcome to the Port of Corpus Christi!"
         contents={
            <Typography fontSize="1.2rem" align="center">
               The Port of Corpus Christi in Texas is one of the largest U.S.
               ports. It is at the forefront of the maritime industry and energy
               marketplace, handling thousands of vessels containing crude oil,
               petroleum, liquefied natural gas, and more. The Port of Corpus
               Christi's Environmental Management System (EMS) is ISO
               14001-certified, which means it sets specific environmental goals
               and performance measures, then works to achieve them.
            </Typography>
         }
      />
      <Instr
         title="Task:"
         contents={
            <Typography fontSize="1.2rem" align="center">
               Click around on the map to learn more about the Port of Corpus
               Christi’s efforts to operate in a manner “conducive to
               environmental sustainability and resiliency.” Each window will
               either ask you a question whose answer is a number, or give a
               number in <b>bold</b>. <br />
               <u>
                  Determine the clue word based on the numerical answers. You
                  may need to scroll.
               </u>
            </Typography>
         }
      ></Instr>
   </Box>
);

export default function MapHome() {
   return (
      <TopBar
         instruction={
            <Instructions
               name="Jessy"
               chat={chat}
               buttonText="visit the port of corpus christi"
               instructions={instructions}
               showCalendar={false}
            ></Instructions>
         }
      >
         <Box
            sx={{
               backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/d/d8/Hafen_Corpus_Christi.svg')", //<MapBackground />,
               backgroundSize: "cover",
               width: "140vw",
               height: "140vh",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               minHeight: "100vh",
               overflowY: "scroll",
               overflowX: "scroll",
               backgroundAttachment: "local",
               position: "relative",
               pt: 9,
            }}
         >
            <Box
               display="flex"
               flexDirection="column"
               justifyContent="space-between"
               // marginTop="70px"
               // alignItems="center"
               marginLeft="15px"
               position="fixed"
               height="205px"
            >
               <ChatButton
                  chat={chat}
                  style={{
                     borderRadius: 2,
                     backgroundColor: "green ",
                     width: 64,
                     height: 64,
                     "&:hover": { backgroundColor: "green" },
                     // marginBottom: "10px",
                  }}
               />
               <Calculator />
               <PolicyClue />
            </Box>

            <CO2 />
            <Hydrogen />
            <Ship />
            <AirQuality />
            <Star />
            <Tree />
         </Box>
      </TopBar>
   );
}
