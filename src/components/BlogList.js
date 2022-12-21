import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function BlogList () {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='2020 Year End Review'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  JAN 18, 2021
                </Typography>
                <Typography paragraph>
                  2020 was a tough year for everyone, but it was a bit more special to me. Looking back on the memorable year, I have tried to summarize what happened to me.
                </Typography>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='2020 Year End Review'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  JAN 18, 2021
                </Typography>
                <Typography paragraph>
                  2020 was a tough year for everyone, but it was a bit more special to me. Looking back on the memorable year, I have tried to summarize what happened to me.
                </Typography>
              </>
          }
          />
        </ListItem>
      </List>
    </Box>
  )
}
