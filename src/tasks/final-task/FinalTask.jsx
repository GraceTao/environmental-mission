import { useState } from "react";
import {
   Alert,
   Box,
   Grid,
   IconButton,
   Dialog,
   DialogContent,
   DialogTitle,
} from "@mui/material";
import FinalTaskLogin from "./FinalTaskLogin";
import Menu from "./Menu";
import FinalReport from "./FinalReport";
import MenuIcon from "@mui/icons-material/Menu";

export default function FinalTask() {
   const [showSubmissionPage, setShowSubmissionPage] = useState(false);
   const [openMenu, setOpenMenu] = useState(true);
   const [showAlert, setShowAlert] = useState(false);

   return (
      <Box>
         <FinalTaskLogin showAlert={showAlert} setShowAlert={setShowAlert} />
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
               <DialogTitle sx={{backgroundColor: "skyblue", mb: 2}}>
                  <b>Welcome back</b> to the Environmental Portal!
               </DialogTitle>
               <DialogContent>
                  <Alert severity="info" sx={{ fontSize: "1.1rem" }}>
                     You have [ONE] task assigned but not completed: <br />
                     <br />
                     <b>1. Complete the environmental report for the Port of Corpus
                     Christi</b>
                     <ul>
                        <li><i>Due: </i>{new Date().toLocaleDateString()}</li>
                        <li><i>Criteria: </i>answer questions thoroughly and be specific</li>
                        <li><i>Submit to: </i>Environmental Affairs Manager</li>
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
               <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon sx={{ fontSize: 35, color: "black" }} />
               </IconButton>
            </Box>

            {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}

            <FinalReport
               showSubmissionPage={showSubmissionPage}
               setShowSubmissionPage={setShowSubmissionPage}
            />

            {showSubmissionPage && (
               <Dialog>
                  
               </Dialog>
            )}
         </Grid>
      </Box>
   );
}
