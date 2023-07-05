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
   DialogTitle,
   DialogContent,
   DialogActions,
   Tooltip,
   Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { solutions } from "../solns";

function createData(abbrName, formValues, setFormValues) {
   const name = solutions[abbrName].fullName;
   const units = solutions[abbrName].units;

   const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedFormValues = { ...formValues, [name]: value };

      setFormValues(updatedFormValues);
      sessionStorage.setItem("formValues", JSON.stringify(updatedFormValues));
      
   };

   const inputBox = (
      <OutlinedInput
         name={abbrName}
         align="right"
         endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
         sx={{
            maxWidth: 200,
            maxHeight: 43,
            "& .MuiInputBase-input.Mui-disabled": {
               WebkitTextFillColor: "#454545",
            },
         }}
         onChange={handleChange}
         value={formValues[abbrName] || ""}
         disabled={solutions[abbrName].preFilled}
      ></OutlinedInput>
   );

   return { name, inputBox };
}

export default function Readings({ openClipboard, setOpenClipboard }) {
   const location = useLocation();
   const initial = {
      FC: solutions.FC.converted,
      BOD: solutions.BOD.converted,
      Turbidity: solutions.Turbidity.converted,
   }
   
   const savedFormValues = location.state?.formValues || initial;
  

   const [formValues, setFormValues] = useState(savedFormValues);
   sessionStorage.getItem("formValues") || sessionStorage.setItem("formValues", JSON.stringify(initial));

   useEffect(() => {
      // When the component mounts, retrieve the form values from session storage
      const storedFormValues = JSON.parse(sessionStorage.getItem("formValues"));

      if (storedFormValues) {
         // If there are saved form values, update the state with them
         setFormValues(storedFormValues);
      }
   }, []);

   const rows = Object.keys(solutions).map((key) => {
      return createData(key, formValues, setFormValues);
   });

   return (
      <div>
         <Dialog
            maxWidth="md"
            fullWidth
            open={openClipboard ? true : false}
            onClose={() => {
               setOpenClipboard(false);
            }}
         >
            <DialogTitle sx={{ backgroundColor: "lightgray" }}>
               <Typography
                  fontSize={{ xs: "1rem", md: "1.2rem" }}
                  fontFamily="tahoma"
               >
                  <b>Make sure all units match!</b> Round to two decimal places
                  if needed.
                  <b> 1&nbsp;ppm&nbsp;=&nbsp;1&nbsp;mg&nbsp;/&nbsp;L</b>
               </Typography>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#266F35" }}>
               <TableContainer
                  component={Paper}
                  sx={{ backgroundColor: "#CCEACE" }}
               >
                  <Table size="small">
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
                              Measurement
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {rows.map((row, index) => (
                           <TableRow key={index}>
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
            <DialogActions
               sx={{
                  backgroundColor: "lightgray",
                  maxHeight: 55,
               }}
            >
               <Link to="/wqi-p2">
                  <Tooltip title="continue" arrow>
                     <ArrowCircleRightIcon
                        sx={{ fontSize: { xs: 45, md: 55 }, color: "blue" }}
                     ></ArrowCircleRightIcon>
                  </Tooltip>
               </Link>
            </DialogActions>
         </Dialog>
      </div>
   );
}
