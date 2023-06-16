import React, { useState, useEffect } from "react";
import {
   ThemeProvider,
   Dialog,
   DialogTitle,
   DialogContent,
   Button,
   Box,
   IconButton,
   Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useLocation} from "react-router-dom";

function Header(props) {
   const { children, onClose, ...other } = props;

   return (
      <DialogTitle sx={{ backgroundColor: "#79C1A1" }}>
         {children}
         {onClose ? (
            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
               }}
            >
               <CloseIcon />
            </IconButton>
         ) : null}
      </DialogTitle>
   );
}

function Instructions({ name, title, content, position }) {
   const [open, setOpen] = useState(true);

   useEffect(() => {
      if (sessionStorage.getItem("seenInstructions")) {
         setOpen(false);
      }
   },[]);
   
   const handleClose = () => {
      setOpen(false);
      sessionStorage.setItem("seenInstructions", true);
   };


   const buttonStyles = {
      position: "absolute",
      left: position.left,
      top: position.top,
      backgroundColor: "darkblue",
      "&:hover": { backgroundColor: "#0277bd" },
      width: "12vw",
      height: "7vh",
   };

   return (
      <div>
         <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={buttonStyles}
         >
            {name}
         </Button>
         <Dialog open={open} onClose={handleClose}>
            <Header onClose={handleClose}> {title} </Header>
            <DialogContent dividers sx={{ backgroundColor: "#CFEFE5" }}>
               {content}
            </DialogContent>
         </Dialog>
      </div>
   );
}

export default Instructions;
