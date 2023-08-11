import React, { useState } from "react";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";

const DraggablePopper = (props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>

      <Draggable
        handle=".handle"
        position={null}
        
      >
        <Paper
          elevation={3}
          className="handle"
          style={{
            width: "30%",
            display: "flex",
            backgroundColor: "#8ce9f5",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",

          
          }}
            
            
            
            
         
          
        >
          <h2> Rules for Development</h2>
          <div> {props.l1}</div>
          <div> {props.l2}</div>
          <div> {props.l3}</div>
          
        </Paper>
      </Draggable>
    </div>
  );
};

export default DraggablePopper;
