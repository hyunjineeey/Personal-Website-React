import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Profile from './images/profile.png'

export default function MainAvatar () {
  return (
    <Avatar
      alt='Hyunjin Jae'
      src={Profile}
      sx={{ width: 150, height: 150 }}
    />
  )
}
