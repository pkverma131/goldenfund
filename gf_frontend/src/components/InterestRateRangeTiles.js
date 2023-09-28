import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const interestRatesData = [
  {
    range: '12% p.a. onwards',
    description: 'Description for this interest rate range...',
    // Add other data fields here
  },
  // Add more data objects for other interest rate ranges
];

function InterestRateRangeTiles() {
  return (
    <Box display="flex" flexWrap="wrap">
      {interestRatesData.map((rate, index) => (
        <Card key={index} variant="outlined" style={{ margin: '16px', minWidth: '300px' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {rate.range}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {rate.description}
            </Typography>
            {/* Add other data fields here */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default InterestRateRangeTiles;
