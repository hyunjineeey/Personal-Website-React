import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainAvatar from './MainAvatar'

const email = 'mailto:hyunjineeey@gmail.com'
const github = 'https://github.com/hyunjineeey'
const linkedIn = 'https://www.linkedin.com/in/hyunjineeey/'
const youtube = 'https://www.youtube.com/@hyunjineeey'

const SnsButton = ({ link, color, icon, name }) => {
  return (
    <Button href={link} sx={{ width: 85 }} target='_blank' variant='outlined' color={color} size='small'>
      <FontAwesomeIcon icon={icon} />
      <Typography sx={{ ml: 1, fontSize: '13px', textTransform: 'capitalize' }}>{name}</Typography>
    </Button>
  )
}

function Main () {
  return (
    <div>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ p: 2, mt: 2, flexDirection: 'column' }}
      >
        <MainAvatar />
        <Typography
          sx={{
            m: 2,
            fontSize: '30px',
            letterSpacing: '3px',
            color: '#4b7dc4',
            fontWeight: 'bold'
          }}
        >
          Hyunjin Jae
        </Typography>
        <Typography>Frontend Engineer at Sentera</Typography>
        <Typography>Living in St Paul, Minnesota</Typography>
        <Typography>Born and Raised in Seoul, South Korea</Typography>
        <Box
          display='flex'
          gap={1}
          sx={{ mt: 3 }}
        >
          <SnsButton link={email} color='warning' icon='fa-solid fa-envelope' name='Email' />
          <SnsButton link={github} color='success' icon='fa-brands fa-github' name='Github' />
        </Box>
        <Box
          display='flex'
          gap={1}
          sx={{ mt: 1 }}
        >
          <SnsButton link={linkedIn} color='secondary' icon='fa-brands fa-linkedin' name='LinkedIn' />
          <SnsButton link={youtube} color='error' icon='fa-brands fa-youtube' name='Youtube' />
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ pt: 2 }}
        />
      </Box>
      <Box>
        <Divider sx={{ borderBottomWidth: 1, mb: 0.2 }} />
        <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>© Hyunjin Jae, 2019 - 2023</Typography>
      </Box>
    </div>
  )
}

export default Main
