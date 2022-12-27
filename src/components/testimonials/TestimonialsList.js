import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

import jacob from '../../images/testimonials/jacob.jpeg'
import joe from '../../images/testimonials/joe.jpeg'
import dan from '../../images/testimonials/dan.jpeg'
import john from '../../images/testimonials/john.jpeg'
import jeff from '../../images/testimonials/jeff.jpeg'
import steven from '../../images/testimonials/steven.jpeg'
import ming from '../../images/testimonials/ming.jpeg'

import { MultilineParagraph } from '../../Styles'

const tes = require('../../locales/en/testimonials.json')

export default function TestimonialsList() {
  const { t } = useTranslation()
  const ListBox = ({ name, fname, src, title, isLast = false }) => {
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
                <Typography variant='body2' color='text.primary'>
                  {title}
                </Typography>
                <Box color='text.primary'>
                  <MultilineParagraph
                    lines={t(`testimonials:${fname}.lines`)}
                  />
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
        <ListBox
          name={tes.jacob.name}
          fname='jacob'
          src={jacob}
          title={tes.jacob.title}
        />
        <ListBox
          name={tes.joe.name}
          fname='joe'
          src={joe}
          title={tes.joe.title}
        />
        <ListBox
          name={tes.dan.name}
          fname='dan'
          src={dan}
          title={tes.dan.title}
        />
        <ListBox
          name={tes.john.name}
          fname='john'
          src={john}
          title={tes.john.title}
        />
        <ListBox
          name={tes.jeff.name}
          fname='jeff'
          src={jeff}
          title={tes.jeff.title}
        />
        <ListBox
          name={tes.steven.name}
          fname='steven'
          src={steven}
          title={tes.steven.title}
        />
        <ListBox
          name={tes.ming.name}
          fname='ming'
          src={ming}
          title={tes.ming.title}
          isLast
        />
      </List>
    </Box>
  )
}
