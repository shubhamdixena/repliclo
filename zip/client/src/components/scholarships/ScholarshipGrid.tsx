import React from 'react';
import { Grid, Container } from '@mui/material';
import { Scholarship } from './types';
import { ScholarshipCard } from './ScholarshipCard';

interface ScholarshipGridProps {
  scholarships: Scholarship[];
}

export const ScholarshipGrid: React.FC<ScholarshipGridProps> = ({ scholarships }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {scholarships.map((scholarship) => (
          <Grid item key={scholarship.id} xs={12} sm={6} md={4}>
            <ScholarshipCard scholarship={scholarship} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}; 