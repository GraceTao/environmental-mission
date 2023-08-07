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
import StopWatch from "./StopWatch";
import ContactsList from "./ContactsList";

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
                  You have been locked out of the Environmental Portal.
                  Unlock your account now or it will be terminated!
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
      <Dialog
         open={open.PhoneIcon}
         onClose={() => setOpen({ ...open, PhoneIcon: false })}
      >
         <DialogContent
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               backgroundColor: "lightgreen",
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

function ClockContent({ open, setOpen }) {
   const [date, setDate] = useState(new Date());

   useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);

      return () => clearInterval(timer);
   }, [date]);

   return (
      <Dialog
         open={open.WatchLaterIcon}
         onClose={() => setOpen({ ...open, WatchLaterIcon: false })}
      >
         <DialogContent
            sx={{
               backgroundColor: "#EFD5EB",
            }}
         >
            <Typography fontSize="1.2rem" align="center">
               {date.toString().substring(0, 15)}
            </Typography>
            <Typography fontSize="1.3rem" align="center">
               <b>{date.toLocaleTimeString()}</b>
            </Typography>
            <Typography fontSize="1rem" align="center">
               {date.toString().substring(25)}
            </Typography>
            <br></br>
            <hr color="black"></hr>
            <br />
            <StopWatch />
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

   const [showIconContent, setShowIconContent] = useState({
      PhoneIcon: false,
      WatchLaterIcon: false,
      ContactsIcon: false,
   });

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
                              app.path === "/"
                                 ? setShowIconContent({
                                      ...showIconContent,
                                      [app.icon.type.render.displayName]: true,
                                   })
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
               <ContactsList
                  open={showIconContent}
                  setOpen={setShowIconContent}
               />
               <PhoneContent
                  open={showIconContent}
                  setOpen={setShowIconContent}
               />
               <ClockContent
                  open={showIconContent}
                  setOpen={setShowIconContent}
               />
            </div>
         </Box>
      </>
   );
}

export default Home;
