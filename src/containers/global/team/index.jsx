import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Team from "../../../components/team";
import HomeData from "../../../data/home.json";

const TeamContainer = ({ classOption }) => {
    return (
        <div className={`team-section  overflow-hidden ${classOption}`}>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="TEAM"
                                title="People, <span class='text-primary'>Behind</span> the Magic"
                                excerptClassOption="mb-5"
                                excerpt="At Penda Agency, our team is the heart of everything we do. We’re a group of passionate professionals with diverse backgrounds, united by one goal—bringing your vision to life. Meet the talent and experience behind our success."
                            />
                            {/* <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there
                            </p> */}
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="View more"
                                path="/team"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="new-team-members">
                            {HomeData[5].team &&
                                HomeData[5].team.map((single, key) => {
                                    return <Team key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TeamContainer.propTypes = {
    classOption: PropTypes.string,
};

TeamContainer.defaultProps = {
    classOption: "section-pb",
};

export default TeamContainer;
