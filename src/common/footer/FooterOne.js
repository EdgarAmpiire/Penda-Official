import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        {/* <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <Link to="https://facebook.com/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com/en/">
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Get in touch!</h2>
                  <p>
                    We’d love to hear from you! Whether you have questions, want
                    to discuss a project, or just want to say hi, our team is
                    here to help. Reach out to us, and let’s start a
                    conversation!
                  </p>

                  {/* <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-white btn-large">Contact</Link> */}
                  {/* <div className="col-lg-7 col-xl-6">
              <div className="contact-info-wrap">
                <div className="contact-inner">
                  <h5 className="title">Find us here</h5>
                  <div className="contact-social-share">
                    <ul className="social-share list-unstyled">
                      <li>
                        <a href="https://www.facebook.com/PendaAgency/">
                          <FaFacebookF />
                        </a>
                      </li>

                      <li>
                        <a href="https://ug.linkedin.com/company/pendaagency">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/pendaagency/">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCKEH2J6WhRLz9w7QB5foiuw">
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCKEH2J6WhRLz9w7QB5foiuw">
                          <FaXTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCKEH2J6WhRLz9w7QB5foiuw">
                          <FaTiktok />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

<div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <Link to="https://facebook.com/">
                  <FaFacebookF />
                </Link>
              </li>
              
              {/* <li><Link to="https://www.pinterest.com/"><FaPinterestP /></Link></li> */}
              <li>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <FaInstagram />
                </Link>
              </li>
              {/* <li><Link to="https://vimeo.com/"><FaVimeoV /></Link></li>
                            <li><Link to="https://dribbble.com/"><FaDribbble /></Link></li>
                            <li><Link to="https://www.behance.net/"><FaBehance /></Link></li> */}
              <li>
                <Link to="https://www.tiktok.com/en/">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com/en/">
                  <FaTiktok />
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
                </div>
              </div>
            </div>
            

            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {getServiceData.slice(0, 6).map((data, index) => (
                          <li key={index}>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/service-details/${slugify(data.title)}`
                              }
                            >
                              {data.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Resourses</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                            Blog
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/case-study"}>
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={process.env.PUBLIC_URL + "/project-grid-one"}
                          >
                            Portfolio
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Support</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/contact"}>
                            Contact
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                            Terms of Use
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <a href="https://deigntech.com/">
                    Deign Technologies Limited
                  </a>
                  .
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
