


// ++++++++++++===================== !! Work Properlly !!============================

// import React from 'react';
// import './Mainbar.css';  // Importing the CSS file for styles.
// import Headroom from "react-headroom"
// export default function Mainbar() {
//     return (
//         <>
//             <Headroom>
//                 <div className="bg-white">


//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="header__logo d-flex">
//                                 <Link to="./index.html">
//                                     <img src="/assets/img/logo.png" alt="Logo" />
//                                 </Link>

//                                 {/* Mobile search box with a sleek design */}
//                                 <div className="mobile-search mx-3">
//                                     <input type="text" placeholder="Search..." />
//                                     <i className="fa fa-search"></i>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <nav className="header__menu">
//                                 <ul>
//                                     <li className="active"><Link to="./index.html">Home</Link></li>
//                                     <li><Link to="./shop-grid.html">Shop</Link></li>
//                                     <li><Link to="#">Pages</Link>
//                                         <ul className="header__menu__dropdown">
//                                             <li><Link to="./shop-details.html">Shop Details</Link></li>
//                                             <li><Link to="./shoping-cart.html">Shopping Cart</Link></li>
//                                             <li><Link to="./checkout.html">Check Out</Link></li>
//                                             <li><Link to="./blog-details.html">Blog Details</Link></li>
//                                         </ul>
//                                     </li>
//                                     <li><Link to="./blog.html">Blog</Link></li>
//                                     <li><Link to="./contact.html">Contact</Link></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         <div className="col-lg-3">
//                             <div className="header__cart">
//                                 <ul>
//                                     <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                                     <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                                 </ul>
//                                 <div className="header__cart__price">Item: <span>$150.00</span></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="humberger__open">
//                         <i className="fa-solid fa-bars-staggered"></i>
//                     </div>
//                 </div>
//                 </div>
//             </Headroom>
//         </>
//     );
// }


// import React, { useEffect, useRef, useState } from 'react';
// import './Mainbar.css';  // Importing the CSS file for styles.
// import { Link } from 'react-router-dom';
// export default function Mainbar() {

//     const [showMenu, setShowMenu] = useState(false)

//     const showMenuSide = () => {
//         setShowMenu(!showMenu)
//         console.log(showMenu)
//     }
//     console.log(showMenu)

//     const headerRef = useRef()
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             let position = window.pageYOffset;
//             // console.log(position)
//             if (position > 100) {
//                 headerRef.current.classList.add('mainMenuHeader')
//                 // headerRef.current.classList.add('AddHeaderColor')
//                 headerRef.current.classList.remove('AddHeaderColor')
//             }
//             else {
//                 headerRef.current.classList.remove('mainMenuHeader')
//                 // headerRef.current.classList.remove('AddHeaderColor')
//                 headerRef.current.classList.add('AddHeaderColor')

//             }
//         })


//     }, [])
//     return (
//         <>
//             <div className={`humberger__menu__overlay ${showMenu ? "active" : ""}`}></div>
//             <div className={`humberger__menu__wrapper ${showMenu ? "show__humberger__menu__wrapper" : ""}`}>
//                 <div className="humberger__menu__logo">
//                     <Link to="#"><img src="/assets/img/logo.png" alt="" /></Link>
//                 </div>
//                 <div className="humberger__menu__cart">
//                     <ul>
//                         <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                         <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                     </ul>
//                     <div className="header__cart__price">item: <span>$50.00</span></div>
//                 </div>
//                 <div className="humberger__menu__widget">
//                     <div className="header__top__right__language">
//                         <img src="/assets/img/language.png" alt="" />
//                         <div>English</div>
//                         <span className="arrow_carrot-down"></span>
//                         <ul>
//                             <li><Link to="#">Spanis</Link></li>
//                             <li><Link to="#">English</Link></li>
//                         </ul>
//                     </div>
//                     <div className="header__top__right__auth">
//                         <Link to="#"><i className="fa fa-user"></i> Login</Link>
//                     </div>
//                 </div>

