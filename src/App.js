//import './App.css';
//import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const mealPlan = 'Meal Planner';
  const recipes = 'Recipes';
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            Pantry Pal
          </Box>
            <Button 
              variant="outline" 
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >Recipes</Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Broccoli Stir-fry</MenuItem>
              <MenuItem onClick={handleClose}>Jambalaya</MenuItem>
              <MenuItem onClick={handleClose}>Mexican Quinoa</MenuItem>
            </Menu>
            <Button variant="outline">Blog</Button>
            <Button variant="outline">Pantry Staples</Button>
            <Button variant="outline">Meal Planner</Button>
            <Button variant="outline">Recipe Creator</Button>
            <Avatar></Avatar>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default App;
