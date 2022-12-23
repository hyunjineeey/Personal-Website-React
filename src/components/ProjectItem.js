import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

import VariantButtonGroup from './VariantButtonGroup'

const p = require('./project.json')

const Project = ({ title, subtitle }) => {
  return (
    <Grid xs={12} sm={4}>
      <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
      <Typography paragraph sx={{ textAlign: 'left' }}>{subtitle}</Typography>
      <VariantButtonGroup />
    </Grid>
  )
}

export default function ProjectItem () {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Grid sx={{ width: '100%', maxWidth: '800px' }} container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        <Project
          title={p.foodTruckFinder.title}
          subtitle={p.foodTruckFinder.sub}
        />
        <Project
          title={p.covid19.title}
          subtitle={p.covid19.sub}
        />
        <Project
          title={p.syntheticMonitoring.title}
          subtitle={p.syntheticMonitoring.sub}
        />
        <Project
          title={p.multithreadedMapReduce.title}
          subtitle={p.multithreadedMapReduce.sub}
        />
        <Project
          title={p.socketProgramming.title}
          subtitle={p.socketProgramming.sub}
        />
        <Project
          title={p.chatServer.title}
          subtitle={p.chatServer.sub}
        />
        <Project
          title={p.personalWebsite.title}
          subtitle={p.personalWebsite.sub}
        />
        <Project
          title={p.eventFilter.title}
          subtitle={p.eventFilter.sub}
        />
        <Project
          title={p.userControlSystem.title}
          subtitle={p.userControlSystem.sub}
        />
        <Project
          title={p.documentSimilarity.title}
          subtitle={p.documentSimilarity.sub}
        />
      </Grid>
    </Box>
  )
}
