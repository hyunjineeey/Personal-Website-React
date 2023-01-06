import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { map, size } from 'lodash'
import Carousel from 'react-multi-carousel'
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import 'react-multi-carousel/lib/styles.css'
import './Carousel.css'

import Footer from '../Footer'
const writing = require('./writing.json')

const responsive = {
  superLargeDesktop: {
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

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide }
  } = rest
  return (
    <div className='carousel-button-group'>
      <Button
        className={currentSlide === 0 ? 'disable' : ''}
        onClick={() => previous()}
        variant='contained'
        size='small'
        sx={{ mr: 2, mt: 2 }}
      >
        Prev
      </Button>
      <Button
        variant='contained'
        size='small'
        onClick={() => next()}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </div>
  )
}

const arrowStyle = {
  borderRadius: '50%',
  //   background: 'rgb(180, 180, 180)',
  background: 'transparent',
  border: 0,
  color: '#424242'
}

const CustomRight = ({ onClick }) => (
  <button className='arrow right' onClick={onClick} style={arrowStyle}>
    <ArrowForwardIcon style={{ fontSize: '13px' }} />
  </button>
)
const CustomLeft = ({ onClick }) => (
  <button className='arrow left' onClick={onClick} style={arrowStyle}>
    <ArrowBackIcon style={{ fontSize: '13px' }} />
  </button>
)

const CustomDot = ({ onMove, index, onClick, active }) => {
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li className={active ? 'active' : 'inactive'} onClick={() => onClick()}>
      {index + 1}
    </li>
  )
}

const Writing = () => {
  const [current, setCurrent] = useState(null)
  const [count, setCount] = useState()

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <Carousel
          showDots
          ref={(el) => {
            if (el) {
              var slidesToShow = el.state.slidesToShow
              var currentSlide = el.state.currentSlide

              setCurrent(slidesToShow + currentSlide)
            }
          }}
          responsive={responsive}
          infinite
          dotListClass='custom-dot-list-style'
          arrows
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
          containerClass='carousel-with-custom-dots'
          //   afterChange={(previousSlide, { currentSlide, onMove }) => {
          //     console.log('previousSlide', previousSlide)
          //     console.log('currentSlide', currentSlide)
          //     console.log('onMove', onMove)
          //     setCount(previousSlide)
          //   }}
          //   beforeChange={(nextSlide, { currentSlide, onMove }) => {
          //     console.log('nextSlide', nextSlide)
          //     console.log('currentSlide', currentSlide)
          //     console.log('onMove', onMove)
          //     if (count == size(writing.lines)) setCount(1)
          //     else setCount(currentSlide)
          //   }}
          //   customDot={<CustomDot />}
          //   customButtonGroup={<ButtonGroup />}
          //   renderButtonGroupOutside
        >
          {map(writing.lines, (line) => (
            <Box
              sx={{
                ml: 4,
                mr: 4,
                mb: 4,
                textAlign: 'center'
              }}
            >
              <Typography
                sx={{
                  whiteSpace: 'pre-wrap',
                  lineHeight: '150%',
                  display: 'inline-block',
                  textAlign: 'left',
                  fontSize: '15px'
                }}
              >
                {line}
              </Typography>
            </Box>
          ))}
        </Carousel>
        <p>
          {count} / {size(writing.lines)}
        </p>
      </Box>

      <Footer />
    </Box>
  )
}

export default Writing
