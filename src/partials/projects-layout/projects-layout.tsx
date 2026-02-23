import React, { useEffect, useState } from "react";
import ToTop from "../../components/to-top/to-top";

import '../../styles/page.scss';
import './projects-layout.scss';

import type ProjectsLayoutProps from "../../types/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { projectsJson } from '../../projects-json';

const ProjectsLayout = (props: ProjectsLayoutProps) => {
  const { children } = props;

  const [nextDisplay, setNextDisplay] = useState('');
  const [nextRoute, setNextRoute] = useState('/');
  const [project, setProject] = useState(window.location.pathname || '');

  const nextProject = (currentPage: string) => {
    switch (currentPage) {
      case 'recipebook':
        setNextDisplay('a front-end dev sandbox');
        setNextRoute('/sandbox');
        break;
      case 'sandbox':
        setNextDisplay('a carpooling mobile app');
        setNextRoute('/fareshare');
        break;
      case 'fareshare':
        setNextDisplay('a .gov redesign');
        setNextRoute('/govredesign');
        break;
      case 'govredesign':
        setNextDisplay('a pattern library');
        setNextRoute('/storybook');
        break;
      case 'storybook':
        setNextDisplay('a cooking web app');
        setNextRoute('/recipebook');
        break;
      default:
        setNextDisplay('a front-end dev sandbox');
        setNextRoute('/sandbox');
        break;
    }
  }

  const goBack = () => {
    window.history.back();
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
    <>
      <nav className="projects-nav">
        <div className="row fixed-nav">
          <div className="col-12">
        
            <a className="home-link fixed-link" onClick={goBack}>
              <ArrowLeftIcon  className="nav-arrow"/>
              <span>back</span>
            </a>

            <a className="next-link fixed-link" href={nextRoute} title={nextDisplay}>
              <span>next</span>
              <ArrowRightIcon  className="nav-arrow" />
              
            </a>
          </div>
        </div>
      </nav>
      <div className="content-container">
        <div className={`details project-styles`}>
        
          { children }

          <div className="row border-top">
            <div className="col-12">
              <div className="bottom-nav">
                <ul>
                  {
                    projectsJson.map((project, index) => {
                      return (
                        <li key={`project-key-${index}`}>
                          <a href={project.route}
                             title={project.title}>{project.title}
                          </a>
                          <span>({project.type})</span>
                        </li>
                      )
                    })
                  }
                </ul>
                
                <ul>
                  <li>
                    <a title="Home"
                      href="/">
                        home
                    </a>
                  </li>
                  <li>
                    <a title="Resume"
                      className="to-bold"
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
          </div>
          {/* <div className={`project-bottom ${project}-styles`}>
            <a href={nextRoute} title={nextDisplay}>
              <span>
                { nextDisplay }
              </span>
              <img className="arrow-right-long" alt="arrow-right" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739108219/arrow-right-long-light_1_qchclz.png"></img>
            </a>
          </div> */}

          <nav className="nav-page">
            <div className="row">
              <div className="col-12">
                <ToTop></ToTop>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ProjectsLayout;