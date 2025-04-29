import React from 'react';
import { Card, CardContent, Typography, Button, Box, Chip, Stack } from '@mui/material';
import { CalendarToday, School, Public } from '@mui/icons-material';
import { Scholarship } from './types';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {scholarship.title}
        </Typography>
        
        <Stack spacing={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Public fontSize="small" />
            <Typography variant="body2">{scholarship.hostCountry}</Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <School fontSize="small" />
            <Typography variant="body2">{scholarship.hostOrganization}</Typography>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarToday fontSize="small" />
            <Typography variant="body2">
              Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {scholarship.description.slice(0, 150)}...
            </Typography>
          </Box>
          
          <Box display="flex" gap={1} flexWrap="wrap">
            {scholarship.degree.map((deg) => (
              <Chip key={deg} label={deg} size="small" />
            ))}
          </Box>
        </Stack>
      </CardContent>
      
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          href={scholarship.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </Button>
      </Box>
    </Card>
  );
}; 