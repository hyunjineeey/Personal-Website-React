import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Testimonial from './Testimonial'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testimonial' element={<Testimonial />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
