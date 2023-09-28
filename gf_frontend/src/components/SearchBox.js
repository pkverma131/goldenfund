import React from 'react';
import { TextField, Button, Grid, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchBox = styled(Grid)`
  padding: ${(props) => props.theme.spacing(2)}px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const StyledButton = styled(Button)`
  padding: 8px 16px; /* Adjust the padding as needed */
  height: 100%; /* Ensure button height matches the input height */
  background-color: #96281b; /* Set the button background color */
  color: white; /* Set the button text color */
`;

const SearchBox = () => {
  return (
    <StyledSearchBox container spacing={2} alignItems="center">
      <Grid item xs>
        <TextField
          fullWidth
          variant="outlined"
          label="Search for gold loan companies"
          placeholder="Enter keywords..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item>
        <StyledButton variant="contained" color="primary">
          Search
        </StyledButton>
      </Grid>
    </StyledSearchBox>
  );
};

export default SearchBox;
