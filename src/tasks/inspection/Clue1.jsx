import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./clue1.css";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";

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

const Clue1 = () => {
   const [openTrash, setTrash] = useState(false);
   const [openPesticide, setPesticide] = useState(false);
   const [openGrass, setGrass] = useState(false);
   const [openEmission, setEmission] = useState(false);
   const [solved, setSolved] = useState(false);
   const [openReport, setReport] = useState(false);
   const [text, setText] = useState("test");
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
                           Click around the image to locate various
                           environmental concerns. Then complete and submit the
                           report.
                        </Typography>
                     }
                  />
               }
               showCalendar={false}
            />
         }
      >
         <div className="container">
            <div className="violations">
               <button
                  name="pesticides"
                  onClick={() => setPesticide(!openPesticide)}
               >
                  {openPesticide && (
                     <Reveal
                        color="#f7d2f4"
                        text="Pesticides may only be used if they have a valid EPA registration. So to determine if this is a violation we need to know what kind of pesticide this is"
                        open={openPesticide}
                        sx={{
                           left: "6vw",
                        }}
                     />
                  )}
                  <img src={Pesticides} alt="Pesticides" />
               </button>

               <button name="trash" onClick={() => setTrash(!openTrash)}>
                  <img src={Trash} alt="Trash" />
                  {openTrash && (
                     <Reveal
                        text="Wow, good catch! Littering or illegal disposal of waste is definitely a violation. "
                        color="#b1f0b9"
                        open={openTrash}
                        sx={{
                           left: "32vw",
                        }}
                     />
                  )}
               </button>

               <button name="grass" onClick={() => setGrass(!openGrass)}>
                  <img src={Grass} alt="Grass" />
                  <Reveal
                     text="Aww poor grass! Patches of dead vegetation may be due to harmful (sometimes illegal) chemicals "
                     open={openGrass}
                     color="#9afca6"
                     sx={{
                        left: "57vw",
                     }}
                  />
               </button>
            </div>
            <div className="vertical">
               <button name="emission">
                  <img
                     src={Emission}
                     alt="Emission"
                     onClick={() => setEmission(!openEmission)}
                  />

                  <Reveal
                     text="A suspicious looking emission..."
                     open={openEmission}
                     color="#8ee1fa"
                     sx={{
                        left: "80svw",
                        top: "10vh",
                     }}
                  />
               </button>

               <button name="building">
                  <img src={Building} alt="Building" />
               </button>
            </div>
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
                  />{" "}
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
         </div>
      </TopBar>
   );
};

export default Clue1;
