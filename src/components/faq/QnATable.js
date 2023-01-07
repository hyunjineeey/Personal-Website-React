import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Trans, useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(q, n) {
  return { q, n }
}

export default function QnATable() {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const rows = [
    createData(t('qna:dateOfBirth.q'), t('qna:dateOfBirth.a')),
    createData(t('qna:religion.q'), t('qna:religion.a')),
    createData(t('qna:mbti.q'), t('qna:mbti.a')),
    createData(t('qna:food.q'), t('qna:food.a')),
    createData(t('qna:netflix.q'), t('qna:netflix.a')),
    createData(t('qna:song.q'), t('qna:song.a')),
    createData(t('qna:worried.q'), t('qna:worried.a')),
    createData(t('qna:love.q'), t('qna:love.a')),
    createData(t('qna:hardestMoment.q'), t('qna:hardestMoment.a')),
    createData(t('qna:twenty.q'), t('qna:twenty.a')),
    createData(t('qna:wish.q'), t('qna:wish.a')),
    createData(t('qna:important.q'), t('qna:important.a')),
    createData(t('qna:scariest.q'), t('qna:scariest.a')),
    createData(t('qna:dream.q'), t('qna:dream.a')),
    createData(t('qna:eat.q'), t('qna:eat.a')),
    createData(t('qna:drone.q'), t('qna:drone.a')),
    createData(t('qna:phone.q'), t('qna:phone.a')),
    createData(t('qna:wallpaper.q'), t('qna:wallpaper.a')),
    createData(t('qna:tmi.q'), t('qna:tmi.a')),
    createData(t('qna:happy.q'), t('qna:happy.a')),
    createData(t('qna:fragrance.q'), t('qna:fragrance.a')),
    createData(t('qna:mavic.q'), t('qna:mavic.a')),
    createData(t('qna:callORtext.q'), t('qna:callORtext.a')),
    createData(t('qna:summerORwinter.q'), t('qna:summerORwinter.a')),
    createData(t('qna:mountainORsea.q'), t('qna:mountainORsea.a')),
    createData(t('qna:alcoholORcoffee.q'), t('qna:alcoholORcoffee.a')),
    createData(t('qna:beerORsoju.q'), t('qna:beerORsoju.a')),
    createData(t('qna:Naeng.q'), t('qna:Naeng.a')),
    createData(t('qna:beefORpork.q'), t('qna:beefORpork.a')),
    createData(t('qna:meatORkimchi.q'), t('qna:meatORkimchi.a')),
    createData(t('qna:pizzaORchicken.q'), t('qna:pizzaORchicken.a')),
    createData(t('qna:kimichORsoy.q'), t('qna:kimichORsoy.a')),
    createData(t('qna:hotpot.q'), t('qna:hotpot.a')),
    createData(
      t('qna:night.q'),
      <Trans t={t} i18nKey='qna:night.a'>
        Writing
        <a
          href='./Writing'
          style={{
            textDecoration: 'none',
            color: '#1876d1'
          }}
          rel='noreferrer'
        >
          my feelings down
        </a>
      </Trans>
    ),
    createData(t('qna:morning.q'), t('qna:morning.a')),
    createData(t('qna:peopleTalk.q'), t('qna:peopleTalk.a')),
    createData(t('qna:goodAt.q'), t('qna:goodAt.a')),
    createData(t('qna:confidence.q'), t('qna:confidence.a')),
    createData(t('qna:born.q'), t('qna:born.a')),
    createData(t('qna:cool.q'), t('qna:cool.a'))
  ]

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box sx={{ ml: 3, mr: 3, mb: 3, width: '100%', maxWidth: '900px' }}>
        <Box sx={{ textAlign: 'left' }}>
          <Button
            variant='contained'
            size='small'
            color='error'
            onClick={() => setShow((prev) => !prev)}
            startIcon={<RemoveRedEyeIcon />}
            sx={{ fontSize: '10px' }}
          >
            {t('qna:moreQuestions')}
          </Button>
        </Box>
        {show && (
          <>
            <Typography
              paragraph
              sx={{ mt: 2, fontSize: 'small', textAlign: 'left' }}
              variant='subtitle2'
            >
              <Trans t={t} i18nKey='qna:comment'>
                Please don't take it too seriously. <em>It's just for fun.</em>
              </Trans>
              😉
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>{t('qna:question')}</StyledTableCell>
                    <StyledTableCell>{t('qna:answer')}</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.q}>
                      <StyledTableCell component='th' scope='row'>
                        {row.q}
                      </StyledTableCell>
                      <StyledTableCell>{row.n}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        <Typography
          variant='subtitle2'
          sx={{ mt: 2, mb: -1, textAlign: 'left', fontStyle: 'italic' }}
        >
          {t('shared:lastUpdated')}: {t('shared:faqLastUpdated')}
        </Typography>
      </Box>
    </Box>
  )
}
