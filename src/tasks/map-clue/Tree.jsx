import ForestRoundedIcon from '@mui/icons-material/ForestRounded';
import IconInfo from "./IconInfo";
import { Typography } from "@mui/material";

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         In their 2022 Environmental Policy, the Port of Corpus Christi commits to 
         voluntarily creating/restoring 50 acres of habitat within the Corpus Christi 
         and Aransas Bay systems every three years.
         <br />
         <br />
         <b>Assuming an equal number of acres is restored every month, how many acres of
          habitat does the Port plan on restoring every six months? Round UP to the 
          nearest whole number. </b>
         </Typography>
      </div>
   );
}


export default function Tree() {
   return (
      <IconInfo
         icon={
            <ForestRoundedIcon
               sx={{
                  color: "#60f81d",
                  width: "100%",
                  height: "100%",
                  boxShadow: 5,
               }}
            />
         }
         position={{top: "50vh", left: "10vw"}}
         page1={<Page1 />}
      />
   );
}
