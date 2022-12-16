import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Profile from './images/profile.png'

export default function MainAvatar () {
  return (
    <Avatar
      alt='Hyunjin Jae'
      src={Profile}
      sx={{
        width: 180,
        height: 180,
        boxShadow: '1px 6px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 50px 5px rgba(0, 0, 0, 0.19)'
      }}
    />
  )
}
