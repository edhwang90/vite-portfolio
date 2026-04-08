import React from 'react';
import Select from 'react-select';

import ProjectCards from '../partials/project-cards/project-cards';
import '../styles/home.scss';

import { projectsJson } from '../projects-json';

const resumeOptions = [
  { value: 'https://drive.google.com/file/d/1qnQ11xlMaG4f11GHOdtQc3Gmysg7uYul/view?usp=drive_link', label: 'front-end dev resume' },
  { value: 'https://drive.google.com/file/d/1vY9UfWlvDq4HLzDVg0aSFddGvipTztgO/view?usp=drive_link', label: 'ui/ux design resume'}
]

const samplesOptions = [
  { value: 'https://www.behance.net/edyhwang1', label: 'behance'},
  { value: 'https://github.com/edhwang90', label: 'github'}
]

const Home = () => {

  const onSelect = (e: any) => {
    const newWindow = window.open(e.value, '_blank');
    if (newWindow) newWindow.focus();
  }

  return (
    <React.Fragment>
      <section className="wrapper-container index-page">
        <div className="row">
          <div className="col-12">
            <h3>edmond hwang</h3>

            <div className="port-links pull-right">
           
                <Select
                  className="select"
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
        
                
           
                <Select
                  className="select"
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
     



              <a title="LinkedIn"
                href="https://www.linkedin.com/in/edmond-hwang-3614902aa/"
                rel="noopener noreferrer"
                target="_blank">
                  linkedin
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