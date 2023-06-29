import { Box, Button, Typography, Popper } from "@mui/material";
import { useState } from "react";

export default function SampleUnitConversion() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (e) => {
      setAnchorEl(anchorEl ? null : e.currentTarget);
   };

   const open = Boolean(anchorEl);
   const id = open ? "image-popper" : undefined;

   return (
      <div>
         <Button variant="contained" onClick={handleClick} sx={{ mt: 1, mr: 2 }}>
            sample unit conversion
         </Button>

         <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            sx={{
               backgroundColor: "white",
               maxWidth: {xs: "80%", sm: "70%", md: "50%", lg: "40%"}, // Adjust the maximum width as needed
               width: "auto",
               maxHeight: "80vh", // Adjust the maximum height as needed
               overflow: "auto",
               whiteSpace: "pre-wrap",
               wordWrap: "break-word",
            }}
            placement="bottom"
         >
            
               <Typography fontSize={{ xs: "0.9rem", md: "1rem" }} p={2}>
                  The goal is to use{" "}
                  <span style={{ color: "blue" }}>
                     <b>intermediate units</b>
                  </span>{" "}
                  to convert between the{" "}
                  <span style={{ color: "green" }}>
                     <b>initial</b>
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "magenta" }}>
                     <b>final</b>
                  </span>{" "}
                  units, then <s>cancel out</s> those intermediate units along
                  the way with fractions.
                  <br />
                  <br />
                  <b>Convert 3 days to seconds.</b>
                  <br />
                  <span style={{ color: "green" }}>
                     <b>days</b>
                  </span>
                  &nbsp;&rarr;&nbsp;
                  <span style={{ color: "blue" }}>
                     <b>hours</b>
                  </span>
                  &nbsp;&rarr;&nbsp;
                  <span style={{ color: "blue" }}>
                     <b>minutes</b>
                  </span>
                  &nbsp;&rarr;&nbsp;
                  <span style={{ color: "magenta" }}>
                     <b>seconds</b>
                  </span>
                  <br />
                  <br />
                  Step 1:&emsp;3&nbsp;<s>days</s>
                  &nbsp;*&nbsp;(24&nbsp;hours&nbsp;/&nbsp;1&nbsp;<s>day</s>
                  )&nbsp;=&nbsp;72&nbsp;hours
                  <br />
                  Step 2:&emsp;72&nbsp;<s>hours</s>
                  &nbsp;*&nbsp;60&nbsp;minutes&nbsp;/&nbsp;1&nbsp;<s>hour</s>
                  &nbsp;=&nbsp;4320&nbsp;minutes
                  <br />
                  Step 3:&emsp;4320&nbsp;<s>minutes</s>
                  &nbsp;*&nbsp;60&nbsp;seconds&nbsp;/&nbsp;1&nbsp;
                  <s>minute</s>
                  &nbsp;=&nbsp;259200&nbsp;seconds
                  <br />
                  <br />
                  In one line: <br />
                  3&nbsp;days&nbsp;*&nbsp;(24&nbsp;hours&nbsp;/&nbsp;1&nbsp;day)&nbsp;*&nbsp;(60&nbsp;minutes&nbsp;/&nbsp;1&nbsp;hour)&nbsp;*&nbsp;(60&nbsp;seconds&nbsp;/&nbsp;1&nbsp;minute)
                  =&nbsp;259200&nbsp;seconds
                  <br />
                  <br />
                  <b>3&nbsp;days&nbsp;=&nbsp;259200&nbsp;seconds</b>
               </Typography>
            
         </Popper>
      </div>
   );
}
