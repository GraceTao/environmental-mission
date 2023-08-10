import { useState } from "react";
import {
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
   Grid,
} from "@mui/material";
import axios from "axios";
import FinalTaskLogin from "./FinalTaskLogin";
import { q1, q2, q3, q4, q5 } from "./questions";

export default function FinalTask() {
   const [answers, setAnswers] = useState({
      q1: "",
      q2: {},
      q3: "",
      q4: "",
      q5: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      setAnswers({ ...answers, [name]: value });
   };

   const handleSubmit = async () => {
      const prevData = JSON.parse(sessionStorage.getItem("allFormData"));
      const allData = { ...prevData, ...answers };
      console.log(allData);

      try {
         await axios.post("/api/submituserdata", allData);
         console.log("Data added successfully");
      } catch (err) {
         console.log("Error:", err);
      }
   };

   return (
      <Grid
         container
         justifyContent="center"
         sx={{
            height: "100vh",
            overflow: "auto",
            backgroundColor: "black",
         }}
      >
         <FinalTaskLogin />
         <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            sx={{
               backgroundColor: "white",
               width: "50%",
               minWidth: 300,
               p: 5,
            }}
         >
            <FormLabel sx={{ color: "black" }}>Question 1</FormLabel>
            <RadioGroup
               name="q1"
               value={answers.q1}
               onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
               sx={{ m: 2 }}
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
            <FormGroup>
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
            <Typography>
               {q3}
            </Typography>
            <br />
            <TextField
               name="q3"
               label="Your response here"
               multiline
               rows={3}
               onChange={handleChange}
               sx={{ minWidth: "90%", mb: 3 }}
            />
            <br />
            <Typography>
               {q4}
            </Typography>
            <br />
            <TextField
               name="q4"
               label="Your response here"
               multiline
               rows={3}
               onChange={handleChange}
               sx={{ minWidth: "90%", mb: 3 }}
            />
            <br />
            <Typography>
               {q5}
            </Typography>
            <br />
            <TextField
               name="q5"
               label="Your response here"
               multiline
               rows={3}
               onChange={handleChange}
               sx={{ minWidth: "90%", mb: 3 }}
            />
            <Button variant="contained" onClick={handleSubmit}>
               turn in to manager
            </Button>
         </Box>
      </Grid>
   );
}
