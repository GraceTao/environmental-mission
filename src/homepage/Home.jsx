import {
   Alert,
   Box,
   Button,
   Grid,
   IconButton,
   Tooltip,
   Typography,
   createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Instructions from "../components/Instructions";
import {appIcons} from "./app-icons";
import WarningIcon from "@mui/icons-material/Warning";
import { Link } from "react-router-dom";

function Notification() {
   const [open, setOpen] = useState(true);

   const theme = createTheme();

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
         }}
      >
         {open ? (
            <Box
               sx={{ width: "70%" }}
               style={{ position: "absolute", zIndex: 1 }}
            >
               <Alert
                  severity="warning"
                  action={
                     <Button variant="outlined" onClick={() => setOpen(false)}>
                        close
                     </Button>
                  }
                  sx={{
                     [theme.breakpoints.up("sm")]: {
                        fontSize: "1.1rem",
                     },
                  }}
               >
                  You have been locked out of your TCC Environmental Solutions
                  proposal submission portal.
                  <br />
                  Unlock your password now, or your account will be terminated!
               </Alert>
            </Box>
         ) : (
            <Tooltip title="open me">
               <IconButton
                  onClick={() => {
                     setOpen(true);
                  }}
                  style={{ position: "absolute", zIndex: 1 }}
               >
                  <WarningIcon
                     sx={{ color: "#CAC653", fontSize: 50 }}
                  ></WarningIcon>
               </IconButton>
            </Tooltip>
         )}
      </div>
   );
}

function Home() {
   const purpose = (
      <div>
         <Typography sx={{ fontSize: "1.2rem" }} color="darkgreen">
            You are an environmental compliance specialist working alongside
            your peers to analyze the Port of Corpus Christi environment. You’re
            specifically interested in XYZ watershed and its surrounding
            buildings. You will be presenting a report to your manager on your
            findings and any recommendations for new environmental regulations.
            <br />
            <br />
         </Typography>
         <Typography variant="body1" color="darkred">
            Read the notification!
         </Typography>
      </div>
   );

   const mission = (
      <Typography
         sx={{ color: "#104A30", fontSize: "1.5rem", fontWeight: 700 }}
      >
         Online Escape Room: Environmental Mission
      </Typography>
   );

  

   return (
      <>
         <Box
            sx={{
               background: "linear-gradient(to bottom, #0093E5, #A8FEDD)",
               height: "100vh",
               overflow: "auto",
            }}
         >
            <div style={{ position: "relative" }}>
               <img
                  src="https://portofcc.com/wp-content/uploads/PortCC-2016-logo-hor.png"
                  alt="Port of Corpus Christi Logo"
                  width="300px"
                  style={{ position: "absolute", left: 5 }}
               />
               <Notification></Notification>
               <Instructions
                  name={<Typography color="white">instructions</Typography>}
                  title={mission}
                  content={purpose}
                  style={{
                     left: "87%",
                     position: "sticky",
                     boxShadow: 2,
                     backgroundColor: "#356696",
                     "&:hover": {
                        backgroundColor: "#294E72",
                        boxShadow: 3,
                     },
                  }}
               ></Instructions>
               <Grid
                  container
                  rowSpacing={{ xs: 4, sm: 5, md: 12, lg: 18 }}
                  columnSpacing={{ xs: 6, sm: 15, md: 20, lg: 25 }}
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginTop: "2%", marginBottom: "2%" }}
               >
                  {appIcons().map((app, index) => (
                     <Grid item key={index}>
                        <IconButton
                           component={Link}
                           to={app.path}
                           sx={{
                              border: "solid",
                              borderColor: app.color,
                              borderRadius: "45%",
                              "&:hover": {
                                 backgroundColor: "#FCECFC70",
                                 boxShadow: 7,
                              },
                              boxShadow: 2,
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
                           <app.icon
                              sx={{ fontSize: "60px", color: app.color }}
                           ></app.icon>
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
