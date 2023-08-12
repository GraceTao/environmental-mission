import React, { useEffect, useState } from "react";

import "./documents.css";

import {
   Alert,
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   TextField,
   Typography,
} from "@mui/material";

import Map from "./sitemap.jpg";

import DraggablePopper from "./DraggablePopper";
import TopBar from "../../components/TopBar";
import Instructions from "../../components/Instructions";
import Instr from "../../components/Instr";
// ADD CALCULATOR!!!

function EmailInstructions() {
   const content = (
      <div>
         Please read the email and explore the map and rules. When you have
         determined the <b>maximum</b> dimensions for the building that follow
         guidelines, click the "Reply" button to submit.
      </div>
   );
   return <Instr title="Email Task" contents={content} />;
}

const Documents = () => {
   const [open, setOpen] = useState(false);
   const [solved, setSolved] = useState(
      false || sessionStorage.getItem("solved") == "true"
   );
   const [image, setImage] = useState(false);
   const [rules, showRules] = useState(false);
   const initialHeight =
      sessionStorage.getItem("height") != null
         ? sessionStorage.getItem("height")
         : "";
   const initialWidth =
      sessionStorage.getItem("width") != null
         ? sessionStorage.getItem("width")
         : "";
   const initialSA =
      sessionStorage.getItem("sa") != null ? sessionStorage.getItem("sa") : "";
   const initialVolume =
      sessionStorage.getItem("volume") != null
         ? sessionStorage.getItem("volume")
         : "";
   const initialLength =
      sessionStorage.getItem("length") != null
         ? sessionStorage.getItem("length")
         : "";
   // console.log(initialSA);

   const [inputs, setInputs] = useState({
      height: initialHeight,
      length: initialLength,
      width: initialWidth,
      volume: initialVolume,
      sa: initialSA,
   });

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      sessionStorage.setItem("height", inputs.height);
      sessionStorage.setItem("length", inputs.length);
      sessionStorage.setItem("width", inputs.width);
      sessionStorage.setItem("volume", inputs.volume);
      sessionStorage.setItem("sa", inputs.sa);

      setOpen(false);
   };

   const handleSolve = () => {
      if (
         parseInt(inputs.height) === 215 &&
         parseInt(inputs.width) === 300 &&
         parseInt(inputs.length) === 33 &&
         parseInt(inputs.volume) === 2128500 &&
         parseInt(inputs.sa) === 162990
      ) {
         alert("Report successfully submitted!");
         setSolved(true);
         sessionStorage.setItem("solved", true);
      } else {
         alert("Report failed to process");
      }
   };

   return (
      <div className="doccontainer">
         <div className="topBarContainer">
            <TopBar
               className="bar"
               instruction={
                  <Instructions
                     content={<EmailInstructions />}
                     name={
                        <Typography
                           color="#33403d"
                           fontWeight="bold"
                           fontSize="1.2rem"
                           name="text"
                        >
                           instructions
                        </Typography>
                     }
                     title={null}
                     style={{
                        backgroundColor: "inherit",
                        "&:hover": { backgroundColor: "#94B2B990" },
                     }}
                  ></Instructions>
               }
            >
               <div style={{position: "relative", mt: 10}}>
                  {!solved ? (
                     image ? (
                        <img
                           src={Map}
                           alt="Site Map"
                           useMap="#sitemap"
                           style={{
                              width: "80%",
                              height: "auto",
                              maxWidth: "800px",
                              maxHeight: "600px",
                           }}
                        />
                     ) : (
                        <Box
                           sx={{
                              width: "60%",
                              minWidth: 200,
                              backgroundColor: "#FFFDD0",
                              "&:hover": {
                                 backgroundColor: "#FFFDD0",
                                 opacity: [0.9, 0.8, 0.7],
                              },
                              p: 3,
                              borderRadius: 2,
                              boxShadow: 10,
                              m: 3,
                           }}
                        >
                           <Typography
                              fontSize={{
                                 xs: "1rem",
                                 sm: "1.1rem",
                                 md: "1.2rem",
                              }}
                           >
                              Hello,
                              <br />
                              <br />
                              I am interested in constructing an office building
                              (roughly the shape of a rectangular prism). In
                              order to submit a formal request, I need to know
                              the dimensions of this space. I would like to
                              maximize the dimensions, as I want this to be a
                              large space. However, I am struggling to wrap my
                              head around the environmental restrictions of this
                              area.
                              <br />
                              <br />
                              An image of the area is attached below, with the
                              location of the potential building marked with an
                              X. Would you be able to provide any guidance?
                              <br />
                              <br />
                              Thanks in advance!
                              <br />
                              Sitara Patel
                           </Typography>
                        </Box>
                     )
                  ) : (
                     <div>
                        <Box
                           sx={{
                              width: "auto%",
                              height: "auto",
                              maxWidth: "300px",
                              maxHeight: "600px",
                              minHeight: "230px",
                              textAlign: "center",
                              backgroundColor: "#C4A484",
                           }}
                        >
                           <br></br>
                           Congratulations! You have correctly determined the
                           maximum dimensions of the building which complies
                           with regulations
                           <h3>
                              Your clue word is <b>soil</b>
                           </h3>
                        </Box>
                     </div>
                  )}

                  {rules && (
                     <div
                        className="DraggablePopper"
                        style={{
                           position: "absolute",
                           top: "65%",
                           left: "10%",
                           width: "40vw",
                           minWidth: "1000px",
                        }}
                     >
                        <DraggablePopper
                           l1={
                              <>
                                 A building must <b>under no circumstances</b>{" "}
                                 stretch into a protected area or forest reserve
                              </>
                           }
                           l2={
                              <>
                                 There must be a minimum of <b>100 feet</b>{" "}
                                 distance between any stream, pond, waterfall,
                                 stream, or any other small water body and a
                                 construction site
                              </>
                           }
                           l3={
                              <>
                                 A wind turbine must be at least <b>30 feet</b>{" "}
                                 higher than any buildings in its vicinity
                              </>
                           }
                           open={rules}
                           setOpen={showRules}
                        />
                     </div>
                  )}
               </div>
            </TopBar>
         </div>
         <div className="docButtons">
            <Button
               style={{
                  maxHeight: "6vh",
                  maxWidth: "6vw",
                  marginTop: "5vh",
                  marginLeft: "2vw",
               }}
               variant="contained"
               color="primary"
               onClick={() => setImage(!image)}
            >
               {image === true ? "Email" : "Map"}
            </Button>

            <div className="rulesRow">
               <Button
                  style={{
                     maxHeight: "6vh",
                     maxWidth: "6vw",
                     marginTop: "5vh",
                     marginLeft: "2vw",
                  }}
                  variant="contained"
                  color="success"
                  onClick={() => showRules(!rules)}
               >
                  Rules
               </Button>
            </div>

            <Button
               style={{
                  maxHeight: "6vh",
                  maxWidth: "6vw",
                  marginTop: "5vh",
                  marginLeft: "2vw",
               }}
               variant="contained"
               color="secondary"
               onClick={handleClickOpen}
            >
               Reply
            </Button>
            <Dialog open={open} onClose={handleClose}>
               <DialogTitle>Replying to Sitara Patel</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     Hi Sitara,
                     <br></br>
                     <br></br>
                     Thanks for checking in! Using the attached documentation, I
                     have verified that the maximum dimensions for your building
                     are as follows:
                     <br></br>
                  </DialogContentText>
                  <TextField
                     autoFocus
                     margin="dense"
                     id="height"
                     label="Height"
                     fullWidth
                     variant="standard"
                     value={inputs.height}
                     onChange={(e) =>
                        setInputs({
                           ...inputs,
                           height: e.target.value,
                        })
                     }
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="width"
                     label="Width (diagonal)"
                     value={inputs.width}
                     fullWidth
                     variant="standard"
                     onChange={(e) =>
                        setInputs({
                           ...inputs,
                           width: e.target.value,
                        })
                     }
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="length"
                     label="Length (left-right)"
                     value={inputs.length}
                     fullWidth
                     variant="standard"
                     onChange={(e) =>
                        setInputs({
                           ...inputs,
                           length: e.target.value,
                        })
                     }
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="volume"
                     label="Volume"
                     value={inputs.volume}
                     fullWidth
                     variant="standard"
                     onChange={(e) =>
                        setInputs({
                           ...inputs,
                           volume: e.target.value,
                        })
                     }
                  />
                  <TextField
                     autoFocus
                     margin="dense"
                     id="sa"
                     label="Surface Area"
                     value={inputs.sa}
                     fullWidth
                     variant="standard"
                     onChange={(e) =>
                        setInputs({
                           ...inputs,
                           sa: e.target.value,
                        })
                     }
                  />
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleSolve}>Send</Button>
                  <Button onClick={handleClose}>Cancel</Button>
               </DialogActions>
            </Dialog>
         </div>
      </div>
   );
};

export default Documents;
