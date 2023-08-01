import { useEffect, useState, React } from "react";
import {
   Typography,
   Box,
   IconButton,
   Button,
   Tooltip,
   Dialog,
   useTheme,
   useMediaQuery,
} from "@mui/material";
import Instructions from "../../../components/Instructions";
import TopBar from "../../../components/TopBar";
import Instr from "../Instr";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ChatIcon from "@mui/icons-material/Chat";
import AirQuality from "./AirQuality";


const mapbg = (
   <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
         <rect width="53" height="53" fill="url(#pattern0)" />
         <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
               <use xlink: href="#image0_297_83" transform="scale(0.0208333)" />
            </pattern>
            <image id="image0_297_83" width="48" height="48" xlink: href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB5ElEQVRoge2XvW4TQRSFvxkvKNihpKPIIiioeQGj0NJR0yIhRaKkDLxBiCJEB7wCgi4ChERBSRcl2FvwU6WKjYzI6lBEIDKzu3Fsr8erzFfeubM6x7tz5hoikUhksUmHIh0qtIwybGgB0xINhMZ4ldN+7/2O/4w50vg3EA2EZjoDYn1GOiZmcgNinazzaIZaJmLyFDopfcqe83ffSetjcsbPwALQeAOR0Ew/C80To2/0li//X2rYGdAnt9IsA7LP3ZJvQPo1FzGnRn367dduNfH6DD+AlXlIOoZ7A7tnUTwGk7vbCj4h+2G2ymaA+EzWeVm05KfQykEXY9/WLmpsJNS6SXbhfdGq/wayi++QXtWua2zM0zLxUJZCib0P7NclaXzMDud/PqzqKDaw1/6K4S4o5KW2j7G32bl0UNXkG0gHG3SV0Ou8wfCkNnmV6DvSLXpLu/9KXSWkwy23s3iUkHbBbmH1EfECuF6r3mNohDF3GLWPgqQ9SDlsrSKtYbnqxm2zZiHw7otmjRIFFIwS3EP6Xb5FOTIPgvU5FP+BvjK6hvI1DKtIR2OFTB+jbWyyyZelvaB9laTDZ9zQuYpfokU62AjW51CeQsZukufbHC5ngJ8GQJC+mEILRkyhxUuhSORs8QeR51l42L2HtwAAAABJRU5ErkJggg==" />
         </defs>
      </svg>
)

function MapInstructions() {

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

   return openInstr ? (
      <Box
         display="flex"
         flexDirection="column"
         justifyContent="center"
         width="100%"
      >


         <Instr
            title={"Welcome to the Port of Corpus Christi!"}
            contents={
               `We are traveling to one of the largest U.S. ports, the Port of Corpus Christi in Texas. It is at the 
               forefront of the maritime industry and energy marketplace.`
            }
         ></Instr>
         <Instr
            title={"Port manager:"}
            contents={
               `The Port handles thousands of vessels containing crude oil, petroleum, liquefied natural gas, and more. 
               Our Environmental Management System (EMS) is ISO 14001-certified, which means we set specific environmental 
               goals and performance measures, then work to achieve them. `
            }
         ></Instr>
         <Instr
            title={"Task:"}
            contents={
               `Click around on the map to learn more about the Port of Corpus Christi’s efforts to operate in a manner 
               “conducive to environmental sustainability and resiliency.” Each window will either ask you a question whose 
               answer is a number, or give a number in <b>bold<\b>. Determine the clue word based on the numerical answers. `
            }
         ></Instr>

      </Box>
   ) : (
      <div>
         <Box
            display="flex"
            flexDirection={isSmallScreen ? "column" : "row"}
            justifyContent="center"
            margin="auto"
         >
            <div>
               <video controls autoPlay style={{ width: "90%" }}>
                  <source
                     src={map_chat_animation}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </div>
         </Box>
      </div>
   );
}

export default function MapHome() {
   const name = (
      <Typography variant="button" sx={{ fontSize: "1.2vw" }}>
         Instructions
      </Typography>
   );
   const [openClipboard, setOpenClipboard] = useState(false);
   const [openMessages, setOpenMessages] = useState(false);

   return (
      <Box
         sx={{
            backgroundImage: mapbg,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            overflow: "auto",
            backgroundAttachment: "local",
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
                  content={<MapInstructions />}
                  style={{
                     backgroundColor: "inherit",
                     "&:hover": { backgroundColor: "#94B2B990" },
                  }}
               ></Instructions>
            }
         />

         <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start" flexDirection="row">
               <IconButton
                  sx={{
                     backgroundColor: "lightgray",
                     position: { top: 5, left: 5 },
                     borderRadius: 5,
                     width: 70,
                     height: 75,
                     mr: 3,
                     mb: 1,
                     "&:hover": { backgroundColor: "white" },
                  }}
                  onClick={() => setOpenClipboard(true)}
               >
                  <Tooltip title="Clipboard" arrow>
                     <AssignmentTwoToneIcon
                        sx={{ fontSize: 65, color: "black" }}
                     />
                  </Tooltip>
               </IconButton>
            </Box>

            <Box>
               <IconButton onClick={() => setOpenMessages(true)}>
                  <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
               </IconButton>
            </Box>
            <Dialog open={openMessages} onClose={() => setOpenMessages(false)}>
               <video controls autoPlay style={{ width: "100%" }}>
                  <source
                     src={map_chat_animation}
                     alt="text messages"
                     type="video/mp4"
                  />
               </video>
            </Dialog>
         </Box>

         <CO2 />
         <Hydrogen />
         <Ship />
         <AirQuality />
         <Star />
         <Tree />
    
      </Box>
   );
}
