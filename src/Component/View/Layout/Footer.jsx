// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import "./footer.css"
// export default function Footer() {
    
//     return (
//         <>
//             <section id='footerSection '>
//                 <footer className="footer spad">
//                     <div className="container">
//                         <div className="row quickLink">
//                             <div className="col-lg-3 col-md-6 col-sm-6">
//                                 <div className="footer__about">
//                                     <div className="footer__about__logo">
//                                         <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
//                                         {/* <Link to="/"><img src="/assets/img/Parijat_logo.png" alt="" /></Link> */}

//                                     </div>
//                                     <p>logo At Parijat Handicraft, we weave dreams into reality, offering an enchanting array of handcrafted wonders. From delicate hand-painted pottery to intricately embroidered textiles, our collection is a garden of artistry where every piece blooms with passion and skill.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1 quickLink">
//                                 <div className="row">

//                                     <div className="col">
//                                         <h6>My account</h6>
//                                         <ul>
//                                             <li><Link to="/login">Login</Link></li>
//                                             <li><Link to="/about-us">About Us</Link></li>
//                                             <li><Link to="/blog">Blog</Link></li>
//                                             <li><Link to="/contact-us">Contact Us</Link></li>
//                                             <li><Link to="/sign-up">Create Account</Link></li>
//                                             <li><Link to="/become-vendor">Become Vender</Link></li>
//                                         </ul>
//                                     </div>
//                                     <div className="col">
//                                         <h6>Quick links</h6>
//                                         <ul>
//                                             <li><Link to="/cart">Cart</Link></li>
//                                             <li><Link to="/faq">FAQ</Link></li>
//                                             <li><Link to="/contact-us">Home</Link></li>
//                                             <li><Link to="/compare">Compare</Link></li>
//                                             <li><Link to="/all-product">All Product</Link></li>
//                                             <li><Link to="/privacy-policy">Privacy Policy</Link></li>
//                                             <li><Link to="/privacy-policy">Term & Conditions</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>


//                             </div>
//                             <div className="col-lg-4 col-md-12">
//                                 <h6>Contact us</h6>
//                                 <div className="contact-info ">
//                                     <ul>
//                                         <li>
//                                             <i className="ri-map-pin-user-fill me-3" ></i>
//                                             <span>Address: SHOP NO-27GF, GDA SHOPPING COMPLEX NYAY KHAND-1, INDIRAPURAM, GHAZIABAD-201014, UTTAR PRADESH</span>
//                                         </li>
//                                         <li>
//                                             <i className="ri-phone-fill me-3"></i>
//                                             <span>Call us: +91-9953567333 </span>
//                                         </li>
//                                         <li>
//                                             <i className="ri-mail-line me-3"></i>
//                                             <span>email us: info@parijathandicraft.com</span>
//                                         </li>
//                                         <li>
//                                             <span className="material-symbols-outlined me-2 ">deskphone</span>
//                                             <span > Fax 123456</span>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="footer__widget">


//                                     <form action="#">
//                                         <input type="text" placeholder="Enter your mail" />
//                                         <button type="submit" className="site-btn">Subscribe</button>
//                                     </form>
//                                     <div className="footer__widget__social">
//                                         <h6>follow us</h6>


//                                         <Link to="https://www.facebook.com/prijathandicraft/" target="_blank">
//                                             <i className="fa fa-facebook"></i>
//                                         </Link>

//                                         <Link to="https://www.instagram.com/parijathandicraft/" target="_blank">
//                                             <i className="fa fa-instagram"></i>
//                                         </Link>

//                                         <Link to="https://www.linkedin.com/in/parijat-handicraft-1a5134147/" target="_blank">
//                                             <i className="fa fa-linkedin"></i>
//                                         </Link>

//                                         <Link to="https://x.com/handicraftpari1" target="_blank">
//                                             <i className="ri-twitter-x-line"></i>
//                                         </Link>

//                                         <Link to="https://in.pinterest.com/handicraftparijat/" target="_blank">
//                                             <i className="ri-pinterest-fill"></i>
//                                         </Link>

