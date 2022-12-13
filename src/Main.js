import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Typography } from '@mui/material'
import '@fontsource/roboto/700.css'

import TopAppBar from './TopAppBar'
import MainAvatar from './MainAvatar'

function Main () {
  return (
    <div>
      <TopAppBar />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ p: 2, m: 2, flexDirection: 'column' }}
      >
        <MainAvatar />
        <Typography
          sx={{
            fontSize: '30px',
            letterSpacing: '3px',
            color: '#4b7dc4'
          }}
        >
          Hyunjin Jae
        </Typography>
        <Typography>Software Engineer at Sentera</Typography>
        <Typography>Living in Minneapolis, Minnesota</Typography>
        <Typography>Born and Raised in Seoul, South Korea</Typography>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap={1}
          sx={{ p: 2, m: 2 }}
        >
          <Button variant='outlined' href='#outlined-buttons'>
            Github
          </Button>
          <Button variant='outlined' href='#outlined-buttons'>
            Email
          </Button>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap={1}
          sx={{ p: 2, m: 2 }}
        ><IconButton color='primary' aria-label='delete'>
          <LinkedInIcon />
        </IconButton>
        <IconButton color='error' aria-label='delete'>
          <YouTubeIcon />
        </IconButton>
        </Box>
      </Box>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  )
}

export default Main
