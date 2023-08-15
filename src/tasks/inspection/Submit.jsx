import React from "react";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';


const Submit = (props) => {
  const { text, open, sx } = props;

  return (
    <Popper
      open={open}
      sx={{
        marginLeft: "5vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        fontSize: "1vh",
        backgroundColor: "#FFFDD0",
        flexDirection: "column",
        gap: "1em", // Use em units for gap between elements
        padding: "1em", // Use em units for padding
        marginTop:"10vh",

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
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <h1>Site Report: Environmental Investigation</h1>



      </div>


      {/* Wrapped content inside a parent div */}
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <h3> In total, </h3>
          <TextField inputProps={{ style: { height: "auto", fontSize: "1vw" } }} 
          onChange={(e) =>
            props.setInputs({
              ...props.inputs,
              totalAreas: e.target.value,
            })
          }
          
          />
          <h3> areas of concern were identified </h3>
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
          <h3> Of these there is/are </h3>
          <TextField inputProps={{ style: { height: "auto", fontSize: "1vw" } }}
           onChange={(e) =>
            props.setInputs({
              ...props.inputs,
              definiteViolations: e.target.value,
            })
          }
          />
          <h3> definite violations </h3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem"
          }}
        >
          <h3> The remaining </h3>
          <TextField inputProps={{ style: { height: "auto", fontSize: "1vw" } }} 

          onChange={(e) =>
            props.setInputs({
            ...props.inputs,
            furtherInvestigation: e.target.value,
  })
}
          
          />
          <h3> warrant further investigation</h3>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",

            whiteSpace: "nowrap",
          }}
        >
          <h3> Please elaborate on why we must resolve these issues </h3>
          <TextField multiline inputProps={{ style: { height: "auto", fontSize: "1vw",  gap: "1rem" } }
        
        } 
        onChange={(e) =>
          props.setInputs({
            ...props.inputs,
            resolutionExplanation: e.target.value,
          })
        }
        
        />
          {/* Use inputProps to set height to auto */}
        </div>

        <Button style={{ marginTop: "2rem" }} onClick={props.submit}>Submit</Button>
        <Button style={{ marginTop: "2rem" }} onClick={props.cancel}>
          Cancel
        </Button>
      </div>
      </div>
    </Popper>
  );
};

export default Submit;

