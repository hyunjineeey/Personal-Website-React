import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { map } from 'lodash'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import './Carousel.css'

import Footer from '../Footer'
import { maxWidth } from '@mui/system'
// import Carousel, { CarouselItem } from './Carousel'
const writing = require('./writing.json')

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Writing = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Carousel
        showDots
        responsive={responsive}
        infinite
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item'
      >
        {map(writing.lines, (line) => (
          <Box sx={{ ml: 2, mr: 2, mb: 4 }}>
            <Typography
              sx={{
                whiteSpace: 'pre-wrap',
                lineHeight: '150%',
                textAlign: 'left',
                fontSize: '15px'
              }}
            >
              {line}
            </Typography>
          </Box>
        ))}

        {/* <div
          style={{
            whiteSpace: 'pre',
            lineHeight: '150%',
            textAlign: 'left'
          }}
        >
          {writing.lines[0]}
        </div>
        <div>{writing.lines[1]}</div>
        <div>{writing.lines[2]}</div> */}
      </Carousel>

      {/* <Carousel>
        {map(writing.lines, (line) => (
          <CarouselItem>{line}</CarouselItem>
        ))}
      </Carousel> */}
      <Footer />
    </Box>
  )
}

export default Writing
