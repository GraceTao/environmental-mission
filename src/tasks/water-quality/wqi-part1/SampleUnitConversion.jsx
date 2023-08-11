import { Box, Button, Typography, Popper } from "@mui/material";
import { useState } from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";

export default function SampleUnitConversion() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (e) => {
      setAnchorEl(anchorEl ? null : e.currentTarget);
   };

   const open = Boolean(anchorEl);
   const id = open ? "image-popper" : undefined;
   const eqns = [
      {
         eqn: `$$${`3 \\cancel{\\text{ days}} \\times \\frac{24 \\text{ hours}}{1 \\cancel{\\text{ day}}} = 72 \\text{ hours}`}$$`,
         text: "Step 1:",
      },
      {
         eqn: `$$${`72 \\cancel{\\text{ hours}} \\times \\frac{60 \\text{ minutes}}{1 \\cancel{\\text{ hour}}} = 4320 \\text{ minutes}`}$$`,
         text: "Step 2:",
      },
      {
         eqn: `$$${`4320 \\cancel{\\text{ minutes}} \\times \\frac{60 \\text{ seconds}}{1 \\cancel{\\text{ minute}}} = 259200 \\text{ seconds}`}$$`,
         text: "Step 3:",
      },
      {
         eqn: `$$${`3 {\\color{green}{\\cancel{\\text {days}}}} \\times 
               \\frac{24 \\color{blue}{\\cancel{\\text{ hours}}}}{1 \\color{green}{\\cancel{\\text{ day}}}} \\times 
               \\frac{60 \\color{blue}{\\cancel{\\text{ minutes}}}}{1 \\color{blue}{\\cancel{\\text{ hour}}}} 
               \\times \\frac{60 \\color{magenta}{\\text{ seconds}}}{1 \\color{blue}{\\cancel{\\text{ minute}}}}
               = 259200 \\text{ seconds}`}$$`,
         text: "In one line:",
      },
   ];

   return (
      <div>
         <Button
            variant="contained"
            onClick={handleClick}
            sx={{position: "fixed", top: {xs: 135, sm: 145}, left: 10 }}
         >
            sample unit conversion
         </Button>

         <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            sx={{
               backgroundColor: "white",
               maxWidth: { xs: "85%", sm: "75%", md: "50%", lg: "45%" },
               width: "auto",
               maxHeight: "80vh",
               overflow: "auto",
               whiteSpace: "pre-wrap",
               wordWrap: "break-word",
            }}
            placement="bottom"
            position="absolute"
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
               units, then cancel out those intermediate units along the way
               with fractions.
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
            </Typography>
            <Box
               display="flex"
               flexDirection="column"
               justifyContent="flex-start"
               ml={2}
            >
               {eqns.map((eqn, index) => (
                  <Box
                     display="flex"
                     flexDirection="row"
                     justifyContent="flex-start"
                     key={index}
                  >
                     <Typography>{eqn.text}&emsp;</Typography>

                     <MathJaxContext>
                        <MathJax style={{ fontSize: "1.1rem" }}>
                           {eqn.eqn}
                        </MathJax>
                     </MathJaxContext>
                  </Box>
               ))}
            </Box>
            <Typography sx={{ ml: 2, mb: 2 }}>
               <b>3&nbsp;days&nbsp;=&nbsp;259200&nbsp;seconds</b>
            </Typography>
         </Popper>
      </div>
   );
}
