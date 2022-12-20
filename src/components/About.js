import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import OppositeContentTimeline from './OppositeContentTimeline'
import RowAndColumnSpacing from './RowAndColumnSpacing'

const About = () => {
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
        Experience / Education
      </Typography>
      <OppositeContentTimeline />
      <Button variant='outlined' href='../resume.pdf' startIcon={<SearchIcon />}>
        Resume
      </Button>

      <Box sx={{ m: 6 }}>
        <Typography
          sx={{
            m: 2,
            fontSize: '20px',
            letterSpacing: '3px',
            color: '#4b7dc4'
          }}
        >
          Skills
        </Typography>
        <RowAndColumnSpacing />
      </Box>
    </Box>
  )
}

export default About
