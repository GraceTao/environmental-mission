import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import IconInfo from "./IconInfo";
import { Box, Typography } from "@mui/material";
import ShipTable from "./ShipTable"

function Page1() {
   return (
      <div>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            Look at the table below
         </Typography>

         <Box width="70%" pb={2}>
            <ShipTable />
         </Box>

         <Typography sx={{ p: 2, fontSize: { sm: "3rem", lg: "3.2rem" } }}>
            What is the ratio of outbound to inbound crude oil tonnage? Round DOWN to the nearest whole number.
            <br />
            <br />
            ratio = X:1
         </Typography>
         <Typography sx={{ p: 2, fontSize: { sm: "0.8rem", lg: "1rem" } }}>
            source: https://portofcc.com/wp-content/uploads/Cargo_Tonnage_by_Commodity_2023_05.pdf
         </Typography>
      </div>
   );
}

export default function Ship() {
   return (
      <IconInfo
         icon={
            <DirectionsBoatFilledIcon
               sx={{
                  color: "blue",
                  width: "100%",
                  height: "100%",
               }}
            />
         }
         position={{ top: "-36vh", left: "48vw" }}
         page1={<Page1 />}
      />
   );
}
