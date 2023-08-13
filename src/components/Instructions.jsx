import React, { useState, useEffect } from "react";
import {
   Box,
   Dialog,
   DialogTitle,
   DialogContent,
   Button,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import { useLocation } from "react-router-dom";

function Instructions({ name, title, content, style }) {
   const location = useLocation().pathname;
   const [open, setOpen] = useState(sessionStorage.getItem(location) == null);

   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.up("sm"));

   const handleClose = () => {
      setOpen(false);
      sessionStorage.setItem(location, true);
   };

   return (
      <div>
         {name && (
            <Box sx={{ flexGrow: 1 }}>
               <Button onClick={() => setOpen(true)} size="large" sx={style}>
                  {name}
               </Button>
            </Box>
         )}

         <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={fullScreen ? "md" : "sm"}
         >
            {title && (
               <DialogTitle
                  onClose={handleClose}
                  sx={{ backgroundColor: "#79C1A1" }}
               >
                  {title}
               </DialogTitle>
            )}

            <div style={{ maxHeight: "400px", overflow: "auto" }}>
               <DialogContent
                  dividers
                  sx={{
                     backgroundColor: "#CFEFE5",
                     display: "flex",
                  }}
               >
                  {content}
               </DialogContent>
            </div>
         </Dialog>
      </div>
   );
}

export default Instructions;
