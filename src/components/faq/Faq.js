import React from 'react'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'

import Footer from '../Footer'
import Accordion from './FaqAccordion'
import QnATable from './QnATable'

const Faq = () => {
  const { t } = useTranslation()

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Accordion />
      <QnATable />
      <Box sx={{ ml: 3, mb: 2, mt: -1 }}>
        <Typography
          variant='subtitle2'
          sx={{ textAlign: 'left', fontStyle: 'italic' }}
        >
          {t('shared:lastUpdated')}: {t('shared:faqLastUpdated')}
        </Typography>
      </Box>
      <Footer />
    </Box>
  )
}

export default Faq
