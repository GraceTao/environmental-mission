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
import { q1, q2 } from "./questions";

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
               As you’ve experienced today, environment compliance specialists
               work with people in many other fields. Name at least two other
               occupations (from today’s mission) that environment compliance
               specialists collaborate with to fulfill their duties. You can
               also enter the names of the people you “texted” with today.
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
               What does the Port of Corpus Christi do to ensure its
               environmental goals?
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
               What does the Port of Corpus Christi do to make sure its work has
               minimal effects on the surrounding community?
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
