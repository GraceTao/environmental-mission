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
   DialogContent,
} from "@mui/material";
import axios from "axios";
import { q1, q2, q3, q4, q5 } from "./questions";
import logo from "../../components/PortCC-logo-horizontal-white.png";

export default function FinalReport({ setShowCert }) {
   const initialAnswers = {
      q1: "",
      q2: {},
      q3: "",
      q4: "",
      q5: "",
   };
   const storedAnswers = JSON.parse(sessionStorage.getItem("answers"));
   if (!storedAnswers) {
      sessionStorage.setItem("answers", JSON.stringify(initialAnswers));
   }

   const [answers, setAnswers] = useState(
      JSON.parse(sessionStorage.getItem("answers")) || initialAnswers
   );

   const [showError, setShowError] = useState(false);
   const [showSubmitting, setShowSubmitting] = useState(false);
   const [showFinalPage, setShowFinalPage] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;

      setAnswers({ ...answers, [name]: value });
      updateStorage(name, value);
   };

   const updateStorage = (key, val) => {
      const prevAnswers = JSON.parse(sessionStorage.getItem("answers"));
      sessionStorage.setItem(
         "answers",
         JSON.stringify({ ...prevAnswers, [key]: val })
      );
   };

   const handleSubmit = async () => {
      let filtered = Object.keys(answers.q2).filter(
         (key) => answers.q2[key] == true
      );
      filtered = filtered.sort();
      filtered = filtered.join(",");
      if (answers.q1 && filtered && answers.q3 && answers.q4 && answers.q5) {
         const userData = JSON.parse(sessionStorage.getItem("userData"));
         const allAttempts = JSON.parse(sessionStorage.getItem("attempts"));
         const allData = {
            ...userData,
            ...allAttempts,
            ...answers,
            q2: filtered,
         };
         console.log(allData);

         setShowError(false);
         setShowSubmitting(true);

         try {
            await axios.post("/api/submituserdata", allData);
            console.log("Data added successfully");
         } catch (err) {
            console.log("Error:", err);
         }

         setTimeout(() => {
            setShowFinalPage(true);
            setShowSubmitting(false);
         }, 2500);
      } else {
         setShowError(true);
      }
   };

   const textFieldStyle = { minWidth: "95%", mb: 4 };
   const longAnswerStyle = { fontSize: "1.05rem", mb: 2 };

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
               onClose={() => setShowError(!showError)}
            >
               <Typography fontSize="1.05rem" align="center">
                  One or more questions have not been answered.
               </Typography>
            </Alert>
         )}
         <Dialog open={showSubmitting}>
            <DialogContent sx={{ backgroundColor: "seagreen" }}>
               <Alert severity="success" sx={{ fontSize: "1.1rem", mb: 2 }}>
                  Submission successful!
               </Alert>
               <CircularProgress size={30} sx={{ mb: 2, color: "white" }} />
               <Typography color="#F5FFFA" fontSize="1.1rem">
                  Your responses are being processed...
               </Typography>
            </DialogContent>
         </Dialog>
         <Dialog open={showFinalPage}>
            <DialogContent sx={{ backgroundColor: "#EEFEF6" }}>
               <Typography
                  fontSize="1.2rem"
                  color="darkgreen"
                  align="center"
                  sx={{ mb: 3 }}
               >
                  Your report has been <b>approved</b>! The Port of Corpus
                  Christi thanks you for your efforts!
               </Typography>

               <Typography
                  fontSize="1.2rem"
                  color="navy"
                  sx={{ mb: 2 }}
                  align="center"
               >
                  Thank you for completing today's mission. Click below to exit
                  and receive a certificate of completion.
               </Typography>
               <Box align="center">
                  <Button
                     variant="contained"
                     sx={{
                        backgroundColor: "royalblue",
                        "&:hover": { backgroundColor: "#404DC7 " },
                     }}
                     onClick={() => {
                        setShowCert(true);
                        sessionStorage.setItem("showCert", true);
                     }}
                  >
                     view certificate
                  </Button>
               </Box>
            </DialogContent>
         </Dialog>

         <Box sx={{ pl: 3, pr: 3, pt: 4, pb: 4 }}>
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
               <ol style={{ fontFamily: "Arial", fontSize: "1.05rem" }}>
                  <li>
                     <FormLabel sx={{ color: "black" }}>{q1[0]}</FormLabel>
                     <RadioGroup
                        name="q1"
                        value={answers.q1}
                        onChange={(e) => {
                           setAnswers({ ...answers, q1: e.target.value });
                           updateStorage("q1", e.target.value);
                        }}
                        sx={{
                           mt: 2,
                           mb: 4,
                           ml: { xs: 0, sm: 1, md: 2, lg: 3 },
                        }}
                     >
                        {q1.slice(1).map((choice) => (
                           <FormControlLabel
                              key={choice.id}
                              value={choice.id}
                              defaultChecked={
                                 JSON.parse(sessionStorage.getItem("answers"))
                                    .q1 === choice.id
                              }
                              control={<Radio />}
                              label={<Typography>{choice.label}</Typography>}
                              sx={{ mb: 1 }}
                           />
                        ))}
                     </RadioGroup>
                  </li>

                  <li>
                     <FormLabel sx={{ color: "black", fontSize: "1.05rem" }}>
                        {q2[0]}
                     </FormLabel>
                     <FormGroup
                        sx={{
                           ml: { xs: 0, sm: 1, md: 2, lg: 3 },
                           mt: 2,
                           mb: 4,
                           mr: 2,
                        }}
                     >
                        {q2.slice(1).map((choice) => (
                           <FormControlLabel
                              key={choice.id}
                              control={
                                 <Checkbox
                                    color="success"
                                    name={choice.id}
                                    checked={answers.q2[choice.id] || false}
                                    onChange={(e) => {
                                       const prev = answers.q2;
                                       const { name, checked } = e.target;
                                       const newChecked = {
                                          ...prev,
                                          [name]: checked,
                                       };
                                       setAnswers({
                                          ...answers,
                                          q2: newChecked,
                                       });
                                       updateStorage("q2", newChecked);
                                    }}
                                 />
                              }
                              label={choice.label}
                              defaultChecked={Boolean(
                                 JSON.parse(sessionStorage.getItem("answers"))
                                    .q2[choice.id]
                              )}
                           ></FormControlLabel>
                        ))}
                     </FormGroup>
                  </li>

                  <li>
                     <Typography sx={longAnswerStyle}>{q3}</Typography>
                     <TextField
                        name="q3"
                        label="Your response here"
                        multiline
                        rows={4}
                        onChange={handleChange}
                        defaultValue={
                           JSON.parse(sessionStorage.getItem("answers")).q3
                        }
                        sx={textFieldStyle}
                     />
                  </li>

                  <li>
                     <Typography sx={longAnswerStyle}>{q4}</Typography>
                     <TextField
                        name="q4"
                        label="Your response here"
                        multiline
                        rows={4}
                        onChange={handleChange}
                        defaultValue={
                           JSON.parse(sessionStorage.getItem("answers")).q4
                        }
                        sx={textFieldStyle}
                     />
                  </li>

                  <li>
                     <Typography sx={longAnswerStyle}>{q5}</Typography>
                     <TextField
                        name="q5"
                        label="Your response here"
                        multiline
                        rows={4}
                        onChange={handleChange}
                        defaultValue={
                           JSON.parse(sessionStorage.getItem("answers")).q5
                        }
                        sx={textFieldStyle}
                     />
                  </li>
               </ol>
            </Box>
            <Box align="center">
               <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                     fontSize: { xs: "1rem", sm: "1.05rem" },
                     mt: -1,
                     width: "25%",
                     minWidth: "130px",
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
