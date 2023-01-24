import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
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
        textAlign: 'left',
        fontSize: '0.9em'
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
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 370,
          overflow: 'hidden',
          overflowY: 'scroll'
        }}
      >
        <div
          className='inner'
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: '100%' })
          })}
        </div>
      </Box>
      <div
        className='indicators'
        style={{
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <button style={arrowStyle}>
          <ArrowBackIcon
            onClick={() => {
              updateIndex(activeIndex - 1)
            }}
            style={{ fontSize: '11px' }}
          />
        </button>
        <Typography sx={{ fontSize: '12px' }}>
          {activeIndex + 1} / {size(writing) + 1}
        </Typography>
        <button style={arrowStyle}>
          <ArrowForwardIcon
            onClick={() => {
              updateIndex(activeIndex + 1)
            }}
            style={{ fontSize: '11px' }}
          />
        </button>
      </div>
      <Typography sx={{ mt: -1, mb: 1, fontSize: '12px' }}>최신순</Typography>
    </div>
  )
}

export default Carousel
