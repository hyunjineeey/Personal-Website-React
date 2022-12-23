import * as React from 'react'
import { isArray, map } from 'lodash'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import jacob from '../../images/testimonials/jacob.jpeg'
import joe from '../../images/testimonials/joe.jpeg'
import dan from '../../images/testimonials/dan.jpeg'
import john from '../../images/testimonials/john.jpeg'
import jeff from '../../images/testimonials/jeff.jpeg'
import steven from '../../images/testimonials/steven.jpeg'
import ming from '../../images/testimonials/ming.jpeg'

const t = require('./testimonials.json')

export default function TestimonialsList () {
  const ListBox = ({ name, src, title, lines, isLast = false }) => {
    return (
      <div>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={name} src={src} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <>
                <Typography
                  variant='body2'
                  color='text.primary'
                >
                  {title}
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  {isArray(lines)
                    ? map(lines, line => (<p>{line}</p>))
                    : <p>{lines}</p>}
                </Box>
              </>
          }
          />
        </ListItem>
        {!isLast && <Divider component='li' />}
      </div>
    )
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <List sx={{ mt: '-20px', width: '100%', maxWidth: '900px' }}>
        <ListBox name={t.jacob.name} src={jacob} title={t.jacob.title} lines={t.jacob.lines} />
        <ListBox name={t.joe.name} src={joe} title={t.joe.title} lines={t.joe.lines} />
        <ListBox name={t.dan.name} src={dan} title={t.dan.title} lines={t.dan.lines} />
        <ListBox name={t.john.name} src={john} title={t.john.title} lines={t.john.lines} />
        <ListBox name={t.jeff.name} src={jeff} title={t.jeff.title} lines={t.jeff.lines} />
        <ListBox name={t.steven.name} src={steven} title={t.steven.title} lines={t.steven.lines} />
        <ListBox name={t.ming.name} src={ming} title={t.ming.title} lines={t.ming.lines} isLast />
      </List>
    </Box>
  )
}
