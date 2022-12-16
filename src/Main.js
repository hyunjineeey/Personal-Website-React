import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Typography } from '@mui/material'

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
        sx={{ p: 2, m: 2, flexDirection: 'column', border: '1px solid' }}
      >
        <MainAvatar />
        <Typography
          sx={{
            m: 2,
            fontSize: '30px',
            letterSpacing: '3px',
            color: '#4b7dc4'
          }}
        >
          Hyunjin Jae
        </Typography>
        <Typography>Frontend Engineer at Sentera</Typography>
        <Typography>Living in Minneapolis, Minnesota</Typography>
        <Typography>Born and Raised in Seoul, South Korea</Typography>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap={1}
          sx={{ mt: 3 }}
        >
          <Button variant='outlined' href='https://github.com/hyunjineeey' target='_blank'>
            Github
          </Button>
          <Button variant='outlined'>
            Email
          </Button>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ p: 2 }}
        ><IconButton color='primary' href='https://www.linkedin.com/in/hyunjineeey/' target='_blank'>
          <LinkedInIcon />
        </IconButton>
          <IconButton color='error' href='https://www.youtube.com/@hyunjineeey' target='_blank'>
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  )
}

export default Main
