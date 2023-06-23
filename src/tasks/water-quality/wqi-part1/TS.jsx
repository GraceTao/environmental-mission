import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";

const emptyBeaker = 55;
const waterAdded = 50;
const beakerWithResidue = 55.015;

function Page1() {
   return (
      <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         There are two types of solids in water, dissolved solids (DS) and
         suspended solids. Dissolved solids include calcium, chlorides, nitrate,
         phosphorus, iron, and other ions; suspended solids include all
         particulate matter that makes water turbid.
         <br />
         <br />
         Organisms living in water containing a very low concentration of DS
         will swell up because water moves into their cells, which have a higher
         concentration of DS. Conversely, organisms in water with a high
         concentration of DS will shrink as water moves out of their cells.
         Organisms may not be able to adapt to this change in cell density.
         <br />
         <br />
         A high concentration of suspended solids can increase the toxicity of
         water and clog pipes and drains.
         <br />
         <br />
         The <b>total solids</b> of a body of water is the sum of its DS and
         suspended solids.
      </Typography>
   );
}

function Page2() {
   return (
      <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         Total solids are measured by weighing the amount of solids present in a
         water sample. First, the water sample is added to a beaker. The water is 
         then evaporated and the remaining residue inside the beaker is dried and 
         weighed.<br/><br/>
         (A) Mass of empty beaker = {emptyBeaker}&nbsp;g <br />
         (B) Volume of water added = {waterAdded}&nbsp;mL <br />
         (C) Mass of beaker with residue = {beakerWithResidue}&nbsp;g <br /><br />
         <Typography fontFamily="cambria math" fontSize="1.2rem" align="center">
            total solids (g / mL) = (C &minus; A) / B
         </Typography>
         <br/>
         Now convert g / mL to the correct units.<br/>
         <i>1&nbsp;g&nbsp;=&nbsp;1000&nbsp;mg, 1&nbsp;L&nbsp;=&nbsp;1000&nbsp;mL</i>
      </Typography>
   );
}

export default function TS() {
   return (
      <IndicatorInfo
         icon={
            <img
               width="100%"
               alt="total solids"
               src="data:image/png;base64,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"
            ></img>
         }
         position={{ top: "-20vh", left: "42vw" }}
         anchor={{ vertical: "bottom", horizontal: "center" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
