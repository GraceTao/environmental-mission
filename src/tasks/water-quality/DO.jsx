import IndicatorInfo from "./IndicatorInfo";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Typography } from "@mui/material";

function Page1() {
   return (
      <>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>Dissolved oxygen (DO)</b> is the amount of oxygen (O<sub>2</sub>)
            present in the water. Aquatic organisms need this oxygen to survive.{" "}
            <br />
            <br />
            Hypoxic and anoxic areas have low levels of oxygen and are
            considered “dead zones” since they support much less life than
            normal. Too little or too much DO can harm water quality.
         </Typography>
      </>
   );
}

function Page2() {
   return (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            The <b>oxygen saturation %</b> is the ratio of concentration of DO
            to the maximum amount of oxygen that will dissolve under stable
            equilibrium conditions (i.e. 100% saturation). <br />
            <br />
            <Typography
               fontFamily="Cambria Math"
               fontSize="1.2rem"
               fontWeight="bold"
               textAlign="center"
            >
               % sat = (measured DO) / (max DO)
            </Typography>
            <br/>
            The DO was measured to be 7.79 mg/L. Given the following graph
            displaying the maximum oxygen concentration at different
            temperatures, calculate the % saturation. Use the rounded average
            temperature between upstream and downstream as the temperature
            value.
         </Typography>
      </Box>
   );
}

export default function DO() {
   return (
      <IndicatorInfo
         icon={
            <Box sx={{ backgroundColor: "white", borderRadius: 10 }}>
               <Typography
                  fontSize="2vw"
                  fontWeight="bold"
                  mr={1}
                  ml={1}
                  color="black"
               >
                  O<sub>2</sub>
               </Typography>
            </Box>
         }
         position={{ top: "60vh", left: "50vw" }}
         anchor={{ vertical: "bottom", horizontal: "center" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
