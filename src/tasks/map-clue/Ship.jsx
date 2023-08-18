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

         <Box pb={2} align="center">
            <ShipTable />
         </Box>

         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" }}} align="center">
            <b>What is the ratio of outbound to inbound crude oil tonnage? Round DOWN to the nearest whole number.</b>
            <br />
            <br />
            ratio = X:1
            <br />
         </Typography>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" }}}>
            <a href="https://portofcc.com/wp-content/uploads/Cargo_Tonnage_by_Commodity_2023_05.pdf">Source</a>
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
                  boxShadow: 5,
               }}
            />
         }
         position={{ top: "80vh", left: "120vw" }}
         page1={<Page1 />}
      />
   );
}
