import React, { useState, useEffect } from "react";
import {
   Box,
   Dialog,
   DialogContentText,
   DialogContent,
   Button,
   useMediaQuery,
   useTheme,
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
   const [openInstr, setOpenInstr] = useState(false);
   const [enableButton, setEnableButton] = useState(false);
   const [enableCalendar, setEnableCalendar] = useState(false);

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

   const style = {
      backgroundColor: "#CFEFE5",
      display: "flex",
      overflow: "auto",
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
                  color: "darkgreen",
                  fontSize: "1.1rem",
                  boxShadow: 2,
                  "&:hover": {
                     backgroundColor: "lightgreen",
                     boxShadow: 5
                  }
               }}
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
            <DialogContent sx={style}>
               <DialogContentText color="black">
                  {instructions}
               </DialogContentText>
            </DialogContent>
         </Dialog>

         <Dialog
            fullWidth
            maxWidth={isSmallScreen ? "sm" : "md"}
            open={openChat}
         >
            <DialogContent sx={style}>
               <Box
                  display="flex"
                  flexDirection={isSmallScreen ? "column" : "row"}
                  justifyContent="space-around"
               >
                  <video
                     controls
                     autoPlay
                     style={{ width: isSmallScreen ? "90%" : "55%" }}
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
                     justifyContent="space-around"
                     alignItems="center"
                  >
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
                                 ...{
                                    width: isSmallScreen ? "70%" : "100%",
                                    mb: 2,
                                 },
                                 ...(enableCalendar && {
                                    backgroundColor: "lightblue",
                                    borderRadius: 2,
                                    pl: "3%",
                                    pr: "3%",
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
            </DialogContent>
         </Dialog>
      </Box>
   );
}

// function Instructions({ name, title, content, style }) {
//    const location = useLocation().pathname;
//    const [open, setOpen] = useState(sessionStorage.getItem(location) == null);

//    const theme = useTheme();
//    const fullScreen = useMediaQuery(theme.breakpoints.up("sm"));

//    const handleClose = () => {
//       setOpen(false);
//       sessionStorage.setItem(location, true);
//    };

//    return (
//       <div>
//          {name && (
//             <Box sx={{ flexGrow: 1 }}>
//                <Button onClick={() => setOpen(true)} size="large" sx={style}>
//                   {name}
//                </Button>
//             </Box>
//          )}

//          <Dialog
//             open={open}
//             onClose={handleClose}
//             fullWidth
//             maxWidth={fullScreen ? "md" : "sm"}
//          >
//             {title && (
//                <DialogTitle
//                   onClose={handleClose}
//                   sx={{ backgroundColor: "#79C1A1" }}
//                >
//                   {title}
//                </DialogTitle>
//             )}

//             <div style={{ maxHeight: "400px", overflow: "auto" }}>
//                <DialogContent
//                   dividers
//                   sx={{
//                      backgroundColor: "#CFEFE5",
//                      display: "flex",
//                   }}
//                >
//                   {content}
//                </DialogContent>
//             </div>
//          </Dialog>
//       </div>
//    );
// }

// export default Instructions;
