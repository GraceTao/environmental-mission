import React, { useState, useEffect } from "react";
import {
   Box,
   Dialog,
   DialogTitle,
   DialogContent,
   Button,
   IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

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

function Instructions({ name, title, content, style }) {
   const location = useLocation().pathname;
   const [open, setOpen] = useState(sessionStorage.getItem(location) == null);

   const handleClose = () => {
      setOpen(false);
      sessionStorage.setItem(location, true);
   };

   return (
      <div>
         {name ? (
            <Box sx={{ flexGrow: 1 }}>
               <Button
                  onClick={() => setOpen(true)}
                  size="large"
                  sx={style}
               >
                  {name}
               </Button>
            </Box>
         ) : null}

         <Dialog open={open} onClose={handleClose}>
            {title && <Header onClose={handleClose}> {title} </Header>}
            <DialogContent
               dividers
               sx={{
                  backgroundColor: "#CFEFE5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               {content}
            </DialogContent>
         </Dialog>
      </div>
   );
}

export default Instructions;
