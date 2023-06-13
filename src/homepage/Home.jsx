import {Typography} from "@mui/material";
import Instructions from "../components/Instructions";

function Home() {

   const content = 
      <Typography>
         You are an environmental compliance specialist working alongside your peers to analyze 
         the Port of Corpus Christi environment. You’re specifically interested in XYZ watershed 
         and its surrounding buildings. You will be presenting a report to your manager on your 
         findings and any recommendations for new environmental regulations.
      </Typography>

   const title = "Online Escape Room: Environmental Mission";

   return (
      <>
         <Instructions title={title} content={content}></Instructions>
      </>
   );
}

export default Home;
