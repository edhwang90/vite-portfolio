import React, { useEffect, useState } from "react";
import ToTop from "../to-top/to-top";

import '../../styles/page.scss';

const ProjectsLayout = (props: any) => {
  const { children } = props;

  const [nextDisplay, setNextDisplay] = useState('');
  const [nextRoute, setNextRoute] = useState('/');
  const [project, setProject] = useState(window.location.pathname || '');

  const nextProject = (currentPage: string) => {
    switch (currentPage) {
      case 'fareshare':
        setNextDisplay('a cooking web app');
        setNextRoute('/recipebook');
        break;
      case 'recipebook':
        setNextDisplay('a .gov redesign');
        setNextRoute('/govredesign');
        break;
      case 'govredesign':
        setNextDisplay('a pattern library');
        setNextRoute('/storybook');
        break;
      case 'storybook':
        setNextDisplay('a carpooling mobile app');
        setNextRoute('/fareshare');
        break;
      default:
        setNextDisplay('a carpooling mobile app');
        setNextRoute('/fareshare');
        break;
    }
  }

  useEffect(() => {
    // calculate scrollbar width to offset fixed nav
    // for when scrollbar is visible by default on desktop browsers
    if (typeof screen.orientation !== 'undefined') { 
      document.body.style.setProperty('--scrollbar-width', (window.innerWidth - document.body.clientWidth) + 'px');
    }

    nextProject(window.location.pathname.replace('/', ''));
    setProject(window.location.pathname.replace('/', ''));
  }, [window.location.pathname]);

  return (
    <React.Fragment>
      <div className="content-container">
        <div className={`details ${project}-styles`}>
          <nav>
            <div className="row fixed-nav">
              <div className="col-12">
                <a className="home-link fixed-link" href="/">
                  <img className="arrow-left" alt="arrow-left" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739104581/arrow_es4sej.png"></img>
                  <span>home</span>
                </a>

                <a className="next-link fixed-link" href={nextRoute} title={nextDisplay}>
                  <span>next</span>
                  <img className="arrow-right" alt="arrow-right" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739104581/arrow_es4sej.png"></img>
                </a>
              </div>
            </div>
          </nav>

          { children }

          <div className={`project-bottom ${project}-styles`}>
            <a href={nextRoute} title={nextDisplay}>
              <span>
                { nextDisplay }
              </span>
              <img className="arrow-right-long" alt="arrow-right" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739108219/arrow-right-long-light_1_qchclz.png"></img>
            </a>
          </div>

          <nav className="nav-page">
            <div className="row">
              <div className="col-12">
                <ToTop></ToTop>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectsLayout;