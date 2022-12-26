import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import CardMedia from '@mui/material/CardMedia'

import pic2020 from '../../images/blog/2020.JPG'
import Footer from '../Footer'
import { theme, MultilineTranslation } from '../../Styles'

const Responsive = styled('div')(({ theme, page }) => ({
  [theme.breakpoints.up('mobile')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  [theme.breakpoints.up('tablet')]: {
    margin: 0,
  },
  [theme.breakpoints.up('desktop')]: {
    margin: 0,
  },
}))

const TopSection = ({ title, datePublished, dateUpdated, img, alt, sub }) => {
  const { t } = useTranslation()
  return (
    <>
      <Typography variant='h4' sx={{ fontWeight: 'medium' }}>
        {title}
      </Typography>
      <Typography sx={{ textTransform: 'uppercase' }} variant='subtitle2'>
        <p>
          {t('blog:published')}: {datePublished}
          <br />
          {t('blog:updated')}: {dateUpdated}
        </p>
      </Typography>
      <CardMedia
        component='img'
        image={img}
        alt={alt}
        style={{
          maxWidth: { xs: 350, md: 250 },
          maxHeight: { xs: 233, md: 167 },
        }}
      />
      <p>{sub}</p>
    </>
  )
}

const Section = ({ title, lines }) => {
  return (
    <>
      <Typography
        variant='h6'
        sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <MultilineTranslation lines={lines} />
    </>
  )
}

export default function YearEnd() {
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
            <Box
              sx={{
                textAlign: 'left',
                width: '100%',
                maxWidth: '900px',
                lineHeight: '160%',
              }}
            >
              <TopSection
                title={t('yearEnd:title')}
                datePublished={t('yearEnd:datePublished')}
                dateUpdated={t('yearEnd:dateUpdated')}
                img={pic2020}
                alt='2020YearEnd'
                sub={t('blog:2020.sub')}
              />
              <Section
                title={t('yearEnd:covid.title')}
                lines={t(`yearEnd:covid.lines`)}
              />
              <Section
                title={t('yearEnd:internship.title')}
                lines={t(`yearEnd:internship.lines`)}
              />
              <Section
                title={t('yearEnd:blackLivesMatter.title')}
                lines={t(`yearEnd:blackLivesMatter.lines`)}
              />
              <Section
                title={t('yearEnd:vehicle.title')}
                lines={t(`yearEnd:vehicle.lines`)}
              />
              <Section
                title={t('yearEnd:regulations.title')}
                lines={t(`yearEnd:regulations.lines`)}
              />
              <Section
                title={t('yearEnd:graduation.title')}
                lines={t(`yearEnd:graduation.lines`)}
              />
              <Section
                title={t('yearEnd:conclusion.title')}
                lines={t(`yearEnd:conclusion.lines`)}
              />
            </Box>
          </Responsive>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  )
}
