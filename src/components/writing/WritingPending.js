import React from 'react'
import Box from '@mui/material/Box'
import { map } from 'lodash'
import Carousel, { CarouselItem } from './Carousel'
import 'react-multi-carousel/lib/styles.css'

import Footer from '../Footer'
const writing = require('./writing.json')

const WritingPending = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ ml: 3, mr: 3 }}>
        <Carousel writing={writing.pending}>
          <CarouselItem>{writing.main}</CarouselItem>
          {map(writing.pending, (line) => (
            <CarouselItem>{line}</CarouselItem>
          ))}
        </Carousel>
      </Box>

      <Footer />
    </Box>
  )
}

export default WritingPending
