import * as React from 'react'
import { Stack } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

let p = require('./project.json');

const Project = ({ title, subtitle }) => {
  return (
    <div>
      <Typography>{title}</Typography>
      <Typography paragraph>{subtitle}</Typography>
    </div>
  )
}

export default function ProjectItem () {
  return (
      <Box
        sx={{ width: '100%' }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
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
      </Box>
  )
}
