import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import IconInfo from "./IconInfo";
import { Box, Typography } from "@mui/material";
import ShipTable from "./ShipTable";

function Page1() {
   return (
      <Box align="center">
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }} align="left">
            The table below shows the amount of{" "}
            <a href="https://portofcc.com/wp-content/uploads/Cargo_Tonnage_by_Commodity_2023_05.pdf" target="_blank">
               inbound and outbound cargo
            </a>{" "}from the Port of Corpus Christi.
         </Typography>

         <Box pb={2} sx={{width: {xs: "95%", sm: "85%", md: "80%", lg: "70%"}}}>
            <ShipTable />
         </Box>

         <Typography
            sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}
            align="center"
         >
            <b>
               What is the ratio of outbound to inbound crude oil tonnage? Round
               DOWN to the nearest whole number.
            </b>
            <br />
            <br />
            ratio = (<i>X</i> outbound tons) : (1 inbound ton)
            <br />
         </Typography>
      </Box>
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
