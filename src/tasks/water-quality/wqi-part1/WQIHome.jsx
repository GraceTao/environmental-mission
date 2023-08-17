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
import chat from "../wqi-chat-animation.mp4";
import Calculator from "../../../components/Calculator";
import ChatButton from "../../../components/ChatButton";

const instructions = (
   <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="100%"
   >
      <Instr
         title={"Task:"}
         contents={
            <Typography fontSize="1.2rem" align="center">
               Find the water quality index (WQI) of this pond and use the WQI
               to determine the water quality rating. If the rating is correct,
               you will receive the clue word.
            </Typography>
         }
      ></Instr>
      <Instr
         title={"Part One:"}
         contents={
            <Typography fontSize="1.2rem" align="center">
               Click on the water quality indicators in the picture to learn
               more about them. Then calculate the unit-converted measurements
               for each indicator. Some values are filled in for you. Record the
               values on the top left clipboard as you go. A calculator is
               provided beneath the clipboard. Once you’ve filled out all
               values, click the arrow on the clipboard to continue.
            </Typography>
         }
      ></Instr>
   </Box>
);

export default function WQIHome() {
   const [openClipboard, setOpenClipboard] = useState(false);
   const [openMessages, setOpenMessages] = useState(false);

   return (
      <TopBar
         instruction={
            <Instructions
               name="Stan"
               chat={chat}
               buttonText="to-do: stream visit"
               instructions={instructions}
               showCalendar={true}
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
                        ml: "5px",
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
            <ChatButton chat={chat} />
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
