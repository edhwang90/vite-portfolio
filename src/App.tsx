import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Recipebook from './pages/recipebook';
import Fareshare from './pages/fareshare';
import GovRedesign from './pages/govredesign';
import Storybook from './pages/storybook';
import Sandbox from './pages/sandbox';
import useMenuHandler from './hooks/useMenuHandler';

import { ListIcon, XIcon } from "@phosphor-icons/react";
import './App.scss';
import { projectsJson } from './projects-json';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const { disableFocus, showSideMenu } = useMenuHandler();
  const location = useLocation();

  useEffect(() => {
    // cleans up tab experience
    disableFocus('.side-menu-action');

    console.log('asdf', location);
    if (location.pathname !== '/') setIsHome(false);
  }, [disableFocus, location])

  const showMenu = (visible: boolean) => {
    setIsMenuOpen(visible);
    showSideMenu(visible);
  }

  return (
    <>
      {
        !isHome &&
        
        <nav className="nav-bar">
          <button className={`menu-button status-${isMenuOpen}`} onClick={() => showMenu(true)}><ListIcon className="icon menu-icon" /></button>
        </nav>
      }


      <div className="side-menu">
        <div className="side-menu-top">
          <button className={`close-button side-menu-action status-${isMenuOpen}`} onClick={() => showMenu(false)}><XIcon className="icon x-icon" /></button>
        </div>

        <div className="side-menu-main">
          <ul>
            <li><a className="side-menu-action bold" href="/" title="to Home" onClick={()=> showMenu(false)}>home</a></li>
          </ul>
        </div>
    
        <div className="side-menu-other">
          <ul>
            <li>
              <a
                className="side-menu-action"
                title="Resume"
                href="https://drive.google.com/file/d/12HREhXkfXXBlZdbBTZWuId3ab8WiKxSs/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank">
                  resume
              </a>
            </li>
            <li>
              <a title="LinkedIn"
                href="https://www.linkedin.com/in/edmond-hwang-3614902aa/"
                rel="noopener noreferrer"
                target="_blank">
                  linkedin
              </a>
            </li>
            <li>
              <a
                className="side-menu-action"
                title="GitHub"
                href="https://github.com/edhwang90"
                rel="noopener noreferrer"
                target="_blank">
                  github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="content-all-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/fareshare" element={<Fareshare />} />
          <Route path="/recipebook" element={<Recipebook />} />
          <Route path="/govredesign" element={<GovRedesign />} />
          <Route path="/storybook" element={<Storybook />} />
          
          {/* Handle 404 Not Found pages */}
          <Route path="*" element={<div className="not-found">404 Not Found</div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
