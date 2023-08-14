import { useState } from "react";

import {
   FormControl,
   FormLabel,
   Box,
   Button,
   Popper,
   IconButton,
   Tooltip,
   TextField,
   Dialog,
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";

export default function PolicyClue() {
   const [openClue, setOpenClue] = useState(false);

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

   return (
      <div>
         <IconButton
            onClick={() => setOpenClue(true)}
            sx={{
               borderRadius: 2,
               backgroundColor: "#ffff8d ",
               width: 64,
               height: 64,
               position: { top: 2, left: 5 },
               "&:hover": { backgroundColor: "#ffff8d" },
               marginTop: "10px",
            }}
         >
            <Tooltip title="Find the clue!" arrow>
               <FlagIcon sx={{ fontSize: 55, color: "#ffd600" }} />
            </Tooltip>
         </IconButton>

         <Dialog
            open={openClue}
            onClose={() => setOpenClue(false)}
            sx={{ boxShadow: 6 }}
         >
            <div style={{ overflow: "auto", maxHeight: "50vh" }}>
               <FormControl>
                  <FormLabel>Find the clue!</FormLabel>

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
                  <Button>Submit</Button>
               </FormControl>
            </div>
         </Dialog>
      </div>
   );
}

