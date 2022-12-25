import { Routes, Route } from "react-router-dom";

import "./App.css";
import TopAppBar from "./components/TopAppBar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import YearEnd from "./components/blog/YearEnd";
import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/Faq";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <TopAppBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Blog/YearEnd" element={<YearEnd />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
