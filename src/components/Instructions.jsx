import React, { useState } from "react";
import {
   createTheme,
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

function Header(props) {
   const { children, onClose, ...other } = props;

   return (
      <DialogTitle sx={{ backgroundColor: "#B5E9D9" }}>
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
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const theme = createTheme();
   const buttonStyles = {
      position: "absolute",
      left: position.left,
      top: position.top,
      backgroundColor: "#0277bd",
      "&:hover": { backgroundColor: "#0277bd"},
      width: "12vw",
      height: "7vh",
   };

   return (
      <div>
         <Button variant="contained" onClick={handleOpen} sx={buttonStyles}>
            {name}
         </Button>
         <Dialog open={open} onClose={handleClose}>
            <Header onClose={handleClose}> {title} </Header>
            <DialogContent dividers sx={{ backgroundColor: "#CFEFE5" }}> {content} </DialogContent>
         </Dialog>
      </div>

   );
}

export default Instructions;
