import {
   Alert,
   Box,
   Button,
   Dialog,
   DialogContent,
   Grid,
   IconButton,
   Tooltip,
   Typography,
   createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Instructions from "../components/Instructions";
import { appIcons } from "./app-icons";
import WarningIcon from "@mui/icons-material/Warning";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import { Link } from "react-router-dom";
import logo from "../components/PortCC-logo-horizontal-white.png";

function Notification() {
   const openNotification = sessionStorage.getItem("openNotification");
   const [open, setOpen] = useState(openNotification == null);

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
                     <Button
                        variant="outlined"
                        onClick={() => {
                           setOpen(false);
                           sessionStorage.setItem("openNotification", false);
                        }}
                     >
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
            <Tooltip title="Notification">
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

function PhoneContent({ open, setOpen }) {
   return (
      <Dialog open={open} onClose={() => setOpen(!open)}>
         <DialogContent
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               background: "radial-gradient(#E7A388,#F37542)"
            }}
         >
            <Typography fontSize="1.2rem">
               Sorry, this area has <b>no service</b>!
            </Typography>
            <br></br>
            <PhoneDisabledIcon
               sx={{ transform: "rotate(90deg)", fontSize: "45px" }}
            />
            <br></br>
            <Typography fontSize="1.2rem">Please try again later.</Typography>
         </DialogContent>
      </Dialog>
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

   const [openPhone, setOpenPhone] = useState(false);

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
                  src={logo}
                  alt="Port of Corpus Christi Logo"
                  width="300px"
                  style={{ position: "absolute", left: 5 }}
               />
               <Notification />
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
                  rowSpacing={{ xs: 8, sm: 10, md: 12, lg: 18 }}
                  columnSpacing={{ xs: 15, sm: 20, md: 20, lg: 25 }}
                  justifyContent="center"
                  alignItems="center"
                  style={{ marginTop: "2%", marginBottom: "2%" }}
               >
                  {appIcons.map((app) => (
                     <Grid item key={app.color}>
                        <IconButton
                           component={app.path !== "/" ? Link : null}
                           to={app.path !== "/" ? app.path : null}
                           onClick={() => {
                              app.icon.type.render.displayName == "PhoneIcon"
                                 ? setOpenPhone(!openPhone)
                                 : null;
                           }}
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
               <PhoneContent open={openPhone} setOpen={setOpenPhone}/>
            </div>
         </Box>
      </>
   );
}

export default Home;
