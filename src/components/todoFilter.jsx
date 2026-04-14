import React from 'react';
import { Box, Button } from '@mui/material';

export default function TodoFilter({ filter, setFilter }) {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
        mb: 2,
      }}
    >
      {filters.map((item) => (
        <Button
          key={item.value}
          variant={filter === item.value ? 'contained' : 'outlined'}
          onClick={() => setFilter(item.value)}
          sx={{
            textTransform: 'none',
            minWidth: '100px',
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}