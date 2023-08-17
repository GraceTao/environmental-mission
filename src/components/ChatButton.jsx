import {
   Box,
   IconButton,
   Dialog,
   DialogContent,
   DialogContentText,
   Tooltip,
} from "@mui/material";
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
            <DialogContent sx={{backgroundColor: "skyblue"}}>
               <DialogContentText>
                  <video autoPlay alt="text messages" controls width="100%">
                     <source src={chat} type="video/mp4" />
                  </video>
               </DialogContentText>
            </DialogContent>
         </Dialog>
         <IconButton onClick={() => setOpen(!open)} sx={style} disableRipple>
            <Tooltip title="Chat" arrow>
               <ChatIcon sx={{ fontSize: 55, color: "palegreen" }} />
            </Tooltip>
         </IconButton>
      </Box>
   );
}
