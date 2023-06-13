import React, { useState } from "react";
import {
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   Button,
   IconButton,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Header(props) {
   const { children, onClose, ...other } = props;

   return (
      <DialogTitle>
         {children}
         {onClose ? (
            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
               }}
            >
               <CloseIcon />
            </IconButton>
         ) : null}
      </DialogTitle>
   );
}

function Instructions({title, content}) {
	const [open, setOpen] = useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

   return (
		<div>
			<Button variant="contained" onClick={handleOpen}>
				Instructions
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<Header onClose={handleClose}>
					{title}
				</Header>
				<DialogContent dividers>
					<Typography>
						{content}
					</Typography>

				</DialogContent>
			</Dialog>
		</div>
   );
}

export default Instructions;
