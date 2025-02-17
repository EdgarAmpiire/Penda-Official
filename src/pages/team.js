import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
// import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Penda Agency | Team" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Team"
                        // Team members
                        excerpt="At Penda Agency, our team is the heart of everything we do."
                        image="./images/team/5.png"
                    />
                    <TeampPageContainer />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
