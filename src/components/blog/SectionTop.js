import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import CardMedia from '@mui/material/CardMedia'

const SectionTop = ({
  title,
  datePublished,
  minRead,
  dateUpdated,
  img,
  alt,
  sub
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography
        sx={{ textTransform: 'uppercase', fontSize: 'small' }}
        variant='subtitle2'
        color='text.secondary'
      >
        <p>
          {t('blog:published')}: {datePublished} {minRead}
          <br />
          {t('blog:updated')}: {dateUpdated}
        </p>
      </Typography>
      {img && (
        <CardMedia
          component='img'
          image={img}
          alt={alt}
          style={{
            maxWidth: 900,
            maxHeight: 600,
            borderRadius: '10px'
          }}
        />
      )}
      <p>{sub}</p>
    </>
  )
}

export const SectionTitle = ({ title }) => {
  return (
    <>
      <Typography
        variant='h6'
        sx={{ mt: 2, textTransform: 'capitalize', fontWeight: 'bold' }}
      >
        {title}
      </Typography>
    </>
  )
}

export default SectionTop
