import React from 'react'
import Box from '@mui/material/Box'

import Footer from '../Footer'
import Accordion from './FaqAccordion'
import QnATable from './QnATable'

const Faq = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Accordion />
      {/* <QnATable /> */}
      <Footer />
    </Box>

  )
}

export default Faq
