import { Box, Typography } from "@mui/material";

export default function Instr({ title, contents }) {
   return (
      <Box
         display="flex"
         flexDirection="column"
         alignItems="center"
         margin="10px 10px 20px 10px"
      >
         <Typography
            fontSize="1.5rem"
            fontWeight="700"
            align="center"
            lineHeight={2}
         >
            {title}
         </Typography>
         <Typography fontSize="1.2rem" align="center">
            {contents}
         </Typography>
      </Box>
   );
}