//                 <nav className="humberger__menu__nav mobile-menu">
//                     <ul>
//                         <li className="active"><Link to="./index.html">Home</Link></li>
//                         <li><Link to="./shop-grid.html">Shop</Link></li>
//                         <li><Link to="#">Pages</Link>
//                             <ul className="header__menu__dropdown">
//                                 <li><Link to="./shop-details.html">Shop Details</Link></li>
//                                 <li><Link to="./shoping-cart.html">Shoping Cart</Link></li>
//                                 <li><Link to="./checkout.html">Check Out</Link></li>
//                                 <li><Link to="./blog-details.html">Blog Details</Link></li>
//                             </ul>
//                         </li>
//                         <li><Link to="./blog.html">Blog</Link></li>
//                         <li><Link to="./contact.html">Contact</Link></li>
//                     </ul>
//                 </nav>
{/* <div id="mobile-menu-wrap">
    <div className="slicknav_menu"><Link to="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span></Link><nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none" }}>
        <ul>
            <li className="active"><Link to="./index.html" role="menuitem">Home</Link></li>
            <li><Link to="./shop-grid.html" role="menuitem">Shop</Link></li>
            <li className="slicknav_parent slicknav_collapsed"><Link to="#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{ outline: "none" }}><Link to="#">Pages</Link>
                <span className="slicknav_arrow">►</span></Link><ul className="header__menu__dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                    <li><Link to="./shop-details.html" role="menuitem" tabIndex="-1">Shop Details</Link></li>
                    <li><Link to="./shoping-cart.html" role="menuitem" tabIndex="-1">Shoping Cart</Link></li>
                    <li><Link to="./checkout.html" role="menuitem" tabIndex="-1">Check Out</Link></li>
                    <li><Link to="./blog-details.html" role="menuitem" tabIndex="-1">Blog Details</Link></li>
                </ul>
            </li>
            <li><Link to="./blog.html" role="menuitem">Blog</Link></li>
            <li><Link to="./contact.html" role="menuitem">Contact</Link></li>
        </ul>
    </nav></div>
</div> */}

//                 <div id="mobile-menu-wrap"></div>
//                 <div className="header__top__right__social">
//                     <Link to="#"><i className="fa fa-facebook"></i></Link>
//                     <Link to="#"><i className="fa fa-twitter"></i></Link>
//                     <Link to="#"><i className="fa fa-linkedin"></i></Link>
//                     <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
//                 </div>
//                 <div className="humberger__menu__contact">
//                     <ul>
//                         <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
//                         <li>Free Shipping for all Order of $99</li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="mainMenuHeader1 AddHeaderColor" ref={headerRef}>

//                 <div className="container ">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="header__logo d-flex ">
//                                 <Link to="./index.html">
//                                     <img src="/assets/img/logo.png" alt="Logo" />
//                                 </Link>

//                                 {/* Mobile search box with a sleek design */}
//                                 <div className="mobile-search mx-3">
//                                     <input type="text" placeholder="Search..." />
//                                     <i className="fa fa-search"></i>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <nav className="header__menu">
//                                 <ul>
//                                     <li className="active"><Link to="/">Home</Link></li>
//                                     <li><Link to="/all-product">Shop</Link></li>
//                                     {/* <li><Link to="#">Pages</Link>
//                                         <ul className="header__menu__dropdown">
//                                             <li><Link to="">Shop Details</Link></li>
//                                             <li><Link to="./shoping-cart.html">Shopping Cart</Link></li>
//                                             <li><Link to="./checkout.html">Check Out</Link></li>
//                                             <li><Link to="./blog-details.html">Blog Details</Link></li>
//                                         </ul>
//                                     </li> */}
//                                     <li><Link to="/blog">Blog</Link></li>
//                                     <li><Link to="/contact">Contact</Link></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         <div className="col-lg-3">
//                             <div className="header__cart">
//                                 <ul>
//                                     <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                                     <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                                 </ul>
//                                 <div className="header__cart__price">Item: <span>$150.00</span></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="humberger__open">
//                         <i className="fa-solid fa-bars-staggered text-light" onClick={showMenuSide}></i>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }




