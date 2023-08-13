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
import { useEffect, useState } from "react";
import { addAttempt } from "../../homepage/trackAttempts";
import Calculator from "../../components/Calculator";

const solns = {
   height: 215,
   width: 300,
   length: 33,
   volume: 215 * 300 * 33, // 2128500
   sa: 2 * (215 * 300 + 300 * 33 + 215 * 33), //162990
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
         setError(<>Check your value for <b>Height</b>.</>);
      } else if (parseInt(inputs.length) !== solns.length) {
         setError(<>Check your value for <b>Length</b>.</>);
      } else if (parseInt(inputs.width) !== solns.width) {
         setError(<>Check your value for <b>Width</b>.</>);
      } else if (parseInt(inputs.volume) !== solns.volume) {
         setError(<>Check your value for <b>Volume</b>. <br/>V = l * w * h</>);
      } else if (parseInt(inputs.sa) !== solns.sa) {
         setError(<>Check your value for <b>Surface Area</b>. <br/>
                  The surface area of a rectangular prism is the sum of the 
                  areas of each of the six sides.
                  </>);
      } else {
         setSolved(true);
         setOpen(false);
         sessionStorage.setItem("solvedEmail", "true");
      }
      setSubmitted(true);
      addAttempt("emailAttempts");
   };

   return (
      <Box>
         <Dialog open={open} disableEnforceFocus style={{ zIndex: 5 }}>
            <DialogTitle>
               <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
               >
                  {submitted && error ? (
                     <Alert
                        severity="error"
                        onClose={() => setError("")}
                        sx={{ fontSize: "1.05rem", boxShadow: 5, pb: 0 }}
                     >
                        {error}
                     </Alert>
                  ) : (
                     <Typography
                        fontSize={{ xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }}
                        pt={2}
                     >
                        Replying to Sitara
                     </Typography>
                  )}
                  <Box width="50px" height="50px">
                     <Calculator />
                  </Box>
               </Box>
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
                  disabled={sessionStorage.getItem("solvedEmail") == "true"}
                  margin="dense"
                  id="height"
                  label="Height (ft)"
                  fullWidth
                  variant="standard"
                  name="height"
                  value={inputs.height}
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  disabled={sessionStorage.getItem("solvedEmail") == "true"}
                  margin="dense"
                  id="length"
                  label="Left-Right Length (ft)"
                  value={inputs.length}
                  fullWidth
                  name="length"
                  variant="standard"
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  disabled={sessionStorage.getItem("solvedEmail") == "true"}
                  margin="dense"
                  id="width"
                  label="Width/Depth (ft)"
                  name="width"
                  value={inputs.width}
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
               />

               <TextField
                  autoFocus
                  disabled={sessionStorage.getItem("solvedEmail") == "true"}
                  margin="dense"
                  id="volume"
                  label={
                     <>
                        Volume (ft<sup>3</sup>)
                     </>
                  }
                  name="volume"
                  value={inputs.volume}
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
               />
               <TextField
                  autoFocus
                  disabled={sessionStorage.getItem("solvedEmail") == "true"}
                  margin="dense"
                  id="sa"
                  label={
                     <>
                        Surface Area (ft<sup>2</sup>)
                     </>
                  }
                  value={inputs.sa}
                  fullWidth
                  name="sa"
                  variant="standard"
                  onChange={handleChange}
               />
            </DialogContent>
            <DialogActions>
               <Button variant="outlined" onClick={handleSolve} disabled={sessionStorage.getItem("solvedEmail") == "true"}>
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
