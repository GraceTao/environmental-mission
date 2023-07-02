import { useState } from "react";
import {
   Box,
   ClickAwayListener,
   Button,
   IconButton,
   Popper,
   Fade,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

export default function IndicatorInfo({
   icon,
   position,
   anchor,
   page1,
   page2,
}) {
   const [anchorEl, setAnchorEl] = useState(null);
   const [open, setOpen] = useState(false);
   const [openPage2, setOpenPage2] = useState(false);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(!open);
      setOpenPage2(false);
   };

   const handleClose = () => {
      setOpen(false);
      setAnchorEl(null);
      setOpenPage2(false);
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
            }}
         >
            <div style={{overflow: "auto", maxHeight: "50vh"}}>
            {openPage2 ? (
               <Box display="flex" flexDirection="column" alignItems="flex-end">
                  <IconButton onClick={handleClose}>
                     <CloseIcon sx={{fontSize: 35, m: 0}}/>
                  </IconButton>
                  {page2}
                  <IconButton onClick={() => setOpenPage2(false)} disableRipple>
                     <ArrowBackIcon
                        sx={{
                           fontSize: 40,
                           color: "#39555D",
                           mr: 1,
                           "&:hover": { color: "black" },
                        }}
                     />
                  </IconButton>
               </Box>
            ) : (
               <Box display="flex" flexDirection="column" alignItems="flex-end">
                  {page1}
                  <IconButton onClick={() => setOpenPage2(true)} disableRipple>
                     <ArrowForwardIcon
                        sx={{
                           fontSize: 40,
                           color: "#39555D",
                           mr: 1,
                           "&:hover": { color: "black" },
                        }}
                     />
                  </IconButton>
               </Box>
            )}
            </div>
         </Popper>
      </div>
   );
}
