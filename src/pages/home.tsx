import React from 'react';

import '../styles/home.scss';
import ProjectCards from '../partials/project-cards/project-cards';

import { projectsJson } from '../projects-json';

const Home = () => {

  return (
    <React.Fragment>
      <section className="wrapper-container index-page">
        <h3>edmond hwang</h3>

        <div className="port-links pull-right">
          <a title="Resume"
            href="https://drive.google.com/file/d/12HREhXkfXXBlZdbBTZWuId3ab8WiKxSs/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank">
              <b>resume</b>
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

        <ProjectCards projects={projectsJson} />
      </section>
    </React.Fragment>
  )
};

export default Home;