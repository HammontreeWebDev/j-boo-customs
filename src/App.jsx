import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import all pages for react router to display properly
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import JessesStory from './pages/JessesStory';
import StrepAAwareness from './pages/StrepAAwareness';
import ContactUs from './pages/ContactUs';
import Donations from './pages/Donations';
import NotFound from './pages/NotFound';

// css file
import './App.css';

// ! only need to tell the router which page to render based on the path associated in the URL | Each Page will dictate A header component (also containing a navbar) that will pass props (images will change on each page), its own main section with relevant components, and a footer component that probably won't change much

// TODO: Add a wildcard page that redirects to custom 404 screen

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/jesses_story' element={<JessesStory />} />
        <Route path='/strep_a_awareness' element={<StrepAAwareness />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/donations' element={<Donations />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
