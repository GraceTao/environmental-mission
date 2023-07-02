import React, { useState } from "react";
import {
   Box,
   IconButton,
   Button,
   Grid,
   TextField,
   Popper,
   Typography,
   Tooltip,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";

function CalculatorNoButton() {
   const [result, setResult] = useState(0);
   const [input, setInput] = useState("");
   const [operand1, setOperand1] = useState("");
   const [operand2, setOperand2] = useState("");
   const [op, setOp] = useState("");

   const handleNumberClick = (number) => {
      setInput(input + number);

      operand2 || op
         ? setOperand2(operand2 + number)
         : setOperand1(operand1 + number);
   };

   const evaluate = () => {
      let res;
      if (op && operand1 != "" && operand2 != "") {
         let op1AsNum = Number(operand1),
            op2AsNum = Number(operand2);
         if (!op1AsNum && op1AsNum != 0) {
            op1AsNum = "";
         }
         if (!op2AsNum && op2AsNum != 0) {
            op2AsNum = "";
         }

         console.log(`evaluating ${op1AsNum} ${op} ${op2AsNum}`);
         if (op == "+") {
            setResult(op1AsNum + op2AsNum);
            res = op1AsNum + op2AsNum;
         } else if (op == "-") {
            setResult(op1AsNum - op2AsNum);
            res = op1AsNum - op2AsNum;
         } else if (op == "*") {
            setResult(op1AsNum * op2AsNum);
            res = op1AsNum * op2AsNum;
         } else if (op == "/") {
            setResult(op1AsNum / op2AsNum);
            res = op1AsNum / op2AsNum;
         }

         setOperand1(`${res}`);
         setOperand2("");
      }
   };

   const handleOperationClick = (operation) => {
      setInput(input + operation);

      if (operation == "-") {
         if (operand1) {
            if (input && !operand2) {
               let lastChar = input.charAt(input.length - 1);
               if (
                  lastChar == "+" ||
                  lastChar == "-" ||
                  lastChar == "*" ||
                  lastChar == "/"
               ) {
                  setOperand2(operation);
               } else {
                  setOp(operation);
               }
            } else {
               evaluate();
               setOp(operation);
            }
         } else {
            setOperand1(operation);
         }
      } else {
         evaluate();
         setOp(operation);
      }
   };

   const handleEqualsClick = () => {
      evaluate();
   };

   const handleClearClick = () => {
      setResult(0);
      setInput("");
      setOperand1("");
      setOperand2("");
      setOp("");
   };

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
         sx={{ backgroundColor: "lightblue", borderRadius: 3, boxShadow: 10 }}
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
               value={input}
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
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("7")}
               >
                  <Typography>7</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("8")}
               >
                  <Typography>8</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("9")}
               >
                  <Typography>9</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <div style={{ width: 30 }}>
                  <IconButton
                     sx={opStyle}
                     variant="contained"
                     onClick={() => handleOperationClick("/")}
                  >
                     <Typography fontSize="1rem">
                        <b>&divide;</b>
                     </Typography>
                  </IconButton>
               </div>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("4")}
               >
                  <Typography>4</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("5")}
               >
                  <Typography>5</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("6")}
               >
                  <Typography>6</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={opStyle}
                  onClick={() => handleOperationClick("*")}
               >
                  <Typography fontSize="1rem">
                     <b>&times;</b>
                  </Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("1")}
               >
                  <Typography>1</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("2")}
               >
                  <Typography>2</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("3")}
               >
                  <Typography>3</Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={opStyle}
                  onClick={() => handleOperationClick("-")}
               >
                  <Typography fontSize="1rem">
                     <b>&minus;</b>
                  </Typography>
               </IconButton>
            </Grid>
            <Grid item xs={3}>
               <IconButton
                  sx={numberStyle}
                  onClick={() => handleNumberClick("0")}
               >
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
                  onClick={() => handleNumberClick(".")}
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
               <IconButton
                  sx={opStyle}
                  onClick={() => handleOperationClick("+")}
               >
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
      <div>
         <IconButton
            onClick={handleClick}
            sx={{
               borderRadius: 2,
               backgroundColor: "#312AC2 ",
               width: 64,
               height: 64,
               position: { top: 2, left: 5 },
               "&:hover": {backgroundColor: "#312AC2 "}
            }}
         >
            <Tooltip title="Calculator" arrow>
               <CalculateIcon sx={{ fontSize: 60, color: "#A7E5D8 " }} />
            </Tooltip>
         </IconButton>
         <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            placement="left-start"
         >
            <CalculatorNoButton />
         </Popper>
      </div>
   );
}

export default Calculator;
