import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridOne = () => {

    return (
        <>
        <SEO title="Project Two Column" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Our Projects"
                paragraph ="We take pride in the projects we’ve completed for our clients. Each one represents a unique story of collaboration, creativity, and success. Explore some of our most impactful work below."
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <ProjectOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridOne;