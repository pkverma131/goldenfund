import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function MainFooter() {
  const footerStyles = {
    backgroundColor: '#96281b', // Set the background color
  };

  const textStyles = {
    color: 'white', // Set the text color
  };

  return (
    <AppBar position="static" style={footerStyles}>
      <Toolbar>
        <Typography variant="body2" style={textStyles}>
          &copy; {new Date().getFullYear()} Goldenmoney. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MainFooter;
