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
   const formValues = JSON.parse(sessionStorage.getItem("formValues"));
   const qValues = JSON.parse(sessionStorage.getItem("qValues"));

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
      sessionStorage.setItem(
         "weightedValues",
         JSON.stringify(updatedWeightedValues)
      );
   };

   const inputBox = (
      <OutlinedInput
         disabled={solutions[abbrName].preFilled}
         name={abbrName}
         align="right"
         sx={{
            maxHeight: 42,
            maxWidth: 120,
            "& .MuiInputBase-input.Mui-disabled": {
               WebkitTextFillColor: "#454545",
            },
         }}
         onChange={handleChange}
         value={weightedValues[abbrName] || ""}
      ></OutlinedInput>
   );
   return { name, readingWithUnits, qValue, weight, inputBox };
}

export default function FullTable() {
   const initial = {
      FC: (solutions.FC.qValue * solutions.FC.weight).toFixed(2),
      BOD: (solutions.BOD.qValue * solutions.BOD.weight).toFixed(2),
      Turbidity: (
         solutions.Turbidity.qValue * solutions.Turbidity.weight
      ).toFixed(2),
   };
   const savedWeightedValues = location.state?.weightedValues || initial;
   const [weightedValues, setWeightedValues] = useState(savedWeightedValues);
   useEffect(() => {
      // When the component mounts, retrieve the form values from session storage
      const storedWeightedValues = JSON.parse(
         sessionStorage.getItem("weightedValues")
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
