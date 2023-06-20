import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
   Button,
   OutlinedInput,
   InputAdornment,
   Dialog,
   DialogContent,
   DialogActions,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function createData(name, abbrName, units, formValuesRef) {
   // console.log(formValuesRef[abbrName]);
   const inputBox = (
      <OutlinedInput
         name={abbrName}
         align="right"
         endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
         sx={{ maxWidth: 200, maxHeight: 40 }}
         onChange={(e) => {
            formValuesRef.current[abbrName] = e.target.value;
         }}
         // value={formValuesRef[abbrName] ? formValuesRef[abbrName] : ""}
      ></OutlinedInput>
   );

   return { name, inputBox };
}

export default function Readings({ openClipboard, setOpenClipboard }) {
   const location = useLocation();


   const formValuesRef = location.state ? location.state.formValues : useRef({
      DO: 0,
      FC: 0,
      pH: 0,
      BOD: 0,
      deltaTemp: 0,
      Phosphates: 0,
      Nitrates: 0,
      Turbidity: 0,
      TS: 0,
   });

   console.log(formValuesRef);

   const rows = [
      createData("Dissolved oxygen", "DO", "% saturation", formValuesRef),
      createData("Fecal coliform", "FC", "col / 100 mL", formValuesRef),
      createData("pH", "pH", "", formValuesRef),
      createData("Biochemical oxygen demand", "BOD", "ppm", formValuesRef),
      createData(
         <p>&Delta; Temperature (upstream &minus; downstream)</p>,
         "deltaTemp",
         <p>&deg;C</p>,
         formValuesRef
      ),
      createData("Phosphates", "Phosphates", "ppm", formValuesRef),
      createData("Nitrates", "Phosphates", "ppm", formValuesRef),
      createData("Turbidity", "Turbidity", "inches", formValuesRef),
      createData("Total solids", "TS", "ppm", formValuesRef),
   ];

   return (
      <div>
         <Dialog
            maxWidth="xl"
            open={openClipboard ? true : false}
            onClose={() => {
               setOpenClipboard(false);
            }}
         >
            <DialogContent>
               <TableContainer
                  component={Paper}
                  sx={{
                     backgroundColor: "white",
                  }}
               >
                  <Table size="small" sx={{ boxShadow: 0 }}>
                     <TableHead>
                        <TableRow>
                           <TableCell
                              sx={{
                                 fontSize: { xs: "1rem", md: "1.2rem" },
                                 fontWeight: "bold",
                              }}
                           >
                              Water Quality Indicator
                           </TableCell>
                           <TableCell
                              sx={{
                                 fontSize: { xs: "1rem", md: "1.2rem" },
                                 fontWeight: "bold",
                              }}
                           >
                              Reading
                           </TableCell>
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
                              <TableCell>{row.inputBox}</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </DialogContent>
            <DialogActions>
               <Link to="/wqi-p2" state={{ formValues: formValuesRef }}>
                  <ArrowCircleRightIcon sx={{fontSize: 55, color: "blue"}}></ArrowCircleRightIcon>
               </Link>
            </DialogActions>
         </Dialog>
      </div>
   );
}
