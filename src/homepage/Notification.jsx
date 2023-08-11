import { Alert, Box, Button, createTheme, Typography } from "@mui/material";
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
               sx={{ width: "60%", boxShadow: 7 }}
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
                  sx={{ fontSize: "1.1rem" }}
               >
                  You have been locked out of the Environmental Portal. Unlock
                  your account now or it will be terminated!
               </Alert>
            </Box>
         ) : (
            <Button
               variant="contained"
               color="warning"
               onClick={() => {
                  setOpen(true);
               }}
               style={{
                  position: "absolute",
                  zIndex: 1,
                  height: 40,
                  backgroundColor: "#F0CD60",
               }}
               sx={{boxShadow: 5}}
            >
               <Typography fontSize="1rem" color="black">
                  open 1 notification
               </Typography>
            </Button>
         )}
      </div>
   );
}
