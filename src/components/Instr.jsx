import { Box, Typography } from "@mui/material";

export default function Instr({ title, contents }) {
   return (
      <Box
         display="flex"
         flexDirection="column"
         alignItems="center"
         margin="10px 10px 20px 10px"
         position="relative"
      >
         <Typography
            fontSize="1.5rem"
            fontWeight="700"
            align="center"
            lineHeight={2}
         >
            {title}
         </Typography>
            {contents}
      </Box>
   );
}
