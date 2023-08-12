import React, { useState } from "react";
import Draggable from "react-draggable";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DraggablePopper = ({ l1, l2, l3, open, setOpen }) => {
   return (
      <div>
         <Draggable handle=".handle" position={null}>
            <Paper
               elevation={3}
               className="handle"
               sx={{
                  backgroundColor: "#8ce9f5",
                  p: 1,
                  pl: 0,
                  zIndex: 2,
                  position: "relative",
               }}
            >
               <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
               >
                  <Typography sx={{ mt: 1, ml: 2, fontSize: {xs: "0.9rem", sm: "1rem"} }}>
                     <i>Drag me!</i>
                  </Typography>
                  <IconButton onClick={() => setOpen(false)}>
                     <CloseIcon />
                  </IconButton>
               </Box>
               <Typography
                  fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                  fontWeight="bold"
                  align="center"
               >
                  Rules for Development
               </Typography>
               <ol>
                  <li>
                     <Typography
                        sx={{
                           fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                           mb: 1,
                        }}
                     >
                        {l1}
                     </Typography>
                  </li>
                  <li>
                     <Typography
                        sx={{
                           fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                           mb: 1,
                        }}
                     >
                        {l2}
                     </Typography>
                  </li>
                  <li>
                     <Typography
                        sx={{
                           fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        }}
                     >
                        {l3}
                     </Typography>
                  </li>
               </ol>
            </Paper>
         </Draggable>
      </div>
   );
};

export default DraggablePopper;
