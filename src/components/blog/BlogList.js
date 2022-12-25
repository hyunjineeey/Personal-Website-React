import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

export default function BlogList () {
  const { t } = useTranslation()
  const Item = ({ title, date, sub, isLast = false }) => {
    return (
      <div>
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary={
              <Typography variant='h5' sx={{ fontWeight: 'medium' }}>
                {title}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  variant='subtitle2'
                  color='text.secondary'
                  sx={{ mt: 2 }}
                >
                  {date}
                </Typography>
                <Typography
                  variant='body1'
                  color='text.primary'
                  sx={{ mt: 2, mb: 2 }}
                >
                  {sub}
                </Typography>
                <Typography
                  variant='subtitle2'
                  sx={{ textTransform: 'uppercase' }}
                  color='text.secondary'
                >
                  {t('blog:readMore')}
                </Typography>
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
        <Item
          title={t('blog:2020.title')}
          date={t('blog:2020.date')}
          sub={t('blog:2020.sub')}
        />
        <Item
          title={t('blog:smartThings.title')}
          date={t('blog:smartThings.date')}
          sub={t('blog:smartThings.sub')}
          isLast
        />
      </List>
    </Box>
  )
}
