import * as React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Trans, useTranslation } from 'react-i18next'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function FaqAccordion () {
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box sx={{ ml: 3, mr: 3, mb: 3, width: '100%', maxWidth: '900px' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography sx={{ textAlign: 'left' }}>
              {t('faq:pronounceName.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>
              <Trans t={t} i18nKey='faq:pronounceName.answer'>
                You can pronounce my name as
                <a
                  href='https://www.youtube.com/watch?v=ZUfRG3Q6K_E&ab_channel=K-POPPronunciation'
                  target='_blank'
                  style={{
                    textDecoration: 'none',
                    color: 'blue',
                    fontStyle: 'italic'
                  }}
                  rel='noreferrer'
                >
                  Hyeon-jin
                </a>
                . Some of my friends call me 'Jin' or 'Jiny'. For your
                information, 'Hyunjin Jae' means 'Be a Bright Influence on the
                World'. <b>That is what I am going to do in the future.</b>
              </Trans>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography sx={{ textAlign: 'left' }}>
              {t('faq:code.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>
              <Trans t={t} i18nKey='faq:code.answer'>
                I believe that coding can change the world. There are many
                things that can be improved with coding. From small
                inconveniences to how an entire task is performed. Let's suppose
                you have some inconveniences in your life and you want to make
                it better. Coding can fix it. All you need is a computer. You
                can make a program whenever or wherever you like, such as cafes,
                parks, even in your dorm. I believe through a completed program,
                one may receive great help in their daily lives and through this
                help they could live a happier life.
                <b>Isn't it cool to contribute to someone's life?</b> I'm
                putting a lot of energy into coding so that someone can live a
                better life.
              </Trans>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography sx={{ textAlign: 'left' }}>
              {t('faq:hobby.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: 'left' }}>
              {t('faq:hobby.answer')}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
