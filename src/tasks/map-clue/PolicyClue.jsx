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
   DialogContent,
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import { addAttempt } from "../../homepage/trackAttempts";

const CLUE_WORD = "policy";

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
      Object.values(showLetter).forEach((letters) => {
         if (letters.match(/[0-9]+/)) {
            res = false;
         }
      });
      return res;
   }

   function checkLetters() {
      let res = true;
      let check = false;
      CLUE_WORD.split("").forEach((index) => {
         Object.values(showLetter).forEach((letters) => {
            if (letters.toLocaleLowerCase() == index) {
               check = true;
            }
         });
         res = res && check;
         check = false;
      });

      return res;
   }

   function checkEntries() {
      return (
         Object.values(showLetter).join("").toLocaleLowerCase() === CLUE_WORD
      );
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
         setAlertMessage(<>All inputs must be letters! Hint: A=1</>);
      } else if (!checkLetters()) {
         setAlertMessage(
            <>
               Some of your letters are not correct! Check your calculations and
               conversions carefully! Note: one letter per box.
            </>
         );
      } else if (!checkEntries()) {
         setAlertMessage(
            <>
               The letters are not in the correct order. Try unscrambling them!
            </>
         );
      } else {
         sessionStorage.setItem("displayMapClue", true);
         setDisplayClue(true);
         setOpenAlert(false);
         setOpenClue(false);
      }
   };

   return (
      <div>
         <IconButton
            onClick={() => {
               if (displayMapClue) {
                  setDisplayClue(true);
               } else {
                  setOpenClue(true);
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
                     padding: "10px",
                  }}
               >
                  <FormLabel>Figure out the clue word!</FormLabel>

                  {letters.map((letter) => (
                     <TextField
                        key={letter}
                        label="X"
                        onChange={handleChange}
                        name={letter}
                        value={showLetter[letter]}
                        inputProps={{ maxLength: 2 }}
                     ></TextField>
                  ))}
                  <Button variant="contained" onClick={handleSubmit}>
                     Submit
                  </Button>
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
            <DialogContent sx={{ backgroundColor: "#D2F6E3" }}>
               <Typography
                  align="center"
                  fontSize={{ xs: "1.2rem", md: "1.3rem" }}
               >
                  You got it right! Thanks for visiting the Port of Corpus Christi.
                  <br /><br />
                  Your clue word is <b>policy</b>.
               </Typography>
            </DialogContent>
         </Dialog>
      </div>
   );
}
