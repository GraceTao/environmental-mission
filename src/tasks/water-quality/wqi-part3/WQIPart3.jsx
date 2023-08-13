import TopBar from "../../../components/TopBar";
import Instr from "../../../components/Instr";
import Instructions from "../../../components/Instructions";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";
import FullTable from "./FullTable";
import Submit from "./Submit";
import Calculator from "../../../components/Calculator";
import { marginOfError } from "../solns";

export default function WQIPart3() {
   const instructions = (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Instr
            title="Part Three:"
            contents={
               <>
                  Find the weighted sum of the Q-values using the weighting
                  factors; this is the water quality index (WQI). Submit the WQI
                  for approval. A calculator is provided at the top left.
                  <br />
                  <br />
                  Note: the WQI is a number between 0 and 100.{" "}
                  <b>Round to two decimal places.</b> Answers within
                  &plusmn;&nbsp;{marginOfError} will be accepted.
               </>
            }
         ></Instr>
      </Box>
   );

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
               content={instructions}
               style={{
                  backgroundColor: "inherit",
                  "&:hover": { backgroundColor: "#94B2B990" },
               }}
            ></Instructions>
         }
      >
         <Box
            sx={{
               background: "linear-gradient(to top, #0093E5, #53E59E)",
               height: "100vh",
               overflow: "auto",
               margin: "auto",
               position: "relative",
               mt: 6,
               pt: 3
            }}
         >
            <Box>
               <Box display="flex" flexDirection="row" sx={{ mb: 2, ml: 2 }}>
                  <Calculator />
                  <IconButton component={Link} to="/wqi-p2" sx={{ ml: "36%" }}>
                     <Tooltip title="back" arrow>
                        <ArrowCircleLeftIcon
                           sx={{ fontSize: 55, color: "blue" }}
                        />
                     </Tooltip>
                  </IconButton>
               </Box>

               <Box
                  display="flex"
                  flexDirection={{ xs: "column-reverse", md: "row" }}
                  justifyContent="space-around"
               >
                  <FullTable></FullTable>
                  <Submit />
               </Box>
            </Box>
         </Box>
      </TopBar>
   );
}
