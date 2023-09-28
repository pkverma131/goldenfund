import React from 'react';
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const RedAppBar = styled(AppBar)`
  background-color: #96281b; /* Set the background color to red */
`;

function MainMenu() {
  return (
    <RedAppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6">Golden Money</Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/gold-loan-companies" color="inherit">
          Explore
        </Button>
        <Button component={Link} to="/blogs" color="inherit">
          Blogs
        </Button>
      </Toolbar>
    </RedAppBar>
  );
}

export default MainMenu;
