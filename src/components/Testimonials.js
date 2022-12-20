import React from 'react'
import Box from '@mui/material/Box'
import TestimonialsList from './TestimonialsList'

import Footer from './Footer'

const Testimonials = () => {
  return (
    <Box sx={{ m: 2, textAlign: 'center' }}>
      <TestimonialsList />
      <Footer />
    </Box>
  )
}

export default Testimonials
