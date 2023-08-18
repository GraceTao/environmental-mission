import React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";

const Reveal = (props) => {
   const { text, open, setOpen, sx, color } = props;

   return (
      <Popper
         open={Boolean(open)}
         anchorEl={open}
         onClose={() => setOpen(null)}
         sx={{maxWidth: "50%", width: "200px", backgroundColor: color}}
      >
        <Typography align="center" p={2}>
          {text}
        </Typography>
        
         {/* <Box
        sx={{
          position: "relative",
          align: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          fontSize:"1vw",
          backgroundColor: props.color,
          top: "60vh",
          height: "fit-content",
          left:"5vw",
          minHeight: "10vh",
          width: "15vw",
          textAlign: "center",
          
          
          ...sx, // Spread the additional styles here
        }}
      > */}

         {/* {text} */}

         {/* </Box> */}
      </Popper>
   );
};

export default Reveal;
