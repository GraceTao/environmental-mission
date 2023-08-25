import { Box, Typography, Tab } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ContactPage({ person }) {
   return (
      <Box
         display="flex"
         flexDirection="column"
         alignItems="center"
         sx={{ backgroundColor: "#FCF6EC", padding: 2, borderRadius: 2 }}
      >
         <AccountCircleIcon
            sx={{
               color: person.color,
               fontSize: "100px",
            }}
         />
         <Typography fontSize="1.3rem" fontWeight="bold">{person.name}</Typography>
         <Typography fontSize="1.1rem">
            <i>{person.occupation}</i>
         </Typography>
         <br />
         <Typography fontSize="1.15rem"  fontFamily="Baskerville" sx={{textIndent: "2em"}}>
            {person.bio}
         </Typography>
      </Box>
   );
}
