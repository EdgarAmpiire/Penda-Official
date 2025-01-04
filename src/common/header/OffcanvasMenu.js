import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaFacebookF,
  FaLinkedinIn,
//   FaBehance,
  FaPhone,
//   FaFax,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu">
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        {/* <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form> */}
        <div className="row ">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/our-projects"}>
                  Portfolio{" "}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/team"}>Team</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
              </li>

              {/* <li><Link to={process.env.PUBLIC_URL + "/digital-agency"}>Digital Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/creative-agency"}>Creative Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>Personal Portfolio</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/home-startup"}>Home Startup</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/corporate-agency"}>Corporate Agency</Link></li> */}
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Contact Information</span>
                  <p>
                    Plot 21, Kaduyu Lane <br /> Kampala, Uganda
                  </p>
                </address>
                <address className="address">
                  <span className="title">We're Available 24/7. Call Now.</span>
                  <a href="tel:0775408295" className="tel">
                    <FaPhone /> +256 775 408295
                  </a>
                  {/* <a href="tel:12125553333" className="tel"><FaFax /> (121) 255-53333</a> */}
                </address>
              </div>
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
                  </ul>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
