import { useState } from "react";
import { Box, Button, Popper } from "@mui/material";

export default function ImageCredits() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (e) => {
      setAnchorEl(anchorEl ? null : e.currentTarget);
   };

   const open = Boolean(anchorEl);
   const id = open ? "image-popper" : undefined;

   return (
      <Box display="flex" flexDirection="row" justifyContent="flex-end" position="sticky">
         <Button
            onClick={handleClick}
            sx={{ color: "blue", fontWeight: "bold" }}
         >
            Image Credits
         </Button>
         <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            sx={{ backgroundColor: "white" }}
         >
            <a href="https://commons.wikimedia.org/wiki/File:Savage_River_(Maryland)_from_Allegany_Bridge.jpg">
               Aneta Kaluzna
            </a>
            ,{" "}
            <a href="https://creativecommons.org/licenses/by-sa/3.0">
               CC BY-SA 3.0
            </a>
            , via Wikimedia Commons
            <br/>
            <a href="https://commons.wikimedia.org/wiki/File:Secchi_disk_pattern.svg">
               Secchi disk
            </a>
            <br />
            <a href="https://icons8.com/icon/o3IfzNL0r7Ol/bacteria">Bacteria</a>
            <br />
            <a href="https://icons8.com/icon/eiqeLdwenYDS/ps-testing-paper-acid-and-basic-chemical-analysis">
               pH testing paper
            </a>
            <br />
            <a href="https://icons8.com/icon/m4aadlK9yuE1/fertilizer">
               Fertilizer
            </a>
            <br />
            <a href="https://icons8.com/icon/5kRwCn47X46Y/oxygen">Oxygen</a>
            <br />
            <a href="https://icons8.com/icon/65359/flask">Flask</a>
         </Popper>
      </Box>
   );
}
