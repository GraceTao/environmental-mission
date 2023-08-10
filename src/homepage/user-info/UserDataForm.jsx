import { useState } from "react";
import {
   Alert,
   Autocomplete,
   Select,
   Box,
   FormControl,
   TextField,
   MenuItem,
   FormLabel,
   Button,
   Typography,
} from "@mui/material";
import axios from "axios";
import { locationData } from "./locationData";

export default function UserDataForm({ open, setOpen }) {
   const [formData, setFormData] = useState({
      state: null,
      county: null,
      school: null,
      order: "",
   });
   const [isCompleted, setIsCompleted] = useState({
      state: false,
      county: false,
      school: false,
      order: false,
   });
   const [openAlert, setOpenAlert] = useState(false);

   const handleInput = (key) => {
      setIsCompleted({ ...isCompleted, [key]: true });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.post("/api/submituserdata", formData);
         console.log("Data submitted successfully");
      } catch (err) {
         console.log("Error:", err);
      }

      setOpenAlert(true);
      setTimeout(() => {
         setOpen(!open);
         sessionStorage.setItem("submittedStartForm", true);
         sessionStorage.setItem("allFormData", formData);
      }, 2000);


      // try {
      //    await axios.get("/api/getdata");
      //    console.log("Data retrieved successfully");
      // } catch (err) {
      //    console.log("Error:", err);
      // }
   };

   let states = Object.keys(locationData).sort();
   let counties = ["OTHER - NOT LISTED"];

   if (formData.state) {
      counties = counties.concat(
         Object.keys(locationData[formData.state]).sort()
      );
   }

   let schools = ["OTHER - NOT LISTED"];
   if (
      formData.state &&
      formData.county &&
      formData.county !== "OTHER - NOT LISTED"
   ) {
      schools = schools.concat(locationData[formData.state][formData.county]);
   }

   return (
      <Box>
         <Typography fontSize="1.4rem" align="center" fontWeight="bold">
            Before starting, please fill out this form.
         </Typography>

         <FormControl
            sx={{
               display: "flex",
               flexDirection: "column",
               margin: 3,
            }}
         >
            <Autocomplete
               options={states}
               value={formData.state}
               getOptionLabel={(option) => option}
               onChange={(e, val) => {
                  if (formData.county || formData.school) {
                     setFormData((prevData) => {
                        return { ...prevData, county: null, school: null };
                     });
                  }
                  setFormData((prevData) => {
                     return { ...prevData, state: val };
                  });
                  handleInput("state");
               }}
               onClose={() => handleInput("state")}
               onBlur={() => handleInput("state")}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     label="State"
                     required={true}
                     error={isCompleted.state && !formData.state}
                     helperText={
                        isCompleted.state &&
                        !formData.state &&
                        "Select your state."
                     }
                  />
               )}
               sx={{ minWidth: 200, mb: 2 }}
            />

            <Autocomplete
               disabled={!formData.state}
               options={counties}
               value={formData.county}
               onChange={(e, val) => {
                  if (formData.school) {
                     setFormData((prevData) => {
                        return { ...prevData, school: null };
                     });
                  }
                  setFormData((prevData) => {
                     return { ...prevData, county: val };
                  });
                  handleInput("county");
               }}
               onOpen={() => !isCompleted.state && handleInput("state")}
               onClose={() => handleInput("county")}
               onBlur={() => handleInput("county")}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     label="County"
                     required={true}
                     error={isCompleted.county && !formData.county}
                     helperText={
                        isCompleted.county &&
                        !formData.county &&
                        "Select your county."
                     }
                  />
               )}
               sx={{ minWidth: 200, mb: 2 }}
            />

            <Autocomplete
               disabled={!formData.county}
               options={schools}
               value={formData.school}
               onChange={(e, val) => {
                  setFormData({ ...formData, school: val });
                  handleInput("school");
               }}
               onOpen={() => !isCompleted.state && handleInput("county")}
               onClose={() => handleInput("school")}
               onBlur={() => handleInput("school")}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     label="School"
                     required={true}
                     error={isCompleted.school && !formData.school}
                     helperText={
                        isCompleted.school &&
                        !formData.school &&
                        "Select your school."
                     }
                  />
               )}
               sx={{ minWidth: 200, mb: 2 }}
            />
            <FormLabel required={true} sx={{ color: "#616061" }}>
               Are you completing this before or after the Breakout Box
               experience?
            </FormLabel>
            <Select
               disabled={!formData.school}
               value={formData.order}
               onChange={(e) => {
                  setFormData({ ...formData, order: e.target.value });
                  handleInput("order");
               }}
               sx={{ minWidth: 200 }}
            >
               <MenuItem value="Before">Before</MenuItem>
               <MenuItem value="After">After</MenuItem>
               <MenuItem value="Not sure">Not sure</MenuItem>
            </Select>
         </FormControl>
         {openAlert ? (
            <Alert severity="success" sx={{m: 2, fontSize: "1rem"}}>
               Thanks! Now onto the task...
            </Alert>
         ) : (
            <Box align="center">
               <Button
                  onClick={handleSubmit}
                  variant="contained"
                  disabled={!formData.order}
                  sx={{ width: "25%", height: 40 }}
               >
                  Submit
               </Button>
            </Box>
         )}
      </Box>
   );
}
