import ThermostatIcon from "@mui/icons-material/Thermostat";
import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";
import {measured} from "../solns";

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>Water temperature</b> impacts the amount of dissolved oxygen,
            types of aquatic life present, and rates of photosynthesis and
            metabolism of the plants and animals living there. The temperature
            change between upstream and downstream can indicate sources of
            thermal pollution.
         </Typography>
      </div>
   );
}

function Page2({upstream}) {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            Assume this location is {upstream ? "upstream" : "downstream"}. The temperature here is <b>{upstream ? measured.tempUp : measured.tempDown}</b>.
         </Typography>
      </div>
   );
}

export default function Temperature({upstream}) {
   return (
      <IndicatorInfo
         icon={
            <ThermostatIcon
               sx={{
                  color: "red",
                  width: "100%",
                  height: "100%",
               }}
            />
         }
         position={upstream ? {top: "50vh", left: "30vw"} : {top: "-28vh", left: "51vw"}}
         anchor={{ vertical: "bottom", horizontal: "center" }}
         page1={<Page1 />}
         page2={<Page2 upstream={upstream}/>}
      />
   );
}
