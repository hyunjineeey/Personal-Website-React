import React from 'react'
import Box from '@mui/material/Box'
import TestimonialsList from './TestimonialsList'

import Footer from './Footer'

const Testimonials = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <TestimonialsList />
      <Footer />
    </Box>
  )
}

export default Testimonials
