import TopBar from "../../../components/TopBar";
import Instr from "../Instr";
import Instructions from "../../../components/Instructions";
import { Box, Typography, OutlinedInput } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import {Link} from "react-router-dom";

export default function WQIPart3() {
   const instructions = (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Instr
            title="Task:"
            contents="Find the water quality index (WQI) of this pond and use the WQI to determine the water quality rating. If the rating is correct, you will receive a clue."
         ></Instr>
         <Instr
            title="Part Three:"
            contents="Find the weighted sum of the Q-values using the weighting factors; this is the water quality index (WQI). Submit the WQI for approval. If correct, check the rating that corresponds with the WQI to receive your clue."
         ></Instr>
      </Box>
   );

   return (
      <Box
         sx={{
            background: "linear-gradient(to top, #0093E5, #53E59E)",
            height: "100vh",
            overflow: "auto",
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
         <Link to="/wqi-p2">
            <ArrowCircleLeftIcon  sx={{fontSize: 55, color: "blue"}}/>
         </Link>
      </Box>
   );
}
