import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
   OutlinedInput,
   InputAdornment,
   Dialog,
   DialogContent,
   DialogContentText,
} from "@mui/material";
import { useRef, useState } from "react";

function createData(name, units) {
   const inputBox = (
      <OutlinedInput
         align="right"
         endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
         sx={{ maxWidth: 200, maxHeight: 40 }}
      ></OutlinedInput>
   );

   return { name, inputBox };
}

const rows = [
   createData("Dissolved oxygen", "% saturation"),
   createData("Fecal coliform", "col / 100 mL"),
   createData("pH", ""),
   createData("Biochemical oxygen demand", "ppm"),
   createData(
      <p>&Delta; Temperature (upstream &minus; downstream)</p>,
      <p>&deg;C</p>
   ),
   createData("Phosphates", "ppm"),
   createData("Nitrates", "ppm"),
   createData("Turbidity", "inches"),
   createData("Total solids", "ppm"),
];

export default function Readings({openClipboard, setOpenClipboard}) {
   return (
      <div>
         <Dialog maxWidth="xl" open={openClipboard ? true : false} onClose={() => {setOpenClipboard(false)}}>
            <DialogContent>
               <TableContainer
                  component={Paper}
                  sx={{
                     backgroundColor: "white",
                  }}
               >
                  <Table size="small" sx={{boxShadow: 0}}>
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
         </Dialog>
      </div>
   );
}
