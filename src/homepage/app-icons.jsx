import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";
import ContactsIcon from "@mui/icons-material/Contacts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CollectionsIcon from "@mui/icons-material/Collections";
import CoPresentIcon from "@mui/icons-material/CoPresent";

export function appIcons() {
    return ([
        {
           icon: PhoneIcon,
           path: "/",
           color: "green",
        },
        {
           icon: ContactsIcon,
           path: "/",
           color: "blue",
        },
        {
           icon: CalendarMonthIcon,
           path: "/wqi-p1",
           color: "red",
        },
        {
           icon: AssignmentIcon,
           path: "/",
           color: "purple",
        },
        {
           icon: MapIcon,
           path: "/map-home",
           color: "brown",
        },
        {
           icon: MailIcon,
           path: "/",
           color: "darkred",
        },
        {
           icon: CollectionsIcon,
           path: "/",
           color: "orange",
        },
        {
           icon: CoPresentIcon,
           path: "/",
           color: "black",
        },
     ])
    };