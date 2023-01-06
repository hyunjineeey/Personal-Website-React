import React from 'react'
import Box from '@mui/material/Box'
import { map } from 'lodash'
import Carousel, { CarouselItem } from './Carousel'

import 'react-multi-carousel/lib/styles.css'

import Footer from '../Footer'
const writing = require('./writing.json')

const Writing = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ ml: 3, mr: 3 }}>
        <Carousel writing={writing}>
          {map(writing.lines, (line) => (
            <CarouselItem>{line}</CarouselItem>
          ))}
        </Carousel>
      </Box>

      <Footer />
    </Box>
  )
}

export default Writing
