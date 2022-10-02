import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Landing from './Landing'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Modal from './Modal'
import NotFound from './NotFound'

const Layout = () => (
  <>
    <Navbar />
    <Modal />
    <Outlet />
    <Footer />
  </>
);

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes