import IndicatorInfo from "./IndicatorInfo";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Typography } from "@mui/material";

function Page1() {
   return (
      <>
         <Typography sx={{ p: 2 }}>
            Water temperature impacts the amount of dissolved oxygen, types of
            aquatic life present, and rates of photosynthesis and metabolism of
            the plants and animals living there. The temperature change between
            upstream and downstream can indicate sources of thermal pollution.
         </Typography>
      </>
   );
}

function Page2() {
   return (
      <>
         <Typography sx={{ p: 2 }}>
            Water temperature impacts the amount of dissolved oxygen, types of
            aquatic life present, and rates of photosynthesis and metabolism of
            the plants and animals living there. The temperature change between
            upstream and downstream can indicate sources of thermal pollution.
            The oxygen saturation % is the ratio of concentration of DO to the
            maximum amount of oxygen that will dissolve under stable equilibrium
            conditions (i.e. 100% saturation). % sat = (measured DO) / (max DO)
            The DO was measured to be 7.79 mg/L. Given the following graph
            displaying the maximum oxygen concentration at different
            temperatures, calculate the % saturation. Use the rounded average
            temperature between upstream and downstream as the temperature
            value.
         </Typography>
      </>
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
