import { useState, useEffect } from "react";
import TopBar from "../../../components/TopBar";
import Instr from "../Instr";
import Instructions from "../../../components/Instructions";
import { Box, Typography, OutlinedInput } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link, useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import GraphSlideShow from "./graphs/GraphSlideShow";

function createData(name, abbrName, units, formValues, qValues, setQValues) {
   const formValue = formValues ? formValues[abbrName] : "";
   const readingWithUnits = (
      <div>
         <b>{formValue}</b> {units}
      </div>
   );

   const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedQValues = { ...qValues, [name]: value };
      setQValues(updatedQValues);
      sessionStorage.setItem("qValues", JSON.stringify(updatedQValues));
   };

   const inputBox = (
      <OutlinedInput
         name={abbrName}
         align="right"
         sx={{ maxWidth: 150, maxHeight: 40 }}
         onChange={handleChange}
         value={qValues[abbrName] || ""}
      ></OutlinedInput>
   );

   return { name, readingWithUnits, inputBox };
}

export default function WQIPart2() {
   const formValues = JSON.parse(sessionStorage.getItem("formValues"));

   const tableHeaders = [
      "Water Quality Indicators",
      "Measurement You Entered",
      "Q-Value",
   ];
   const location = useLocation();
   const savedQValues = location.state?.qValues || {};
   const [qValues, setQValues] = useState(savedQValues);
   useEffect(() => {
      // When the component mounts, retrieve the form values from session storage
      const storedFormValues = JSON.parse(sessionStorage.getItem("qValues"));
      if (storedFormValues) {
         // If there are saved form values, update the state with them
         setQValues(storedFormValues);
      }
   }, []);

   const rows = [
      createData(
         "Dissolved oxygen",
         "DO",
         "% saturation",
         formValues,
         qValues,
         setQValues
      ),
      createData(
         "Fecal coliform",
         "FC",
         "col / 100 mL",
         formValues,
         qValues,
         setQValues
      ),
      createData("pH", "pH", "", formValues, qValues, setQValues),
      createData(
         "Biochemical oxygen demand",
         "BOD",
         "ppm",
         formValues,
         qValues,
         setQValues
      ),
      createData(
         <p>&Delta; Temperature (upstream &minus; downstream)</p>,
         "deltaTemp",
         <>&deg;C</>,
         formValues,
         qValues,
         setQValues
      ),
      createData(
         "Phosphates",
         "Phosphates",
         "ppm",
         formValues,
         qValues,
         setQValues
      ),
      createData(
         "Nitrates",
         "Nitrates",
         "ppm",
         formValues,
         qValues,
         setQValues
      ),
      createData(
         "Turbidity",
         "Turbidity",
         "inches",
         formValues,
         qValues,
         setQValues
      ),
      createData("Total solids", "TS", "ppm", formValues, qValues, setQValues),
   ];

   const instructions = (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Instr
            title="Task:"
            contents="Find the water quality index (WQI) of this pond and use the WQI to determine the water quality rating. If the rating is correct, you will receive a clue."
         ></Instr>
         <Instr
            title="Part Two:"
            contents="Determine the quality values (Q-values) based on the provided graphs. Record the Q-values in the chart on the left. Click the top right arrow to continue."
         ></Instr>
      </Box>
   );

   return (
      <Box
         sx={{
            background: "linear-gradient(to top, #0093E5, #53E59E)",
            height: "100vh",
            overflow: "auto",
         }}
      >
         <TopBar
            instruction={
               <Instructions
                  name={
                     <Typography
                        color="#33403d"
                        fontWeight="bold"
                        fontSize="1.2rem"
                     >
                        instructions
                     </Typography>
                  }
                  title={null}
                  content={instructions}
                  style={{
                     backgroundColor: "inherit",
                     "&:hover": { backgroundColor: "#94B2B990" },
                  }}
               ></Instructions>
            }
         />
         <Box display="flex" flexDirection="row" justifyContent="center">
            <Link to="/wqi-p1">
               <ArrowCircleLeftIcon
                  sx={{ fontSize: 55, color: "blue", mr: 5 }}
               />
            </Link>
            <Link to="/wqi-p3">
               <ArrowCircleRightIcon sx={{ fontSize: 55, color: "blue", ml: 5 }} />
            </Link>
            
         </Box>
         <Box display="flex" flexDirection="row" justifyContent="center">
            <Box ml="1%">
               <TableContainer>
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
                              <TableCell>{row.inputBox}</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Box>
            <Box sx={{position: "relative"}} minWidth="50%" ml="1%">
               <div style={{ position: "absolute", top: "20%", left: "5%", zIndex: 1, width: "90%"}} >
                  <GraphSlideShow/>
               </div>
            </Box>
         </Box>
      </Box>
   );
}
