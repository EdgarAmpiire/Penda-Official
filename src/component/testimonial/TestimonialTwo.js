import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';
import { FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";

const TestimonialTwo = () => {
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="Testimonial"
                    title="Voices of Satisfaction"
                    description="Don’t just take our word for it—hear from our satisfied clients! At Penda Agency, we pride ourselves on delivering exceptional service and results. Here’s what our clients have to say about their experiences working with us."                   
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-4" itemShow="3"/>
                </div>
                <div className="axil-followers">
                    <ul className="followers-list list-unstyled">
                        <li className="dribble">
                            <a href="https://facebook.com/">
                                <span className="icon"><FaDribbble /></span>
                                <span>60k Followers</span>
                            </a>
                        </li>
                        <li className="behance">
                            <a href="https://www.behance.net/">
                                <span className="icon"><FaBehance /></span>
                                <span> 30kFollowers</span>
                            </a>
                        </li>
                        <li className="linkedin">
                            <a href="https://www.linkedin.com/">
                                <span className="icon"><FaLinkedinIn /></span>
                                <span>13k Connections</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default TestimonialTwo;