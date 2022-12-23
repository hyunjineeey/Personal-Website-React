import * as React from 'react'
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
  // TODO
  // const ListBox = ({ name, lines }) => {
  //  return (
  //    <ListItem alignItems='flex-start'>
  //        <ListItemAvatar>
  //          <Avatar alt={`t.${name}.name`} src={name} />
  //        </ListItemAvatar>
  //        <ListItemText
  //          primary={`t.${name}.name`}
  //          secondary={
  //            <>
  //              <Typography
  //                variant='body2'
  //                color='text.primary'
  //              >
  //              {`t.${name}.title`}
  //              </Typography>
  //              <Box
  //                sx={{ mt: '4px' }}
  //                color='text.primary'
  //              >
  //                {lines}
  //              </Box>
  //            </>
  //        }
  //        />
  //      </ListItem>
  //  )
  // }

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <List sx={{ mt: '-20px', width: '100%', maxWidth: '900px' }}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.jacob.name} src={jacob} />
          </ListItemAvatar>
          <ListItemText
            primary={t.jacob.name}
            secondary={
              <>
                <Typography variant='body2' color='text.primary'>
                  {t.jacob.title}
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.jacob.lines[0]}</p>
                  <p>{t.jacob.lines[1]}</p>
                  <p>{t.jacob.lines[2]}</p>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.joe.name} src={joe} />
          </ListItemAvatar>
          <ListItemText
            primary={t.joe.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {t.joe.title}
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.joe.lines}</p>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.dan.name} src={dan} />
          </ListItemAvatar>
          <ListItemText
            primary={t.dan.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Senior Software Engineer
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.dan.lines[0]}</p>
                  <p>{t.dan.lines[1]}</p>
                  <p>{t.dan.lines[2]}</p>
                  <p>{t.dan.lines[3]}</p>
                  <p>{t.dan.lines[4]}</p>
                  <p>{t.dan.lines[5]}</p>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.john.name} src={john} />
          </ListItemAvatar>
          <ListItemText
            primary={t.john.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {t.john.title}
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.john.lines}</p>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.jeff.name} src={jeff} />
          </ListItemAvatar>
          <ListItemText
            primary={t.jeff.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {t.jeff.title}
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.jeff.lines}</p>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.steven.name} src={steven} />
          </ListItemAvatar>
          <ListItemText
            primary={t.steven.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {t.steven.title}
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.steven.lines[0]}</p>
                  <p>{t.steven.lines[1]}</p>
                  <p>{t.steven.lines[2]}</p>
                </Box>
              </>
            }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt={t.ming.name} src={ming} />
          </ListItemAvatar>
          <ListItemText
            primary={t.ming.name}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  {t.ming.title}
                </Typography>
                <Box sx={{ mt: '4px' }} color='text.primary'>
                  <p>{t.ming.lines[0]}</p>
                  <p>{t.ming.lines[1]}</p>
                  <p>{t.ming.lines[2]}</p>
                  <p>{t.ming.lines[3]}</p>
                  <p>{t.ming.lines[4]}</p>
                </Box>
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  )
}
