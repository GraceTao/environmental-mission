import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Box, OutlinedInput, Paper} from "@mui/material";
import { useState, useEffect } from "react";

function createData(abbrName, weightedValues, setWeightedValues) {
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
         name={abbrName}
         align="right"
         sx={{ maxHeight: 42, maxWidth: 120 }}
         onChange={handleChange}
         value={weightedValues[abbrName] || ""}
      ></OutlinedInput>
   );
   return inputBox;
}

export default function FullTable() {
   const formValues = JSON.parse(sessionStorage.getItem("formValues"));
   const qValues = JSON.parse(sessionStorage.getItem("qValues"));
   const savedWeightedValues = location.state?.weightedValues || {};
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
   const rows = [
      {
         name: "Dissolved oxygen",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.DO : ""}</b> % saturation
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.DO : ""}</b>
            </div>
         ),
         weight: 0.17,
         inputBox: createData("DO", weightedValues, setWeightedValues),
      },
      {
         name: "Fecal coliform",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.FC : ""}</b> col / 100 mL
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.FC : ""}</b>
            </div>
         ),
         weight: 0.16,
         inputBox: createData("FC", weightedValues, setWeightedValues),
      },
      {
         name: "pH",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.pH : ""}</b>
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.pH : ""}</b>
            </div>
         ),
         weight: 0.11,
         inputBox: createData("pH", weightedValues, setWeightedValues),
      },
      {
         name: "Biochemical oxygen demand",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.BOD : ""}</b> ppm
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.BOD : ""}</b>
            </div>
         ),
         weight: 0.11,
         inputBox: createData("BOD", weightedValues, setWeightedValues),
      },
      {
         name: <div>&Delta; Temperature</div>,
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.FC : ""}</b> &deg;C
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.deltaTemp : ""}</b>
            </div>
         ),
         weight: 0.10.toFixed(2),
         inputBox: createData("deltaTemp", weightedValues, setWeightedValues),
      },
      {
         name: "Phosphates",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.Phosphates : ""}</b> ppm
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.Phosphates : ""}</b>
            </div>
         ),
         weight: 0.10.toFixed(2),
         inputBox: createData("Phosphates", weightedValues, setWeightedValues),
      },
      {
         name: "Nitrates",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.Nitrates : ""}</b> ppm
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.Nitrates : ""}</b>
            </div>
         ),
         weight: 0.10.toFixed(2),
         inputBox: createData("Nitrates", weightedValues, setWeightedValues),
      },
      {
         name: "Turbidity",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.Turbidity : ""}</b> NTU
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.Turbidity : ""}</b>
            </div>
         ),
         weight: 0.08,
         inputBox: createData("Turbidity", weightedValues, setWeightedValues),
      },
      {
         name: "Total solids",
         readingWithUnits: (
            <div>
               <b>{formValues ? formValues.TS : ""}</b> ppm
            </div>
         ),
         qValue: (
            <div>
               <b>{qValues ? qValues.TS : ""}</b>
            </div>
         ),
         weight: 0.07,
         inputBox: createData("TS", weightedValues, setWeightedValues),
      },
   ];
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
         <TableContainer component={Paper} sx={{backgroundColor: "#fff5"}}>
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