import * as React from 'react'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import { map } from 'lodash'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'

const books = require('./books.json')

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2)
  }
}))

const List = ({ year, current }) => {
  return (
    <>
      {current
        ? (
          <>
            <Box sx={{ textAlign: 'center' }}>
              <Chip label={current} size='small' />
            </Box>
          </>
          )
        : (
          <Divider>
            <Chip label={year} size='small' />
          </Divider>
          )}
      <ul>
        {map(books[year], (book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  )
}

export default function DividerBooks () {
  const { t } = useTranslation()

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        sx={{
          textAlign: 'left',
          width: '100%',
          maxWidth: '900px'
        }}
      >
        <Root>
          <List year='current' current={t('shared:currentlyReading')} />
          <List year='2023' />
          <List year='2022' />
          <List year='2021' />
          <List year='2020' />
          <List year='2019' />
          <Typography variant='subtitle2' sx={{ m: 3, fontStyle: 'italic' }}>
            {t('shared:lastUpdated')}: {t('shared:booksLastUpdated')}
          </Typography>
        </Root>
      </Box>
    </Box>
  )
}
