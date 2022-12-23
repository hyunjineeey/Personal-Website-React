import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SnsIcon = ({ link, icon }) => {
  return (
    <Link sx={{ marginLeft: '5px' }} href={link} color='black' underline='none' target='_blank' rel='noreferrer'>
      <FontAwesomeIcon size='sm' icon={icon} />
    </Link>
  )
}

const SnsIcons = () => {
  return (
    <Box sx={{
      maxWidth: '100px'
    }}
    >
      <SnsIcon link='mailto:hyunjineeey@gmail.com' icon='fa-solid fa-envelope' />
      <SnsIcon link='https://github.com/hyunjineeey' icon='fa-brands fa-github' />
      <SnsIcon link='https://www.linkedin.com/in/hyunjineeey/' icon='fa-brands fa-linkedin' />
      <SnsIcon link='https://www.youtube.com/@hyunjineeey' icon='fa-brands fa-youtube' />
    </Box>
  )
}

const Footer = () => {
  return (
    <div>
      <Divider sx={{ borderBottomWidth: 1, mb: 1 }} />
      <Box sx={{
        paddingLeft: '10%',
        paddingRight: '10%',
        mb: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
      >
        <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>© Hyunjin Jae, 2019 - 2023</Typography>
        <SnsIcons />
      </Box>
    </div>
  )
}

export default Footer
