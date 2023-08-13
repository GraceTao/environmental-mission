import React, { useEffect, useState } from "react";

import "./documents.css";

import {
   Box,
   Button,
   Dialog,
   DialogContent,
   Typography,
} from "@mui/material";

import Map from "./sitemap.jpg";
import Calculator from "../../components/Calculator";
import DraggablePopper from "./DraggablePopper";
import TopBar from "../../components/TopBar";
import Instructions from "../../components/Instructions";
import Instr from "../../components/Instr";
import Response from "./Response";

function EmailInstructions() {
   const content = (
      <>
         Please read the email and explore the map and rules. When you have
         determined the <b>maximum</b> dimensions for the building that follow
         guidelines, click the "Reply" button to submit.
      </>
   );
   return <Instr title="Email Task" contents={content} />;
}

const Documents = () => {
   const [openResponse, setOpenResponse] = useState(false);
   const [solved, setSolved] = useState(
      false || localStorage.getItem("solvedEmail") == "true"
   );
   const [image, setImage] = useState(false);
   const [rules, showRules] = useState(false);
   const initialHeight =
      localStorage.getItem("height") != null
         ? localStorage.getItem("height")
         : "";
   const initialWidth =
      localStorage.getItem("width") != null
         ? localStorage.getItem("width")
         : "";
   const initialSA =
      localStorage.getItem("sa") != null ? localStorage.getItem("sa") : "";
   const initialVolume =
      localStorage.getItem("volume") != null
         ? localStorage.getItem("volume")
         : "";
   const initialLength =
      localStorage.getItem("length") != null
         ? localStorage.getItem("length")
         : "";
   // console.log(initialSA);

   const [inputs, setInputs] = useState({
      height: initialHeight,
      length: initialLength,
      width: initialWidth,
      volume: initialVolume,
      sa: initialSA,
   });

   return (
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
         <Box position="fixed" top={70} left={"4%"} zIndex={1}>
            <Calculator />
         </Box>

         <Box position="relative" mt={13}>
            {rules && (
               <Box
                  className="DraggablePopper"
                  sx={{
                     position: "absolute",
                     top: "20vh",
                     right: "3%",
                     width: "25vw",
                     minWidth: "200px",
                  }}
               >
                  <DraggablePopper
                     l1={
                        <>
                           A building must <b>under no circumstances</b> stretch
                           into a protected area or forest reserve
                        </>
                     }
                     l2={
                        <>
                           There must be a minimum of <b>100 feet</b> distance
                           between any stream, pond, waterfall, stream, or any
                           other small water body and a construction site
                        </>
                     }
                     l3={
                        <>
                           A wind turbine must be at least <b>30 feet</b> higher
                           than any buildings in its vicinity
                        </>
                     }
                     open={rules}
                     setOpen={showRules}
                  />
               </Box>
            )}

            <Response
               open={openResponse}
               setOpen={setOpenResponse}
               inputs={inputs}
               setInputs={setInputs}
               solved={solved}
               setSolved={setSolved}
            />

            <Box
               display="flex"
               flexDirection="row"
               justifyContent={{ xs: "space-between", sm: "center" }}
               position="relative"
               pl={2}
               pr={2}
            >
               {image ? (
                  <img
                     src={Map}
                     alt="Site Map"
                     useMap="#sitemap"
                     style={{
                        width: "53%",
                        minWidth: 500,
                        height: "auto",
                     }}
                  />
               ) : (
                  <Box
                     sx={{
                        width: "53%",
                        minWidth: 500,
                        backgroundColor: "#FFFDD0",
                        "&:hover": {
                           backgroundColor: "#FFFDD0",
                           opacity: [0.9, 0.8, 0.7],
                        },
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 10,
                        boxSizing: "border-box",
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
                        (roughly the shape of a rectangular prism). In order to
                        submit a formal request, I need to know the dimensions
                        of this space. I would like to maximize the dimensions,
                        as I want this to be a large space. However, I am
                        struggling to wrap my head around the environmental
                        restrictions of this area.
                        <br />
                        <br />
                        An image of the area is attached below, with the
                        location of the potential building marked with an X.
                        Would you be able to provide any guidance?
                        <br />
                        <br />
                        Thanks in advance!
                        <br />
                        Sitara Patel
                     </Typography>
                  </Box>
               )}

               <Box pr={2}>
                  <Button
                     style={{
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
                        marginTop: "5vh",
                        marginLeft: "2vw",
                     }}
                     variant="contained"
                     color="secondary"
                     onClick={() => {
                        setOpenResponse(!openResponse);
                     }}
                  >
                     Reply
                  </Button>
               </Box>
            </Box>

            <Dialog open={solved} onClose={() => setSolved(!solved)}>
               <DialogContent sx={{ backgroundColor: "#D2F6E3" }}>
                  <Typography
                     fontSize={{ xs: "1.1rem", md: "1.2rem" }}
                     align="center"
                  >
                     <b>Congratulations!</b> You have correctly determined the
                     maximum dimensions of the building that comply with
                     regulations.
                  </Typography>
                  <br />
                  <Typography
                     fontSize={{ xs: "1.2rem", md: "1.4rem" }}
                     align="center"
                     color="#784205"
                  >
                     Your clue word is <b>soil</b>.
                  </Typography>
               </DialogContent>
            </Dialog>
         </Box>
      </TopBar>
   );
};

export default Documents;
