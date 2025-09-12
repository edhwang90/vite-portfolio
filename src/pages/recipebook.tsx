'use client';

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

import '@glidejs/glide/dist/css/glide.core.min.css';
import ProjectsLayout from "../components/projects-layout/projects-layout";

const Recipebook = () => {

    useEffect(() => {
        const sliders = document.querySelectorAll<HTMLDivElement>('.glide');

        sliders.forEach((item) => {
            new Glide(item, { type: 'slider'}).mount()
        })
    }, [])

    return (
      <ProjectsLayout>
        <React.Fragment>
            <section className="section-container rb-page">
            <div className="row">
                <div className="col-12 hero">
                    <div className="hero-content">
                        <div>
                            <h3>Helping to utilize recipes.</h3>
                            <p>
                            Conceptualized after a GV design sprint involving the cooking space, .Recipebook is a web application meant to complement recipe and excess food utilization.
                            </p>
                            <p><a rel="noopener noreferrer" href="https://www.figma.com/design/rYZ467LTF7w8O9wjnKyBUY/.Recipebook-for-Portfolio?node-id=1-2&t=fvipWlc5U2HyBH3T-1" title="Figma link" target="_blank">figma link</a></p>
                        </div>
                    </div>
                <div className="hero-image desktop-only"></div>
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
                                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-home_yeduam.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-home_yeduam.png" ></img></a>
                                </li>
                                <li className='glide__slide slider'>
                                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-recipes_ikpprz.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-recipes_ikpprz.png" ></img></a>
                                </li>
                                <li className='glide__slide slider'>
                                <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-new_ytd0o9.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-new_ytd0o9.png" ></img></a>
                                </li>
                                <li className='glide__slide slider'>
                                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-details_eqdj09.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-details_eqdj09.png" ></img></a>
                                </li>
                                <li className='glide__slide slider'>
                                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-pantry_jd3suh.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-pantry_jd3suh.png" ></img></a>
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
                    <div className="col-4">
                        <div className="header-mobile">
                            <h3 className="text-center">Discovery and empathy</h3>
                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <p>
                            Initial hypotheses were guided by a GV design sprint previously utilized to understand and better the cooking process.
                            </p>
                            <p>
                            Competitor analysis was expanded upon while previous interviewees were willing to have a more focused and in-depth follow-up.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-container content-container">
            <div className="row">
                <div className="col-12">
                <div>
                    <div>
                        <h3>Interviews</h3>
                        <p>
                        Interviews, along with competitor analysis, showed a need for simpler interactions - i.e., voice commands, streamlined tab and keyboard controls, and identifying key snippets. Features that could be designed and developed with the added benefit of improving accessibility.
                        </p>
                        <p>
                        A majority of potential users also utilized a variety of platforms for saving recipes of different media types.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </section>    
            <section className="section-container image-container">
                {/* Affinity Map */}
                <div className="row">
                    <div className="col-12">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1728395517/affinity-map_j8m0fh.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1728395517/affinity-map_j8m0fh.png" ></img></a>
                    </div>
                </div>
            </section>   
            <section className="section-container content-container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h3>
                            Personas and empathy maps
                            </h3>
                            <p>
                            Key aspects utilized included the diverse forms of media for cooking, ingredients utilization, and personal reasons for cooking and remembering recipes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>  

            <section className="section-container image-container">
                {/* Persona & Empathy Map */}
                <div className="row">
                    <div className="col-12">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1728395518/persona-and-empathy-map_dlmgb8.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1728395518/persona-and-empathy-map_dlmgb8.png" ></img></a>
                    </div>
                </div>
            </section>   
            <section className="section-container content-container">
                <div className="row">
                    <div className="col-4">
                        <div className="header-mobile">
                            <h3 className="text-center">Ideate and implement</h3>
                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <p>
                            Diagramming the user flows and wireframing the recipe creation/importing process was chosen for red routes. This would allow for initial research regarding creating/importing a recipe and the underlying information available for subsequent screens.
                            </p>
                            <p>
                            The recipe details page was also emphasized. Structured as a modal for quicker navigation and the preservation of the users state, the page was also minimal in content and included a search for scannability.
                            </p>
                            <p>
                            Foundations for key features ideated such as a better keyboard experience on the details page and voice recognition were set in the form of steps with a “focused” design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>   
            <section className="section-container image-container">
            {/* Wireframes */}
            <div className="row">
                <div className="col-12">
                    <div className='glide mb-20 mt-20'>
                        <div className='glide__track' data-glide-el='track'>
                            <ul className='glide__slides'>
                            <li className='glide__slide slider'>
                                <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727820/mock-wf-search_nezzhy.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727820/mock-wf-search_nezzhy.png" ></img></a>
                            </li>
                            <li className='glide__slide slider'>
                                <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-wf-create_urstav.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-wf-create_urstav.png" ></img></a>
                            </li>
                            <li className='glide__slide slider'>
                            <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-wf-details_rehgs2.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727819/mock-wf-details_rehgs2.png" ></img></a>
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
                            <h3>
                            Testing
                            </h3>
                            <p>
                            Testing was done remotely with a medium-fidelity prototype.
                            </p>
                            <p>
                            Important discoveries included the need for more context regarding AI or programmatic features, the willingness of users to input more complex details, and the preferred use of prompt-like interactions over conversational ones.
                            </p>
                        </div>
                    </div>
                </div>
            </section>  

            <section className="section-container content-container">
                <div className="row">
                    <div className="col-4">
                        <div className="header-mobile">
                            <h3 className="text-center">Visual identity</h3>
                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <p>
                            The visual identity of the application reflects that of the market and its potential competitors. With orange being utilized as the main color, a sans serif font utilized for content, and a serif font utilized when needing contrast.
                            </p>
                        </div>
                    </div>
                </div>
            </section> 

            <section className="section-container image-container">
                {/* Mood board */}
                <div className="row">
                    <div className="col-12">
                    <a className={`zoom-in asset-xlarge`} href="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727820/mood-board-v2_cvqj2b.png" rel="noopener noreferrer" target="_blank"><img src="https://res.cloudinary.com/dkcdueneq/image/upload/v1742727820/mood-board-v2_cvqj2b.png" ></img></a>
                    </div>
                </div>
            </section>   
        </React.Fragment>
      </ProjectsLayout>
    )
}

export default Recipebook;