import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from './CounterUp';


const CounterUpTwo = () => {
    return (
        <div className="section section-padding expert-counterup-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Experts in field</span>
                            <h2>What makes us special?</h2>
                            <p className="mb--50">At Penda Agency, we don’t just provide services; we deliver experiences that make a lasting impact. Here’s what makes us stand out from the crowd.</p>
                            <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-large btn-fill-primary">Careers</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CounterUpTwo;