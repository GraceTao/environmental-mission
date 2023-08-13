import React, { useState, useEffect } from "react";
import {
   IconButton,
   Button,
   Grid,
   TextField,
   Popper,
   Typography,
   Tooltip,
   Box,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { evaluate } from "mathjs";

function CalculatorNoButton() {
   const [expr, setExpr] = useState("");
   const [result, setResult] = useState(0);
   const [hasEval, setHasEval] = useState(false);

   const handleClick = (item) => {
      if (hasEval) {
         setExpr(result);
         setHasEval(false);
      }
      setExpr((prev) => prev + item);
   };

   const handleEqualsClick = () => {
      try {
         const res = parseFloat(evaluate(expr).toFixed(8));
         setResult(res);
         setHasEval(true);
      } catch (err) {
         setResult(err);
      }
   };

   const handleClearClick = () => {
      setExpr("");
      setResult(0);
   };

   useEffect(() => {
      const handleKeyDown = (event) => {
         const target = event.target;
         if (target.tagName === "INPUT" && target.type === "text") {
            return;
         }
         event.preventDefault();
         const key = event.key;

         if (key.match(/[0-9.+\-*/]$/)) {
            handleClick(key);
         } else if (key.match(/Enter|=$/)) {
            handleEqualsClick();
         } else if (key.match(/Escape|Delete$/)) {
            handleClearClick();
         }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   }, [expr]);

   const numberStyle = {
      pl: 2,
      pr: 2,
      backgroundColor: "#D9D9D9",
      "&:hover": { backgroundColor: "#D5D5D5" },
   };
   const opStyle = {
      pl: 2,
      pr: 2,
      backgroundColor: "#A0A0A0",
      "&:hover": { backgroundColor: "#9A9A9A" },
   };

   return (
      <Grid
         container
         spacing={2}
         pr={2}
         pb={1}
         justifyContent="center"
         maxWidth={240}
         overflow="auto"
         // position="relative"
         sx={{
            backgroundColor: "lightblue",
            borderRadius: 3,
            boxShadow: 10,
            border: "solid royalblue",
         }}
      >
         <Grid item xs={12}>
            <TextField
               label="Result"
               variant="outlined"
               value={result}
               fullWidth
               disabled
               sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                     WebkitTextFillColor: "#454545",
                  },
               }}
            />
         </Grid>
         <Grid item xs={12}>
            <TextField
               label="Input"
               variant="outlined"
               value={expr}
               fullWidth
               disabled
               sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                     WebkitTextFillColor: "#454545",
                  },
               }}
            />
         </Grid>
         <Grid item container spacing={1}>
            <Grid item xs={3} sx={{ width: 40 }}>
               <IconButton sx={numberStyle} onClick={() => handleClick("7")}>
                  <Typography>7</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("8")}>
                  <Typography>8</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("9")}>
                  <Typography>9</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <div style={{ width: 30 }}>
                  <IconButton
                     sx={opStyle}
                     variant="contained"
                     onClick={() => handleClick("/")}
                  >
                     <Typography fontSize="1rem">
                        <b>&divide;</b>
                     </Typography>
                  </IconButton>
               </div>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("4")}>
                  <Typography>4</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("5")}>
                  <Typography>5</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("6")}>
                  <Typography>6</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={opStyle} onClick={() => handleClick("*")}>
                  <Typography fontSize="1rem">
                     <b>&times;</b>
                  </Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("1")}>
                  <Typography>1</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("2")}>
                  <Typography>2</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("3")}>
                  <Typography>3</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={opStyle} onClick={() => handleClick("-")}>
                  <Typography fontSize="1rem">
                     <b>&minus;</b>
                  </Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={numberStyle} onClick={() => handleClick("0")}>
                  <Typography>0</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={{
                     pl: 2.2,
                     pr: 2.2,
                     backgroundColor: "#D9D9D9",
                     "&:hover": { backgroundColor: "#D5D5D5" },
                  }}
                  onClick={() => handleClick(".")}
               >
                  <Typography fontWeight={800}>.</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={{
                     pl: 2,
                     pr: 2,
                     backgroundColor: "#2196f3",
                     "&:hover": { backgroundColor: "#208de3" },
                  }}
                  onClick={() => handleEqualsClick("=")}
               >
                  <Typography fontSize="1rem">
                     <b>=</b>
                  </Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton sx={opStyle} onClick={() => handleClick("+")}>
                  <Typography fontSize="1rem">
                     <b>+</b>
                  </Typography>
               </IconButton>
            </Grid>
            <Grid item xs={4.5}>
               <Button
                  variant="contained"
                  onClick={() => handleClearClick()}
                  fullWidth
                  sx={{
                     backgroundColor: "#F04B3D",
                     "&:hover": { backgroundColor: "#E9493C " },
                  }}
               >
                  clear
               </Button>
            </Grid>
         </Grid>
      </Grid>
   );
}

function Calculator() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (e) => {
      setAnchorEl(anchorEl ? null : e.currentTarget);
   };

   return (
      <Box>
         <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            placement="bottom-start"
            style={{ zIndex: 6 }}
         >
            <CalculatorNoButton />
         </Popper>
         <IconButton
            onClick={handleClick}
            sx={{
               borderRadius: 2,
               backgroundColor: "#312AC2 ",
               width: 64,
               height: 64,
               "&:hover": { backgroundColor: "#312AC2 " },
            }}
         >
            <Tooltip title="Calculator" arrow>
               <CalculateIcon sx={{ fontSize: 60, color: "#A7E5D8 " }} />
            </Tooltip>
         </IconButton>
      </Box>
   );
}

export default Calculator;
