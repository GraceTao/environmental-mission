import {
   List,
   ListItem,
   Drawer,
   ListItemIcon,
   Typography,
   Divider,
   IconButton,
} from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import AssessmentIcon from "@mui/icons-material/Assessment";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Menu({ openMenu, setOpenMenu }) {
   const menuItems = [
      {
         icon: AccountCircleIcon,
         label: "Profile",
      },
      {
         icon: ChecklistIcon,
         label: "To Do",
      },
      {
         icon: FolderSpecialIcon,
         label: "My Files",
      },
      {
         icon: PeopleAltIcon,
         label: "My Groups",
      },
      {
         icon: AssessmentIcon,
         label: "Data",
      },
   ];

   return (
      <Drawer
         anchor="left"
         open={openMenu}
         variant="persistent"
         sx={{
            "& .MuiDrawer-paper": {
               boxSizing: "border-box",
               boxShadow: 10, // Add shadow
            },
            zIndex: 2
         }}
      >
         <List>
            <ListItem sx={{pl: "70%"}}>
               <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <ChevronLeftIcon sx={{fontSize: 30}} />
               </IconButton>
            </ListItem>
            <ListItem sx={{ pb: 2 }}>
               <Typography color="darkgreen" fontWeight="bold" fontSize="1.3rem">
                  Environmental Portal
               </Typography>
            </ListItem>
            <Divider />
            {menuItems.map((item) => (
               <ListItem
                  key={item.label}
                  sx={{
                     mt: 3,
                     pl: 3,
                     backgroundColor:
                        item.label === "To Do" ? "lightblue" : "transparent", // Adjust background color conditionally
                     boxShadow: item.label === "To Do" ? 7 : 0, // Add boxShadow conditionally
                     border: item.label === "To Do" ? "solid #60C8E5 " : "none"
                  }}
               >
                  <ListItemIcon>
                     <item.icon
                        sx={{
                           fontSize: item.label === "To Do" ? 35 : 27,
                           color: item.label === "To Do" ? "black" : "inherit",
                        }}
                     />
                  </ListItemIcon>
                  <Typography
                     fontSize={item.label === "To Do" ? "1.1rem" : "1rem"}
                     fontWeight={item.label === "To Do" ? "bold" : "inherit"}
                  >
                     {item.label}
                  </Typography>
               </ListItem>
            ))}
         </List>
      </Drawer>
   );
}
