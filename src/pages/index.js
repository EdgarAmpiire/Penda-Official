import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
// import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
// import NewsletterArea from "../containers/global/newsletter";
import TeamContainer from "../containers/global/team";
import TestimonialContainer from "../containers/global/testimonial";
// import HomeAboutContainer from "../containers/home/about";
import HomeBlog from "../containers/home/blog";
import IntroContainer from "../containers/home/intro";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import AboutContainer from "../containers/about";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Penda Agency | Home" />
                <div className="wrapper">
                    <Header />
                    <IntroContainer />
                    {/* <HomeAboutContainer /> */}
                    <AboutContainer />
                    <IconBoxContainer classOption="section-pb" />
                    <ServiceListContainer />
                    <BrandContainer />
                    {/* <TestimonialContainer /> */}
                    {/* <FunFactContainer classOption="mt-10 mt-lg-0" /> */}
                    <TeamContainer classOption="section-py" />
                    <HomeBlog />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
