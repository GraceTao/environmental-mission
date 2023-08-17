import {
   Box,
   Dialog,
   DialogContent,
   DialogTitle,
   Grid,
   IconButton,
   Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { appIcons } from "./app-icons";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import { Link } from "react-router-dom";
import logo from "../components/PortCC-logo-horizontal-white.png";
import StopWatch from "./StopWatch";
import ContactsList from "./ContactsList";
import Notification from "./Notification";
import UserDataForm from "./user-info/UserDataForm";
import Instructions from "../components/Instructions";

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
         open={open.ClockIcon}
         onClose={() => setOpen({ ...open, ClockIcon: false })}
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
         <Typography
            sx={{
               color: "#104A30",
               fontSize: "1.5rem",
               fontWeight: 700,
               mb: 3,
            }}
         >
            Online Escape Room: Environmental Mission
         </Typography>
         <Typography sx={{ fontSize: "1.2rem" }} color="darkgreen">
            You are an{" "}
            <i>
               <b>environmental compliance specialist</b>
            </i>{" "}
            working alongside your peers to analyze the Port of Corpus Christi
            environment. You’re specifically interested in the local watershed
            and its surrounding buildings. You will be presenting a report to
            your manager on the status and actions of the Port of Corpus Christi
            with respect to environmental health.
            <br />
            <br />
         </Typography>
         <Typography variant="body1" color="darkred">
            Read the notification!
         </Typography>
      </div>
   );

   const [showIconContent, setShowIconContent] = useState({
      PhoneIcon: false,
      ClockIcon: false,
      ContactsIcon: false,
   });

   const [showUserForm, setShowUserForm] = useState(
      sessionStorage.getItem("submittedStartForm") == null
   );

   useEffect(() => {
      const storedAttempts = JSON.parse(sessionStorage.getItem("attempts"));
      if (!storedAttempts) {
         const initialAttempts = {
            wqiAttempts: 0,
            emailAttempts: 0,
            inspectionAttempts: 0,
            mapAttempts: 0,
            passwordAttempts: 0,
         };

         sessionStorage.setItem("attempts", JSON.stringify(initialAttempts));
      }
   }, []);

   return (
      <>
         <Box
            sx={{
               background: "linear-gradient(to bottom, #0093E5, #A8FEDD)",
               height: "100vh",
               overflow: "auto",
            }}
         >
            {showUserForm ? (
               <Dialog open={true}>
                  <DialogContent>
                     <UserDataForm
                        open={showUserForm}
                        setOpen={setShowUserForm}
                     />
                  </DialogContent>
               </Dialog>
            ) : (
               <div style={{ position: "relative" }}>
                  <img
                     src={logo}
                     alt="Port of Corpus Christi Logo"
                     width="20%"
                     style={{
                        position: "absolute",
                        left: 5,
                        minWidth: "250px",
                     }}
                  />
                  <Notification />
                  <Box position="absolute" right={10}>
                     <Instructions instructions={purpose} />
                  </Box>

                  <Grid
                     container
                     rowSpacing={{ xs: 8, sm: 10, md: 12, lg: 18 }}
                     columnSpacing={{ xs: 15, sm: 22, md: 25, lg: 25 }}
                     justifyContent="center"
                     alignItems="center"
                     sx={{pt: {xs: "16%", sm: "14%"}, pl: "4%", pr: "4%"}}
                  >
                     {appIcons.map((app) => (
                        <Grid item key={app.name}>
                           <IconButton
                              component={app.path !== "/" ? Link : null}
                              to={
                                 app.path !== "/"
                                    ? app.name === "CalendarIcon" &&
                                      sessionStorage.getItem(
                                         "displayWQIClue"
                                      ) == "true"
                                       ? "/wqi-p3"
                                       : app.path
                                    : null
                              }
                              onClick={() => {
                                 app.path === "/" &&
                                    setShowIconContent({
                                       ...showIconContent,
                                       [app.name]: !showIconContent[app.name],
                                    });
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
                                    xs: "90px",
                                    sm: "95px",
                                    md: "100px",
                                    lg: "105px",
                                 },
                                 height: {
                                    xs: "90px",
                                    sm: "95px",
                                    md: "100px",
                                    lg: "105px",
                                 },
                              }}
                           >
                              <app.icon
                                 sx={{ fontSize: "65px", color: app.color }}
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
            )}
         </Box>
      </>
   );
}

export default Home;
