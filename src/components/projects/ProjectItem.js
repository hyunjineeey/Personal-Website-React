import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { includes } from 'lodash'
import { useTranslation } from 'react-i18next'

const Project = ({ title, subtitle, btn, linkToSource, linkToDemo }) => {
  const ButtonTools = ({ name, variant, link }) => {
    return (
      <Button
        sx={{ mr: 1, mb: 1 }}
        href={link}
        target='_blank'
        size='small'
        variant={variant}
      >
        <Typography
          sx={{
            fontSize: '9px',
            textTransform: 'capitalize'
          }}
        >
          {name}
        </Typography>
      </Button>
    )
  }
  const sourceBtn = (name) =>
    includes(btn, name) && (
      <ButtonTools name='Source' variant='contained' link={linkToSource} />
    )
  const demoBtn = (name) =>
    includes(btn, name) && (
      <ButtonTools name='Demo' variant='contained' link={linkToDemo} />
    )
  const showTools = (name) =>
    includes(btn, name) && <ButtonTools name={name} variant='outlined' />

  return (
    <Grid xs={12} sm={4}>
      <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
      <Typography paragraph sx={{ textAlign: 'left' }}>
        {subtitle}
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        {sourceBtn('Source')}
        {demoBtn('Demo')}
        {showTools('Node.js')}
        {showTools('Bootstrap')}
        {showTools('HTML')}
        {showTools('CSS')}
        {showTools('JavaScript')}
        {showTools('jQuery')}
        {showTools('Java')}
        {showTools('Groovy')}
        {showTools('C')}
        {showTools('Ocaml')}
        {showTools('MySQL')}
        {showTools('PHP')}
        {showTools('React')}
        {showTools('Material UI')}
      </Box>
    </Grid>
  )
}

export default function ProjectItem () {
  const { t } = useTranslation()
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Grid
        sx={{
          paddingLeft: '20px',
          paddingRight: '20px',
          width: '100%',
          maxWidth: '900px'
        }}
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      >
        <Project
          title={t('projects:personalWebsite.title')}
          subtitle={t('projects:personalWebsite.sub')}
          btn={['Source', 'React', 'Material UI']}
          linkToSource='https://github.com/hyunjineeey/Personal-Website-React'
        />
        <Project
          title={t('projects:foodTruckFinder.title')}
          subtitle={t('projects:foodTruckFinder.sub')}
          btn={['Source', 'Demo', 'Node.js']}
          linkToSource='https://github.com/hyunjineeey/Food-Truck-Finder'
          linkToDemo='https://www.youtube.com/watch?v=D4Y3YF65XhU&feature=youtu.be'
        />
        <Project
          title={t('projects:covid19.title')}
          subtitle={t('projects:covid19.sub')}
          btn={['Source', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'jQuery']}
          linkToSource='https://github.com/hyunjineeey/Covid-19-Testing'
        />
        <Project
          title={t('projects:syntheticMonitoring.title')}
          subtitle={t('projects:syntheticMonitoring.sub')}
          btn={['Source', 'Java', 'Groovy']}
          linkToSource='https://github.com/hyunjineeey/Synthetic-monitoring'
        />
        <Project
          title={t('projects:multithreadedMapReduce.title')}
          subtitle={t('projects:multithreadedMapReduce.sub')}
          btn={['Source', 'C']}
          linkToSource='https://github.com/hyunjineeey/multithreaded-mapReduce'
        />
        <Project
          title={t('projects:socketProgramming.title')}
          subtitle={t('projects:socketProgramming.sub')}
          btn={['Source', 'C']}
          linkToSource='https://github.com/hyunjineeey/socket-programming'
        />
        <Project
          title={t('projects:chatServer.title')}
          subtitle={t('projects:chatServer.sub')}
          btn={['Source', 'Demo', 'Ocaml']}
          linkToSource='https://github.com/hyunjineeey/Chat-Server'
          linkToDemo='https://www.youtube.com/watch?v=8Csnp6ynyqc&ab_channel=Hyunjin'
        />
        <Project
          title={t('projects:eventFilter.title')}
          subtitle={t('projects:eventFilter.sub')}
          btn={[
            'Source',
            'Demo',
            'Bootstrap',
            'HTML',
            'CSS',
            'JavaScript',
            'jQuery',
            'Node.js',
            'MySQL',
            'PHP'
          ]}
          linkToSource='https://github.com/hyunjineeey/Event-Filter'
          linkToDemo='https://www.youtube.com/watch?v=7T4vFiIjygA&feature=youtu.be&ab_channel=Hyunjin'
        />
        <Project
          title={t('projects:userControlSystem.title')}
          subtitle={t('projects:userControlSystem.sub')}
          btn={[
            'Source',
            'Demo',
            'Bootstrap',
            'HTML',
            'CSS',
            'JavaScript',
            'jQuery',
            'Node.js',
            'MySQL'
          ]}
          linkToSource='https://github.com/hyunjineeey/Schedule-and-User-Control-System'
          linkToDemo='https://www.youtube.com/watch?v=sooOuXtTAII&ab_channel=Hyunjin'
        />
        <Project
          title={t('projects:documentSimilarity.title')}
          subtitle={t('projects:documentSimilarity.sub')}
          btn={['Source', 'Ocaml']}
          linkToSource='https://github.com/hyunjineeey/Document-Similarity'
        />
      </Grid>
    </Box>
  )
}
