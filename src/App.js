import { Routes, Route } from 'react-router-dom'

import './App.css'
import TopAppBar from './components/TopAppBar'
import Main from './components/main/Main'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import YearEnd from './components/blog/YearEnd'
import SmartThings from './components/blog/SmartThings'
import Testimonials from './components/testimonials/Testimonials'
import Faq from './components/faq/Faq'
import Books from './components/books/Books'
import Writing from './components/writing/Writing'
import ScrollToTop from './components/ScrollToTop'

function App () {
  return (
    <div className='App'>
      <ScrollToTop />
      <TopAppBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/year-end' element={<YearEnd />} />
        <Route path='blog/smartthings' element={<SmartThings />} />
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='faq' element={<Faq />} />
        <Route path='books' element={<Books />} />
        <Route path='writing' element={<Writing />} />
      </Routes>
    </div>
  )
}

export default App
