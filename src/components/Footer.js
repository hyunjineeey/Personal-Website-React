import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div>
      <Divider sx={{ borderBottomWidth: 1, mb: 1 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography>© Hyunjin Jae, 2019 - 2023</Typography>
        <Box>
          <Link href='mailto:hyunjineeey@gmail.com' underline='none' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon='fa-solid fa-envelope' />
          </Link>
          <Link href='https://github.com/hyunjineeey' underline='none' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-github' />
          </Link>
          <Link href='https://www.linkedin.com/in/hyunjineeey/' underline='none' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-linkedin' />
          </Link>
          <Link href='https://www.youtube.com/@hyunjineeey' underline='none' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon='fa-brands fa-youtube' />
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
