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
} from "@mui/material";
import { useState } from "react";
// import ParkTwoToneIcon from '@mui/icons-material/ParkTwoTone';
// import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const RESTRICT_INPUT = /^[a-zA-Z ]+$/;
const USERNAME = "me";
const PASSWORD = /^water[ ]*soil[ ]*air[ ]*policy$/;
const accountCircles = ["mediumpurple", "springgreen", "turquoise", "orange"];

export default function FinalTaskLogin() {
   const [displayLogin, setDisplayLogin] = useState(true);
   const [correct, setCorrect] = useState(false);
   const [password, setPassword] = useState("");
   const [hasClicked, setHasClicked] = useState(false);

   const handleLogin = () => {
      if (PASSWORD.test(password.toLocaleLowerCase().trim())) {
         setCorrect(true);
         setTimeout(() => setDisplayLogin(!displayLogin), 2000);
      }
      setHasClicked(!hasClicked);
   };

   return (
      <Dialog open={displayLogin}>
         <DialogTitle
            fontSize="1.2rem"
            fontWeight="bold"
            display="flex"
            justifyContent="space-between"
            color="#277056"
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
               <HomeIcon sx={{ fontSize: 35, color: "black" }} />
            </IconButton>
         </DialogTitle>
         <DialogContent
            sx={{
               backgroundColor: "#D5EFE5",
            }}
         >
            <Box display="flex" flexDirection="column">
               {hasClicked && !correct && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                     Incorrect password entered.
                  </Alert>
               )}
               {correct && (
                  <Alert severity="success" sx={{ mb: 2 }} >
                     Success! Logging in...
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
                  value={password}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           onClick={() => {
                              setPassword("");
                              setHasClicked(false);
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
                  }}
                  sx={{
                     maxHeight: 48,
                  }}
               />
               <Button
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                     mt: 4,
                     mb: 3,
                     backgroundColor: "#277056",
                     color: "beige",
                     // fontWeight: "bold",
                     fontSize: "1rem",
                     "&:hover": { backgroundColor: "#277056" },
                  }}
               >
                  log in
               </Button>
            </Box>
            <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
               {accountCircles.map((color) => (
                  <AccountCircleIcon
                     key={color}
                     sx={{ color: color, fontSize: 35 }}
                  />
               ))}
            </DialogActions>
         </DialogContent>
      </Dialog>
   );
}
