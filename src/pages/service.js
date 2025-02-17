import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeamContainer from "../containers/global/team";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ServicePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Service" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Services"
                        excerpt="At Penda Agency, we offer a wide range of digital solutions tailored to meet your specific needs.
                        Whether it’s LiveStreaming, Videography, or Photography, we’re here to help you make an unforgettable impact."
                        image="./images/service/2.png"
                    />
                    <ServiceListContainer />
                    <TestimonialReverse />
                    {/* <FunFactContainer classOption="mt-0 mt-lg-0" /> */}
                    <TeamContainer classOption="null" />
                    <BrandContainer />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServicePage;
