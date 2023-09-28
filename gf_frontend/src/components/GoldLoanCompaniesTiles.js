import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import Axios from 'axios';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

function GoldLoanCompaniesTiles() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Make an API request to fetch the data
    Axios.get('http://localhost:8040/api/companies')
      .then((response) => {
        // Assuming the API response contains an array of companies
        const { results } = response.data;
        if (Array.isArray(results)) {
          setCompanies(results);
        } else {
          console.error('API response does not contain an array of companies:', results);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box display="flex" flexWrap="wrap">
      {Array.isArray(companies) ? (
        companies.map((company) => (
          <Card key={company.id} variant="outlined" style={{ margin: '16px', minWidth: '300px' }}>
            <CardContent>
              {/* Create a link to CompanyDetails with the company's ID */}
              <Link component={RouterLink} to={`/company/${company.id}`} style={{ textDecoration: 'none' }}>
                <Typography variant="h6" component="div">
                  {company.name}
                </Typography>
              </Link>
              {/* Add other data fields here */}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="error">
          No companies data available.
        </Typography>
      )}
    </Box>
  );
}

export default GoldLoanCompaniesTiles;
