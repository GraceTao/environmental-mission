import Co2Icon from '@mui/icons-material/Co2';
import IconInfo from "./IconInfo";
import { Box, Typography } from "@mui/material";

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         The Port of Corpus Christi was awarded over <b>$16</b> million through the 
         U.S. Department of Energy’s (DoE) Carbon Storage Assurance Facility Enterprise 
         (CarbonSAFE) initiative to evaluate the technical and economic feasibility 
         of permanently storing captured carbon dioxide (CO2) from industrial operations. 
         This could help speed up the development of a largescale solution to capture 
         and manage carbon emissions.
         </Typography>
      </div>
   );
}

export default function Temperature({upstream}) {
   return (
      <IconInfo
         icon={
            <ThermostatIcon
               sx={{
                  color: "red",
                  width: "100%",
                  height: "100%",
               }}
            />
         }
         position={{top: "28vh", left: "51vw"}}
         page1={<Page1 />}
      />
   );
}
