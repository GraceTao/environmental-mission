import {
   Box,
   Dialog,
   DialogContent,
   DialogTitle,
   Divider,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Typography,
} from "@mui/material";
import { useState } from "react";
import ContactPage from "./ContactPage";

const contacts = [
   {
      name: "Me",
      occupation: "Environmental Compliance Specialist",
      color: "black",
      bio: `I conduct field inspections of local facilities, properties, and project sites to make sure that they comply with environmental, water pollution, airborne particulate, and other regulations related to the health and safety of the community. 
      I monitor activities, assess impacts, and prepare environmental evaluations to ensure that operations are environmentally responsible. Promoting sustainable practices can help protect surrounding ecosystems and communities.`,
   },
   {
      name: "Naomi",
      occupation: "Design Project Engineer",
      color: "#A1E876",
      bio: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.",
   },
   {
      name: "Stan",
      occupation: "Water Treatment Specialist",
      color: "#A876DA",
      bio: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.",
   },
   {
      name: "Alejandro",
      occupation: "Manager of Environmental Sustainability and Resilience",
      color: "#83E8EB",
      bio: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.",
   },
   {
      name: "Jessy",
      occupation: "Port Sustainability Manager",
      color: "#FCD168",
      bio: "Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.",
   },
];

export default function ContactsList({ open, setOpen }) {
   const [activeContact, setActiveContact] = useState("Me");

   return (
      <Box>
         <Dialog
            open={open.ContactsIcon}
            onClose={() => {
               setOpen({ ...open, ContactsIcon: false });
               setActiveContact("Me");
            }}
            maxWidth="md"
         >
            <DialogTitle
               sx={{ backgroundColor: "orange", boxShadow: 5, mb: 2 }}
            >
               <Typography fontSize="1.7rem" align="center">
                  <b>Contacts</b>
               </Typography>
            </DialogTitle>

            <DialogContent>
               <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  // sx={{mt: 2}}
               >
                  <List sx={{ pr: 3 }}>
                     <Divider color="#B6B6B6" />
                     {contacts.map((person) => (
                        <Box key={person.name}>
                           <ListItem
                              key={person.name}
                              disablePadding
                              sx={{ backgroundColor: "#F9D69D" }}
                           >
                              <ListItemButton
                                 onClick={() => setActiveContact(person.name)}
                              >
                                 <ListItemText>
                                    <Typography
                                       fontSize={{ sm: "1.1rem", md: "1.2rem" }}
                                       lineHeight={1.1}
                                    >
                                       {person.name}
                                    </Typography>
                                 </ListItemText>
                              </ListItemButton>
                           </ListItem>
                           <Divider color="#B6B6B6" />
                        </Box>
                     ))}
                  </List>
                  {contacts.map(
                     (person) =>
                        person.name === activeContact && (
                           <ContactPage
                              person={person}
                              key={person.name}
                           ></ContactPage>
                        )
                  )}
               </Box>
            </DialogContent>
         </Dialog>
      </Box>
   );
}
