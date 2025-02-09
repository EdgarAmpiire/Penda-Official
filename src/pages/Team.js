import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
// import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
// import CounterUpTwo from '../component/counterup/CounterUpTwo';
import TeamOne from '../component/team/TeamOne';
import VideoTwo from '../component/video/VideoTwo';
import SplashCta from '../component/cta/SplashCta';

const Team = () => {

    return (
        <>
        <SEO title="Team" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Meet the team"
                paragraph ="At Penda Agency, our team is the heart of everything we do. We’re a group of passionate professionals with diverse "
                paragraphs = "backgrounds, united by one goal—bringing your vision to life. Meet the talent and experience behind our success"
                styleClass="thumbnail-2"
                mainThumb="/images/banner/team.png"
                />
                {/* <CounterUpTwo /> */}
                <TeamOne />
                <VideoTwo />
                {/* <CtaLayoutOne /> */}
                <SplashCta />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default Team;