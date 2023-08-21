import React, { useState, useEffect } from "react";
import {
   Box,
   Dialog,
   DialogContentText,
   DialogContent,
   Button,
   useMediaQuery,
   useTheme,
   Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Instructions({
   name,
   chat,
   buttonText,
   instructions,
   showCalendar,
}) {
   const location = useLocation().pathname;
   const [openChat, setOpenChat] = useState(
      sessionStorage.getItem(location) == null
   );

   const [openInstr, setOpenInstr] = useState(
      Boolean(buttonText) ? false : sessionStorage.getItem(location) == null
   );
   const [enableButton, setEnableButton] = useState(false);
   const [enableCalendar, setEnableCalendar] = useState(false);

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

   const style = {
      backgroundColor: "#CFEFE5",
      display: "flex",
      scroll: "auto",
      p: 2,
   };

   return (
      <Box>
         <Box sx={{ flexGrow: 1 }}>
            <Button
               onClick={() => setOpenInstr(true)}
               size="large"
               variant="contained"
               sx={{
                  backgroundColor: "palegreen",
                  color: "#104A30",
                  fontSize: "1.1rem",
                  boxShadow: 2,
                  "&:hover": {
                     backgroundColor: "lightgreen",
                     boxShadow: 5,
                  },
               }}
               style={{ zIndex: 2 }}
            >
               <b>instructions</b>
            </Button>
         </Box>
         <Dialog
            fullWidth
            maxWidth={isSmallScreen ? "sm" : "md"}
            open={openInstr}
            onClose={() => {
               setOpenInstr(!openInstr);
               sessionStorage.setItem(location, true);
            }}
         >
            <Box sx={style}>{instructions}</Box>
         </Dialog>

         {chat && (
            <Dialog
               fullWidth
               maxWidth={isSmallScreen ? "sm" : "md"}
               open={openChat}
            >
               <Box
                  display="flex"
                  flexDirection={isSmallScreen ? "column" : "row"}
                  justifyContent="space-around"
                  alignItems="space-around"
                  sx={style}
               >
                  <video
                     controls
                     autoPlay
                     style={{ width: isSmallScreen ? "90%" : "55%", mb: 20 }}
                     onEnded={() => {
                        showCalendar
                           ? setEnableCalendar(!enableCalendar)
                           : setEnableButton(!enableButton);
                     }}
                  >
                     <source src={chat} alt="text messages" type="video/mp4" />
                     Chat animation between you and {name}
                  </video>

                  <Box
                     display="flex"
                     flexDirection="column"
                     justifyContent="flex-start"
                     alignItems="center"
                     sx={{ mt: isSmallScreen ? 0 : "2%" }}
                  >
                     {!isSmallScreen && (
                        <Typography align="center" ml={1} mb={"10%"}>
                           You may need to scroll down to see the full chat.
                        </Typography>
                     )}
                     {showCalendar && (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <DateCalendar
                              disabled={!enableCalendar}
                              onChange={(date) => {
                                 const selectedDate =
                                    date["$d"].toLocaleDateString();
                                 const today = new Date().toLocaleDateString();
                                 setEnableButton(selectedDate === today);
                              }}
                              sx={{
                                 // ...{
                                 //    width: isSmallScreen ? "70%" : "100%",
                                 //    mb: 2,
                                 // },
                                 ...(enableCalendar && {
                                    backgroundColor: "lightblue",
                                    borderRadius: 2,
                                    ml: "3%",
                                    mr: "3%",
                                    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)",
                                 }),
                              }}
                           />
                        </LocalizationProvider>
                     )}

                     <Button
                        disabled={!enableButton}
                        onClick={() => {
                           setOpenChat(!openChat);
                           setOpenInstr(!openInstr);
                        }}
                        variant="contained"
                        sx={{ boxShadow: 5, mb: 2 }}
                     >
                        {buttonText}
                     </Button>
                  </Box>
               </Box>
            </Dialog>
         )}
      </Box>
   );
}
