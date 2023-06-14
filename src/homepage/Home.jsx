import {
   Alert,
   Box,
   Button,
   Collapse,
   Grid,
   IconButton,
   Typography,
   createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Instructions from "../components/Instructions";
import PhoneIcon from "@mui/icons-material/Phone";

function Notification() {
   const [open, setOpen] = useState(true);

   const theme = createTheme();

   return (
      <div
         style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}
      >
         {!open && (
            <Button
               variant="contained"
               onClick={() => {
                  setOpen(true);
               }}
            >
               notification
            </Button>
         )}
         {
            open && (
               // <Box sx={{ width: "80%" }}>
               <Alert
                  severity="warning"
                  action={
                     <Button variant="outlined" onClick={() => setOpen(false)}>
                        close
                     </Button>
                  }
                  sx={{
                     [theme.breakpoints.up("sm")]: {
                        fontSize: "1rem",
                     },
                  }}
               >
                  You have been locked out of your TCC Environmental Solutions
                  proposal submission portal.
                  <br />
                  Unlock your password now, or your account will be terminated!
               </Alert>
            )
            // </Box>
         }
      </div>
   );
}

function Home() {
   const purpose = (
      <Typography sx={{ fontSize: "1.2rem" }}>
         You are an environmental compliance specialist working alongside your
         peers to analyze the Port of Corpus Christi environment. You’re
         specifically interested in XYZ watershed and its surrounding buildings.
         You will be presenting a report to your manager on your findings and
         any recommendations for new environmental regulations.
      </Typography>
   );

   const mission = (
      <Typography
         sx={{ color: "#1D8558", fontSize: "1.5rem", fontWeight: 700 }}
      >
         Online Escape Room: Environmental Mission
      </Typography>
   );

   const instructions = (
      <Typography variant="button" sx={{ fontSize: "1.2vw" }}>
         Instructions
      </Typography>
   );

   return (
      <>
         <div>
            <Instructions
               name={instructions}
               title={mission}
               content={purpose}
               position={{ left: "2%", top: "2%" }}
            ></Instructions>
            <Notification></Notification>
         </div>
         <div>
            <Grid
               container
               mt={3}
               rowSpacing={{ xs: 5, sm: 10, md: 20 }}
               columnSpacing={{ xs: 12, sm: 20, md: 30 }}
               justifyContent="center"
            >
               {Array.from(Array(9)).map((_, index) => (
                  <Grid item>
                     <IconButton>
                        <PhoneIcon sx={{ fontSize: "48px", color: "green" }} />
                     </IconButton>
                  </Grid>
               ))}
            </Grid>
         </div>
      </>
   );
}

export default Home;
