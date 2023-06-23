import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
   Box,
   Button,
   OutlinedInput,
   InputAdornment,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   Tooltip,
   Typography,
} from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function createData(name, abbrName, units, formValues, setFormValues) {
   const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedFormValues = { ...formValues, [name]: value };
      setFormValues(updatedFormValues);
      sessionStorage.setItem("formValues", JSON.stringify(updatedFormValues));
   };
   // console.log(formValues[abbrName]);
   const inputBox = (
      <OutlinedInput
         name={abbrName}
         align="right"
         endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
         sx={{ maxWidth: 200, maxHeight: 43 }}
         onChange={handleChange}
         value={formValues[abbrName] || ""}
      ></OutlinedInput>
   );

   return { name, inputBox };
}

export default function Readings({ openClipboard, setOpenClipboard }) {
   const location = useLocation();
   const savedFormValues = location.state?.formValues || {};
   const [formValues, setFormValues] = useState(savedFormValues);
   const [openSampleConversion, setOpenSampleConversion] = useState(false);

   useEffect(() => {
      // When the component mounts, retrieve the form values from session storage
      const storedFormValues = JSON.parse(sessionStorage.getItem("formValues"));

      if (storedFormValues) {
         // If there are saved form values, update the state with them
         setFormValues(storedFormValues);
      }
   }, []);

   const rows = [
      createData(
         "Dissolved oxygen",
         "DO",
         "% saturation",
         formValues,
         setFormValues
      ),
      createData(
         "Fecal coliform",
         "FC",
         "col / 100 mL",
         formValues,
         setFormValues
      ),
      createData("pH", "pH", "", formValues, setFormValues),
      createData(
         <p>BOD5 (day 0 DO &minus; day 5 DO)</p>,
         "BOD",
         "ppm",
         formValues,
         setFormValues
      ),
      createData(
         <p>&Delta; Temperature (upstream &minus; downstream)</p>,
         "deltaTemp",
         <p>&deg;C</p>,
         formValues,
         setFormValues
      ),
      createData("Phosphates", "Phosphates", "ppm", formValues, setFormValues),
      createData("Nitrates", "Nitrates", "ppm", formValues, setFormValues),
      createData("Turbidity", "Turbidity", "NTU", formValues, setFormValues),
      createData("Total solids", "TS", "ppm", formValues, setFormValues),
   ];

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
                  fontSize={{ xs: "1.1rem", md: "1.3rem" }}
                  fontFamily="tahoma"
               >
                  Make sure all units match! Round to two decimal places if
                  needed.
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
            <DialogActions
               sx={{
                  backgroundColor: "lightgray",
                  justifyContent: "space-between",
               }}
            >
               <Button
                  variant="contained"
                  onClick={() => {
                     setOpenSampleConversion(true);
                  }}
               >
                  Sample unit conversion
               </Button>
               <Link to="/wqi-p2">
                  <Tooltip title="continue" arrow>
                     <ArrowCircleRightIcon
                        sx={{ fontSize: 55, color: "blue" }}
                     ></ArrowCircleRightIcon>
                  </Tooltip>
               </Link>
            </DialogActions>
         </Dialog>
         <Dialog
            maxWidth="md"
            fullWidth
            open={openSampleConversion}
            onClose={() => {
               setOpenSampleConversion(false);
            }}
         >
            <DialogContent>
               <Typography fontSize="1.1rem">
                  The goal is to use{" "}
                  <span style={{ color: "blue" }}>
                     <b>intermediate units</b>
                  </span>{" "}
                  to convert between the{" "}
                  <span style={{ color: "green" }}>
                     <b>initial</b>
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "purple" }}>
                     <b>final</b>
                  </span>{" "}
                  units, then <s>cancel out</s> those intermediate units along the way
                  with fractions.
                  <br />
                  <br />
                  <b>Convert 3 days to seconds.</b>
                  <br />
                  <span style={{ color: "green" }}>
                     <b>days</b>
                  </span>
                  &nbsp;&rarr;&nbsp;
                  <span style={{ color: "blue" }}>
                     <b>hours</b>
                  </span>
                  &nbsp;&rarr;&nbsp;
                  <span style={{ color: "blue" }}>
                     <b>minutes</b>
                  </span>
                  &nbsp;&rarr;&nbsp;
                  <span style={{ color: "purple" }}>
                     <b>seconds</b>
                  </span>
                  <br />
                  <br />
                  Step
                  1:&emsp;3&nbsp;<s>days</s>&nbsp;*&nbsp;(24&nbsp;hours&nbsp;/&nbsp;1&nbsp;<s>day</s>)&nbsp;=&nbsp;72&nbsp;hours
                  <br />
                  Step
                  2:&emsp;72&nbsp;<s>hours</s>&nbsp;*&nbsp;60&nbsp;minutes&nbsp;/&nbsp;1&nbsp;<s>hour</s>&nbsp;=&nbsp;4320&nbsp;minutes
                  <br />
                  Step
                  3:&emsp;4320&nbsp;<s>minutes</s>&nbsp;*&nbsp;60&nbsp;seconds&nbsp;/&nbsp;1&nbsp;<s>minute</s>&nbsp;=&nbsp;259200&nbsp;seconds
                  <br />
                  <br />
                  In one line: <br />
                  3&nbsp;days&nbsp;*&nbsp;(24&nbsp;hours&nbsp;/&nbsp;1&nbsp;day)&nbsp;*&nbsp;(60&nbsp;minutes&nbsp;/&nbsp;1&nbsp;hour)&nbsp;*&nbsp;(60&nbsp;seconds&nbsp;/&nbsp;1&nbsp;minute)
                  =&nbsp;259200&nbsp;seconds
                  <br />
                  <br />
                  <b>3&nbsp;days&nbsp;=&nbsp;259200&nbsp;seconds</b>
               </Typography>
            </DialogContent>
         </Dialog>
      </div>
   );
}
