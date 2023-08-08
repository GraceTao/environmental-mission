import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, OutlinedInput, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { solutions } from "../solns";

function createData(abbrName, weightedValues, setWeightedValues) {
   const formValues = JSON.parse(localStorage.getItem("formValues"));
   const qValues = JSON.parse(localStorage.getItem("qValues"));

   const name = solutions[abbrName].fullName;
   const readingWithUnits = (
      <>
         <b>{formValues ? formValues[abbrName] : ""}</b>{" "}
         {solutions[abbrName].units}
      </>
   );
   const qValue = <b>{qValues ? qValues[abbrName] : ""}</b>;
   const weight = solutions[abbrName].weight.toFixed(2);

   const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedWeightedValues = { ...weightedValues, [name]: value };
      setWeightedValues(updatedWeightedValues);
      localStorage.setItem(
         "weightedValues",
         JSON.stringify(updatedWeightedValues)
      );
   };

   const inputBox = (
      <OutlinedInput
         name={abbrName}
         align="right"
         sx={{ maxHeight: 42, maxWidth: 120 }}
         onChange={handleChange}
         value={weightedValues[abbrName] || ""}
      ></OutlinedInput>
   );
   return { name, readingWithUnits, qValue, weight, inputBox };
}

export default function FullTable() {
   const savedWeightedValues = location.state?.weightedValues || {};
   const [weightedValues, setWeightedValues] = useState(savedWeightedValues);
   useEffect(() => {
      // When the component mounts, retrieve the form values from session storage
      const storedWeightedValues = JSON.parse(
         localStorage.getItem("weightedValues")
      );
      if (storedWeightedValues) {
         // If there are saved form values, update the state with them
         setWeightedValues(storedWeightedValues);
      }
   }, []);

   const rows = Object.keys(solutions).map((key) => {
      return createData(key, weightedValues, setWeightedValues);
   });

   const tableHeaders = [
      "Water Quality Indicator",
      "Measurement",
      "Q-Value",
      "Weighting Factor",
      "Weighted Q-Value",
   ];
   return (
      <Box display="flex" justifyContent="center">
         <Box width="100%">
            <TableContainer
               component={Paper}
               sx={{ backgroundColor: "#fff5", mb: 3 }}
            >
               <Table size="small">
                  <TableHead>
                     <TableRow>
                        {tableHeaders.map((heading) => (
                           <TableCell
                              key={heading}
                              sx={{
                                 fontSize: { xs: "1rem", md: "1.2rem" },
                                 fontWeight: "bold",
                              }}
                           >
                              {heading}
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows.map((row) => (
                        <TableRow key={row.name}>
                           <TableCell
                              sx={{
                                 fontSize: { xs: "0.9rem", md: "1.1rem" },
                              }}
                           >
                              {row.name}
                           </TableCell>
                           <TableCell
                              sx={{
                                 fontSize: { xs: "0.9rem", md: "1.1rem" },
                              }}
                           >
                              {row.readingWithUnits}
                           </TableCell>
                           <TableCell
                              align="center"
                              sx={{
                                 fontSize: { xs: "0.9rem", md: "1.1rem" },
                              }}
                           >
                              {row.qValue}
                           </TableCell>
                           <TableCell
                              align="center"
                              sx={{
                                 fontSize: { xs: "0.9rem", md: "1.1rem" },
                              }}
                           >
                              {row.weight}
                           </TableCell>
                           <TableCell>{row.inputBox}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
      </Box>
   );
}
