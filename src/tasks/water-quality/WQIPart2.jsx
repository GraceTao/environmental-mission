import TopBar from "../../components/TopBar";
import Instr from "./Instr";
import Instructions from "../../components/Instructions";
import { Box, Typography } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link, useLocation } from "react-router-dom";

export default function WQIPart2() {
    const location = useLocation();
    const formValues = location.state?.formValues;

   const instructions = (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Instr
            title="Task"
            contents="Find the water quality index (WQI) of this pond and use the WQI to determine the water quality rating. If the rating is correct, you will receive a clue."
         ></Instr>
         <Instr
            title="Part 2"
            contents="Determine the quality values (Q-values) based on the provided graphs. Record the Q-values in the chart on the right. Click the top right arrow to continue."
         ></Instr>
      </Box>
   );

   return (
      <Box sx={{
        background: "linear-gradient(to top, #0093E5, #53E59E)",
        height: "100vh",
        overflow: "auto",
     }}>
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
         <Box display="flex" flexDirection="row" justifyContent="center">
            <Link to="/wqi-p1" state={{ formValues: formValues }}>
                <ArrowCircleLeftIcon sx={{fontSize: 55, color: "blue", mr: 5}} />
            </Link>
            <ArrowCircleRightIcon sx={{fontSize: 55, color: "blue", ml: 5}} />
         </Box>
      </Box>
   );
}
