import { AppBar, Toolbar, Tooltip, IconButton, Dialog, DialogContent, DialogContentText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import logo from "./PortCC-logo-horizontal-white.png";
import Instructions from "../components/Instructions";

export default function TopBar({ instruction, children }) {
   return (
      <>
         <AppBar
            position="fixed"
            sx={{ backgroundColor: "seagreen", boxShadow: 0, height: 65 }}
            style={{ zIndex: 1 }}
         >
            <Toolbar style={{ position: "relative" }}>
               <div style={{ position: "absolute", left: 5 }}>
                  <img
                     src={logo}
                     alt="Port of Corpus Christi Logo"
                     width="250px"
                  />
               </div>
               <div
                  style={{
                     position: "absolute",
                     left: "50%",
                     transform: "translateX(-50%)",
                  }}
               >
                  {instruction}
               </div>
               <div style={{ position: "absolute", right: 5 }}>
                  <Tooltip title="Go Home" arrow>
                     <IconButton component={Link} to="/" size="large">
                        <HomeIcon sx={{ fontSize: 45, color: "black" }} />
                     </IconButton>
                  </Tooltip>
               </div>
            </Toolbar>
         </AppBar>
         {children}
      </>
   );
}
