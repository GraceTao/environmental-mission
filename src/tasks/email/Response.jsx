import {
   Alert,
   Box,
   Typography,
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
   TextField,
} from "@mui/material";
import { useState } from "react";

const solns = {
   height: 215,
   width: 300,
   length: 33,
   volume: 215 * 300 * 33,
   sa: 2 * (215 * 300) + 2 * (300 * 33) + 2 * (215 * 33),
};

export default function Response({
   open,
   setOpen,
   inputs,
   setInputs,
   solved,
   setSolved,
}) {
   const [error, setError] = useState("");
   const [submitted, setSubmitted] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;

      setInputs({ ...inputs, [name]: value });
      setSubmitted(false);
   };

   const handleClose = () => {
      setOpen(!open);
      setSubmitted(false);
      setError("");

      sessionStorage.setItem("height", inputs.height);
      sessionStorage.setItem("length", inputs.length);
      sessionStorage.setItem("width", inputs.width);
      sessionStorage.setItem("volume", inputs.volume);
      sessionStorage.setItem("sa", inputs.sa);
   };

   const handleSolve = () => {
      if (parseInt(inputs.height) !== solns.height) {
         setError("Height");
      } else if (parseInt(inputs.width) !== solns.width) {
         setError("Width");
      } else if (parseInt(inputs.length) !== solns.length) {
         setError("Length");
      } else if (parseInt(inputs.volume) !== solns.volume) {
         setError("Volume");
      } else if (parseInt(inputs.sa) !== solns.sa) {
         setError("Surface Area");
      } else {
         setSolved(true);
         setOpen(false);
         sessionStorage.setItem("solvedEmail", "true");
      }
      setSubmitted(true);
   };

   return (
      <Box>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
               {submitted && error && (
                  <Alert severity="error" onClose={() => setError("")} sx={{fontSize: "1.05rem", boxShadow: 5}}>
                     Check your value for <b>{error}</b>
                  </Alert>
               )}
            </DialogTitle>
            <DialogContent>
               <DialogContentText>
                  Hi Sitara,
                  <br></br>
                  <br></br>
                  Thanks for checking in! Using the attached documentation, I
                  have verified that the maximum dimensions for your building
                  are as follows:
                  <br></br>
               </DialogContentText>
               <TextField
                  autoFocus
                  margin="dense"
                  id="height"
                  label="Height"
                  fullWidth
                  variant="standard"
                  name="height"
                  value={inputs.height}
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="width"
                  label="Width"
                  name="width"
                  value={inputs.width}
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="length"
                  label="Length (left-right)"
                  value={inputs.length}
                  fullWidth
                  name="length"
                  variant="standard"
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="volume"
                  label="Volume"
                  name="volume"
                  value={inputs.volume}
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  margin="dense"
                  id="sa"
                  label="Surface Area"
                  value={inputs.sa}
                  fullWidth
                  name="sa"
                  variant="standard"
                  onChange={handleChange}
               />
            </DialogContent>
            <DialogActions>
               <Button variant="outlined" onClick={handleSolve}>
                  Send
               </Button>
               <Button variant="outlined" onClick={handleClose}>
                  Cancel
               </Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
}
