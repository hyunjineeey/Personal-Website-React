import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@mui/material/Divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MainAvatar from './MainAvatar'

const useStyles = makeStyles({
  circleIcon: {
    backgroundColor: '#ffc0c0',
    padding: '10px',
    borderRadius: '50%'
  }
})

const email = 'mailto:hyunjineeey@gmail.com'
const github = 'https://github.com/hyunjineeey'
const linkedIn = 'https://www.linkedin.com/in/hyunjineeey/'
const youtube = 'https://www.youtube.com/@hyunjineeey'

function Main () {
  const classes = useStyles()
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
          <Button href={email} sx={{ width: 100 }} target='_blank' variant='outlined' color='warning' size='small'><FontAwesomeIcon icon='fa-solid fa-envelope' />Email</Button>
          <Button href={github} sx={{ width: 100 }} target='_blank' variant='outlined' color='success' size='small'><FontAwesomeIcon icon='fa-brands fa-github' />Github</Button>
        </Box>
        <Box
          display='flex'
          gap={1}
          sx={{ mt: 1 }}
        >
          <Button href={linkedIn} sx={{ width: 100 }} target='_blank' variant='outlined' color='secondary' size='small'><FontAwesomeIcon icon='fa-brands fa-linkedin' />LinkedIn</Button>
          <Button href={youtube} sx={{ width: 100 }} target='_blank' variant='outlined' color='error' size='small'><FontAwesomeIcon icon='fa-brands fa-youtube' />Youtube</Button>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ pt: 2 }}
        />
      </Box>
      <Box>
        <Divider sx={{ borderBottomWidth: 1, mb: 1 }} />

        <Typography sx={{ textAlign: 'center' }}>© Hyunjin Jae, 2019 - 2023</Typography>
      </Box>
    </div>
  )
}
// <Button variant='outlined' href='https://github.com/hyunjineeey' target='_blank'>
//   Github
// </Button>
// <Button variant='outlined' href='mailto:hyunjineeey@gmail.com'>
//   Email
// </Button>
export default Main
