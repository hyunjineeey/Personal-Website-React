import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import CardMedia from '@mui/material/CardMedia'

import pic2020 from '../../images/blog/2020.JPG'
import Footer from '../Footer'
import { theme } from '../../theme'

const Responsive = styled('div')(({ theme, page }) => ({
  [theme.breakpoints.up('mobile')]: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  [theme.breakpoints.up('tablet')]: {
    margin: 0
  },
  [theme.breakpoints.up('desktop')]: {
    margin: 0
  }
}))

export default function YearEnd () {
  const { t } = useTranslation()

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <ThemeProvider theme={theme}>
          <Responsive>
            <Box sx={{ textAlign: 'left', width: '100%', maxWidth: '900px' }}>
              <Typography variant='h4' sx={{ fontWeight: 'medium' }}>
                {t('yearEnd:title')}
              </Typography>
              <Typography
                sx={{ textTransform: 'uppercase' }}
                variant='subtitle2'
                color='text.secondary'
              >
                {t('yearEnd:published')}: {t('yearEnd:datePublished')}
              </Typography>
              <Typography
                sx={{ textTransform: 'uppercase' }}
                variant='subtitle2'
                color='text.secondary'
              >
                {t('yearEnd:updated')}: {t('yearEnd:dateUpdated')}
              </Typography>
              <CardMedia
                component='img'
                image={pic2020}
                alt='2020YearEnd'
                style={{
                  maxWidth: { xs: 350, md: 250 },
                  maxHeight: { xs: 233, md: 167 }
                }}
              />
              <p>{t('blog:2020.sub')}</p>
              <Typography
                variant='h6'
                sx={{ textTransform: 'capitalize', fontWeight: 'medium' }}
              >
                {t('yearEnd:covid.title')}
              </Typography>
              <p>{t('yearEnd:covid.lines.0')}</p>
              <p>{t('yearEnd:covid.lines.1')}</p>
              <p>{t('yearEnd:covid.lines.2')}</p>
              <p>{t('yearEnd:covid.lines.3')}</p>
              <p>{t('yearEnd:covid.lines.4')}</p>
              <Typography
                variant='h6'
                sx={{ textTransform: 'capitalize', fontWeight: 'medium' }}
              >
                {t('yearEnd:internship.title')}
              </Typography>
              <p>{t('yearEnd:internship.lines')}</p>
            </Box>
          </Responsive>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  )
}
