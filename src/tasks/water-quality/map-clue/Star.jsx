import StarIcon from '@mui/icons-material/Star';
import IconInfo from "./IconInfo";
import { Box, Typography } from "@mui/material";

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         In December 2022, the Port of Corpus Christi received funding for the fourth 
         and final part of their ship channel improvement project (CIP). The project will 
         deepen the channel from 47 feet Mean Lower Low Water (MLLW) to 54 feet MLLW 
         and widen the channel to 530 feet.
         <br />
         <br />
         The U.S. environmental law requires any undertaking that may significantly affect 
         the human environment to submit an Environmental Impact Statement (EIS). The CIP, 
         as well as a current proposal to further deepen the channel to ~75 feet MLLW, both 
         require an EIS.
         <br />
         <br />
         Parts of an EIS:
         <br />
         1. An Introduction including a statement of the Purpose and Need of the Proposed Action.
         <br />
         2. A description of the Affected Environment.
         <br />
         3. A Range of Alternatives to the proposed action, such as what would happen if no action was taken or the least environmentally harmful action. This is usually the most scrutinized part.
         <br />
         4. An analysis of the environmental impacts of each of the possible alternatives, including impacts on threatened or endangered species, air and water quality, and historical sites.

         <br />
         <br />
         <b>What part (1, 2, 3, or 4) of an EIS is most considerably reviewed? </b>
         </Typography>
      </div>
   );
}


export default function Star() {
   return (
      <IconInfo
         icon={
            <StarIcon
               sx={{
                  color: "yellow",
                  width: "100%",
                  height: "100%",
               }}
            />
         }
         position={{top: "-7vh", left: "35vw" }}
         page1={<Page1 />}
      />
   );
}
