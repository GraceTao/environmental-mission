import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./clue1.css";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Pesticides from "./pesticides.jpeg";
import Trash from "./trash.jpeg";
import Grass from "./grass.jpeg";
import Building from "./building.png";
import Emission from "./emissions.png";
import Popper from "@mui/material/Popper";
import Reveal from "./Reveal";
import Submit from "./Submit";
import TopBar from "../../components/TopBar";
import Instructions from "../../components/Instructions";
import Instr from "../../components/Instr";
import chat from "./inspection-chat-animation.mp4";
import ChatButton from "../../components/ChatButton";
import e from "cors";

const Clue1 = () => {
   const [openTrash, setTrash] = useState(null);
   const [openPesticide, setPesticide] = useState(null);
   const [openGrass, setGrass] = useState(null);
   const [openEmission, setEmission] = useState(null);
   const [solved, setSolved] = useState(false);
   const [openReport, setReport] = useState(false);
   const [inputs, setInputs] = useState({
      totalAreas: "",
      definiteViolations: "",
      furtherInvestigation: "",
      resolutionExplanation: "",
   });

   const handleSolve = () => {
      if (
         parseInt(inputs.totalAreas) == 4 &&
         parseInt(inputs.definiteViolations) == 1 &&
         parseInt(inputs.furtherInvestigation) == 3
      ) {
         alert("Report successfully submitted!");
         setSolved(true);
         localStorage.setItem("solved", true);
      } else {
         alert("Report failed to process");
      }
   };

   const handleCancel = () => {
      setReport(false);
   };

   return (
      <div className="container">
         <TopBar
            className="bar"
            instruction={
               <Instructions
                  name="Alejandro"
                  chat={chat}
                  buttonText="proceed to site visit"
                  instructions={
                     <Instr
                        title="Inspection Task"
                        contents={
                           <Typography fontSize="1.2rem" align="center">
                              Click around the page to locate various
                              environmental concerns. Then complete and submit
                              the report.
                           </Typography>
                        }
                     />
                  }
                  showCalendar={false}
               />
            }
         >
            <Box disply="flex" flexDirection="row" justifyContent="space-around">
               <ChatButton chat={chat} style={{ ml: 1 }} />
               {!solved ? (
                  <div>
                     <Button
                        name="report"
                        variant="contained"
                        color="secondary"
                        onClick={() => setReport(!openReport)}
                     >
                        Report
                     </Button>
                     <Submit
                        open={openReport}
                        cancel={handleCancel}
                        inputs={inputs}
                        setInputs={setInputs}
                        submit={handleSolve}
                     />
                  </div>
               ) : (
                  <div>
                     <Dialog open={solved} onClose={() => setSolved(!solved)}>
                        <DialogContent sx={{ backgroundColor: "0FBED8" }}>
                           <Typography
                              fontSize={{ xs: "1.1rem", md: "1.2rem" }}
                              align="center"
                           >
                              <b>Congratulations!</b> You have successfully
                              analyzed this site
                           </Typography>
                           <br />
                           <Typography
                              fontSize={{ xs: "1.2rem", md: "1.4rem" }}
                              align="center"
                              color="#784205"
                           >
                              Your clue word is <b>air</b>.
                           </Typography>
                        </DialogContent>
                     </Dialog>
                     <Box></Box>
                  </div>
               )}
               <Box
                  display="flex"
                  flexDirection="column"
                  width="15%"
                  minWidth="150px"
                  alignItems="flex-end"
                  position="absolute"
                  top="11%"
                  right="3%"
               >
                  <button name="emission">
                     <img
                        src={Emission}
                        alt="Emission"
                        onClick={(e) =>
                           setEmission(openEmission ? null : e.currentTarget)
                        }
                     />

                     <Reveal
                        text="A suspicious looking emission..."
                        open={openEmission}
                        setOpen={setEmission}
                        color="#8ee1fa"
                     />
                  </button>
                  <button name="building">
                     <img src={Building} alt="Building" />
                  </button>
               </Box>

               <Grid
                  container
                  columnSpacing={{ xs: 3, sm: 5, md: 7 }}
                  rowSpacing={2}
                  maxWidth="80%"
                  maxHeight="30vh"
                  // align="left"
                  position="absolute"
                  bottom="5%"
                  right={{ xs: "30%", sm: "30%", md: "200px" }}
                  left="5%"
                  // right={{xs: "50%", sm: "20%"}}
               >
                  <Grid item xs={5} sm={4}>
                     <button
                        name="pesticides"
                        onClick={(e) =>
                           setPesticide(openPesticide ? null : e.currentTarget)
                        }
                     >
                        <img src={Pesticides} alt="Pesticides" />
                        <Reveal
                           color="#f7d2f4"
                           text={`Pesticides may only be used if they have a valid EPA registration, 
                     so to determine if this is a violation or not, we need to know what kind of pesticide this is.`}
                           open={openPesticide}
                           setOpen={setPesticide}
                        />
                     </button>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                     <button
                        name="trash"
                        onClick={(e) =>
                           setTrash(openTrash ? null : e.currentTarget)
                        }
                     >
                        <img src={Trash} alt="Trash" />
                        <Reveal
                           text="Wow, good catch! Littering or illegal disposal of waste is definitely a violation. "
                           color="#F5F4BC"
                           open={openTrash}
                           setOpen={setTrash}
                        />
                     </button>
                  </Grid>
                  <Grid item xs={5} sm={4}>
                     <button
                        name="grass"
                        onClick={(e) =>
                           setGrass(openGrass ? null : e.currentTarget)
                        }
                     >
                        <img src={Grass} alt="Grass" />
                        <Reveal
                           text={`Aww poor grass! Patches of dead vegetation may be due to harmful 
                     (sometimes illegal) chemicals, but we didn't bring the necessary test kits to determine if any chemicals are indeed present.`}
                           open={openGrass}
                           setOpen={setGrass}
                           color="#9afca6"
                        />
                     </button>
                  </Grid>
                  {/* <Grid item xs={6} sm={4} md={3}></Grid> */}
               </Grid>
            </Box>
            {/* <div className="violations">
               
            </div>
            <div className="vertical">
               

               <button name="building">
                  <img src={Building} alt="Building" />
               </button>
            </div> */}
         </TopBar>
      </div>
   );
};

export default Clue1;
