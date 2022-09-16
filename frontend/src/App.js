import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

//pages & components
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import NotFound from './components/NotFound'


const Layout = () => (
  <>
    <Navbar />
    <Modal />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  return (
    <>
    <BrowserRouter>      
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
