import IndicatorInfo from "./IndicatorInfo";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const disk = (
   <img
      width="100%"
      alt="Secchi disk pattern"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Secchi_disk_pattern.svg"
   ></img>
);

const turbidity = "1 foot 1 inch";

function Page1() {
   return (
      <>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            <b>Turbidity</b> is a measure of water clarity. A muddy river is
            much more turbid than a clear pond. Silt, sediment, clay, algae,
            dissolved colored organic compounds, and other particulate matter
            increase turbidity. High particulate matter concentrations can harm
            aquatic habitats and may promote the regrowth of waterborne
            pathogens, which can trigger disease outbreaks.
            <br />
            <br />
            The standard turbidity unit is the Nephelometric Turbidity unit
            (NTU).
         </Typography>
      </>
   );
}

function Page2() {
   const rows = [
      { cm1: "10 to 12", ntu1: 100, cm2: "39 to 41", ntu2: 15 },
      { cm1: "12 to 14", ntu1: 84, cm2: "41 to 44", ntu2: 14 },
      { cm1: "14 to 16", ntu1: 60, cm2: "44 to 46", ntu2: 13 },
      { cm1: "16 to 19", ntu1: 48, cm2: "46 to 49", ntu2: 12 },
      { cm1: "19 to 21", ntu1: 40, cm2: "49 to 51", ntu2: 11 },
      { cm1: "21 to 24", ntu1: 35, cm2: "51 to 54", ntu2: 10 },
      { cm1: "24 to 26", ntu1: 30, cm2: "54 to 57", ntu2: 9 },
      { cm1: "26 to 29", ntu1: 27, cm2: "57 to 60", ntu2: 8 },
      { cm1: "29 to 31", ntu1: 24, cm2: "60 to 70", ntu2: 7 },
      { cm1: "31 to 34", ntu1: 21, cm2: "70 to 85", ntu2: 6 },
      { cm1: "34 to 36", ntu1: 19, cm2: <>&gt; 85</>, ntu2: <>&lt; 5</> },
      { cm1: "36 to 39", ntu1: 17, cm2: "", ntu2: "" },
   ];
   return (
      <>
         <Typography sx={{ p: 2, fontSize: { sm: "1rem", lg: "1.2rem" } }}>
            A simple way of measuring turbidity is with a Secchi disk (the
            button you clicked is a Secchi disk). The Secchi disk is lowered by
            a string into the water until it is no longer visible. The depth at
            which the disk disappears is the measure of turbidity.
            <br />
            <br />
            In this stream, the Secchi disk disappeared at <b>{turbidity}</b>.
            <br />
            Use the following table to convert to NTU. <i>1 in = 2.54 cm</i>
         </Typography>
         <TableContainer>
            <Table size="small">
               <TableHead>
                  <TableRow>
                     <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>cm</TableCell>
                     <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>NTU</TableCell>
                     <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>cm</TableCell>
                     <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>NTU</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow key={row.cm1}>
                        <TableCell sx={{fontSize: "1rem"}}>{row.cm1}</TableCell>
                        <TableCell sx={{fontSize: "1rem"}}>{row.ntu1}</TableCell>
                        <TableCell sx={{fontSize: "1rem"}}>{row.cm2}</TableCell>
                        <TableCell sx={{fontSize: "1rem"}}>{row.ntu2}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
}

export default function Turbidity() {
   return (
      <IndicatorInfo
         icon={disk}
         position={{ top: "-30vh", left: "48vw" }}
         anchor={{ vertical: "bottom", horizontal: "center" }}
         page1={<Page1 />}
         page2={<Page2 />}
      />
   );
}
