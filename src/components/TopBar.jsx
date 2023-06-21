import {
   AppBar,
   Box,
   Button,
   Toolbar,
   Tooltip,
   IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function TopBar({ instruction }) {
   return (
      <>
         <AppBar position="static" sx={{backgroundColor: "#94B2B980", boxShadow: 0}}>
            <Toolbar style={{ position: "relative" }}>
               <div style={{position: "absolute", left: 5}}>
                  <img
                     src="https://portofcc.com/wp-content/uploads/PortCC-2016-logo-hor.png"
                     alt="Port of Corpus Christi Logo"
                     width="250px"
							
                  />
               </div>
               <div style={{position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
						{instruction}
					</div>
					<div style={{position: "absolute", right: 5}}>
               <Tooltip title="Go Home" arrow>
                  <IconButton component={Link} to="/" size="large">
                     <HomeIcon sx={{ fontSize: 45, color: "black" }} />
                  </IconButton>
               </Tooltip>
					</div>

            </Toolbar>
         </AppBar>
      </>
   );
}
