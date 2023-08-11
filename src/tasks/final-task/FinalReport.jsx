import { useState } from "react";
import {
   Alert,
   Box,
   TextField,
   FormLabel,
   Button,
   Typography,
   Checkbox,
   RadioGroup,
   Radio,
   FormControlLabel,
   FormGroup,
   CircularProgress,
   Dialog,
   DialogContent
} from "@mui/material";
import axios from "axios";
import { q1, q2, q3, q4, q5 } from "./questions";
import logo from "../../components/PortCC-logo-horizontal-white.png";

export default function FinalReport({
   showSubmissionPage,
   setShowSubmissionPage,
}) {
   const [answers, setAnswers] = useState({
      q1: "",
      q2: {},
      q3: "",
      q4: "",
      q5: "",
   });

   const [showError, setShowError] = useState(false);
   const [showSubmitting, setShowSubmitting] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;

      setAnswers({ ...answers, [name]: value });
   };

   const handleSubmit = async () => {
      let filtered = Object.keys(answers.q2).filter(
         (key) => answers.q2[key] == true
      );
      filtered = filtered.sort();
      filtered = filtered.join(",");
      if (answers.q1 && filtered && answers.q3 && answers.q4 && answers.q5) {
         const prevData = JSON.parse(sessionStorage.getItem("allFormData"));
         const allData = { ...prevData, ...answers, q2: filtered };
         setShowError(false);
         setShowSubmitting(true);
         // console.log(allData);
         setTimeout(() => {
            setShowSubmissionPage(!showSubmissionPage);
            setShowSubmitting(false);
         }, 4000);

         try {
            await axios.post("/api/submituserdata", allData);
            console.log("Data added successfully");
         } catch (err) {
            console.log("Error:", err);
         }
      } else {
         setShowError(true);
      }
   };

   const textFieldStyle = { minWidth: "95%", mb: 3 };

   return (
      <Box
         sx={{
            backgroundColor: "white",
            width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
            minWidth: 300,
            boxShadow: 15,
            border: "solid blueviolet 4px",
            borderRadius: 3,
         }}
      >
         {showError && (
            <Alert
               severity="error"
               variant="filled"
               sx={{ position: "fixed", zIndex: 3, boxShadow: 10 }}
            >
               <Typography fontSize="1.05rem" align="center">
                  One or more questions have not been answered.
               </Typography>
            </Alert>
         )}
         <Dialog open={showSubmitting}>
            <DialogContent>
               <Typography>Submission Successful!
                  </Typography>
            </DialogContent>
         </Dialog>
         <Box sx={{ p: 5, pt: 3 }}>
            <Box align="center">
               <Typography
                  fontSize="1.7rem"
                  fontFamily="Courier"
                  align="center"
                  fontWeight="bold"
               >
                  ENVIRONMENTAL REPORT
               </Typography>
               <Box
                  align="center"
                  sx={{
                     backgroundColor: "royalblue",
                     pt: 1,
                     pb: 1,
                     mb: 3,
                     maxWidth: 280,
                     borderRadius: 2,
                  }}
               >
                  <img
                     src={logo}
                     alt="Port of Corpus Christi logo"
                     style={{ maxWidth: 225 }}
                  />
               </Box>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-start">
               <FormLabel sx={{ color: "black" }}>Question 1</FormLabel>
               <RadioGroup
                  name="q1"
                  value={answers.q1}
                  onChange={(e) =>
                     setAnswers({ ...answers, q1: e.target.value })
                  }
                  sx={{ ml: 2, m: 1, mb: 4 }}
               >
                  {q1.map((choice) => (
                     <FormControlLabel
                        key={choice.id}
                        value={choice.id}
                        control={<Radio color="success" />}
                        label={choice.label}
                     />
                  ))}
               </RadioGroup>
               <FormLabel sx={{ color: "black" }}>Question 2</FormLabel>
               <FormGroup sx={{ ml: 2, m: 1 }}>
                  {q2.map((choice) => (
                     <FormControlLabel
                        key={choice.id}
                        control={
                           <Checkbox
                              name={choice.id}
                              checked={answers.q2[choice.id] || false}
                              onChange={(e) => {
                                 const prev = answers.q2;
                                 const { name, checked } = e.target;
                                 setAnswers({
                                    ...answers,
                                    q2: { ...prev, [name]: checked },
                                 });
                              }}
                           />
                        }
                        label={choice.label}
                     ></FormControlLabel>
                  ))}
               </FormGroup>
               <br />
               <Typography>{q3}</Typography>
               <br />
               <TextField
                  name="q3"
                  label="Your response here"
                  multiline
                  rows={3}
                  onChange={handleChange}
                  sx={textFieldStyle}
               />
               <br />
               <Typography>{q4}</Typography>
               <br />
               <TextField
                  name="q4"
                  label="Your response here"
                  multiline
                  rows={3}
                  onChange={handleChange}
                  sx={textFieldStyle}
               />
               <br />
               <Typography>{q5}</Typography>
               <br />
               <TextField
                  name="q5"
                  label="Your response here"
                  multiline
                  rows={3}
                  onChange={handleChange}
                  sx={textFieldStyle}
               />
            </Box>
            <Box align="center">
               <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                     fontSize: "1.05rem",
                     width: "25%",
                     backgroundColor: "blueviolet",
                     "&:hover": {
                        backgroundColor: "#9A54E5 ",
                     },
                  }}
               >
                  submit
               </Button>
            </Box>
         </Box>
      </Box>
   );
}
