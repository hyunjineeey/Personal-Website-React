import React from 'react'
import Box from '@mui/material/Box'

import ProjectItem from './ProjectItem'
import Footer from '../Footer'

const Projects = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <ProjectItem />
      <Footer />
    </Box>
  )
}

export default Projects
