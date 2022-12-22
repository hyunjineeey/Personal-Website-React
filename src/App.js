import { Routes, Route } from 'react-router-dom'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from '@material-ui/core'

import './App.css'
import TopAppBar from './components/TopAppBar'
import Main from './components/Main'
import About from './components/About'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

function App () {
  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <TopAppBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='About' element={<About />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='Testimonials' element={<Testimonials />} />
          <Route path='Faq' element={<Faq />} />
        </Routes>
      </MuiThemeProvider>
    </div>
  )
}

export default App
