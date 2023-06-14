import {
   Alert,
   Box,
   Button,
   Grid,
   IconButton,
   Typography,
   createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Instructions from "../components/Instructions";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";
import ContactsIcon from "@mui/icons-material/Contacts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Link } from "react-router-dom";

function Notification() {
   const [open, setOpen] = useState(true);

   const theme = createTheme();

   return (
      <div
         style={{ display: "flex", justifyContent: "center", marginTop: "0%" }}
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
         {open && (
            <Box sx={{ width: "70%" }}>
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
            </Box>
         )}
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

   const apps = [
      {
         icon: <PhoneIcon sx={{ color: "green", fontSize: "48px" }} />,
         path: "/",
         color: "green",
      },
      {
         icon: <ContactsIcon sx={{ color: "blue", fontSize: "48px" }} />,
         path: "/",
         color: "blue",
      },
      {
         icon: <CalendarMonthIcon sx={{ color: "red", fontSize: "48px" }} />,
         path: "/task1",
         color: "red",
      },
      {
         icon: <AssignmentIcon sx={{ color: "purple", fontSize: "48px" }} />,
         path: "/task1",
         color: "purple",
      },
      {
         icon: <MapIcon sx={{ color: "orange", fontSize: "48px" }} />,
         path: "/",
         color: "orange",
      },
      {
         icon: <MailIcon sx={{ color: "black", fontSize: "48px" }} />,
         path: "/task1",
         color: "black",
      },
      {
         icon: <CollectionsIcon sx={{ color: "brown", fontSize: "48px" }} />,
         path: "/task1",
         color: "brown",
      },
   ];

   return (
      <>
         <Box
            sx={{
               background: "linear-gradient(to bottom, #0093E5, #A8FEDD)",
               height: "100vh"
            }}
         >
            <div>
               <Instructions
                  name={instructions}
                  title={mission}
                  content={purpose}
                  position={{ left: "2%", top: "3%" }}
               ></Instructions>
               <Notification></Notification>
            </div>

            <div>
               <Grid
                  container
                  rowSpacing={{ xs: 5, sm: 7, md: 15 }}
                  columnSpacing={{ xs: 12, sm: 20, md: 30 }}
                  justifyContent="center"
               >
                  {apps.map((app) => (
                     <Grid item mt="5%">
                        <IconButton
                           component={Link}
                           to={app.path}
                           sx={{
                              border: "solid",
                              borderColor: app.color,
                              borderRadius: "40%",
                           }}
                        >
                           {app.icon}
                        </IconButton>
                     </Grid>
                  ))}
               </Grid>
            </div>
         </Box>
      </>
   );
}

export default Home;
