import {
   TextField,
   Button,
   ButtonGroup,
   Box,
   Icon,
   Typography,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useLocation } from "react-router-dom";

const wqi = "5";

export default function Submit() {
   const [inputWQI, setInputWQI] = useState(sessionStorage.getItem("inputWQI"));
   const [correct, setCorrect] = useState(sessionStorage.getItem("inputWQI") === wqi);
   const [submitted, setSubmitted] = useState(sessionStorage.getItem("inputWQI") === wqi);

   const handleSubmit = (e) => {
      e.preventDefault();
      setCorrect(inputWQI === wqi);
      setSubmitted(true);
      sessionStorage.setItem("inputWQI", inputWQI);
   };

   const handleChange = (e) => {
      setInputWQI(e.target.value);
      setSubmitted(false);
   };

   const buttons = [
      <Button key="excellent" sx={{ "&:hover": { backgroundColor: "#1D9C4F  " } }}>
         Excellent (&gt;90)
      </Button>,
      <Button key="good" sx={{ "&:hover": { backgroundColor: "#B7E73E" } }}>
         Good (&gt;70&ndash;90)
      </Button>,
      <Button key="medium" sx={{ "&:hover": { backgroundColor: "#FFDE47" } }}>
         Medium (&gt;50&ndash;70)
      </Button>,
      <Button key="bad" sx={{ "&:hover": { backgroundColor: "#E52F02 " } }}>
         Bad (25&ndash;50)
      </Button>,
      <Button key="very bad" sx={{ "&:hover": { backgroundColor: "darkred" } }}>
         Very bad (&lt;25)
      </Button>,
   ];

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

   return (
      <Box ml={2}>
         <Typography mt="3%" mb="3%">
            Water Quality Index (sum of the weighted Q-values):
         </Typography>
         <TextField
            label="Enter WQI"
            variant="filled"
            defaultValue={correct ? inputWQI : ''}
            disabled={correct}
            inputProps={{
               pattern: "[0-9]*",
               title: "numbers only",
            }}
            InputLabelProps={{
               sx: {
                  "&.Mui-focused": { color: "black" },
               },
            }}
            sx={{
               mb: "5%",
               width: { xs: "50%", sm: "90%" },
            }}
            onChange={handleChange}
         ></TextField>
         <Button variant="contained" onClick={handleSubmit} disabled={correct}>
            Submit
         </Button>
         {submitted && (
            <Box>
               {correct ? (
                  <Box mb="5%">
                     <Typography mt="5%" mb="5%" lineHeight={1.5}>
                        <Icon sx={{ background: "none" }}>
                           <CheckBoxIcon sx={{ color: "green" }} />
                        </Icon>
                        <b>Correct!</b> The WQI is {inputWQI}. <br />
                     </Typography>
                     <hr color="black" />
                     <Typography mt="5%" mb="5%">
                        {" "}
                        Click on the rating below corresponding to the WQI.
                     </Typography>
                     <ButtonGroup
                        orientation={isSmallScreen ? "horizontal" : "vertical"}
                        variant="contained"
                     >
                        {buttons}
                     </ButtonGroup>
                  </Box>
               ) : (
                  <Box>
                     <Typography mt="5%" mb="5%" lineHeight={1.5}>
                        <Icon sx={{ background: "none" }}>
                           <DisabledByDefaultIcon sx={{ color: "red" }} />
                        </Icon>{" "}
                        <b>Incorrect.</b> Please try again.
                     </Typography>
                  </Box>
               )}
            </Box>
         )}
      </Box>
   );
}
