import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Grid, Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

const RootContainer = styled('div')({
  padding: '16px',
});

const CompanyPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
  textAlign: 'left', // Align all content within CompanyPaper to the left
});

const CompanyName = styled(Typography)({
  fontSize: '20px',
  marginBottom: '8px',
  textAlign: 'center', // Center-align the company name
});


const CompanyDescription = styled(Typography)({
  fontSize: '16px',
  marginBottom: '8px',
});

const CompanyInterest = styled(Typography)({
  fontSize: '14px',
  color: '#007bff',
  textAlign: 'left', // Align the interest rate text to the left
});

function GoldLoanCompanies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8040/api/companies/')
      .then((response) => {
        setCompanies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching gold loan companies:', error);
      });
  }, []);

  return (
    <RootContainer>
      <h2>Gold Loan Companies</h2>
      <Grid container spacing={2}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Link
              component={RouterLink}
              to={`/company/${company.id}`}
              style={{ textDecoration: 'none' }}
            >
              <CompanyPaper>
                <CompanyName>{company.name}</CompanyName>
                <CompanyDescription>{company.description}</CompanyDescription>
                <CompanyInterest>
                  Interest Rate: {company.interest_rate}
                </CompanyInterest>
              </CompanyPaper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
}

export default GoldLoanCompanies;
