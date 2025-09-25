import React from "react";
import ProjectsLayout from "../partials/projects-layout/projects-layout";

const Storybook = () => {
  return (
    <ProjectsLayout>
      <React.Fragment>
          <section className="section-container sb-page">
              <div className="row">
                  <div className="col-12 hero">
                    <div className="hero-content">
                      <div>
                        <h3>Streamlining future development with a pattern library.</h3>
                        <p>
                        Utilized HTML/CSS/Sass, JavaScript, React, Storybook.js, Jest & Enzyme.
                        </p>
                        <p><a rel="noopener noreferrer" href="https://my-storybook-5566d.firebaseapp.com/" title="development link" target="_blank">development link</a></p>
                      </div>
                      <div className="with-split-hero desktop-only">
                        <div className="hero-top">
                            <img alt="react" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739360509/React-icon_1_hsw2cm.png"></img>
                        </div>
                        <div className="hero-bot">
                        <img alt="storybook js" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739360509/logo-storybook-default_1_vgoyxz.png"></img>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

          </section>

          {/* Screenshots */}
          <section className="section-container image-container">
              <div className="row">
                  <div className="col-12">
                      <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1739110252/storybook-screen_n8z3mc.png" rel="noopener noreferrer" target="_blank"><img className="screenshot" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739110252/storybook-screen_n8z3mc.png" ></img></a>
                  </div>
              </div>
          </section>

          <section className="section-container image-container">
              <div className="row">
                  <div className="col-12">
                      <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1739110256/code-screen_akc0so.png" rel="noopener noreferrer" target="_blank"><img className="screenshot" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739110256/code-screen_akc0so.png" ></img></a>
                  </div>
              </div>
          </section>
      </React.Fragment>
    </ProjectsLayout>

  )
}

export default Storybook;