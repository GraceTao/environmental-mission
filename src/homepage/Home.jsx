import {
   Alert,
   AppBar,
   Box,
   Button,
   Grid,
   IconButton,
   Toolbar,
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
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Link } from "react-router-dom";

function Notification() {
   const [open, setOpen] = useState(true);

   const theme = createTheme();

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0%"
         }}
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

// function TopBar({items}) {
//    return (
//    <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//          <Toolbar style={{margin: 5}}>
//             <Instructions name={instructions} title={mission} content={purpose} position={{ left: "2%", top: "3%" }}></Instructions>,
//          <Notification></Notification>
//             {/* {items.map((item) => (
//                item
//             ))} */}
//          </Toolbar>
//       </AppBar>
//    </Box>
//    )
// }

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
         icon: PhoneIcon,
         path: "/",
         color: "green",
      },
      {
         icon: ContactsIcon,
         path: "/",
         color: "blue",
      },
      {
         icon: CalendarMonthIcon,
         path: "/wqi",
         color: "red",
      },
      {
         icon: AssignmentIcon,
         path: "/",
         color: "purple",
      },
      {
         icon: MapIcon,
         path: "/",
         color: "brown",
      },
      {
         icon: MailIcon,
         path: "/",
         color: "darkred",
      },
      {
         icon: CollectionsIcon,
         path: "/",
         color: "orange",
      },
      {
         icon: CoPresentIcon,
         path: "/",
         color: "black",
      },
   ];

   // const topBarItems = 
   //    [
   //       <Instructions name={instructions} title={mission} content={purpose} position={{ left: "2%", top: "3%" }}></Instructions>,
   //       <Notification></Notification>
   //    ]

   return (
      <>
         <Box
            sx={{
               background: "linear-gradient(to bottom, #0093E5, #A8FEDD)",
               height: "100vh",
               overflow: "auto",
            }}
         >
            <div>
               <Instructions name={instructions} title={mission} content={purpose} position={{ left: "2%", top: "15px" }}></Instructions>
               <Notification></Notification>
            </div>

            <div>
               <Grid
                  container
                  mt="50px"
                  rowSpacing={{ xs: 4, sm: 5, md: 12, lg: 18 }}
                  columnSpacing={{ xs: 6, sm: 15, md: 20, lg: 25 }}
                  justifyContent="center"
                  alignItems="center"
               >
                  {apps.map((app) => (
                     <Grid item mt="5%">
                        <IconButton
                           component={Link}
                           to={app.path}
                           sx={{
                              border: "solid",
                              borderColor: app.color,
                              borderRadius: "45%",
                              "&:hover": { backgroundColor: "lightgray"},
                              width: {
                                 xs: "85px",
                                 sm: "90px",
                                 md: "100px",
                                 lg: "100px",
                              },
                              height: {
                                 xs: "85px",
                                 sm: "90px",
                                 md: "100px",
                                 lg: "100px",
                              },
                           }}
                        >
                           <app.icon sx={{fontSize: "60px", color: app.color}}></app.icon>
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
