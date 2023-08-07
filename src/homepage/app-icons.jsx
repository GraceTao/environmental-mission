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
         path: "/",
         color: "black",
      },
      {
         icon: PhoneIcon,
         path: "/",
         color: "darkgreen",
      },
      {
         icon: CalendarMonthIcon,
         path: "/wqi-p1",
         color: "mediumblue",
      },
        {
           icon: ContactsIcon,
           path: "/",
           color: "orangered",
        },

        {
           icon: AssignmentIcon,
           path: "/",
           color: "mediumvioletred",
        },

        {
           icon: MapIcon,
           path: "/",
           color: "firebrick",
        },

        {
           icon: WatchLaterIcon,
           path: "/",
           color: "purple",
        },
        {
           icon: ForestIcon,
           path: "/",
           color: "forestgreen",
        },
     ];

export {appIcons};