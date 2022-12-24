import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Box sx={{ textAlign: 'center' }}>
      <h1 />
      <Typography className={classes.title} sx={{ fontWeight: 'bold' }}>
        {t('about:experience')} / {t('about:education')}
      </Typography>
      <ExperienceTimeline />
      <Button
        variant='outlined'
        href='../resume.pdf'
        startIcon={<SearchIcon />}
      >
        {t('about:resume')}
      </Button>
      <Box sx={{ m: 6 }}>
        <Typography
          sx={{ mb: 4, fontWeight: 'bold' }}
          className={classes.title}
        >
          {t('about:skills')}
        </Typography>
        <Skills />
      </Box>
      <Footer />
    </Box>
  )
}

export default About
