import { useState } from "react";
import { Box, Button, IconButton, Popover, Fade, Popper } from "@mui/material";
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
         <Button onClick={handleClick} component="span" sx={{ position: position, width: "5%" }}>
            {icon}
         </Button>
			
         <Popover
            id={id}
            anchorOrigin={anchor}
            anchorEl={anchorEl}
            transformOrigin={{
               vertical: "bottom",
               horizontal: "center",
               display: "flex",
               width: {xs: "95%", sm: "85%", lg: "70%"}
            }}
				TransitionComponent={Fade}
    			TransitionProps={{ timeout: 0 }}
            open={open}
            onClose={handleClose}
            sx={{ display: "flex", width: {xs: "95%", sm: "90%", lg: "80%"}, "& .MuiPopover-paper": {
					backgroundColor: "lightblue", // Set your desired background color
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

