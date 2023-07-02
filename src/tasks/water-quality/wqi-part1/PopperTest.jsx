import React, { useState } from "react";
import {
   Box,
   ClickAwayListener,
   Popper,
   Button,
   Typography,
} from "@mui/material";

function Page1() {
   return (
      <Box>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>Dissolved oxygen (DO)</b> is the amount of oxygen (O<sub>2</sub>)
            present in the water. Aquatic organisms need this oxygen to survive.
            Nutrient-rich waters stimulate algal blooms, which is a rapid
            increase in algae growth. Microorganisms use oxygen to decompose
            this algae, which depletes the water of oxygen, lowering DO levels.
            This can lead to eutrophication, which is a process whereby aquatic
            organisms die off due to lack of oxygen. Hypoxic areas have low
            levels of oxygen and are considered “dead zones” since they support
            very little life. Too little or too much DO can harm water quality.
            <br />
            <br />
            The <b>biochemical oxygen demand (BOD)</b> measures the amount of
            oxygen consumed by microorganisms to decompose organic matter. The
            BOD5 is the five-day oxygen consumption. BOD5 is calculated as the
            difference between the DO of a sample of the water taken immediately
            and the DO of a sample incubated in the dark at 20&deg;C for 5 days.
         </Typography>
      </Box>
   );
}

function Page2() {
   const pHColors = [
      { color: "darkred", value: 0 },
      { color: "red", value: 1 },
      { color: "darkorange", value: 2 },
      { color: "orange", value: 3 },
      { color: "#d4c84a", value: 4 },
      { color: "#A6B93C ", value: 5 },
      { color: "#75A439 ", value: 6 },
      { color: "#46A439 ", value: 7 },
      { color: "#328541 ", value: 8 },
      { color: "#2E7042 ", value: 9 },
      { color: "#265946 ", value: 10 },
      { color: "#235243 ", value: 11 },
      { color: "#234752 ", value: 12 },
      { color: "#2A3F61 ", value: 13 },
      { color: "#2A2352 ", value: 14 },
   ];
   return (
      <Box>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            A pH test strip is a simple way to measure pH. The strip's color
            will change when dipped in water. Below is the pH value
            corresponding to the color. The strip used to test this water is
            also provided. <b>Record the pH of the water.</b>
         </Typography>
         <Box
            display="flex"
            flexDirection="row"
            p={2}
            justifyContent="space-evenly"
         >
            <Box display="flex" flexDirection="column">
               <Typography>pH strip before use: </Typography>
               <Box
                  sx={{ backgroundColor: "#EEE141 ", width: 30, height: 130 }}
               ></Box>
            </Box>
            <Box display="flex" flexDirection="column">
               <Typography>pH strip after use: </Typography>
               <Box sx={{ backgroundColor: "#469e3a", width: 30, height: 130 }}>
                  <div>
                     <Box
                        sx={{
                           backgroundColor: "#EEE141 ",
                           width: 30,
                           height: 90,
                        }}
                     ></Box>
                  </div>
               </Box>
            </Box>
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center">
            <Typography align="center" pt={2}>
               strip bottom color and pH value
            </Typography>
            <Box alignItems="center">
               <Box display="flex" flexDirection="row" p={2} sx={{ pt: 0 }}>
                  {pHColors.map((pH) => (
                     <Box display="flex" flexDirection="column" key={pH.value}>
                        <Box
                           sx={{
                              backgroundColor: pH.color,
                              width: 30,
                              height: 45,
                           }}
                        ></Box>
                        <Typography align="center">{pH.value}</Typography>
                     </Box>
                  ))}
               </Box>
            </Box>
         </Box>
      </Box>
   );
}

function PopperTest() {
   const [anchorEl, setAnchorEl] = useState(null);
   const [openPage2, setOpenPage2] = useState(false);
   const [open, setOpen] = useState(false);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(!open);
   };
   const handleClose = () => {
      setOpen(false);
      setOpenPage2(false);
      setAnchorEl(null);
   };

   return (
      <div>
         <ClickAwayListener onClickAway={handleClose}>
            <div>
               <Button onClick={handleClick} variant="contained">
                  Click me
               </Button>
               <Popper
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  sx={{ backgroundColor: "white", maxWidth: 600 }}
               >
                  {openPage2 ? (
                     <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                     >
                        <Page2></Page2>
                        <Button onClick={() => setOpenPage2(false)}>
                           back
                        </Button>
                     </Box>
                  ) : (
                     <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                     >
                        <Page1></Page1>
                        <Button onClick={() => setOpenPage2(true)}>next</Button>
                     </Box>
                  )}
               </Popper>
            </div>
         </ClickAwayListener>
      </div>
   );
}

export default PopperTest;
