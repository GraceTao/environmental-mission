import { useState } from "react";
import TopBar from "../../../components/TopBar";
import Instr from "../Instr";
import Instructions from "../../../components/Instructions";
import {
   Box,
   IconButton,
   Button,
   Typography,
   OutlinedInput,
   TextField,
   Tooltip,
   Dialog,
   DialogContent,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link, useLocation } from "react-router-dom";
import FullTable from "./FullTable";
import Submit from "./Submit";

export default function WQIPart3() {
   const instructions = (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Instr
            title="Part Three:"
            contents={
               <div>
                  Find the weighted sum of the Q-values using the weighting
                  factors; this is the water quality index (WQI). Submit the WQI
                  for approval.
                  <br/><br/>
                  Note: the WQI is a number between 0 and 100. Round to one decimal place.
                  Answers within &plusmn;&nbsp;0.5 will be accepted.
               </div>
            }
         ></Instr>
      </Box>
   );

   return (
      <Box
         sx={{
            background: "linear-gradient(to top, #0093E5, #53E59E)",
            height: "100vh",
            overflow: "auto",
            margin: "auto",
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
                  content={instructions}
                  style={{
                     backgroundColor: "inherit",
                     "&:hover": { backgroundColor: "#94B2B990" },
                  }}
               ></Instructions>
            }
         />
         <IconButton component={Link} to="/wqi-p2" sx={{ ml: "41%" }}>
            <Tooltip title="back" arrow>
               <ArrowCircleLeftIcon sx={{ fontSize: 55, color: "blue" }} />
            </Tooltip>
         </IconButton>
         <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-around"
         >
            <FullTable></FullTable>
            <Submit />
         </Box>
      </Box>
   );
}
