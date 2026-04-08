import { useEffect, useState } from 'react';
import Home from './pages/home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Recipebook from './pages/recipebook';
import Fareshare from './pages/fareshare';
import GovRedesign from './pages/govredesign';
import Storybook from './pages/storybook';
import Sandbox from './pages/sandbox';
import useMenuHandler from './hooks/useMenuHandler';
import Select from 'react-select';

import { ListIcon, XIcon } from "@phosphor-icons/react";
import './App.scss';

const resumeOptions = [
  { value: 'https://drive.google.com/file/d/1qnQ11xlMaG4f11GHOdtQc3Gmysg7uYul/view?usp=drive_link', label: 'front-end dev resume' },
  { value: 'https://drive.google.com/file/d/1vY9UfWlvDq4HLzDVg0aSFddGvipTztgO/view?usp=drive_link', label: 'ui/ux design resume'}
]

const samplesOptions = [
  { value: 'https://www.behance.net/edyhwang1', label: 'behance'},
  { value: 'https://github.com/edhwang90', label: 'github'}
]

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const { disableFocus, showSideMenu } = useMenuHandler();
  const location = useLocation();

  useEffect(() => {
    // cleans up tab experience
    disableFocus('.side-menu-action');

    if (location.pathname !== '/') setIsHome(false);
  }, [disableFocus, location])

  const showMenu = (visible: boolean) => {
    setIsMenuOpen(visible);
    showSideMenu(visible);
  }

  const onSelect = (e: any) => {
    const newWindow = window.open(e.value, '_blank');
    if (newWindow) newWindow.focus();
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
              <Select
                className="side-menu-action select"
                classNamePrefix="react-select"
                options={resumeOptions}
                placeholder="resume"
                unstyled
                components={{
                  IndicatorSeparator: () => null
                }}
                isSearchable={false}
                onChange={(e) => onSelect(e)}
              />
            </li>
            <li>
              <Select
                className="side-menu-action select"
                classNamePrefix="react-select"
                options={samplesOptions}
                placeholder="code/screens"
                unstyled
                components={{
                  IndicatorSeparator: () => null
                }}
                isSearchable={false}
                onChange={(e) => onSelect(e)}
              />
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
