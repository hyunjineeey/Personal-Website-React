import React from 'react'
import Typography from '@mui/material/Typography'
import { Trans, useTranslation } from 'react-i18next'
import CardMedia from '@mui/material/CardMedia'

const SectionTop = ({ title, datePublished, dateUpdated, img, alt, sub }) => {
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
          maxWidth: 900,
          maxHeight: 600,
          borderRadius: '1%',
        }}
      />
      <p>{sub}</p>
    </>
  )
}

export const SectionTitle = ({ title }) => {
  return (
    <>
      <Typography
        variant='h6'
        sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
    </>
  )
}

export default SectionTop
