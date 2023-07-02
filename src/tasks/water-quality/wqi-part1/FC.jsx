import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";

const fcValue = 45;

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>Fecal coliforms</b> are bacteria that grow in the intestines of
            warm- and cold-blooded organisms, including humans. The major fecal coliform species
            is
            <i> Escherichia (E.) coli</i>. Fecal coliforms themselves are
            generally not harmful, but their presence in water indicates that
            other pathogenic bacteria and viruses that live in humans' and
            animals' digestive systems may also be present. These waterborne
            microorganisms can cause diseases such as typhoid fever,
            gastroenteritis, and hepatitus A. High levels of fecal coliform
            indicate a concern in water quality.
         </Typography>
      </div>
   );
}

function Page2() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            The fecal coliform was measured to be <b>{fcValue}&nbsp;col&nbsp;/&nbsp;L</b>. 
            <br/><i>0.1&nbsp;L&nbsp;=&nbsp;100&nbsp;mL</i>
         </Typography>
      </div>
   )
}

export default function FC() {
   return (
      <IndicatorInfo
         icon={
            <img
               width="100%"
               alt="fecal coliform"
               src="data:image/png;base64,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"
            ></img>
         }
         position={{ top: "0vh", left: "35vw" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
