import React, { useState, useEffect } from "react";
import {
   Dialog,
   DialogTitle,
   DialogContent,
   Button,
   IconButton,
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
   const location = useLocation();

   useEffect(() => {
      if (sessionStorage.getItem("seenInstructions" + location.pathname)) {
         setOpen(false);
      }
   },[]);
   
   const handleClose = () => {
      setOpen(false);
      sessionStorage.setItem("seenInstructions" + location.pathname, true);
   };


   
   return (
      <div>
         {name ? <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{      position: "absolute",
            left: position.left,
            top: position.top,
            backgroundColor: "darkblue",
            "&:hover": { backgroundColor: "#0277bd" },
            width: "12vw",
            height: "7vh",}}
         >
            {name}
         </Button> : null}
         
         <Dialog open={open} onClose={handleClose} >
            {title && <Header onClose={handleClose}> {title} </Header>}
            <DialogContent dividers sx={{ backgroundColor: "#CFEFE5", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
               {content}
            </DialogContent>
         </Dialog>
      </div>
   );
}

export default Instructions;
