import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';

const TestimonialOne = () => {
    return (
        <div className="section section-padding-testimonial">
            <div className="container">
                <SectionTitle 
                    // subtitle="Testimonial"
                    // title="Voices of Satisfaction"
                    // description="Don’t just take our word for it—hear from our satisfied clients! At Penda Agency, we pride ourselves on delivering exceptional service and results. Here’s what our clients have to say about their experiences working with us."
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-4" itemShow="3"/>
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

export default TestimonialOne;