import { useState } from "react";
import { Box, IconButton, Popover, Fade } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function IndicatorInfo({
   icon,
   position,
   anchor,
   page1,
   page2,
}) {
   const [anchorEl, setAnchorEl] = useState(null);
   const [openPage2, setOpenPage2] = useState(false);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
		setAnchorEl(null); // Close the popover
		setOpenPage2(false);
   };

   const open = Boolean(anchorEl);
   const id = open ? "popover-button" : undefined;

   return (
      <div>
         <IconButton onClick={handleClick} sx={{ position: position }}>
            {icon}
         </IconButton>
			
         <Popover
            id={id}
            anchorOrigin={anchor}
            anchorEl={anchorEl}
            transformOrigin={{
               vertical: "bottom",
               horizontal: "center",
            }}
				TransitionComponent={Fade}
    			TransitionProps={{ timeout: 0 }}
            open={open}
            onClose={handleClose}
            sx={{ display: "flex", width: {xs: "95%", sm: "85%", lg: "70%"}, "& .MuiPopover-paper": {
					backgroundColor: "#BBE8F1", // Set your desired background color
				 } }}
         >
            {openPage2 ? (
               <div>
						{page2}
					</div>
            ) : (
               <Box display="flex" flexDirection="column" alignItems="flex-end">
                  {page1}
                  <IconButton onClick={() => setOpenPage2(true)} disableRipple>
                     <ArrowForwardIcon sx={{fontSize: 40, color: "#39555D", mr: 1, "&:hover": {color: "black"}}}/>
                  </IconButton>
               </Box>
            )}
         </Popover>
      </div>
   );
}

