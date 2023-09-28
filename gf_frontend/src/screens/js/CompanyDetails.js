import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Paper,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import Axios from 'axios';

const Container = styled('div')({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
});

const Header = styled(Typography)({
  marginBottom: '16px',
  textAlign: 'center',
});

const Description = styled(Typography)({
  marginBottom: '16px',
});

const Detail = styled(Typography)({
  marginBottom: '8px',
});

const PaperContainer = styled(Paper)({
  padding: '16px',
});

function CompanyDetails() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:8040/api/companies/${companyId}`)
      .then((response) => {
        setCompany(response.data);
      })
      .catch((error) => {
        console.error('Error fetching company details:', error);
      });
  }, [companyId]);

  const renderDetail = (label, value) => {
    if (value !== 'NA') {
      return (
        <Detail key={label}>
          <strong>{label}:</strong> {value}
        </Detail>
      );
    }
    return null;
  };

  return (
    <Container className="company-details">
      {company ? (
        <PaperContainer elevation={3}>
          <Header variant="h4">{company.name}</Header>
          <Divider />
          <Description variant="body1">{company.description}</Description>
          <Box>
            {renderDetail('Interest Rate', company.interest_rate)}
            {renderDetail('Loan Amount', company.loan_amount)}
            {renderDetail('Loan Tenure', company.loan_tenure)}
            {renderDetail('Gold Security', company.gold_security)}
            {renderDetail('Processing Fee', company.processing_fee)}
            {renderDetail('Loan Disbursal Time', company.loan_disbursal_time)}
            {renderDetail('Age Requirement', company.age_requirement)}
            {renderDetail('Accepted Items', company.accepted_items)}
            {renderDetail('Documentation Charges', company.documentation_charges)}
            {renderDetail('Custody', company.custody)}
            {renderDetail('Rate Per Gram', company.rate_per_gram)}
          </Box>
        </PaperContainer>
      ) : (
        <Typography variant="body1" align="center">
          Loading company details...
        </Typography>
      )}
    </Container>
  );
}

export default CompanyDetails;
