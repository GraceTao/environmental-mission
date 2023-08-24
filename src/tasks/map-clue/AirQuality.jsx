import FactoryIcon from "@mui/icons-material/Factory";
import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";
import table from "./Air Quality Table.png";
import { MathJaxContext, MathJax } from "better-react-mathjax";

const indicators = [
   {
      indicator: <>Particle pollution, AKA particulate matter (PM):&nbsp;</>,
      description: (
         <>
            solid or liquid particles suspended in the air. These include soot,
            dirt, dust, and smoke, and come from numerous sources.
         </>
      ),
   },
   {
      indicator: <>Volatile organic compounds (VOC):&nbsp;</>,
      description: (
         <>
            compounds with high vapor pressure and low water solubility. They
            are emitted as gasses from sources like paints, pesticides, cleaning
            supplies, and glues.
         </>
      ),
   },
   {
      indicator: (
         <>
            NO<sub>x</sub>:&nbsp;
         </>
      ),
      description: (
         <>
            shorthand for nitric oxide (NO) and nitrogen dioxide (NO<sub>2</sub>
            ), which contribute to the formation of smog and acid rain.
         </>
      ),
   },
   {
      indicator: (
         <>
            SO<sub>x</sub>:&nbsp;
         </>
      ),
      description: (
         <>
            sulfur oxides, most commonly sulfur dioxide (SO<sub>2</sub>), which
            have pungent odors and are known to be harmful to health and
            vegetation.
         </>
      ),
   },
];

function Page1() {
   return (
      <Box padding="10px">
         <Typography
            sx={{ p: 2, pb: 0, fontSize: { sm: "1rem", lg: "1.2rem" } }}
         >
            <span style={{ color: "navy" }}>
               <b>Air quality</b>
            </span>
            , similar to water quality, directly affects our health. Poor
            quality air contains high levels of pollutants and is often visible
            as haze (take the 2023 Canada wildfires' effect in the northern
            U.S., for example).
            <br />
            <br />
            <b>Indicators of air quality include the level of:</b>
         </Typography>
         <ul>
            {indicators.map((item, index) => (
               <li key={index}>
                  <Typography
                     sx={{ mb: 1, fontSize: { sm: "1rem", lg: "1.1rem" } }}
                  >
                     <span style={{ color: "darkred" }}>
                        <b>{item.indicator}</b>
                     </span>
                     {item.description}
                  </Typography>
               </li>
            ))}
         </ul>
      </Box>
   );
}

function Page2() {
   return (
      <Box align="center" padding="10px">
         <Typography
            sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}
            align="left"
         >
            The table below shows{" "}
            <a
               href="https://portofcc.com/wp-content/uploads/PV-FINAL-Port-of-Corpus-Christi-2020-EI-Report-2-Nov-21-scg.pdf"
               target="_blank"
            >
               2020 emissions
            </a>{" "}
            from the Port of Corpus Christi.
         </Typography>

         <Box
            width={{ xs: "100%", sm: "95%", md: "75%" }}
            pb={2}
            align="center"
         >
            <img src={table} alt="Air Quality Table" width="100%" />
         </Box>

         <Typography
            sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}
            align="center"
         >
            By the end of 2023, Corpus Christi hopes to reduce the total NO
            <sub>x</sub>, PM, VOC, and SO<sub>x</sub> emissions to{" "}
            <span style={{ color: "navy" }}>
               <b>5019.7 tons</b>
            </span>
            .
            <br />
            <br />
            <b>
               What % reduction is this? Round your answer to the nearest whole
               number.
            </b>
         </Typography>
         <Typography
            align="left"
            sx={{ p: 2, pb: 0, fontSize: { sm: "1rem", lg: "1.2rem" } }}
         >
            <i>
               Note that we are only looking at total NO<sub>x</sub>, PM, VOC,
               and SO<sub>x</sub> emissions. PM includes PM<sub>2.5</sub> and PM
               <sub>10</sub>.
            </i>
         </Typography>
         <Box sx={{ fontSize: { sm: "0.9rem", md: "1rem", lg: "1.1rem" } }}>
            <MathJaxContext>
               <MathJax>
                  $$
                  {`\\text{% reduction} = 100\\text{%} \\times \\frac{(V - 5019.7)}{V}`}
                  $$
               </MathJax>
            </MathJaxContext>
            <Typography fontSize="inherit" mb={2}>
               where <i>V</i> = 2020 total NO<sub>x</sub>, PM, VOC, and SO
               <sub>x</sub> emissions
            </Typography>
         </Box>
      </Box>
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
                  backgroundColor:"teal",
                  borderRadius: '8%'
               }}
            />
         }
         position={{ top: "-20vh", left: "40vw" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
