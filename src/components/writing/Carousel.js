import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Box from '@mui/material/Box'
import { map } from 'lodash'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'

import './Carousel.css'

export const CarouselItem = ({ children, width }) => {
  const items = children?.split('\b')

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

const Carousel = ({ children }) => {
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

  return (
    <div
      {...handlers}
      className='carousel'
      //   onMouseEnter={() => setPaused(true)}
      //   onMouseLeave={() => setPaused(false)}
    >
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>

      <div className='indicators'>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          Prev
        </button>
        {map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index)
              }}
            >
              {index + 1}
            </button>
          )
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel
