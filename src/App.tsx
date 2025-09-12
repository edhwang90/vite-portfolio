import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Recipebook from './pages/recipebook';
import Fareshare from './pages/fareshare';
import GovRedesign from './pages/govredesign';
import Storybook from './pages/storybook';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fareshare" element={<Fareshare />} />
        <Route path="/recipebook" element={<Recipebook />} />
        <Route path="/govredesign" element={<GovRedesign />} />
        <Route path="/storybook" element={<Storybook />} />
        
        {/* Handle 404 Not Found pages */}
        <Route path="*" element={<div className="not-found">404 Not Found</div>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
