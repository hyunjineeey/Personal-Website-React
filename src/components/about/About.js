import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'

import ExperienceTimeline from './ExperienceTimeline'
import Skills from './Skills'
// import Interests from './Interests'
import Footer from '../Footer'

const useStyles = makeStyles({
  title: {
    fontSize: '1em',
    letterSpacing: '3px',
    color: '#134db6',
    textTransform: 'uppercase'
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography className={classes.title} sx={{ fontWeight: 'bold' }}>
        Experience / Education
      </Typography>
      <ExperienceTimeline />
      <Button variant='outlined' href='../resume.pdf' startIcon={<SearchIcon />}>
        Resume
      </Button>
      <Box sx={{ m: 6 }}>
        <Typography sx={{ mb: 4, fontWeight: 'bold' }} className={classes.title}>
          Skills
        </Typography>
        <Skills />
      </Box>
      <Footer />
    </Box>
  )
}

export default About
