import * as React from 'react'
import { isObject } from 'lodash'
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

const tes = require('../../locales/en/testimonials.json')

/* <p>{t(`testimonials:${name}.lines`)}</p> */

export default function TestimonialsList () {
  const { t } = useTranslation()
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
                <Typography variant='body2' color='text.primary'>
                  {title}
                </Typography>
                <Box color='text.primary'>{lines}</Box>
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
          src={jacob}
          title={tes.jacob.title}
          lines={
            <div>
              <p>{t('testimonials:jacob.lines.0')}</p>
              <p>{t('testimonials:jacob.lines.1')}</p>
              <p>{t('testimonials:jacob.lines.2')}</p>
            </div>
          }
        />
        <ListBox
          name={tes.joe.name}
          src={joe}
          title={tes.joe.title}
          lines={<p>{t('testimonials:joe.lines')}</p>}
        />
        <ListBox
          name={tes.dan.name}
          src={dan}
          title={tes.dan.title}
          lines={
            <div>
              <p>{t('testimonials:dan.lines.0')}</p>
              <p>{t('testimonials:dan.lines.1')}</p>
              <p>{t('testimonials:dan.lines.2')}</p>
              <p>{t('testimonials:dan.lines.3')}</p>
              <p>{t('testimonials:dan.lines.4')}</p>
              <p>{t('testimonials:dan.lines.5')}</p>
            </div>
          }
        />
        <ListBox
          name={tes.john.name}
          src={john}
          title={tes.john.title}
          lines={<p>{t('testimonials:john.lines')}</p>}
        />
        <ListBox
          name={tes.jeff.name}
          src={jeff}
          title={tes.jeff.title}
          lines={<p>{t('testimonials:jeff.lines')}</p>}
        />
        <ListBox
          name={tes.steven.name}
          src={steven}
          title={tes.steven.title}
          lines={
            <div>
              <p>{t('testimonials:steven.lines.0')}</p>
              <p>{t('testimonials:steven.lines.1')}</p>
              <p>{t('testimonials:steven.lines.2')}</p>
            </div>
          }
        />
        <ListBox
          name={tes.ming.name}
          src={ming}
          title={tes.ming.title}
          isLast
          lines={
            <div>
              <p>{t('testimonials:ming.lines.0')}</p>
              <p>{t('testimonials:ming.lines.1')}</p>
              <p>{t('testimonials:ming.lines.2')}</p>
              <p>{t('testimonials:ming.lines.3')}</p>
              <p>{t('testimonials:ming.lines.4')}</p>
            </div>
          }
        />
      </List>
    </Box>
  )
}
