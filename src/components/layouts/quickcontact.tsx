// components/QuickContact.tsx
'use client';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { FaLine } from 'react-icons/fa';

const QuickContact: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <IconButton
        color="primary"
        sx={{
          backgroundColor: 'white',
          boxShadow: 2,
          padding: 1.5, // Increase padding to make the button larger
          fontSize: 25, // Increase icon size
          transition: 'transform 0.3s ease', // Smooth scaling
          '&:hover': {
            backgroundColor: 'white',
            transform: 'scale(1.1)', // Slightly enlarge the button on hover
            '& .MuiSvgIcon-root': {
              transform: 'scale(1.2)', // Enlarge the icon inside
            },
          },
        }}
        onClick={() => {
          // open line new tab
          window.open('https://line.me/ti/p/%2B6612345678', '_blank');
        }}
      >
        <FaLine fontSize="40px" color="green" />
      </IconButton>
    </Box>
  );
};

export default QuickContact;
