import { Box, IconButton, Dialog, Tooltip } from "@mui/material";
import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";

export default function ChatButton({ chat, style }) {
   const [open, setOpen] = useState(false);
   
   return (
      <Box>
         <Dialog
            open={open}
            onClose={() => setOpen(!open)}
            fullWidth
            maxWidth="sm"
         >
            <video autoPlay alt="text messages" controls>
               <source src={chat} type="video/mp4" />
            </video>
         </Dialog>
         <IconButton onClick={() => setOpen(!open)} sx={style}>
            <Tooltip title="Chat" arrow>
               <ChatIcon sx={{ fontSize: 55, color: "lightgreen" }} />
            </Tooltip>
         </IconButton>
      </Box>
   );
}
