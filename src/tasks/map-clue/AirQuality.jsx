import FactoryIcon from '@mui/icons-material/Factory';
import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";
import table from './Air Quality Table.png'



function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            Air quality, similar to water quality, directly affects our health. Poor quality
            air contains high levels of pollutants and is often visible as haze (take the
            Canada wildfire effects on the East coast of the U.S., for example).
            <br />
            <br />
            Indicators of air quality include the level of:
            <br /> - Particle pollution, AKA particulate matter (PM): solid or liquid particles
            suspended in the air. These include soot, dirt, dust, and smoke, and come from
            numerous sources.
            <br /> - Volatile organic compounds (VOC): compounds with high vapor pressure and low
            water solubility. They are emitted as gasses from sources like paints, pesticides,
            cleaning supplies, and glues.
            <br /> - NOx: shorthand for nitric oxide (NO) and nitrogen dioxide (NO2), which
            contribute to the formation of smog and acid rain.
            <br /> - SOx: sulfur oxides, most commonly sulfur dioxide (SO2), which have pungent
            odors and are known to be harmful to health and vegetation.
         </Typography>
      </div>
   );
}

function Page2() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            Look at the table below
         </Typography>

         <Box width="70%" pb={2}>
               <img
                     src={table}
                     alt="Air Quality Table"
                     width="100%"
                  />
         </Box>

         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            By the end of 2023, Corpus Christi hopes to reduce the total NOx, PM, VOC, and
            SOx emissions to 5,019.7 tons.
            <br />
            <br />
            <b>What % reduction is this? Round your answer to the nearest whole number.</b>
            <br />
            <br />
            Note that we are only looking at total NOx, PM, VOC, and SOx emissions.
            PM includes PM2.5 and PM10.
            <br />
            <br />
            Use this equation if you’re having trouble:
            <br />
            % reduction = 100% * (V1 - 5,019.7) / V1
            <br />
            V1 = 2020 total NOx, PM, VOC, SOx emissions
            <br />
            <br />
            Source: https://portofcc.com/wp-content/uploads/PV-FINAL-Port-of-Corpus-Christi-2020-EI-Report-2-Nov-21-scg.pdf
         </Typography>
      </div>
   );
}

export default function AirQuality() {
   return (
      <IndicatorInfo
         icon={
            <FactoryIcon
               sx={{
                  color: "#00fbd1",
                  width: "100%",
                  height: "100%",
                  boxShadow: 5,
               }}
            />
         }
         position={{top: "-20vh", left: "40vw" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
