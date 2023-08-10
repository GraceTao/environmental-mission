import React, {useEffect, useState} from "react"

import './documents.css';

import { Avatar } from "@mui/material"



import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import Button from "@mui/material/Button"
import Map from './sitemap.jpg'


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Popper from '@mui/material/Popper';
import DraggablePopper from './DraggablePopper';
import TopBar from "../../components/TopBar";
import Instructions from "../../components/Instructions";



const Documents = () => {
  const [open, setOpen] = React.useState(false);
  const [solved, setSolved] = React.useState(false);
  const [image, setImage] = React.useState(false)
  const [rules, showRules] = React.useState(false)
  const [inputs, setInputs] = useState({
    height: "",
    length: "",
    width: "",
    volume: "",
    sa: ""
  });


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSolve = () => {

    if(parseInt(inputs.width)==300 && parseInt(inputs.length)==33
    && parseInt(inputs.height)==215 && parseInt(inputs.volume) == 2128500
    && parseInt(inputs.sa) == 162990
    
    
    ) {
      alert("Report successfully submitted!")
      setSolved(true);
      localStorage.setItem("solved", true);
    }
    else{
      alert("Report failed to process");
    }
    
    setSolved(true);
    localStorage.setItem("solved", true );
  };

  return (
    <div className="doccontainer">
      <div className="topBarContainer">
      <TopBar
           
          
         />
     </div>
      <div className = "base">
     {image ? (
      <img
        src={Map}
        alt="Site Map"
        useMap="#sitemap"
        style={{
          width: "80%", // Adjust the width as needed (e.g., "50%", "300px", etc.)
          height: "auto", // Keeps the aspect ratio, so the image won't be stretched
          maxWidth: "800px", // Optional: Set a maximum width for the image
          maxHeight: "600px" // Optional: Set a maximum height for the image
          
        }}>
        
    </img>
     )
     :
     (
      <Box
      sx={{
        
        width: "auto%", // Adjust the width as needed (e.g., "50%", "300px", etc.)
        height: "auto", // Keeps the aspect ratio, so the image won't be stretched
        maxWidth: "800px", // Optional: Set a maximum width for the image
        maxHeight: "600px" // Optional: Set a maximum height for the image
        ,backgroundColor: '#FFFDD0',
        '&:hover': {
          backgroundColor: '#FFFDD0',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
    
      
       
       <p> 

       Hey Maggie, 
       <br></br>
       <br></br>

I am interested in constructing an office building (roughly the shape of a rectangular prism). In order to submit a formal request, I need to know the dimensions of this space. I would like to maximize the dimensions, as I want this to be a large space. However, I am struggling to wrap my head around the environmental restrictions of this area. 

An image of the area is attached below, with the location of the potential building marked with an X Would you be able to provide any guidance?
<br></br>
<br></br>
Thanks in Advance!

<br></br>
Sitara Patel 
       </p>
       </Box>

     )}
    
    {
      rules && 
    <div
          className="DraggablePopper"
          style={{
            position: "absolute",
            top: "10%", // Adjust the top position as needed
            left: "10%", // Adjust the left position as needed
            width: "40vw",
            minWidth:"1000px",
            
          }}
        >
          <DraggablePopper l1="1. A building must under no circumstances stretch into a protected area or forest reserve"
          l2="
          2. There must be a minimum of 100 feet distance between any stream, pond, waterfall, stream, or any other small water body and a construction site 
          "
          l3 = "3. A wind turbine must be at least 30 feet higher than any buildings in its vicinity"
           />
        </div>
}
    
     </div>
     
    
      

      <div class = "docButtons">
      
     
     

      <Button
  style={{
    maxHeight: "6vh",
    maxWidth: "6vw",
    marginTop: "5vh",
    marginLeft: "2vw"
  }}
  variant="contained"
  color="primary"
  onClick={() => setImage(!image)}
>
  {image === true ? 'Email' : 'Map'}
</Button>
      
      <div className = "rulesRow">
    
      <Button
        style = {{
          maxHeight:"6vh",
          maxWidth:"6vw",
          marginTop:"5vh",
          marginLeft:"2vw"

         }}
        variant="contained"
        color="success"
        onClick = {()=> showRules(!rules)}
       
        
      >
        
       Rules
      
      </Button>
    
      </div>

<Button
        
        style = {{
          maxHeight:"6vh",
          maxWidth:"6vw",
          marginTop:"5vh",
          marginLeft:"2vw"
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
            Thanks for checking in! Using the attached documentation, I have verified that the maximum
            dimensions for your building are as follows:
            <br></br>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="height"
            label="Height"
            fullWidth
            variant="standard"
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
