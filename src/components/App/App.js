import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Contact from '../../pages/Contact/Contact';
import OurServices from '../../pages/OurServices.js/OurServices';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Footer from '../../components/Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../Button.js/Button';
import ScrollTop from '../ScrollTop/ScrollTop';
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ourservices' element={<OurServices />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
          <Button className="-callback" text="Запис" />
      </main>
      <ScrollTop/>
      <Footer />
    </Router>
  );
}

export default App;