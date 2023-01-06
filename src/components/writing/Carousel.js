import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { size } from 'lodash'

import './Carousel.css'

export const CarouselItem = ({ children, width }) => {
  return (
    <Box
      className='carousel-item'
      style={{
        width,
        whiteSpace: 'pre-wrap',
        lineHeight: '150%',
        textAlign: 'left'
      }}
    >
      {children}
    </Box>
  )
}

const Carousel = ({ children, writing }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  const arrowStyle = {
    background: 'transparent',
    border: 0,
    color: '#424242'
  }

  return (
    <div {...handlers} className='carousel'>
      <div className='indicators'>
        <Typography sx={{ textAlign: 'center', alignContent: 'center' }}>
          최신
        </Typography>
        <Button style={arrowStyle}>
          <ArrowBackIcon
            onClick={() => {
              updateIndex(activeIndex - 1)
            }}
            style={{ fontSize: '15px' }}
          />
        </Button>
        <Typography sx={{ textAlign: 'center', alignContent: 'center' }}>
          {activeIndex + 1} / {size(writing.lines)}
        </Typography>
        <Button style={arrowStyle}>
          <ArrowForwardIcon
            onClick={() => {
              updateIndex(activeIndex + 1)
            }}
            style={{ fontSize: '15px' }}
          />
        </Button>
        <Typography sx={{ textAlign: 'center', alignContent: 'center' }}>
          예전
        </Typography>
      </div>
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
    </div>
  )
}

export default Carousel
