import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.scss';

const Home = () => {
  const handleWheel = (event: WheelEvent) => {
    // use default scroll on mobile
    if (window.innerWidth <= 720) return;
    // on desktop handle all scroll events to move carousel 
    else {
      event.preventDefault();
      let scrollableElement = document.getElementById('ProjectsCarousel')!;
      scrollableElement.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    let scrollableElement = document.getElementById('ProjectsCarousel')!;

    scrollableElement.addEventListener('wheel', handleWheel);
    return () => {
      scrollableElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

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

        <div id="ProjectsCarousel" className="projects-carousel">
          <Link className="carousel-nav-link" to="/fareshare" title="carpooling mobile app">
            <div className="project fs-page">
              <h3>facilitating ride-sharing</h3>

              <ul className="tags">
                <li>mobile</li>
                <li>trust</li>
                <li>transparency</li>
              </ul>
            </div>
          </Link>
          
          <Link className="carousel-nav-link" to="/recipebook" title="cooking web app">
            <div className="project rb-page">
              <h3>helping with recipe usage</h3>

              <ul className="tags">
                <li>web</li>
                <li>AI</li>
                <li>accessibility</li>
              </ul>
            </div>
          </Link>

          <Link className="carousel-nav-link" to="/govredesign" title=".gov redesign">
            <div className="project gov-rd">
              <h3>assisting in a redesign</h3>

              <ul className="tags">
                <li>.gov</li>
                <li>design thinking</li>
                <li>sales</li>
              </ul>
            </div>
          </Link>
          <Link className="carousel-nav-link" to="/storybook" title="pattern library">
            <div className="project rsb-pl">
              <h3>a pattern library</h3>

              <ul className="tags">
                <li>code</li>
                <li>react</li>
                <li>storybook.js</li>
              </ul>
            </div>
          </Link>
        </div>
      </section>
    </React.Fragment>
  )
};

export default Home;