import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { ScholarshipGrid } from '@/components/scholarships/ScholarshipGrid';
import { Scholarship, ScholarshipFilters } from '@/components/scholarships/types';

const ScholarshipsPage: React.FC = () => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        // TODO: Replace with actual API call
        const response = await fetch('/api/scholarships');
        if (!response.ok) {
          throw new Error('Failed to fetch scholarships');
        }
        const data = await response.json();
        setScholarships(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box py={4}>
          <Typography>Loading scholarships...</Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Box py={4}>
          <Typography color="error">{error}</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Available Scholarships
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Explore and apply for scholarships that match your academic goals.
        </Typography>
        <ScholarshipGrid scholarships={scholarships} />
      </Container>
    </Box>
  );
};

export default ScholarshipsPage; 