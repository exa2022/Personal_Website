import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>

      <Analytics />
      
      <Routes>
        <Route
          path="/"
          element = {<Home />}
        />

        <Route
          path="/about-me"
          element = {<AboutMe/>}
        />

        <Route
          path="/work-experience"
          element = {<WorkExperience/>}
        />

        <Route
          path="/projects"
          element = {<Projects/>}
        />

        <Route
          path="/certifications"
          element = {<Certifications/>}
        />

        <Route
          path="/contact"
          element = {<Contact/>}
        />

      </Routes>

      
      
      <Footer/>

    
    </BrowserRouter>
  );
}

export default App;
