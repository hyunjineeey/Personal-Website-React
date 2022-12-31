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

function createData (q, n) {
  return { q, n }
}

export default function QnATable () {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const rows = [
    createData(t('qna:dateOfBirth.q'), t('qna:dateOfBirth.a')),
    createData(t('qna:religion.q'), t('qna:religion.a')),
    createData(t('qna:memorableEvent.q'), t('qna:memorableEvent.a')),
    createData(t('qna:netflix.q'), t('qna:netflix.a')),
    createData(t('qna:backToSchool.q'), t('qna:backToSchool.a')),
    createData(t('qna:impressiveMoment.q'), t('qna:impressiveMoment.a')),
    createData(t('qna:eat.q'), t('qna:eat.a')),
    createData(t('qna:food.q'), t('qna:food.a')),
    createData(t('qna:love.q'), t('qna:love.a')),
    createData(t('qna:hardestMoment.q'), t('qna:hardestMoment.a')),
    createData(t('qna:worried.q'), t('qna:worried.a')),
    createData(t('qna:wish.q'), t('qna:wish.a')),
    createData(t('qna:call.q'), t('qna:call.a')),
    createData(t('qna:badHabit.q'), t('qna:badHabit.a')),
    createData(t('qna:important.q'), t('qna:important.a')),
    createData(t('qna:scariest.q'), t('qna:scariest.a')),
    createData(t('qna:peopleTalk.q'), t('qna:peopleTalk.a')),
    createData(t('qna:hotpot.q'), t('qna:hotpot.a')),
    createData(t('qna:confidence.q'), t('qna:confidence.a')),
    createData(t('qna:happy.q'), t('qna:happy.a')),
    createData(t('qna:cool.q'), t('qna:cool.a'))
  ]

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box sx={{ ml: 3, mr: 3, mb: 3, width: '100%', maxWidth: '900px' }}>
        <Button
          variant='contained'
          size='small'
          color='error'
          onClick={() => setShow((prev) => !prev)}
          startIcon={<RemoveRedEyeIcon />}
        >
          {t('qna:moreQuestions')}
        </Button>
        {show && (
          <>
            <Typography
              paragraph
              sx={{ mt: 2, fontSize: 'small' }}
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
      </Box>
    </Box>
  )
}
