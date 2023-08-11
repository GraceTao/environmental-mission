import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";
import ContactsIcon from "@mui/icons-material/Contacts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ForestIcon from '@mui/icons-material/Forest';
const appIcons = 
    [
      {
         icon: MailIcon,
         name: "MailIcon",
         path: "/email",
         color: "black",
      },
      {
         icon: PhoneIcon,
         name: "PhoneIcon",
         path: "/",
         color: "darkgreen",
      },
      {
         icon: CalendarMonthIcon,
         name: "CalendarIcon",
         path: "/wqi-p1",
         color: "mediumblue",
      },
        {
           icon: ContactsIcon,
           name: "ContactsIcon",
           path: "/",
           color: "orangered",
        },

        {
           icon: AssignmentIcon,
           name: "AssignmentIcon",
           path: "/",
           color: "rebeccapurple",
        },

        {
           icon: MapIcon,
           name: "MapIcon",
           path: "/",
           color: "firebrick",
        },

        {
           icon: WatchLaterIcon,
           name: "ClockIcon",
           path: "/",
           color: "mediumvioletred",
        },
        {
           icon: ForestIcon,
           name: "ForestIcon",
           path: "/account",
           color: "forestgreen",
        },
     ];

export {appIcons};
