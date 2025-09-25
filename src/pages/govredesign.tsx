import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

import '@glidejs/glide/dist/css/glide.core.min.css';
import ProjectsLayout from "../partials/projects-layout/projects-layout";

const GovRedesign = () => {
    useEffect(() => {
        const sliders = document.querySelectorAll<HTMLDivElement>('.glide');

        sliders.forEach((item) => {
            new Glide(item, { type: 'slider'}).mount()
        })
    }, [])

    return (
      <ProjectsLayout>
        <React.Fragment>
            <section className="section-container gov-page">
                <div className="row">
                    <div className="col-12 hero">
                      <div className="hero-content">
                        <div>
                          <h3>Promoting design thinking in a government contract.</h3>
                          <p>
                          Because of the requirements-driven nature of government contracting, users and their experiences are often secondary considerations. 
                          </p>
                          <p>
                          My contributions were part of a larger internal initiative to promote design thinking.
                          </p>
                        </div>
                        <div className="with-image desktop-only">
                          <img alt="USA Flag" src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739208942/flag-vert_bsxcp9.png"></img>
                        </div>
                      </div>
                    </div>
                </div>

            </section>
            <section className="section-container image-container">
                {/* Hi-Fi Screens */}
                <div className="row">
                    <div className="col-12">
                        <div className='glide'>
                            <div className='glide__track' data-glide-el='track'>
                                <ul className='glide__slides'>
                                  <li className='glide__slide slider'>
                                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583173090/fin-7_demnkx.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583173090/fin-7_demnkx.png" ></img></a>
                                  </li>
                                  <li className='glide__slide slider'>
                                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1583172880/fin-8_xumpqq.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1583172880/fin-8_xumpqq.png" ></img></a>
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

            <section className="section-container content-container">
                <div className="row">
                    <div className="col-12">
                        <div>
                          <h3>Initial deadlines and recommendations</h3>
                          <p>
                          The initial task for a .gov redesign included delivery of wireframes pertaining to a landing page, reporting, and an administrative dashboard.
                          </p>
                          <p>
                          Wireframing was based on requirements driven by the project management office. Upon completion of the deliverables, a deeper dive into the underlying data and user experience was performed.
                          </p>
                        </div>
                    </div>
                </div>
            </section>    
            <section className="section-container content-container">
                <div className="row">
                    <div className="col-12">
                        <div>
                          <h3>
                          Research and requirements
                          </h3>
                          <p>
                          Customer support queries, weighted priority lists from stakeholders, and user and stakeholder interviews were utilized.
                          </p>
                          <p>
                          Tablet and non-fullscreen resolutions, for both RWD and future kiosk considerations, were prioritized.
                          </p>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="section-container image-container">
            {/* Wireframes */}
                <div className="row">
                    <div className="col-12">
                        <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1739109687/gov-wf-cropped_j1u7rs.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1739109687/gov-wf-cropped_j1u7rs.png" ></img></a>
                    </div>
                </div>
            </section>   
            <section className="section-container content-container">
                <div className="row">
                    <div className="col-12">
                        <div>
                          <h3>
                          Increased fidelity and selling design thinking
                          </h3>
                          <p>
                          After continuing a heuristic analysis and further review of research over requirements, the initiative became one of promoting a more user-centric redesign.  
                          </p>
                          <p>
                          A resource in the form of a UX Architect was allocated in what would be a team effort to structure a design thinking sales deck and initial redesign project plan.
                          </p>
                          <p>
                          Fidelity was increased due to changes in audience and the need to be part of the sales process.
                          </p>
                        </div>
                    </div>
                </div>
            </section> 
        </React.Fragment>
      </ProjectsLayout>
    )
}

export default GovRedesign;