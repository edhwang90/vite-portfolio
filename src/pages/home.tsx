import React from 'react';

import ProjectCards from '../partials/project-cards/project-cards';
import '../styles/home.scss';

import { projectsJson } from '../projects-json';

const Home = () => {

  return (
    <React.Fragment>
      <section className="wrapper-container index-page">
        <div className="row">
          <div className="col-12">
            <h3>edmond hwang</h3>

            <div className="port-links pull-right">
              <a title="Resume"
                className="to-bold"
                href="https://drive.google.com/file/d/12HREhXkfXXBlZdbBTZWuId3ab8WiKxSs/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank">
                  resume
              </a>
              <a title="LinkedIn"
                href="https://www.linkedin.com/in/edmond-hwang-3614902aa/"
                rel="noopener noreferrer"
                target="_blank">
                  linkedin
              </a>
              <a
                title="GitHub"
                href="https://github.com/edhwang90"
                rel="noopener noreferrer"
                target="_blank">
                  github
              </a>

            </div>
          </div>
        </div>
        <div className="row projects-wrapper">
          <div className="col-2">
            <ul className="projects-legend">
              <li>
                <span className="dev"></span>(dev)
              </li>
              <li>
                <span></span>(design)
              </li>
            </ul>
          </div>
          <div className="col-10">
            <ProjectCards projects={projectsJson} />
          </div>
        </div>
        
      </section>
    </React.Fragment>
  )
};

export default Home;