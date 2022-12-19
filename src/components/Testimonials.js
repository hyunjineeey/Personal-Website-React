import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import TestimonialsList from './TestimonialsList'

const Testimonials = () => {
  return (
    <Box sx={{ m: 2, textAlign: 'center' }}>
      <Typography
        sx={{
          m: 2,
          fontSize: '20px',
          letterSpacing: '3px',
          color: '#4b7dc4'
        }}
      >
        Testimonials
      </Typography>
      <TestimonialsList />
    </Box>
  )
}

export default Testimonials
