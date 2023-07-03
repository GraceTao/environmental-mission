import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";
import {measured} from "../solns";

function Page1() {
   return (
      <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         Nitrogen and phosphorus, specifically{" "}
         <b>
            nitrates (NO<sub>3</sub>
            <sup>&minus;</sup>)
         </b>{" "}
         and <b>total phosphates</b>, are essential plant nutrients. When
         nitrogen and phosphorus are readily available in the water, aquatic
         plant growth increases rapidly. More plants (most notably algae) use up
         more oxygen, leading to eutrophication and hypoxic conditions (read the
         O<sub>2</sub> popover).
         <br />
         <br />
         Small amounts of nitrates and phosphates are present naturally in
         water, but lots of it comes from human activities, such as wastewater
         treatment plants and runoff from fertilizers, animal farms, and sewage.
         Construction and mining can also cause soil containing phosphate to
         erode into the water.
      </Typography>
   );
}

function Page2() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            The total phosphate and nitrate levels were measured to be<br/>
            <b>{measured.Phosphates}&nbsp;ng&nbsp;/&nbsp;mL</b> and{" "}
            <b> {measured.Nitrates}&nbsp;&#181;g&nbsp;/&nbsp;fl&nbsp;oz</b>
            , respectively.
            <br /><br />
            
            <Typography fontSize="1rem">
               <i>1&nbsp;mg = 1000&nbsp;&#181;g</i>
               <br />
               <i>1&nbsp;&#181;g = 1000&nbsp;ng</i>
               <br />
               <i>1&nbsp;mL = 0.034&nbsp;fl&nbsp;oz</i>
               <br />
               <i>1&nbsp;L&nbsp;=&nbsp;1000&nbsp;mL</i>
               <br />
               <b>1 mg / L = 1 ppm</b>
            </Typography>
         </Typography>
      </div>
   );
}

export default function NitratesPhosphates() {
   return (
      <IndicatorInfo
         icon={
            <img
               width="100%"
               alt="nitrates and phosphates"
               src="data:image/png;base64,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"
            ></img>
         }
         position={{ top: "-32vh", left: "70vw" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
