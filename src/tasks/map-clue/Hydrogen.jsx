import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import IconInfo from "./IconInfo";
import { Typography } from "@mui/material";

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }} align="center">
         In early 2023, the Port of Corpus Christi Horizons Clean Hydrogen Hub (HCH2) 
         and Trans Permian (Trans Permian) H2Hub announced that they would be merging 
         into a single hub. 
         <br />
         <br />
         This proposed hub will complete about <b>25</b> different clean hydrogen 
         production projects, including hydrogen fuel cell bus manufacturing and hydrogen 
         re-fueling stations.
         </Typography>
      </div>
   );
}


export default function Hydrogen() {
   return (
      <IconInfo
         icon={
            <EnergySavingsLeafIcon
               sx={{
                  color: "#60f81d",
                  width: "100%",
                  height: "100%",
                  boxShadow: 5,
                  backgroundColor:"green",
                  borderRadius: '8%'
               }}
            />
         }
         position={{ top: "15vh", left: "85vw" }}
         page1={<Page1 />}
      />
   );
}
