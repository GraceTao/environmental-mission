import {
   Alert,
   Collapse,
   Snackbar,
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
import { wqiFinal, marginOfError, solutions } from "../solns";

export default function Submit() {
   const storedWQI = sessionStorage.getItem("inputWQI");
   const displayWQIClue = sessionStorage.getItem("displayWQIClue");
   const answerWithinMargin = (ans) => {
      return Math.abs(ans - wqiFinal) <= marginOfError;
   };

   const [inputWQI, setInputWQI] = useState(storedWQI);
   const [correct, setCorrect] = useState(answerWithinMargin(storedWQI));
   const [submitted, setSubmitted] = useState(answerWithinMargin(storedWQI));
   const [displayClue, setDisplayClue] = useState(displayWQIClue);

   const storedMeasurements = JSON.parse(sessionStorage.getItem("formValues"));
   const storedQValues = JSON.parse(sessionStorage.getItem("qValues"));
   const storedWeightedValues = JSON.parse(
      sessionStorage.getItem("weightedValues")
   );

   // const [storedWeightedValues, setStoredWeightedValues] = useState(null);
   const [openAlert, setOpenAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");

   const checkCond = (obj, toCheck) => {
      let res = null;
      Object.keys(obj).forEach((key) => {
         if (!toCheck(key)) {
            res = key;
         }
      });
      return res;
   };

   const checkContains = (obj) => {
      let res = true;
      Object.values(obj).forEach((val) => {
         if (!val) {
            res = false;
         }
      });
      return Object.values(obj).length === 9 && res;
   };

   const checkExists = () => {
      return (
         storedMeasurements &&
         storedQValues &&
         storedWeightedValues &&
         checkContains(storedMeasurements) &&
         checkContains(storedQValues) &&
         checkContains(storedWeightedValues)
      );
   };

   const checkWeighted = () => {
      return (
         storedWeightedValues &&
         checkCond(storedWeightedValues, (key) => {
            return (
               Number(storedWeightedValues[key]).toFixed(2) ===
               (storedQValues[key] * solutions[key].weight).toFixed(2)
            );
         })
      );
   };

   const checkMeasurement = () => {
      return (
         storedMeasurements &&
         checkCond(storedMeasurements, (key) => {
            return key === "DO"
               ? storedMeasurements.DO >=
                    solutions.DO.converted - marginOfError &&
                    storedMeasurements.DO <=
                       solutions.DO.converted + marginOfError
               : Number(storedMeasurements[key]) ===
                    Number(solutions[key].converted);
         })
      );
   };

   const checkQValue = () => {
      return (
         storedQValues &&
         checkCond(storedQValues, (key) => {
            return Math.abs(storedQValues[key] - solutions[key].qValue) <= 1;
         })
      );
   };
   const checkConditions = () => {
      if (!inputWQI) {
         setAlertMessage(<>Enter a value before submitting.</>);
      } else if (!checkExists()) {
         setAlertMessage(
            <>
               You are missing one or more entries in the Measurement, Q-Value,
               and/or Weighted Q-Value columns.
            </>
         );
      } else if (checkMeasurement()) {
         setAlertMessage(
            <>
               Check your measurement for{" "}
               <b>{solutions[String(checkMeasurement())].fullName}. </b>Don't
               forget to adjust the Q-Values if you change any measurements!
            </>
         );
      } else if (checkQValue()) {
         setAlertMessage(
            <>
               Check your Q-Value for <b>{solutions[checkQValue()].fullName}</b>
            </>
         );
      } else if (checkWeighted()) {
         setAlertMessage(
            <>
               Check your Weighted Q-Value calculation for{" "}
               <b>{solutions[checkWeighted()].fullName}</b>.
               <br />
               Round to <i>two</i> decimal places!
            </>
         );
      } else {
         setAlertMessage(
            <>
               Check that you are correctly adding up the Weighted Q-Values.
               Remember that this sum equals the WQI.
            </>
         );
      }
   };

   const handleSubmit = () => {
      const answerCheck = answerWithinMargin(parseFloat(inputWQI).toFixed(2));
      setCorrect(answerCheck);
      setSubmitted(true);
      sessionStorage.setItem("inputWQI", inputWQI);

      setOpenAlert(true);
      if (!answerCheck) {
         checkConditions();
      }
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
            defaultValue={inputWQI}
            disabled={!!correct}
            inputProps={{
               pattern: "[0-9]*",
               title: "numbers only",
            }}
            InputLabelProps={{
               sx: {
                  "&.Mui-focused": { color: "black" },
                  zIndex: 0,
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
                     <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        sx={{ width: "80%" }}
                        open={openAlert}
                        // onClose={() => setOpenAlert(false)}
                     >
                        <Alert
                           severity="error"
                           onClose={() => setOpenAlert(false)}
                        >
                           <Typography
                              color="#CD0B0B"
                              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                           >
                              {alertMessage}
                           </Typography>
                        </Alert>
                     </Snackbar>
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
               <Typography
                  align="center"
                  fontSize={{ xs: "1.3rem", md: "1.5rem" }}
                  fontFamily="tahoma"
               >
                  Correct! The stream rating is GOOD.
                  <br />
                  Your clue word is <b>water</b>.
               </Typography>
            </DialogContent>
         </Dialog>
      </Box>
   );
}
