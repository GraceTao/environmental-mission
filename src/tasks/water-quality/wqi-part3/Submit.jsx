import {
   TextField,
   Button,
   ButtonGroup,
   Box,
   Icon,
   Typography,
   useMediaQuery,
   useTheme,
   Dialog,
   DialogContent,
} from "@mui/material";
import { useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { wqiFinal, marginOfError, solutions, fullNames } from "../solns";

export default function Submit() {
   const storedWQI = sessionStorage.getItem("inputWQI");
   const displayWQIClue = sessionStorage.getItem("displayWQIClue");
   const answerWithinMargin = (ans) => {
      return (
         ans &&
         ans >= wqiFinal - marginOfError &&
         ans <= wqiFinal + marginOfError
      );
   };

   const [inputWQI, setInputWQI] = useState(storedWQI);
   const [correct, setCorrect] = useState(answerWithinMargin(storedWQI));
   const [submitted, setSubmitted] = useState(answerWithinMargin(storedWQI));
   const [displayClue, setDisplayClue] = useState(displayWQIClue);

   const storedWeightedValues = JSON.parse(
      sessionStorage.getItem("weightedValues")
   );
   const storedMeasurements = JSON.parse(sessionStorage.getItem("formValues"));
   const storedQValues = JSON.parse(sessionStorage.getItem("qValues"));

   const errorStyle = {
      fontFamily: "tahoma",
      fontSize: "1.1rem",
      color: "darkred",
      mb: 3,
   };

   const check = (obj, toCheck) => {
      let res = null;
      Object.keys(obj).forEach((key) => {
         if (!toCheck(key)) {
            res = key;
         }
      });
      return res;
   };

   const checkExists = (obj) => {
      let res = true;
      Object.values(obj).forEach((val) => {
         if (!val) {
            res = false;
         }
      });
      return res;
   };

   const checkWeighted = check(storedWeightedValues, (key) => {
      return Number(storedWeightedValues[key]).toFixed(2) ===
         (storedQValues[key] * solutions[key].weight).toFixed(2);});

   const checkMeasurement = check(storedMeasurements, (key) => {
      return key === "DO" ? 
      storedMeasurements.DO >= (solutions.DO.converted - marginOfError) &&
      storedMeasurements.DO <= (solutions.DO.converted + marginOfError) :
      Number(storedMeasurements[key]) === Number(solutions[key].converted);
   });

   const checkQValue = check(storedQValues, (key) => {
      return storedQValues[key] >= (solutions[key].qValue - 1) &&
             storedQValues[key] <= (solutions[key].qValue + 1);
   })

   const handleSubmit = (e) => {
      e.preventDefault();
      const answer = parseFloat(inputWQI);
      setCorrect(answerWithinMargin(answer));
      setSubmitted(true);
      sessionStorage.setItem("inputWQI", inputWQI);
   };

   const handleChange = (e) => {
      setInputWQI(e.target.value);
      setSubmitted(false);
   };

   const onCorrectRating = () => {
      sessionStorage.setItem("displayWQIClue", true);
      setDisplayClue(true);
   };

   const buttons = [
      <Button
         key="excellent"
         sx={{
            backgroundColor: "silver",
            "&:hover": { backgroundColor: "#1D9C4F" },
         }}
      >
         Excellent (&gt;90)
      </Button>,
      <Button
         key="good"
         sx={{
            backgroundColor: "silver",
            "&:hover": { backgroundColor: "#B7E73E" },
         }}
         onClick={onCorrectRating}
      >
         Good (&gt;70&ndash;90)
      </Button>,
      <Button
         key="medium"
         sx={{
            backgroundColor: "silver",
            "&:hover": { backgroundColor: "#FFDE47" },
         }}
      >
         Medium (&gt;50&ndash;70)
      </Button>,
      <Button
         key="bad"
         sx={{
            backgroundColor: "silver",
            "&:hover": { backgroundColor: "#E52F02 " },
         }}
      >
         Bad (25&ndash;50)
      </Button>,
      <Button
         key="very bad"
         sx={{
            backgroundColor: "silver",
            "&:hover": { backgroundColor: "darkred" },
         }}
      >
         Very bad (&lt;25)
      </Button>,
   ];

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Box ml={2}>
         <Typography mt={3} mb={3}>
            Water Quality Index (sum of the weighted Q-values):
         </Typography>
         <TextField
            label="Enter WQI"
            variant="filled"
            defaultValue={correct ? inputWQI : ""}
            disabled={!!correct}
            inputProps={{
               pattern: "[0-9]*",
               title: "numbers only",
            }}
            InputLabelProps={{
               sx: {
                  "&.Mui-focused": { color: "black" },
               },
            }}
            sx={{
               mb: 3,
               width: { xs: "50%", sm: "90%" },
            }}
            onChange={handleChange}
         ></TextField>
         <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!!correct}
            sx={{ mb: 3 }}
         >
            Submit
         </Button>
         {submitted && (
            <Box>
               {correct ? (
                  <Box mb={3}>
                     <Typography mb={3} lineHeight={1.5} fontSize="1.1rem">
                        <Icon sx={{ background: "none" }}>
                           <CheckBoxIcon sx={{ color: "green" }} />
                        </Icon>
                        <b>Correct!</b> The WQI is {inputWQI}. <br />
                     </Typography>
                     <hr color="black" />
                     <Typography mt={3} mb={3}>
                        {" "}
                        Click on the rating below corresponding to the WQI.
                     </Typography>
                     <ButtonGroup
                        orientation={isSmallScreen ? "horizontal" : "vertical"}
                        variant="contained"
                        color="inherit"
                     >
                        {buttons}
                     </ButtonGroup>
                  </Box>
               ) : (
                  <Box>
                     <Typography mb={3} lineHeight={1.5} fontSize="1.1rem">
                        <Icon sx={{ background: "none" }}>
                           <DisabledByDefaultIcon sx={{ color: "red" }} />
                        </Icon>{" "}
                        <b>Incorrect.</b> Please try again.
                     </Typography>
                     {!storedMeasurements ||
                     !storedQValues ||
                     !storedWeightedValues ||
                     !checkExists(storedMeasurements) ||
                     !checkExists(storedQValues) ||
                     !checkExists(storedWeightedValues) ? (
                        <Typography sx={errorStyle}>
                           **You are missing one or more entries in the
                           Measurement, Q-Value, and/or Weighted Q-Value
                           columns.**
                        </Typography>
                     ) : checkWeighted ? (
                        <Typography sx={errorStyle}>
                           Check your Weighted Q-Value calculation for{" "}
                           <b>{fullNames[checkWeighted]}</b>.<br/>
                           **weighted q-value = q-value &times; weighting factor**
                        </Typography>
                     ) : checkMeasurement ? (
                        <Typography sx={errorStyle}>
                           Check your Measurement for <b>{fullNames[checkMeasurement]}</b>
                           <br/>
                           Don't forget to adjust the Q-Value after changing any Measurements!
                        </Typography>
                     ) : checkQValue ? (
                        <Typography sx={errorStyle}>
                           Check your Q-Value for <b>{fullNames[checkQValue]}</b>
                        </Typography>
                     ) : null}
                  </Box>
               )}
            </Box>
         )}
         <Dialog
            open={!!displayClue}
            onClose={() => {
               setDisplayClue(false);
            }}
         >
            <DialogContent sx={{ backgroundColor: "lightblue" }}>
               <Typography fontSize={{ xs: "1.3rem", md: "1.5rem" }}>
                  Correct! The stream rating is GOOD.
                  <br />
                  Your clue word is <b>water</b>.
               </Typography>
            </DialogContent>
         </Dialog>
      </Box>
   );
}
