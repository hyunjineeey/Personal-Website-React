import React from 'react'
import Box from '@mui/material/Box'

import BlogList from './BlogList'
import Footer from '../Footer'

const Blog = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <BlogList />
      <Footer />
    </Box>
  )
}

export default Blog
