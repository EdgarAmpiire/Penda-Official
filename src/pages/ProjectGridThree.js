import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
// import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import BcrumbBannerTwo from '../elements/breadcrumb/BcrumbBannerTwo';


const ProjectGridThree = () => {

    return (
        <>
        <SEO title="Project Four Column" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            {/* <BcrumbBannerOne
                title="Our Projects"
                paragraph ="We take pride in the projects we’ve completed for our clients. Each one represents a unique story of collaboration, creativity, and success. Explore some of our most impactful work below."
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            /> */}
            <BcrumbBannerTwo 
                title="Our Projects"
                paragraph = "We take pride in the projects we’ve completed for our clients. Each one represents a unique story of collaboration, creativity, and success."
                paragraphs = "Explore some of our most impactful work below."
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <ProjectOne colSize="col-xl-3 col-lg-4 col-md-6" itemShow="12" columnGap="row-15" parentClass="project-column-4"/>
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridThree;