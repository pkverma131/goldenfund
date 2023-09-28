import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Paper, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import SearchBox from '../../components/SearchBox';
import GoldLoanCompaniesTiles from '../../components/GoldLoanCompaniesTiles';
import InterestRateRangeTiles from '../../components/InterestRateRangeTiles';
import '../css/Home.css';

const StyledAppBar = styled(AppBar)`
  margin-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const StyledNavLink = styled(Button)`
  text-decoration: none;
  color: white;
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

const StyledContainer = styled(Container)`
  padding-top: ${(props) => props.theme.spacing(2)}px;
`;

const StyledSection = styled(Paper)`
  margin-bottom: ${(props) => props.theme.spacing(3)}px;
  padding: ${(props) => props.theme.spacing(2)}px; /* Add padding here */
`;

function Home() {
  return (
    <div className="home-page">
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Search Box */}
        <StyledContainer maxWidth="md" sx={{ mt: 20 }}>
          <SearchBox />
        </StyledContainer>

        {/* Gold Loan Companies */}
        <StyledSection className="gold-loan-companies">
          <h2>Gold Loan Companies</h2>
          <GoldLoanCompaniesTiles /> {/* Use the GoldLoanCompaniesTiles component */}
        </StyledSection>

        {/* Range of Interest Rates */}
        {/* <StyledSection className="interest-rates">
          <h2>Range of Interest Rates</h2>
          <InterestRateRangeTiles />
        </StyledSection> */}
      </Box>
    </div>
  );
}

export default Home;
