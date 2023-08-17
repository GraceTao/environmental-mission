import React from "react";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Submit = (props) => {
   const { anchorEl, setAnchorEl, sx } = props;
   const solved = Boolean(sessionStorage.getItem("solvedInspection"));

   return (
      <Popper
         open={Boolean(anchorEl)}
         anchorEl={anchorEl}
         onClose={() => {
            setAnchorEl(null);
            sessionStorage.setItem(
               "inspectionAnswers",
               JSON.stringify(props.inputs)
            );
         }}
         placement="auto-start"
         sx={{
            marginLeft: "5vw",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            fontSize: "1vh",
            backgroundColor: "#FFFDD0",
            flexDirection: "column",
            gap: "1em", // Use em units for gap between elements
            padding: "2em", // Use em units for padding
            // marginTop: "10vh",

            ...sx,
         }}
      >
         <div
            style={{
               maxHeight: "70vh", // Set the maximum height to 70vh (adjust as needed)
               overflow: "auto", // Enable scrolling when content exceeds the container height
            }}
         >
            <div
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "1rem",
                  fontSize: "1.2rem",
               }}
            >
               <b>Site Report: Environmental Investigation</b>
            </div>

            {/* Wrapped content inside a parent div */}
            <div style={{ fontSize: "1.1rem" }}>
               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "center",
                     gap: "1rem",
                     marginTop: "1rem",
                  }}
               >
                  In total,
                  <TextField
                     disabled={solved}
                     defaultValue={props.inputs.totalAreas}
                     inputProps={{ style: { maxWidth: "70px" } }}
                     onChange={(e) =>
                        props.setInputs({
                           ...props.inputs,
                           totalAreas: e.target.value,
                        })
                     }
                  />
                  areas of concern were identified.
               </div>

               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "center",
                     gap: "1rem",
                     marginTop: "2rem",
                  }}
               >
                  Of these, there is/are
                  <TextField
                     disabled={solved}
                     defaultValue={props.inputs.definiteViolations}
                     inputProps={{ style: { maxWidth: "70px" } }}
                     onChange={(e) =>
                        props.setInputs({
                           ...props.inputs,
                           definiteViolations: e.target.value,
                        })
                     }
                  />
                  definite violations.
               </div>

               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "center",
                     gap: "1rem",
                     marginTop: "1rem",
                  }}
               >
                  The remaining
                  <TextField
                     disabled={solved}
                     defaultValue={props.inputs.furtherInvestigation}
                     inputProps={{ style: { maxWidth: "70px" } }}
                     onChange={(e) =>
                        props.setInputs({
                           ...props.inputs,
                           furtherInvestigation: e.target.value,
                        })
                     }
                  />
                  warrant further investigation.
               </div>
               <br />
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     gap: "1rem",
                     whiteSpace: "nowrap",
                  }}
               >
                  Please elaborate on why we must resolve these issues:
                  <TextField
                     disabled={solved}
                     multiline
                     defaultValue={props.inputs.resolutionExplanation}
                     rows={3}
                     sx={{ width: "80%" }}
                     onChange={(e) =>
                        props.setInputs({
                           ...props.inputs,
                           resolutionExplanation: e.target.value,
                        })
                     }
                  />
                  {/* Use inputProps to set height to auto */}
               </div>
               <div
                  style={{
                     display: "flex",
                     justifyContent: "flex-end",
                     marginBottom: "2px",
                  }}
               >
                  <Button
                  disabled={solved}
                     style={{ marginTop: "2rem", marginRight: "1rem" }}
                     onClick={props.submit}
                     variant="outlined"
                  >
                     Submit
                  </Button>
                  <Button
                     style={{ marginTop: "2rem" }}
                     onClick={props.cancel}
                     variant="outlined"
                  >
                     Cancel
                  </Button>
               </div>
            </div>
         </div>
      </Popper>
   );
};

export default Submit;
