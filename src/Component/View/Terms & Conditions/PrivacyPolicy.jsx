import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../Layout/MetaData';


const PrivacyPolicy = () => {
  // const [siteTitle, setSiteTitle] = useState(Config['SITE_TTILE']);

  return (
    <>
                    <MetaData title={"Privcy & Policy"}/>
    



      <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Privacy & Policy</h2>
                <div className="breadcrumb__option">
                  <Link to="/"> Home</Link>
                  <span>Privacy & Policy </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <SiteBreadcrumb title="Privacy Policy" parent="Home"/> */}

      <section className="about-page section-big-py-space">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h4>Privacy Policy</h4>
              <p>If you share your personal information with us or our other entities, we are entitled to disclose personal information to third parties. Parijat Handicraft may disclose your personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We are entitled to share some or all of your personal information with another business entity should we plan to merge with.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <CustomerTestimonial /> */}

    </>
  );

}

export default PrivacyPolicy;
