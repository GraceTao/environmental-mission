import {
   Alert,
   Box,
   Button,
   IconButton,
   Tooltip,
   createTheme,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { useState } from "react";

export default function Notification() {
   const openNotification = localStorage.getItem("openNotification");
   const [open, setOpen] = useState(openNotification == null);

   const theme = createTheme();

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
         }}
      >
         {open ? (
            <Box
               sx={{ width: "70%" }}
               style={{ position: "absolute", zIndex: 1 }}
            >
               <Alert
                  severity="warning"
                  action={
                     <Button
                        variant="outlined"
                        onClick={() => {
                           setOpen(false);
                           localStorage.setItem("openNotification", false);
                        }}
                     >
                        close
                     </Button>
                  }
                  sx={{
                     [theme.breakpoints.up("sm")]: {
                        fontSize: "1.1rem",
                     },
                  }}
               >
                  You have been locked out of the Environmental Portal. Unlock
                  your account now or it will be terminated!
               </Alert>
            </Box>
         ) : (
            <Tooltip title="Notification">
               <IconButton
                  onClick={() => {
                     setOpen(true);
                  }}
                  style={{ position: "absolute", zIndex: 1 }}
               >
                  <WarningIcon
                     sx={{ color: "#CAC653", fontSize: 50 }}
                  ></WarningIcon>
               </IconButton>
            </Tooltip>
         )}
      </div>
   );
}
