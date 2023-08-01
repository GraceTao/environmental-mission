import { useState } from "react";
import { Box, Button, IconButton, Popper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function IconInfo({
   icon,
   position,
   page1
}) {
   const [anchorEl, setAnchorEl] = useState(null);
   const [open, setOpen] = useState(false);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(!open);
   };

   const handleClose = () => {
      setOpen(false);
      setAnchorEl(null);
   };

   return (
      <div>
         <Button
            onClick={handleClick}
            component="span"
            sx={{ position: position, width: "5%" }}
         >
            {icon}
         </Button>

         <Popper
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
               backgroundColor: "lightsteelblue",
               // display: "flex",
               maxWidth: { xs: "80%", sm: "70%", lg: "60%" },
               borderRadius: 3,
               boxShadow: 6
            }}
         >
         </Popper>
      </div>
   );
}
