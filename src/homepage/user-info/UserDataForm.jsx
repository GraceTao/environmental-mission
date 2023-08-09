import { useState } from "react";
import {
   Autocomplete,
   Select,
   FormControl,
   TextField,
   MenuItem,
   FormLabel,
   Button,
   Typography,
} from "@mui/material";
import axios from "axios";
import { locationData } from "./locationData";

export default function UserDataForm() {
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

   const handleInput = (key) => {
      setIsCompleted({ ...isCompleted, [key]: true });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      console.log("submitted");

      try {
         await axios.post("/api/submituserdata", { formData });
      } catch (err) {
         console.log("Error:", err);
      }
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
      <form onSubmit={handleSubmit}>
         <Typography>Please select your state, county, and school.</Typography>
         <FormControl
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
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
               sx={{ minWidth: 200 }}
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
               sx={{ minWidth: 200 }}
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
               sx={{ minWidth: 200 }}
            />
            <FormLabel required={true}>
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
         <Button type="submit" variant="contained" disabled={!formData.order}>
            Submit
         </Button>
      </form>
   );
}