//                                         <Link to="https://www.youtube.com/@Pari0617" target="_blank">
//                                             <i className="fa fa-youtube-play"></i>
//                                         </Link>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="footer__copyright">
//                                     <div className="footer__copyright__text">
//                                         <div className="sub-footer-contain">
//                                             <p>
//                                                 <span>2016 - 24 @ </span>copyright by Parijat Handicraft powered by Parijat Handicraft.
//                                             </p>
//                                         </div>
//                                     </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                 </footer>
//             </section>
//         </>
//     )
// }



import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { scrollToTop } from './utils'  // Importing the function from utils.js
import "./footer.css"
import { scrollToTop } from '../../Comman/ScrollOnTop';

export default function Footer() {

  useEffect(() => {
    // Optional: Scroll to top when the component mounts
    scrollToTop();
  }, []);

  return (
    <>
      <section id='footerSection'>
        <footer className="footer spad">
          <div className="container">
            <div className="row quickLink">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__about__logo">
                    {/* <Link to="/" onClick={scrollToTop}><img src="assets/img/logo.png" alt="" /></Link> */}


                    <Link to="/" onClick={scrollToTop}>
                                    <img src="/assets/img/Parijat_logo.png" alt="Logo" width="150"  />
                                </Link>
                    {/* <Link to="/"><img src="/assets/img/Parijat_logo.png" alt="" /></Link> */}
                  </div>
                  <p>logo At Parijat Handicraft, we weave dreams into reality, offering an enchanting array of handcrafted wonders. From delicate hand-painted pottery to intricately embroidered textiles, our collection is a garden of artistry where every piece blooms with passion and skill.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1 quickLink">
                <div className="row">
                  <div className="col">
                    <h6>My account</h6>
                    <ul>
                      <li><Link to="/login" onClick={scrollToTop}>Login</Link></li>
                      <li><Link to="/about-us" onClick={scrollToTop}>About Us</Link></li>
                      <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
                      <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                      <li><Link to="/sign-up" onClick={scrollToTop}>Create Account</Link></li>
                      <li><Link to="/become-vendor" onClick={scrollToTop}>Become Vendor</Link></li>
                    </ul>
                  </div>
                  <div className="col">
                    <h6>Quick links</h6>
                    <ul>
                      <li><Link to="/cart" onClick={scrollToTop}>Cart</Link></li>
                      <li><Link to="/faq" onClick={scrollToTop}>FAQ</Link></li>
                      <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                      <li><Link to="/compare" onClick={scrollToTop}>Compare</Link></li>
                      <li><Link to="/all-product" onClick={scrollToTop}>All Product</Link></li>
                      <li><Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link></li>
                      <li><Link to="/privacy-policy" onClick={scrollToTop}>Term & Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6>Contact us</h6>
                <div className="contact-info">
                  <ul>
                    <li>
                      <i className="ri-map-pin-user-fill me-3"></i>
                      <span>Address: SHOP NO-27GF, GDA SHOPPING COMPLEX NYAY KHAND-1, INDIRAPURAM, GHAZIABAD-201014, UTTAR PRADESH</span>
                    </li>
                    <li>
                      <i className="ri-phone-fill me-3"></i>
                      <span>Call us: +91-9953567333</span>
                    </li>
                    <li>
                      <i className="ri-mail-line me-3"></i>
                      <span>email us: info@parijathandicraft.com</span>
                    </li>
                    <li>
                      <span className="material-symbols-outlined me-2">deskphone</span>
                      <span> Fax 123456</span>
                    </li>
                  </ul>
                </div>
                <div className="footer__widget">
                  <form action="#">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">Subscribe</button>
                  </form>
                  <div className="footer__widget__social">
                    <h6>follow us</h6>
                    <Link to="https://www.facebook.com/prijathandicraft/" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="https://www.instagram.com/parijathandicraft/" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/parijat-handicraft-1a5134147/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link to="https://x.com/handicraftpari1" target="_blank">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link to="https://in.pinterest.com/handicraftparijat/" target="_blank">
                      <i className="ri-pinterest-fill"></i>
                    </Link>
                    <Link to="https://www.youtube.com/@Pari0617" target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="footer__copyright">
                  <div className="footer__copyright__text">
                    <div className="sub-footer-contain">
                      <p>
                        <span>2016 - 24 @ </span>copyright by Parijat Handicraft powered by Parijat Handicraft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
