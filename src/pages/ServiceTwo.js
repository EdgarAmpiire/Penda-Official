import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ServicePropOne from '../component/service/ServicePropOne';
import AboutThree from '../component/about/AboutThree';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import BcrumbBannerTwo from '../elements/breadcrumb/BcrumbBannerTwo';


const ServiceTwo = () => {


    return (
        <>
        <SEO title="Services" />

        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            {/* <BcrumbBannerOne 
                title="Your Vision, Our Expertise"
                paragraph ="At Penda Agency, we offer a wide range of digital solutions tailored to meet your specific needs. Whether it’s live streaming, videography, or photography, we’re here to help you make an unforgettable impact."
                styleClass=""
                // mainThumb="/images/banner/banner-thumb-4.png"
            /> */}
            <BcrumbBannerTwo 
                title="Your Vision, Our Expertise"
                paragraph ="At Penda Agency, we offer a wide range of digital solutions tailored to meet your specific needs."
                paragraphs = "Whether it’s live streaming, videography, or photography, we’re here to help you make an unforgettable impact."
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            {/* <CounterUpTwo /> */}
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can <br> help you with"
                        description=""
                        textAlignment="heading-left"
                        textColor=""
                    />
                    <div className="row">
                        <ServicePropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow="6" marginTop="no" />
                    </div>
                </div>
            </div>

            <AboutThree />
            
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ServiceTwo;