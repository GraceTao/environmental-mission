import { useState } from "react";
import { Box, Button, IconButton, Popper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

export default function IndicatorInfo({ icon, position, page1, page2 }) {
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
               maxWidth: { xs: "80%", sm: "70%", lg: "60%" },
               borderRadius: 3,
               boxShadow: 6,
            }}
         >
            <div style={{ overflow: "auto", maxHeight: "50vh" }}>
               {openPage2 ? (
                  <Box>
                     <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                     >
                        <IconButton
                           onClick={() => setOpenPage2(false)}
                           disableRipple
                        >
                           <ArrowBackIcon
                              sx={{
                                 fontSize: 40,
                                 color: "#39555D",

                                 "&:hover": { color: "black" },
                              }}
                           />
                        </IconButton>
                        <Typography pt={2} pl={2} pb={0}>
                           <i>You may need to scroll down</i>
                        </Typography>
                        <IconButton onClick={handleClose}>
                           <CloseIcon sx={{ fontSize: 35, m: 0 }} />
                        </IconButton>
                     </Box>

                     {page2}
                  </Box>
               ) : (
                  <Box display="flex" flexDirection="column">
                     <Typography pt={2} pl={2} pb={0}>
                        <i>You may need to scroll down</i>
                     </Typography>
                     {page1}
                     <Box display="flex" justifyContent="end">
                        <IconButton
                           onClick={() => setOpenPage2(true)}
                           disableRipple
                        >
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
                  </Box>
               )}
            </div>
         </Popper>
      </div>
   );
}
