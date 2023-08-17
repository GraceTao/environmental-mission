import {
   Alert,
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   IconButton,
   InputAdornment,
   OutlinedInput,
   Typography,
   Tooltip,
} from "@mui/material";
import { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { addAttempt } from "../../homepage/trackAttempts";
import "./animate.css";

const RESTRICT_INPUT = /^[a-zA-Z ]+$/;
const USERNAME = "me@green-solns.org";
const PASSWORD = "watersoilairpolicy";
const accountCircles = ["#A876DA", "#A1E876", "#83E8EB", "#FCD168"];

export default function FinalTaskLogin({ showAlert, setShowAlert }) {
   const [displayLogin, setDisplayLogin] = useState(true);
   const [correct, setCorrect] = useState(false);
   const [password, setPassword] = useState("");
   const [hasClicked, setHasClicked] = useState(false);
   const [hint, setHint] = useState("");
   const [hasShowedContactHint, setHasShowedContactHint] = useState(false);
   const [animateIndex, setAnimateIndex] = useState(-1);

   function checkIncludes(str) {
      let missing = "";
      let newStr = str;
      if ((newStr = str.replace("water", "")) === str) {
         missing = "Calendar";
      } else if (!newStr || (newStr = newStr.replace("soil", "")) === str) {
         missing = "Email";
      } else if (!newStr || (newStr = newStr.replace("air", "")) === str) {
         missing = "Assignment";
      } else if (!newStr || (newStr = newStr.replace("policy", "")) === str) {
         missing = "Map";
      } else if (newStr) {
         missing = "extra letters";
      }
      return missing;
   }

   const animate = () => {
      setAnimateIndex(0);

      for (let i = 0; i < accountCircles.length; i++) {
         setTimeout(() => setAnimateIndex(i), i * 1000);
      }
   };
   const handleLogin = () => {
      let trimmed = password.toLocaleLowerCase().trim().replace(/\s/g, "");

      if (trimmed) {
         const attempts = addAttempt("passwordAttempts");
         if (trimmed === PASSWORD) {
            setCorrect(true);
            sessionStorage.setItem("correctPassword", true);

            setTimeout(() => {
               setDisplayLogin(!displayLogin);
               setShowAlert(!showAlert);
            }, 2000);
         } else {
            const missing = checkIncludes(trimmed);
            if (missing) {
               if (attempts < 3) {
                  setHint(
                     "Make sure to complete ALL tasks before trying the password."
                  );
               } else {
                  setHint(
                     missing === "extra letters"
                        ? "You have extra letters or misspelled words."
                        : `Have you clicked on the ${missing} icon on the home screen?`
                  );
               }
            } else {
               if (attempts > 2) {
                  setHint(
                     "The word order is wrong. Who did you chat with in which task? You can also check the contacts page."
                  );
                  setHasShowedContactHint(!hasShowedContactHint);
               }
               if (hasShowedContactHint) {
                  setHint(
                     "The word order is wrong. purple = Stan, green = Naomi,...what clue words did they give you?"
                  );
               }
               animate();
            }
         }
      }

      setHasClicked(true);
   };

   return (
      <Dialog
         open={displayLogin}
         sx={{ backgroundColor: "lightgray" }}
         maxWidth="xs"
      >
         <DialogTitle
            fontSize="1.3rem"
            fontWeight="bold"
            display="flex"
            justifyContent="space-between"
            color="#277056"
            lineHeight={1.5}
            sx={{
               backgroundColor: "#D5EFE5",
            }}
         >
            Environmental Portal <br /> Login
            <IconButton
               component={Link}
               to="/"
               disableRipple
               sx={{ padding: 0 }}
            >
               <Tooltip title="Go home" arrow>
                  <HomeIcon sx={{ fontSize: 35, color: "black" }} />
               </Tooltip>
            </IconButton>
         </DialogTitle>
         <DialogContent
            sx={{
               backgroundColor: "#D5EFE5",
            }}
         >
            <Box display="flex" flexDirection="column">
               {hasClicked && !correct && (
                  <Alert severity="error" sx={{ mb: 2, boxShadow: 5 }}>
                     Incorrect password entered. <br />
                     {hint}
                  </Alert>
               )}
               <Typography fontSize="1.1rem">Username</Typography>
               <OutlinedInput
                  disabled
                  value={USERNAME}
                  sx={{
                     "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#454545",
                     },
                     maxHeight: 48,
                  }}
               />
               <br />
               <Typography fontSize="1.1rem">Password</Typography>
               <OutlinedInput
                  // disabled={!displayLogin}
                  value={password}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           onClick={() => {
                              setPassword("");
                              setHasClicked(false);
                              setHint("");
                           }}
                        >
                           <HighlightOffIcon />
                        </IconButton>
                     </InputAdornment>
                  }
                  onChange={(e) => {
                     const value = e.target.value;
                     if (value === "" || RESTRICT_INPUT.test(value)) {
                        setPassword(value);
                     }
                     setHasClicked(false);
                     setHint("");
                  }}
                  sx={{
                     maxHeight: 48,
                  }}
               />
               {correct ? (
                  <Alert
                     severity="success"
                     variant="filled"
                     sx={{ mt: 3, mb: 2, fontSize: "1rem", boxShadow: 5 }}
                  >
                     Success! Logging in...
                  </Alert>
               ) : (
                  <Button
                     variant="contained"
                     onClick={handleLogin}
                     sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: "#277056",
                        color: "azure",
                        // fontWeight: "bold",
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#277056" },
                     }}
                  >
                     log in
                  </Button>
               )}
            </Box>
            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
               <Box
                  sx={{
                     backgroundColor: "azure",
                     boxShadow: 3,
                     pl: 2,
                     pr: 2,
                     pt: 1,
                     pb: 0.5,
                     borderRadius: 7,
                  }}
               >
                  {accountCircles.map((color, index) => (
                     <AccountCircleIcon
                        key={color}
                        className={`account-icon ${
                           index === animateIndex && "animate"
                        }`}
                        style={{ color: color, fontSize: 35 }}
                     />
                  ))}
               </Box>
            </DialogActions>
         </DialogContent>
      </Dialog>
   );
}
