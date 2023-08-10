import FinalTaskLogin from "./FinalTaskLogin";
import {Box} from "@mui/material";

export default function FinalTask() {
   return (
      <Box sx={{
         background: "linear-gradient(to bottom, #0093E5, #A8FEDD)",
         height: "100vh",
         overflow: "auto",
      }}>
         <FinalTaskLogin />
      </Box>
   )
}