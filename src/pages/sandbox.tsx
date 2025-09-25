import React, { useEffect } from "react";
import ProjectsLayout from "../partials/projects-layout/projects-layout";
import Glide from "@glidejs/glide";

import '@glidejs/glide/dist/css/glide.core.min.css';

const Sandbox = () => {

  useEffect(() => {
      const sliders = document.querySelectorAll<HTMLDivElement>('.glide');

      sliders.forEach((item) => {
          new Glide(item, { type: 'slider'}).mount()
      })
  }, [])

  return (
    <ProjectsLayout>
      <React.Fragment>
          <section className="section-container sandbox-page">
              <div className="row">
                  <div className="col-12 hero">
                    <div className="hero-content">
                      <div>
                        <h3>Front-end skills upkeep and enhancement.</h3>
                        <p>
                        Utilized HTML/CSS/Sass, JavaScript, React, TypeScript, and other technologies.
                        </p>
                        <p><a rel="noopener noreferrer" href="https://sandbox-react-b4762.web.app/" title="development link" target="_blank">development link</a></p>
                        <p><a rel="noopener noreferrer" href="https://github.com/edhwang90/react-sandbox-public" title="github link" target="_blank">github link</a></p>
                      </div>
                      <div className="with-split-hero desktop-only">
                        <div className="hero-top">
                            <img alt="react" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739360509/React-icon_1_hsw2cm.png"></img>
                        </div>
                        <div className="hero-bot">
                        <img alt="typescript" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1758834461/Typescript_logo_2020_wdcp6x.png"></img>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

          </section>

          <section className="section-container content-container">
              <div className="row">
                  <div className="col-12">
                    <h3>Todo application</h3>
                    <p>Built with the assistance of Figma AI and GitHub Copilot</p>
                    <p>Includes tasks and dashboard views.</p>
                  </div>
              </div>
          </section>   

          {/* Screenshots */}
          <section className="section-container image-container">
              <div className="row">
                  <div className="col-12">
                    <div className='glide mb-20 mt-20'>
                        <div className='glide__track' data-glide-el='track'>
                            <ul className='glide__slides'>
                              <li className='glide__slide slider'>
                                  <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1758833956/todo-1_a8fzht.png" rel="noopener noreferrer" target="_blank"><img className="screenshot" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1758833956/todo-1_a8fzht.png" ></img></a>
                              </li>
                              <li className='glide__slide slider'>
                                  <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1758833958/todo-dashboard-1_tythez.png" rel="noopener noreferrer" target="_blank"><img className="screenshot" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1758833958/todo-dashboard-1_tythez.png" ></img></a>
                              </li>
                            </ul>
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><img className="chevron" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1728396471/chevron-left_io2o5z.png"></img></button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><img className="chevron" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1728396472/chevron-right_ejgxv3.png"></img></button>
                        </div>
                    </div>
                  </div>
              </div>
          </section>
      </React.Fragment>
    </ProjectsLayout>

  )
}

export default Sandbox;