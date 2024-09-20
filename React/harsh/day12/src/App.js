import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Toggle Dialog
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  // Toggle Drawer
  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  return (
    <div>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI App
          </Typography>
          <Button color="inherit" onClick={handleDialogOpen}>
            Open Dialog
          </Button>
        </Toolbar>
      </AppBar>

      {/* Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the content of the first accordion.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the content of the second accordion.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          This is a dialog!
        </Typography>
        <Button onClick={handleDialogClose}>Close</Button>
      </Dialog>

      {/* Drawer */}
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default App;