// import React, { useEffect, useRef, useState } from 'react';
// import './Mainbar.css';  // Importing the CSS file for styles.
// import { Link } from 'react-router-dom';

// export default function Mainbar() {

//     const [showMenu, setShowMenu] = useState(false);
//     const menuRef = useRef();
//     const bodyRef = useRef();

//     const showMenuSide = () => {
//         setShowMenu(!showMenu);
//         console.log(showMenu);
//     };

//     const closeMenu = () => {
//         setShowMenu(false);
//     };

//     // Close the menu if clicking outside of it
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (menuRef.current && !menuRef.current.contains(e.target) && bodyRef.current && !bodyRef.current.contains(e.target)) {
//                 setShowMenu(false);
//             }
//         };

//         document.addEventListener('click', handleClickOutside);

//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     const headerRef = useRef()
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             let position = window.pageYOffset;
//             // console.log(position)
//             if (position > 100) {
//                 headerRef.current.classList.add('mainMenuHeader')
//                 // headerRef.current.classList.add('AddHeaderColor')
//                 headerRef.current.classList.remove('AddHeaderColor')
//             }
//             else {
//                 headerRef.current.classList.remove('mainMenuHeader')
//                 // headerRef.current.classList.remove('AddHeaderColor')
//                 headerRef.current.classList.add('AddHeaderColor')

//             }
//         })


//     }, [])

//     return (
//         <>
//             {/* Overlay */}
//             <div className={`humberger__menu__overlay ${showMenu ? "active" : ""}`}></div>

//             {/* Menu Wrapper */}
//             <div
//                 className={`humberger__menu__wrapper ${showMenu ? "show__humberger__menu__wrapper" : ""}`}
//                 ref={menuRef}
//             >
//                 <div className="humberger__menu__logo">
//                     <Link to="#"><img src="/assets/img/logo.png" alt="" /></Link>
//                 </div>

//                 {/* Close Button */}
//                 <div className="humberger__menu__close" onClick={closeMenu}>
//                     <i className="fa fa-times"></i> {/* Close icon */}
//                 </div>

//                 <div className="humberger__menu__cart">
//                     <ul>
//                         <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                         <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                     </ul>
//                     <div className="header__cart__price">item: <span>$50.00</span></div>
//                 </div>
//                 <div className="humberger__menu__widget">
//                     <div className="header__top__right__language">
//                         <img src="/assets/img/language.png" alt="" />
//                         <div>English</div>
//                         <span className="arrow_carrot-down"></span>
//                         <ul>
//                             <li><Link to="#">Spanish</Link></li>
//                             <li><Link to="#">English</Link></li>
//                         </ul>
//                     </div>
//                     <div className="header__top__right__auth">
//                         <Link to="#"><i className="fa fa-user"></i> Login</Link>
//                     </div>
//                 </div>

//                 {/* Navigation */}
//                 <nav className="humberger__menu__nav mobile-menu">
//                     <ul>
//                         <li className="active"><Link to="./index.html">Home</Link></li>
//                         <li><Link to="./shop-grid.html">Shop</Link></li>
//                         <li><Link to="#">Pages</Link>
//                             <ul className="header__menu__dropdown">
//                                 <li><Link to="./shop-details.html">Shop Details</Link></li>
//                                 <li><Link to="./shoping-cart.html">Shopping Cart</Link></li>
//                                 <li><Link to="./checkout.html">Check Out</Link></li>
//                                 <li><Link to="./blog-details.html">Blog Details</Link></li>
//                             </ul>
//                         </li>
//                         <li><Link to="./blog.html">Blog</Link></li>
//                         <li><Link to="./contact.html">Contact</Link></li>
//                     </ul>
//                 </nav>
// <div id="mobile-menu-wrap">
//     <div className="slicknav_menu">
//         <Link to="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{outline: "none"}}>
//             <span className="slicknav_menutxt">MENU</span>
//             <span className="slicknav_icon">
//                 <span className="slicknav_icon-bar"></span>
//                 <span className="slicknav_icon-bar"></span>
//                 <span className="slicknav_icon-bar"></span>
//             </span>
//         </Link>
//         <nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: "none"}}>
//             <ul>
//                 <li className="active"><Link to="./index.html" role="menuitem">Home</Link></li>
//                 <li><Link to="./shop-grid.html" role="menuitem">Shop</Link></li>
//                 <li className="slicknav_parent">
//                     <Link to="#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>
//                         <span>Pages</span>
//                         <i className="ri-arrow-right-s-fill dropdownIcon" style={{float:"right"}}></i>
//                     </Link>
//                     <ul className="header__menu__dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>
//                         <li><Link to="./shop-details.html" role="menuitem">Shop Details</Link></li>
//                         <li><Link to="./shoping-cart.html" role="menuitem">Shopping Cart</Link></li>
//                         <li><Link to="./checkout.html" role="menuitem">Checkout</Link></li>
//                         <li><Link to="./blog-details.html" role="menuitem">Blog Details</Link></li>
//                     </ul>
//                 </li>
//                 <li><Link to="./blog.html" role="menuitem">Blog</Link></li>
//                 <li><Link to="./contact.html" role="menuitem">Contact</Link></li>
//             </ul>
//         </nav>
//     </div>
// </div>


//                 {/* Social Icons */}
//                 <div className="header__top__right__social">
//                     <Link to="#"><i className="fa fa-facebook"></i></Link>
//                     <Link to="#"><i className="fa fa-twitter"></i></Link>
//                     <Link to="#"><i className="fa fa-linkedin"></i></Link>
//                     <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="humberger__menu__contact">
//                     <ul>
//                         <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
//                         <li>Free Shipping for all Order of $99</li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Main Menu Header */}
//             <div className="mainMenuHeader1 AddHeaderColor" ref={headerRef}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="header__logo d-flex">
//                                 <Link to="./index.html">
//                                     <img src="/assets/img/logo.png" alt="Logo" />
//                                 </Link>
//                                 <div className="mobile-search mx-3">
//                                     <input type="text" placeholder="Search..." />
//                                     <i className="fa fa-search"></i>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <nav className="header__menu">
//                                 <ul>
//                                     <li className="active"><Link to="/">Home</Link></li>
//                                     <li><Link to="/all-product">Shop</Link></li>
//                                     <li><Link to="/blog">Blog</Link></li>
//                                     <li><Link to="/contact">Contact</Link></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         <div className="col-lg-3">
//                             <div className="header__cart">
//                                 <ul>
//                                     <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                                     <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                                 </ul>
//                                 <div className="header__cart__price">Item: <span>$150.00</span></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="humberger__open">
//                         <i className="fa-solid fa-bars-staggered text-light" onClick={showMenuSide}></i>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



// import React, { useEffect, useRef, useState } from 'react';
// import './Mainbar.css';  // Importing the CSS file for styles.
// import { Link } from 'react-router-dom';

// export default function Mainbar() {
//     const [showMenu, setShowMenu] = useState(false);
//     const menuRef = useRef();
//     const bodyRef = useRef(); // Added to track body or main area.

//     const showMenuSide = () => {
//         // Toggle the state to show or hide the sidebar
//         setShowMenu(!showMenu);
//     };

//     const closeMenu = () => {
//         setShowMenu(false);
//     };

//     // Close the menu if clicking outside of it
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             // Check if the click was outside the menu and body (use proper refs)
//             if (
//                 menuRef.current && !menuRef.current.contains(e.target) && 
//                 bodyRef.current && !bodyRef.current.contains(e.target)
//             ) {
//                 setShowMenu(false);
//             }
//         };

//         // Add event listener for detecting clicks outside
//         document.addEventListener('click', handleClickOutside);

//         return () => {
//             // Cleanup the event listener
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     const headerRef = useRef();
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             let position = window.pageYOffset;
//             if (position > 100) {
//                 headerRef.current.classList.add('mainMenuHeader');
//                 headerRef.current.classList.remove('AddHeaderColor');
//             } else {
//                 headerRef.current.classList.remove('mainMenuHeader');
//                 headerRef.current.classList.add('AddHeaderColor');
//             }
//         });
//     }, []);

//     return (
//         <>
//             {/* Main content or body area */}
//             <div className="body-content">
//                 {/* Overlay */}
//                 <div className={`humberger__menu__overlay ${showMenu ? "active" : ""}`} onClick={closeMenu}></div>

//                 {/* Menu Wrapper */}
//                 <div
//                     className={`humberger__menu__wrapper ${showMenu ? "show__humberger__menu__wrapper" : ""}`}
//                     ref={menuRef}
//                 >
//                     <div className="humberger__menu__logo">
//                         <Link to="#"><img src="/assets/img/logo.png" alt="" /></Link>
//                     </div>

//                     {/* Close Button */}
//                     <div className="humberger__menu__close" onClick={closeMenu}>
//                         <i className="fa fa-times"></i> {/* Close icon */}
//                     </div>

//                     {/* Cart and Widgets */}
//                     <div className="humberger__menu__cart">
//                         <ul>
//                             <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                             <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                         </ul>
//                         <div className="header__cart__price">item: <span>$50.00</span></div>
//                     </div>
//                     <div className="humberger__menu__widget">
//                         <div className="header__top__right__language">
//                             <img src="/assets/img/language.png" alt="" />
//                             <div>English</div>
//                             <span className="arrow_carrot-down"></span>
//                             <ul>
//                                 <li><Link to="#">Spanish</Link></li>
//                                 <li><Link to="#">English</Link></li>
//                             </ul>
//                         </div>
//                         <div className="header__top__right__auth">
//                             <Link to="#"><i className="fa fa-user"></i> Login</Link>
//                         </div>
//                     </div>

//                     {/* Navigation */}
//                     <nav className="humberger__menu__nav mobile-menu">
//                         <ul>
//                             <li className="active"><Link to="./index.html">Home</Link></li>
//                             <li><Link to="./shop-grid.html">Shop</Link></li>
//                             <li><Link to="#">Pages</Link>
//                                 <ul className="header__menu__dropdown">
//                                     <li><Link to="./shop-details.html">Shop Details</Link></li>
//                                     <li><Link to="./shoping-cart.html">Shopping Cart</Link></li>
//                                     <li><Link to="./checkout.html">Check Out</Link></li>
//                                     <li><Link to="./blog-details.html">Blog Details</Link></li>
//                                 </ul>
//                             </li>
//                             <li><Link to="./blog.html">Blog</Link></li>
//                             <li><Link to="./contact.html">Contact</Link></li>
//                         </ul>
//                     </nav>

//                     {/* Social Icons */}
//                     <div className="header__top__right__social">
//                         <Link to="#"><i className="fa fa-facebook"></i></Link>
//                         <Link to="#"><i className="fa fa-twitter"></i></Link>
//                         <Link to="#"><i className="fa fa-linkedin"></i></Link>
//                         <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="humberger__menu__contact">
//                         <ul>
//                             <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
//                             <li>Free Shipping for all Order of $99</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Menu Header */}
//             <div className="mainMenuHeader1 AddHeaderColor" ref={headerRef}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="header__logo d-flex">
//                                 <Link to="./index.html">
//                                     <img src="/assets/img/logo.png" alt="Logo" />
//                                 </Link>
//                                 <div className="mobile-search mx-3">
//                                     <input type="text" placeholder="Search..." />
//                                     <i className="fa fa-search"></i>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <nav className="header__menu">
//                                 <ul>
//                                     <li className="active"><Link to="/">Home</Link></li>
//                                     <li><Link to="/all-product">Shop</Link></li>
//                                     <li><Link to="/blog">Blog</Link></li>
//                                     <li><Link to="/contact">Contact</Link></li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         <div className="col-lg-3">
//                             <div className="header__cart">
//                                 <ul>
//                                     <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
//                                     <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
//                                 </ul>
//                                 <div className="header__cart__price">Item: <span>$150.00</span></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="humberger__open">
//                         {/* Hamburger icon */}
//                         <i className="fa-solid fa-bars-staggered text-light" onClick={showMenuSide}></i>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



import React, { useEffect, useRef, useState } from 'react';
import './Mainbar.css';  // Importing the CSS file for styles.
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../Store/features/authSlice/authSlice';
import { showInfoMsg, showSuccessMsg } from '../../../utils/ShowMessage';
const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function Mainbar() {
    const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);
    const { cart, TotalCartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutUser()).then((data) => {
            console.log(data.payload)
            if (data.payload.success) {
                showSuccessMsg(data.payload.message)
            }
        })
    }

    // Get the wishlist from localStorage

    const [wishListCount, setWishListCount] = useState(0)

    useEffect(() => {
        const wishilist = localStorage.getItem("customerWishList");

        // Check if the wishlist is not null and parse it into an array
        if (wishilist) {
            const wishlistArray = JSON.parse(wishilist);
            const productCount = wishlistArray.length; // Get the count of products in the wishlist
            setWishListCount(parseInt(productCount))

            console.log("Number of products in the wishlist:", productCount);
        } else {
            console.log("Wishlist is empty or doesn't exist.");
        }

    }, [wishListCount])




    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();
    const bodyRef = useRef(); // Added to track body or main area.

    const showMenuSide = () => {
        // Toggle the state to show or hide the sidebar
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    // Close the menu if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                bodyRef.current && !bodyRef.current.contains(e.target)
            ) {
                setShowMenu(false);
            }
        };

        // Add event listener for detecting clicks outside
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Disable scrolling when the menu is open
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        return () => {
            document.body.style.overflow = 'auto'; // Reset to default
        };
    }, [showMenu]);

    // const headerRef = useRef();
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         let position = window.pageYOffset;
    //         // console.log(position)
    //         if (position > 100) {
    //             headerRef.current.classList.add('mainMenuHeader');
    //             headerRef.current.classList.remove('AddHeaderColor');
    //         } else {
    //             headerRef.current.classList.remove('mainMenuHeader');
    //             headerRef.current.classList.add('AddHeaderColor');
    //         }
    //     });
    // }, []);


    const headerRef = useRef(null);

    useEffect(() => {
        // Make sure headerRef.current is not null
        const handleScroll = () => {
            if (headerRef.current) {
                let position = window.pageYOffset;
                if (position > 100) {
                    headerRef.current.classList.add('mainMenuHeader');
                    headerRef.current.classList.remove('AddHeaderColor');
                } else {
                    headerRef.current.classList.remove('mainMenuHeader');
                    headerRef.current.classList.add('AddHeaderColor');
                }
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the scroll event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        e.preventDefault();
        if (search && search.length > 1) {
            const categoryId = 0;  // Example category_id
            const categoryName = "all-categories";  // Example category_name

            // Replace spaces with '+' in the search term
            const formattedSearchTerm = search.replace(/\s+/g, "+");

            // Create the correct URL with query parameters
            const url = `/all-product/${categoryId}/${categoryName}?SearchTerm=${formattedSearchTerm}`;
            window.location.href = url;
        } else {
            showInfoMsg('Enter something to search');
        }
    };

    // const totalCartPrice=0

    // if(TotalCartItems>0){

    //     Array.isArray(cart.cart.map((item,ind)=>(
    //         totalCartPrice+=item.Price
    //     )))
    // }
    // console.log(totalCartPrice)

    return (
        <>
            <div className="body-content">
                {/* Overlay */}
                <div className={`humberger__menu__overlay ${showMenu ? "active" : ""}`} onClick={closeMenu}></div>

                {/* Menu Wrapper */}
                <div
                    className={`humberger__menu__wrapper ${showMenu ? "show__humberger__menu__wrapper" : ""}`}
                    ref={menuRef}
                >
                    {/* <div className="humberger__menu__logo">
                        <Link to="#"><img src="/assets/img/logo.png" alt="" /></Link>
                    </div> */}
                    <div className="sidebarNav">
                        {
                            user ?
                                <>

                                    <Link id='mobileSingLink' className='mt-1' to="/sign-up"> Hello {user?.name || user?.role} !!</Link>

                                    <ul className='' style={{ listStyle: "none" }}>
                                        <li className="dropdown">
                                            <Link className="nav-link dropdown-toggle " data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                { <img src={user?.file.url||`${BASE_URL}/${user?.file}`} style={{ width: "25px", height: "25px", borderRadius: "50%" }} /> ||user?.name }

                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                                                <div className=" dropdown-header noti-title">
                                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                                </div>

                                                <Link to="/profile" className="dropdown-item" onClick={closeMenu}>
                                                    <i className="mdi mdi-account-circle me-1"></i>
                                                    <span>My Account</span>
                                                </Link>
                                                <Link to="/password/update" className="dropdown-item">
                                                    <i className="mdi mdi-account-lock-open-outline me-1"></i>
                                                    <span>Change Password</span>
                                                </Link>

                                                <Link to="#" className="dropdown-item" onClick={closeMenu}>
                                                    <i className="mdi mdi-account-edit me-1"></i>
                                                    <span>Settings</span>
                                                </Link>

                                                <Link to="#" className="dropdown-item" onClick={closeMenu}>
                                                    <i className="mdi mdi-heart me-1"></i>
                                                    <span> Wiselist</span>
                                                </Link>

                                                <Link to="#" className="dropdown-item" onClick={logout}>
                                                    <i className="mdi mdi-logout me-1"></i>
                                                    <span>Logout</span>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </>
                                :
                                <>
                                    <span className="material-symbols-outlined me-2 mt-2">person</span>
                                    <Link id='mobileSingLink' className='mt-2' to="/sign-up">Login & Sign Up</Link>

                                    <Link to="/" className='me-auto'><img src="/assets/img/Parijat_logo.png" width="150" alt="" /></Link>
                                </>
                        }


                        {/* <Link to="/" className='me-auto'><img src="/assets/img/Parijat_logo.png" alt="" /></Link> */}


                    </div>

                    {/* Close Button */}
                    {/* <div className="humberger__menu__close" onClick={closeMenu}>
                        <i className="fa fa-times"></i>
                    </div> */}

                    {/* Cart and Widgets */}
                    {/* <div className="humberger__menu__cart">
                        <ul>
                            <li><Link to="#"><i className="fa fa-heart"></i> <span>1</span></Link></li>
                            <li><Link to="#"><i className="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$50.00</span></div>
                    </div>
                    <div className="humberger__menu__widget">
                        <div className="header__top__right__language">
                            <img src="/assets/img/language.png" alt="" />
                            <div>English</div>
                            <span className="arrow_carrot-down"></span>
                            <ul>
                                <li><Link to="#">Spanish</Link></li>
                                <li><Link to="#">English</Link></li>
                            </ul>
                        </div>
                        <div className="header__top__right__auth">
                            <Link to="#"><i className="fa fa-user"></i> Login</Link>
                        </div>
                    </div> */}

                    {/* Navigation */}
                    {/* <nav className="humberger__menu__nav mobile-menu">
                        <ul>
                            <li className="active"><Link to="./index.html">Home</Link></li>
                            <li><Link to="./shop-grid.html">Shop</Link></li>
                            <li><Link to="#">Pages</Link>
                                <ul className="header__menu__dropdown">
                                    <li><Link to="./shop-details.html">Shop Details</Link></li>
                                    <li><Link to="./shoping-cart.html">Shopping Cart</Link></li>
                                    <li><Link to="./checkout.html">Check Out</Link></li>
                                    <li><Link to="./blog-details.html">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="./blog.html">Blog</Link></li>
                            <li><Link to="./contact.html">Contact</Link></li>
                        </ul>
                    </nav> */}




                    <div className="sidebarNav1">

                        <div id="mobile-menu-wrap custom-navbar">
                            <div className="slicknav_menu ">
                                <Link to="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}>
                                    <span className="slicknav_menutxt">MENU</span>
                                    <span className="slicknav_icon">
                                        <span className="slicknav_icon-bar"></span>
                                        <span className="slicknav_icon-bar"></span>
                                        <span className="slicknav_icon-bar"></span>
                                    </span>
                                </Link>
                                <nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none" }}>
                                    <ul>
                                        <li className="active"><Link to="/" role="menuitem" onClick={closeMenu}> <i className="ri-home-9-fill me-2"></i>Home</Link></li>
                                        <li><Link to="/all-product/0/all-categories" role="menuitem" onClick={closeMenu}> <i className="ri-shopping-bag-4-fill me-2"></i>Shop</Link></li>
                                        {/* <li className="slicknav_parent">
                                            <Link to="" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{ outline: "none" }}>
                                                <span>Pages</span>
                                                <i className="ri-arrow-right-s-fill dropdownIcon" style={{ float: "right" }}></i>
                                            </Link>
                                            <ul className="header__menu__dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                                                <li><Link to="/shop-details" role="menuitem">Shop Details</Link></li>
                                                <li><Link to="/shoping-cart" role="menuitem">Shopping Cart</Link></li>
                                                <li><Link to="/checkout" role="menuitem">Checkout</Link></li>
                                                <li><Link to="/blog-details" role="menuitem">Blog Details</Link></li>
                                            </ul>
                                        </li> */}
                                        <li><Link to="/profile" role="menuitem" onClick={closeMenu}><i className="ri-user-3-fill me-2"></i>My Account</Link></li>
                                        <li><Link to="/my-wishlist" role="menuitem" onClick={closeMenu}><i className="ri-heart-fill me-2"></i>My Wishlist</Link></li>
                                        <li><Link to="/my-order" role="menuitem" onClick={closeMenu}><i className="ri-draft-fill me-2"></i>My Orders</Link></li>
                                        <li><Link to="/cart" role="menuitem" onClick={closeMenu}><i className="ri-shopping-cart-fill me-2"></i>My Cart</Link></li>
                                        <li><Link to="/blog" role="menuitem" onClick={closeMenu}><i className="ri-news-fill me-2"></i>Blog</Link></li>
                                        <li><Link to="/my-notification" role="menuitem" onClick={closeMenu}><i className="ri-notification-2-fill me-2"></i>My Notification</Link></li>
                                        {
                                            user ?
                                                <li><Link to="/password/update" role="menuitem" onClick={closeMenu}><i className="ri-lock-unlock-fill me-2"></i>Change Password</Link></li>


                                                : ""
                                        }
                                        <li><Link to="/contact" role="menuitem" onClick={closeMenu}><i className="ri-contacts-book-3-line me-2"></i>Contact</Link></li>
                                        <li><Link to="#" role="menuitem" onClick={logout}>  <i className="mdi mdi-logout me-2"></i>Logout</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="header__top__right__social">

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

                        {/* Contact Information */}
                        <div className="humberger__menu__contact">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mainMenuHeader1 custom-navbar AddHeaderColor" ref={headerRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo d-flex">
                                <Link to="/">
                                    <img src="/assets/img/Parijat_logo.png" alt="Logo" width="120" />
                                </Link>
                                <form onSubmit={handleSearch} className='mobileSearch'>

                                    <div className="mobile-search mx-3">
                                        <input type="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                                        <i className="fa fa-search"></i>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/all-product/0/all-categories">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li className='me-3 fs-3'><Link to="/my-wishlist"><i className="fa fa-heart fs-3"></i> <span>{wishListCount ?? 0}</span></Link></li>
                                    <li className='fs-3'><Link to="/cart"><i className="fa fa-shopping-bag fs-3"></i> <span>{TotalCartItems ?? 0}</span></Link></li>
                                </ul>
                                {/* <div className="header__cart__price">Item: <span>$150.00</span></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa-solid fa-bars-staggered text-light" onClick={showMenuSide}></i>
                    </div>
                </div>
            </div>
        </>
    );
}
