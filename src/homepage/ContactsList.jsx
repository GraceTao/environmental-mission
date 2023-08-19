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
      bio: (
         <>
            I conduct field inspections of local facilities, properties, and
            project sites to make sure that they comply with environmental,
            water pollution, airborne particulate, and other regulations related
            to the health and safety of the community. I monitor activities,
            assess impacts, and prepare environmental evaluations to ensure that
            operations are environmentally responsible. Most recently, I have
            been monitoring the Port of Corpus Christi's environmental efforts.
         </>
      ),
   },
   {
      name: "Naomi",
      occupation: "Design Project Engineer",
      color: "#A1E876",
      bio: (
         <>
            I collaborate with architects, environmental experts, construction
            teams, and other engineers to develop designs that minimize
            ecological impact, enhance energy efficiency, and incorporate
            sustainable materials. Through innovative engineering solutions, I
            contribute to the development of eco-friendly, efficient port
            structures and systems. Most recently, I have been integrating solar
            panels into a new terminal to harness renewable energy.
         </>
      ),
   },
   {
      name: "Stan",
      occupation: "Water Treatment Specialist",
      color: "#A876DA",
      bio: (
         <>
            I prevent pollutants from entering the ecosystem by conducting water
            quality tests as well as designing and operating wastewater and
            stormwater treatment systems. Most recently, I have been managing a
            treatment plant that purifies runoff from cargo handling so it has
            minimal impact on marine life after entering local waters.
         </>
      ),
   },
   {
      name: "Alejandro",
      occupation: "Manager of Environmental Sustainability and Resilience",
      color: "#83E8EB",
      bio: (
         <>
            I collaborate with design engineers, sustainability standards
            organizations, and technical staff to oversee and implement
            Sustainability Action Plans to enhance environmental sustainability
            and resilience. I help develop and evaluate initiatives related to
            energy transition, climate action, water resource management, green
            infrastructure, and resource efficiency.
         </>
      ),
   },
   {
      name: "Jessy",
      occupation: "Port Sustainability Manager",
      color: "#FCD168",
      bio: (
         <>
            I coordinate and promote sustainable practices across various
            aspects of port operations, including efficiency projects, waste
            management initiatives, and community engagement efforts. I consult
            with local environmental agencies to evalute project sites and
            minimize the Port of Corpus Christi's carbon footprint. Through
            partnering with local environmental organizations, I help generate
            positive environmental and social impacts.
         </>
      ),
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
