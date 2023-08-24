import StarIcon from "@mui/icons-material/Star";
import IconInfo from "./IconInfo";
import { Typography, Box } from "@mui/material";

const eisParts = [
   <>
      An <span style={{ color: "midnightblue" }}>Introduction</span> including a
      statement of the Purpose and Need of the Proposed Action.
   </>,
   <>
      A description of the{" "}
      <span style={{ color: "darkgreen" }}>Affected Environment</span>.
   </>,
   <>
      {" "}
      A <span style={{ color: "#6008A9" }}>Range of Alternatives</span> to the
      proposed action, such as what would happen if no action was taken or the
      least environmentally harmful action. This is usually the most scrutinized
      part.
   </>,
   <>
      An{" "}
      <span style={{ color: "#9B4C05" }}>
         Analysis of Environmental Impacts
      </span>{" "}
      of each of the possible alternatives, including impacts on threatened or
      endangered species, air and water quality, and historical sites.
   </>,
];

function Page1() {
   return (
      <Box sx={{ fontSize: { sm: "1rem", lg: "1.2rem" } }}>
         <Typography sx={{ p: 2 }} align="center" fontSize="inherit">
            In December 2022, the Port of Corpus Christi received funding for
            the fourth and final part of their ship channel improvement project
            (CIP). The project will deepen the channel from 47 feet Mean Lower
            Low Water (MLLW) to 54 feet MLLW and widen the channel to 530 feet.
            <br />
            <br />
            The U.S. environmental law requires any undertaking that may
            significantly affect the human environment to submit an
            Environmental Impact Statement (EIS). The CIP, as well as a current
            proposal to further deepen the channel to ~75 feet MLLW, both
            require an EIS.
         </Typography>
         <Typography sx={{pl: 2, pt: 2, fontSize: "inherit" }}>
            <b>Parts of an EIS:</b>
         </Typography>
         <ol>
            {eisParts.map((part, index) => (
               <li key={index}>
                  <Typography fontSize="inherit" mb={0.5}>
                     {part}
                  </Typography>
               </li>
            ))}
         </ol>
         <br />
         <Typography
            sx={{ p: 2, fontSize: "inherit" }}
            align="center"
         >
            <b>
               What part (1, 2, 3, or 4) of an EIS is most considerably
               reviewed?
            </b>
            <br />
            <br />
         </Typography>
      </Box>
   );
}

export default function Star() {
   return (
      <IconInfo
         icon={
            <StarIcon
               sx={{
                  color: "yellow",
                  width: "100%",
                  height: "100%",
                  boxShadow: 5,
                  backgroundColor:"goldenrod",
                  borderRadius: '8%'
               }}
            />
         }
         position={{ top: "35vh", left: "30vw" }}
         page1={<Page1 />}
      />
   );
}
