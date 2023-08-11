import { useState, useEffect } from "react";
import TopBar from "../../../components/TopBar";
import Instr from "../Instr";
import Instructions from "../../../components/Instructions";
import {
   Box,
   IconButton,
   Tooltip,
   Typography,
   OutlinedInput,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link, useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GraphSlideShow from "./graphs/GraphSlideShow";
import { solutions } from "../solns";

function createData(abbrName, formValues, qValues, setQValues) {
   const formValue = formValues ? formValues[abbrName] : "";
   const name = solutions[abbrName].fullName;
   const readingWithUnits = (
      <>
         <b>{formValue}</b> {solutions[abbrName].units}
      </>
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
         sx={{ maxWidth: 100, maxHeight: 43 }}
         onChange={handleChange}
         value={qValues[abbrName] || ""}
      ></OutlinedInput>
   );

   return { name, readingWithUnits, inputBox };
}

export default function WQIPart2() {
   const formValues = JSON.parse(sessionStorage.getItem("formValues"));

   const tableHeaders = ["Water Quality Indicator", "Measurement", "Q-Value"];
   const location = useLocation();
   const savedQValues = location.state?.qValues || {};
   const [qValues, setQValues] = useState(savedQValues);
   useEffect(() => {
      // When the component mounts, retrieve the form values from session storage
      const storedQValues = JSON.parse(sessionStorage.getItem("qValues"));
      if (storedQValues) {
         // If there are saved form values, update the state with them
         setQValues(storedQValues);
      }
   }, []);

   const rows = Object.keys(solutions).map((key) => {
      return createData(key, formValues, qValues, setQValues);
   });

   const instructions = (
      <Box display="flex" flexDirection="column" justifyContent="center">
         <Instr
            title="Task:"
            contents="Find the water quality index (WQI) of this pond and use the WQI to determine the water quality rating. If the rating is correct, you will receive a clue."
         ></Instr>
         <Instr
            title="Part Two:"
            contents="Determine the quality values (Q-values) based on the provided graphs. Use whole numbers. Record the Q-values in the table on the left. Click the top right arrow to continue."
         ></Instr>
      </Box>
   );

   return (
      <Box
         sx={{
            background: "linear-gradient(to top, #0093E5, #53E59E)",
            minHeight: "100vh",
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
         <Box sx={{ pt: { xs: 6, sm: 8 } }}>
            <Box display="flex" flexDirection="row" justifyContent="center" sx={{mb: 1}}>
               <IconButton component={Link} to="/wqi-p1" sx={{ mr: 8 }}>
                  <Tooltip title="back" arrow>
                     <ArrowCircleLeftIcon
                        sx={{ fontSize: 55, color: "blue" }}
                     />
                  </Tooltip>
               </IconButton>
               <IconButton component={Link} to="/wqi-p3" sx={{ ml: 8 }}>
                  <Tooltip title="continue" arrow>
                     <ArrowCircleRightIcon
                        sx={{ fontSize: 55, color: "blue" }}
                     />
                  </Tooltip>
               </IconButton>
            </Box>
            <Box
               display="flex"
               flexDirection={{ xs: "column", md: "row" }}
               justifyContent="space-between"
            >
               <Box width={{ xs: "100%", md: "50%" }} ml="1%">
                  <TableContainer
                     component={Paper}
                     sx={{ backgroundColor: "#fff5" }}
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
                                 <TableCell>{row.inputBox}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Box>
               <Box sx={{ position: "relative" }} minWidth="50%">
                  <Box
                     sx={{
                        position: "absolute",
                        top: { xs: "100%", md: "15%" },
                        left: "5%",
                        zIndex: 1,
                        width: "93%",
                        mt: { xs: "10%", md: 0 },
                     }}
                  >
                     <GraphSlideShow />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
}
