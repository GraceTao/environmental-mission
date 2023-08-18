import { useState } from "react";

import {
   Alert,
   Typography,
   FormControl,
   FormLabel,
   //Box,
   Button,
   //Popper,
   IconButton,
   Tooltip,
   TextField,
   Dialog,
   Snackbar,
   DialogContent
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import { addAttempt } from "../../homepage/trackAttempts";

export default function PolicyClue() {
   const displayMapClue = sessionStorage.getItem("displayMapClue");

   const [openClue, setOpenClue] = useState(false);
   const [openAlert, setOpenAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const [displayClue, setDisplayClue] = useState(displayMapClue);

   const letters = [
      "letter1",
      "letter2",
      "letter3",
      "letter4",
      "letter5",
      "letter6",
   ];

   const [showLetter, setShowLetter] = useState({
      letter1: "",
      letter2: "",
      letter3: "",
      letter4: "",
      letter5: "",
      letter6: "",
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setShowLetter({ ...showLetter, [name]: value });
   };

   const handleSubmit = () => {
      !Object.values(showLetter).every((letter) => letter === "") &&
         addAttempt("mapAttempts");

      //sessionStorage.setItem("inputMap", inputMap);
      setOpenAlert(true);
      checkConditions();
   };

   function checkNumbers() {
      let res = true;
      let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      Object.values(showLetter).forEach((letters) => {
         nums.forEach((index) => {
            if (letters.includes(index)) {
               res = false;
            }
         });
      });
      return res;
   }

   function checkLetters() {
      let res = true;
      let check = false;
      let answer = ["p", "o", "l", "i", "c", "y"];
      answer.forEach((index) => {
         Object.values(showLetter).forEach((letters) => {
            if (letters == index) {
               check = true;
            }
         });
         res = res && check;
         check = false;
      });
      return res;
   }

   function checkEntries() {
      let res = true;
      let answer = ["p", "o", "l", "i", "c", "y"];
      Object.values(showLetter).forEach((letters, index) => {
         if (letters != answer[index]) {
            res = false;
         }
      });
      return res;
   }

   const checkContains = (obj) => {
      let res = true;
      Object.values(showLetter).forEach((letters) => {
         if (letters == null || letters == "") {
            res = false;
         }
      });
      return Object.values(obj).length === 6 && res;
   };

   const checkExists = () => {
      return showLetter && checkContains(showLetter);
   };

   const checkConditions = () => {
      if (!checkExists()) {
         setAlertMessage(
            <>
               You are missing one or more letters. Try scrolling around to find
               the icons!
            </>
         );
      } else if (!checkNumbers()) {
         setAlertMessage(
            <>
               All inputs must be letters! Hint: A=1
            </>
         );
      } else if (!checkLetters()) {
         setAlertMessage(
            <>Some of your letters are not correct! Check the map carefully!</>
         )
      } else if (!checkEntries()) {
         setAlertMessage(
            <>
               The letters are not in the correct order. Try unscrambling them!
            </>
         );
      } else {
         sessionStorage.setItem("displayMapClue", true)
         setDisplayClue(true)
         setOpenAlert(false)
         setOpenClue(false)
      }
   };

   return (
      <div>
         <IconButton
            onClick={() => {
               if (displayMapClue) {
                  setDisplayClue(true)
               }
               else {
                  setOpenClue(true)
               }
            }}

            sx={{
               borderRadius: 2,
               backgroundColor: "#ffff8d ",
               width: 64,
               height: 64,
               "&:hover": { backgroundColor: "#ffff8d" },
            }}
         >
            <Tooltip title="Find the clue word!" arrow>
               <FlagIcon sx={{ fontSize: 55, color: "orange" }} />
            </Tooltip>
         </IconButton>

         <Dialog
            open={openClue}
            onClose={() => setOpenClue(false)}
            sx={{ boxShadow: 6 }}
         >
            <div style={{ overflow: "auto", maxHeight: "50vh" }}>
               <FormControl
                  sx={{
                     borderRadius: 2,
                     padding:"10px"
                  }}
               >
                  <FormLabel>Find the clue word!</FormLabel>

                  {letters.map((letter) => (
                     <TextField
                        key={letter}
                        label="X"
                        onChange={handleChange}
                        name={letter}
                        value={showLetter[letter]}
                        inputProps={{ maxLength: 1 }}
                     ></TextField>
                  ))}
                  <Button variant="contained" onClick={handleSubmit}>Submit</Button>
               </FormControl>
               <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  sx={{ width: "80%" }}
                  open={openAlert}
               >
                  <Alert severity="error" onClose={() => setOpenAlert(false)}>
                     <Typography
                        color="#CD0B0B"
                        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                     >
                        {alertMessage}
                     </Typography>
                  </Alert>
               </Snackbar>
            </div>
         </Dialog>
         <Dialog
            open={!!displayClue}
            onClose={() => {
               setDisplayClue(false);
            }}
         >
            <DialogContent sx={{ backgroundColor: "lightblue" }}>
               <Typography
                  align="center"
                  fontSize={{ xs: "1.2rem", md: "1.4rem" }}
               >
                  You got it right!
                  <br />
                  Your clue word is <b>policy</b>.
               </Typography>
            </DialogContent>
         </Dialog>
      </div>
   );
}
