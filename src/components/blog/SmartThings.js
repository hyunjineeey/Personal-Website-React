import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

export default function SmartThings () {
  const { t } = useTranslation()

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      SmartThings
    </Box>
  )
}
