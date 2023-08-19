import { useState } from "react";
import {
   Alert,
   Box,
   Grid,
   IconButton,
   Dialog,
   DialogContent,
   DialogTitle,
   Tooltip,
   Typography,
} from "@mui/material";
import FinalTaskLogin from "./FinalTaskLogin";
import Menu from "./Menu";
import FinalReport from "./FinalReport";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Certificate from "./Certificate";

export default function FinalTask() {
   const [openMenu, setOpenMenu] = useState(true);
   const [showAlert, setShowAlert] = useState(false);
   const [showCert, setShowCert] = useState(
      Boolean(sessionStorage.getItem("showCert"))
   );

   return (
      <Box>
         {!sessionStorage.getItem("correctPassword") && (
            <FinalTaskLogin showAlert={showAlert} setShowAlert={setShowAlert} />
         )}
         {!showCert ? (
            <Grid
               container
               justifyContent="space-evenly"
               sx={{
                  height: "100vh",
                  overflow: "auto",
                  backgroundImage:
                     "linear-gradient(to bottom, mediumseagreen, lightgreen, lightskyblue, royalblue)",
               }}
            >
               <Dialog
                  open={showAlert}
                  maxWidth="md"
                  onClose={() => setShowAlert(!showAlert)}
                  sx={{ position: "fixed", top: "-10%" }}
               >
                  <DialogTitle sx={{ backgroundColor: "skyblue", mb: 2 }}>
                     <b>Welcome back</b> to the Environmental Portal!
                  </DialogTitle>
                  <DialogContent>
                     <Alert severity="info" sx={{ fontSize: "1.1rem" }}>
                        You have [ONE] task assigned but not completed: <br />
                        <br />
                        <b>
                           1. Complete the Environmental Report for the Port of
                           Corpus Christi
                        </b>
                        <ul>
                           <li>
                              <i>Due: </i>
                              {new Date().toLocaleDateString()}
                           </li>
                           <li>
                              <i>Criteria: </i>answer questions thoroughly and
                              be specific
                           </li>
                           <li>
                              <i>Submit to: </i>Environmental Affairs Manager
                           </li>
                        </ul>
                     </Alert>
                  </DialogContent>
               </Dialog>

               <Box
                  position="fixed"
                  top={0}
                  left={0}
                  zIndex={2} // Ensure the icon is above the content
                  padding={2}
               >
                  <IconButton
                     onClick={() => setOpenMenu(!openMenu)}
                     sx={{
                        backgroundColor: "#ADD8E690",
                        "&:hover": { backgroundColor: "#ADD8E6" },
                     }}
                  >
                     <MenuIcon sx={{ fontSize: 35, color: "black" }} />
                  </IconButton>
               </Box>

               <Box
                  position="fixed"
                  top={0}
                  right="2%"
                  zIndex={2} // Ensure the icon is above the content
                  pt={1}
               >
                  <Tooltip title="Go Home" arrow>
                     <IconButton component={Link} to="/" size="large">
                        <HomeIcon sx={{ fontSize: 45, color: "black" }} />
                     </IconButton>
                  </Tooltip>
               </Box>

               {openMenu && (
                  <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
               )}

               <FinalReport setShowCert={setShowCert} />
            </Grid>
         ) : (
            <Box
               display="flex"
               flexDirection="column"
               alignItems="center"
               width="100%"
               height="100%"
               m={2}
            >
               <Typography
                  fontSize={{xs: "1rem", sm: "1.1rem", md: "1.2rem"}}
                  fontWeight="bold"
                  align="center"
                  mb={3}
                  backgroundColor="wheat"
                  padding="8px 15px 8px 15px"
                  borderRadius={1}
               >
                  Visit{" "}
                  <a href="https://portablelab.glideapp.io/dl/d0a5f4" target="_blank">
                     this site
                  </a>{" "}
                  to learn about careers, environmental goals, vessels, and more
                  at the Port of Corpus Christi.
               </Typography>
               <PDFViewer width="80%" height="80%">
                  <Certificate />
               </PDFViewer>
            </Box>
         )}
      </Box>
   );
}
