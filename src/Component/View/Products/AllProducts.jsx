// import React, { useEffect, useRef, useState } from 'react';
// import MetaData from '../Layout/MetaData';
// import "./allProduct.css"
// import ProductComboBox from './ProductComboBox';
// import ProductFeaturedBox from './ProductFeaturedBox';
// import { Link } from 'react-router-dom';


// export default function AllProducts() {
//     const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//     const [isBrandOpen, setIsBrandOpen] = useState(false);
//     const [isSizeOpen, setIsSizeOpen] = useState(false);
//     const [isPriceOpen, setIsPriceOpen] = useState(false);
//     const [isRattingOpen, setIsRattingOpen] = useState(false);
//     const [isPopularTagOpen, setIsPopularTagOpen] = useState(false);

//     const handleToggle = () => {
//         setIsCategoryOpen(!isCategoryOpen);
//     };

//     const handleBrand = () => { setIsBrandOpen(!isBrandOpen) }
//     const handleSize = () => { setIsSizeOpen(!isSizeOpen) }
//     const handlePrice = () => { setIsPriceOpen(!isPriceOpen) }
//     const handleRatting = () => { setIsRattingOpen(!isRattingOpen) }
//     const handlePopular = () => { setIsPopularTagOpen(!isPopularTagOpen) }

//     useEffect(() => {
//         // Check if jQuery is loaded
//         if (typeof window !== 'undefined' && window.jQuery) {
//             const $ = window.jQuery;
//             // Initialize Owl Carousel after component has mounted
//             $('#owlCarousel4').owlCarousel({
//                 loop: true,
//                 dots: true,
//                 margin: 10,
//                 autoplay: true,
//                 autoplayTimeout: 3000,
//                 autoplayHoverPause: true,
//                 smartSpeed: 1000,
//                 responsive: {
//                     0: {
//                         items: 2
//                     },
//                     600: {
//                         items: 3
//                     },
//                     1000: {
//                         items: 5
//                     }
//                 }
//             });
//         }
//     }, []);

//     useEffect(() => {
//         // Initialize Owl Carousel when the component mounts
//         $('.latest-product__slider').owlCarousel({
//             loop: true,               // Infinite loop
//             margin: 10,               // Space between items
//             nav: true,
//             autoplay: true,
//             autoplayTimeout: 3000,
//             autoplayHoverPause: true,
//             smartSpeed: 1000,                // Show next/prev buttons
//             responsive: {
//                 0: {
//                     items: 1,        // Show 1 item on small screens
//                 },
//                 600: {
//                     items: 1,        // Show 3 items on medium screens
//                 },
//                 1000: {
//                     items: 1,        // Show 3 items on large screens
//                 },
//             },
//         });

//         // Cleanup Owl Carousel on unmount
//         return () => {
//             $('.latest-product__slider').owlCarousel('destroy');
//         };
//     }, []);

//     const headerRef = useRef();
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             let position = window.pageYOffset;
//             if (position > 100) {
//                 headerRef.current.classList.add('FilterShowInButtom');
//                 // headerRef.current.classList.remove('AddHeaderColor');
//             } else {
//                 headerRef.current.classList.remove('FilterShowInButtom');
//                 // headerRef.current.classList.add('AddHeaderColor');
//             }
//         });
//     }, []);

//     return (
//         <>
//             <MetaData title="All Prodcut" />
//             <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="breadcrumb__text">
//                                 <h2>Organi Shop</h2>
//                                 <div className="breadcrumb__option">
//                                     <a href="./index.html">Home</a>
//                                     <span>Shop</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* <section>
//                 <div className="container-fluid">
//                 <div className="topSectionShopOnMobile row mb-3">
//                         <div className="col-lg-6 md-6 col-sm-6 col-6 topSectionShopOnMobile1">
//                             <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
//                                 <div className="">
//                                 <h6>SORT BY</h6>
//                                 <span>New Arrivals</span>
//                                 </div>
//                                 <span className="material-symbols-outlined ms-auto">sort</span>
//                             </div>

//                             <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
//                                 <div className="offcanvas-header">
//                                     <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
//                                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div className="offcanvas-body small">
//                                     ...
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-6 md-6 col-sm-6 col-6">
//                             hello
//                         </div>
//                     </div>
//                 </div>
//             </section> */}

//             <section className="product spad allProductSection">
//                 <div className="container-fluid">

//                     <div className="topSectionShopOnMobile row mb-3" ref={headerRef}>
//                         <div className="col-lg-6 md-6 col-sm-6 col-6 topSectionShopOnMobile1">
//                             <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
//                                 <div className="">
//                                     <h6>SORT BY</h6>
//                                     <span>New Arrivals</span>
//                                 </div>
//                                 <span className="material-symbols-outlined ms-auto">sort</span>
//                             </div>

//                             <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
//                                 <div className="offcanvas-header">
//                                     <h5 className="offcanvas-title" id="offcanvasBottomLabel">Sort By</h5>
//                                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div className="offcanvas-body small">
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
//                                         <label className="form-check-label" for="exampleRadios1">
//                                             New Arrivals
//                                         </label>
//                                     </div>
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                         <label className="form-check-label" for="exampleRadios2">
//                                             Product Name
//                                         </label>
//                                     </div>
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                         <label className="form-check-label" for="exampleRadios2">
//                                             Price Low to High
//                                         </label>
//                                     </div>
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                         <label className="form-check-label" for="exampleRadios2">
//                                             Price High to Low
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-6 md-6 col-sm-6 col-6">
//                             {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
//                             <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
//                                 <div className="">
//                                     <h6>FILTER</h6>
//                                     <span>Applied <span className='countFilter'>0</span></span>
//                                 </div>
//                                 <span className="material-symbols-outlined ms-auto">filter_alt</span>
//                             </div>


//                             <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
//                                 <div className="offcanvas-header">
//                                     <h5 className="offcanvas-title" id="offcanvasRightLabel">Apply Filter</h5>
//                                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div className="offcanvas-body">
//                                     <div className="sidebar">
//                                         <div className="sidebar__item">
//                                             <div className="LeftSideCategory" onClick={handleToggle}>
//                                                 <h5 style={{ cursor: 'pointer' }}>
//                                                     Category
//                                                 </h5>
//                                                 <i
//                                                     className={`ri-arrow-right-s-fill ${isCategoryOpen ? 'arrowopen' : ''}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                             <div className={`dropdown-content ${isCategoryOpen ? 'open' : ''}`}>
//                                                 <p>Statues</p>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="sidebar__item">
//                                             <div className="LeftSideCategory" onClick={handleBrand}>
//                                                 <h5 style={{ cursor: 'pointer' }}>
//                                                     Brand
//                                                 </h5>
//                                                 <i
//                                                     className={`ri-arrow-right-s-fill ${isBrandOpen ? 'arrowopen' : ''}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                             <div className={`dropdown-content ${isBrandOpen ? 'open' : ''}`}>
//                                                 <p>Statues</p>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="sidebar__item">
//                                             <div className="LeftSideCategory" onClick={handleSize}>
//                                                 <h5 style={{ cursor: 'pointer' }}>
//                                                     size
//                                                 </h5>
//                                                 <i
//                                                     className={`ri-arrow-right-s-fill ${isSizeOpen ? 'arrowopen' : ''}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                             <div className={`dropdown-content ${isSizeOpen ? 'open' : ''}`}>
//                                                 <p>Statues</p>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="sidebar__item">
//                                             <div className="LeftSideCategory" onClick={handlePrice}>
//                                                 <h5 style={{ cursor: 'pointer' }}>
//                                                     Price
//                                                 </h5>
//                                                 <i
//                                                     className={`ri-arrow-right-s-fill ${isPriceOpen ? 'arrowopen' : ''}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                             <div className={`dropdown-content ${isPriceOpen ? 'open' : ''}`}>
//                                                 <p>Statues</p>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="sidebar__item">
//                                             <div className="LeftSideCategory" onClick={handleRatting}>
//                                                 <h5 style={{ cursor: 'pointer' }}>
//                                                     Ratting
//                                                 </h5>
//                                                 <i
//                                                     className={`ri-arrow-right-s-fill ${isRattingOpen ? 'arrowopen' : ''}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                             <div className={`dropdown-content ${isRattingOpen ? 'open' : ''}`}>
//                                                 <p>Statues</p>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="sidebar__item ">
//                                             <div className="LeftSideCategory" onClick={handlePopular}>
//                                                 <h5 style={{ cursor: 'pointer' }}>
//                                                     Popular tag
//                                                 </h5>
//                                                 <i
//                                                     className={`ri-arrow-right-s-fill ${isPopularTagOpen ? 'arrowopen' : ''}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                             <div className={`dropdown-content ${isPopularTagOpen ? 'open' : ''}`}>
//                                                 <p>Statues</p>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>
//                                                 <div className="form-check">
//                                                     <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                                     <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                         Checked checkbox
//                                                     </label>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                         <div className="Clera-all-filter">

//                                             <p className='text-light'> <i className="ri-loop-right-line me-2"></i>Clear All Filter</p>
//                                         </div>

//                                         <div className="sidebar__item">
//                                             <div className="latest-product__text ">
//                                                 <h4>Latest Products</h4>
//                                                 <div className="latest-product__slider owl-carousel">
//                                                     <div className="latest-prdouct__slider__item">
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>

//                                                         {/* Other items */}
//                                                     </div>
//                                                     <div className="latest-prdouct__slider__item">
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>

//                                                         {/* Other items */}
//                                                     </div>
//                                                     <div className="latest-prdouct__slider__item">
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>
//                                                         <a href="#" className="latest-product__item">
//                                                             <div className="latest-product__item__pic">
//                                                                 <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                             </div>
//                                                             <div className="latest-product__item__text">
//                                                                 <h6>Crab Pool Security</h6>
//                                                                 <span>$30.00</span>
//                                                             </div>
//                                                         </a>

//                                                         {/* Other items */}
//                                                     </div>

//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="topSectionShop mb-3">
//                             <h5>Searching for "Your Favorites Product"</h5>
//                             <div className="ms-auto topSectionShop1">
//                                 <div className="me-5 topSectionShop2">
//                                     <ProductComboBox />
//                                 </div>
//                                 <div className="topSectionShop3">
//                                     <ProductFeaturedBox />
//                                 </div>
//                                 <div className="mt-2 search-container">
//                                     <input type="text" className="form-control search-input" placeholder="Search..." />
//                                     <button className="search-btn">
//                                         <i className="fa fa-search"></i> {/* FontAwesome search icon */}
//                                     </button>
//                                 </div>
//                                 {/* <div className="blog__sidebar__search">
//                                         <form action="#">
//                                             <input type="text" placeholder="Search..." />
//                                             <button type="submit"><span className="icon_search"></span></button>
//                                         </form>
//                                     </div> */}
//                             </div>
//                         </div>

//                     </div>
//                     <div className="row">
//                         <div className="col-lg-3 col-md-5">
//                             <div className="sidebar sidebar2">
//                                 <div className="sidebar__item">
//                                     <div className="LeftSideCategory" onClick={handleToggle}>
//                                         <h5 style={{ cursor: 'pointer' }}>
//                                             Category
//                                         </h5>
//                                         <i
//                                             className={`ri-arrow-right-s-fill ${isCategoryOpen ? 'arrowopen' : ''}`}
//                                             style={{ transition: 'transform 0.3s ease' }}
//                                         ></i>
//                                     </div>
//                                     <div className={`dropdown-content ${isCategoryOpen ? 'open' : ''}`}>
//                                         <p>Statues</p>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sidebar__item">
//                                     <div className="LeftSideCategory" onClick={handleBrand}>
//                                         <h5 style={{ cursor: 'pointer' }}>
//                                             Brand
//                                         </h5>
//                                         <i
//                                             className={`ri-arrow-right-s-fill ${isBrandOpen ? 'arrowopen' : ''}`}
//                                             style={{ transition: 'transform 0.3s ease' }}
//                                         ></i>
//                                     </div>
//                                     <div className={`dropdown-content ${isBrandOpen ? 'open' : ''}`}>
//                                         <p>Statues</p>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sidebar__item">
//                                     <div className="LeftSideCategory" onClick={handleSize}>
//                                         <h5 style={{ cursor: 'pointer' }}>
//                                             size
//                                         </h5>
//                                         <i
//                                             className={`ri-arrow-right-s-fill ${isSizeOpen ? 'arrowopen' : ''}`}
//                                             style={{ transition: 'transform 0.3s ease' }}
//                                         ></i>
//                                     </div>
//                                     <div className={`dropdown-content ${isSizeOpen ? 'open' : ''}`}>
//                                         <p>Statues</p>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sidebar__item">
//                                     <div className="LeftSideCategory" onClick={handlePrice}>
//                                         <h5 style={{ cursor: 'pointer' }}>
//                                             Price
//                                         </h5>
//                                         <i
//                                             className={`ri-arrow-right-s-fill ${isPriceOpen ? 'arrowopen' : ''}`}
//                                             style={{ transition: 'transform 0.3s ease' }}
//                                         ></i>
//                                     </div>
//                                     <div className={`dropdown-content ${isPriceOpen ? 'open' : ''}`}>
//                                         <p>Statues</p>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sidebar__item">
//                                     <div className="LeftSideCategory" onClick={handleRatting}>
//                                         <h5 style={{ cursor: 'pointer' }}>
//                                             Ratting
//                                         </h5>
//                                         <i
//                                             className={`ri-arrow-right-s-fill ${isRattingOpen ? 'arrowopen' : ''}`}
//                                             style={{ transition: 'transform 0.3s ease' }}
//                                         ></i>
//                                     </div>
//                                     <div className={`dropdown-content ${isRattingOpen ? 'open' : ''}`}>
//                                         <p>Statues</p>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sidebar__item">
//                                     <div className="LeftSideCategory" onClick={handlePopular}>
//                                         <h5 style={{ cursor: 'pointer' }}>
//                                             Popular tag
//                                         </h5>
//                                         <i
//                                             className={`ri-arrow-right-s-fill ${isPopularTagOpen ? 'arrowopen' : ''}`}
//                                             style={{ transition: 'transform 0.3s ease' }}
//                                         ></i>
//                                     </div>
//                                     <div className={`dropdown-content ${isPopularTagOpen ? 'open' : ''}`}>
//                                         <p>Statues</p>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>
//                                         <div className="form-check">
//                                             <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
//                                             <label className="form-check-label" htmlFor="flexCheckChecked">
//                                                 Checked checkbox
//                                             </label>
//                                         </div>

//                                     </div>
//                                 </div>
//                                 <div className="Clera-all-filter">

//                                     <p className='text-light'> <i className="ri-loop-right-line me-2"></i>Clear All Filter</p>
//                                 </div>

//                                 <div className="sidebar__item">
//                                     <div className="latest-product__text">
//                                         <h4>Latest Products</h4>
//                                         <div className="latest-product__slider owl-carousel">
//                                             <div className="latest-prdouct__slider__item">
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>

//                                                 {/* Other items */}
//                                             </div>
//                                             <div className="latest-prdouct__slider__item">
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>

//                                                 {/* Other items */}
//                                             </div>
//                                             <div className="latest-prdouct__slider__item">
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>
//                                                 <a href="#" className="latest-product__item">
//                                                     <div className="latest-product__item__pic">
//                                                         <img src="assets/img/blog/blog-2.jpg" alt="" />
//                                                     </div>
//                                                     <div className="latest-product__item__text">
//                                                         <h6>Crab Pool Security</h6>
//                                                         <span>$30.00</span>
//                                                     </div>
//                                                 </a>

//                                                 {/* Other items */}
//                                             </div>

//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-9 col-md-7">
//                             <div className="product__discount">
//                                 <div className="section-title product__discount__title">
//                                     <h2>Sale Off</h2>
//                                 </div>
//                                 <div className="row">
//                                     <div className="product__discount__slider owl-carousel" id="owlCarousel4">
//                                         <div className="col-lg-4">
//                                             <div className="product__discount__item">
//                                                 <Link to="/product-details">
//                                                     <div className="product__discount__item__pic set-bg"
//                                                         style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                                         <div className="product__discount__percent">-20%</div>
//                                                         <ul className="product__item__pic__hover">
//                                                             <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                             <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                             <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                         </ul>
//                                                     </div>
//                                                     <div className="product__discount__item__text">
//                                                         <span>Dried Fruit</span>
//                                                         <h5><a href="#">Raisin’n’nuts</a></h5>
//                                                         <div className="product__item__price">$30.00 <span>$36.00</span></div>
//                                                     </div>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-4">
//                                             <div className="product__discount__item">
//                                                 <div className="product__discount__item__pic set-bg"
//                                                     style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                                     <div className="product__discount__percent">-20%</div>
//                                                     <ul className="product__item__pic__hover">
//                                                         <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                         <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                         <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div className="product__discount__item__text">
//                                                     <span>Dried Fruit</span>
//                                                     <h5><a href="#">Raisin’n’nuts</a></h5>
//                                                     <div className="product__item__price">$30.00 <span>$36.00</span></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-4">
//                                             <div className="product__discount__item">
//                                                 <div className="product__discount__item__pic set-bg"
//                                                     style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                                     <div className="product__discount__percent">-20%</div>
//                                                     <ul className="product__item__pic__hover">
//                                                         <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                         <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                         <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div className="product__discount__item__text">
//                                                     <span>Dried Fruit</span>
//                                                     <h5><a href="#">Raisin’n’nuts</a></h5>
//                                                     <div className="product__item__price">$30.00 <span>$36.00</span></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-4">
//                                             <div className="product__discount__item">
//                                                 <div className="product__discount__item__pic set-bg"
//                                                     style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                                     <div className="product__discount__percent">-20%</div>
//                                                     <ul className="product__item__pic__hover">
//                                                         <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                         <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                         <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div className="product__discount__item__text">
//                                                     <span>Dried Fruit</span>
//                                                     <h5><a href="#">Raisin’n’nuts</a></h5>
//                                                     <div className="product__item__price">$30.00 <span>$36.00</span></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="filter__item">
//                                 <div className="row">
//                                     <div className="col-lg-4 col-md-5">
//                                         <div className="filter__sort">
//                                             <span>Sort By</span>
//                                             <select>
//                                                 <option value="0">Default</option>
//                                                 <option value="0">Default</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-4">
//                                         <div className="filter__found">
//                                             <h6><span>16</span> Products found</h6>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-3">
//                                         <div className="filter__option">
//                                             <span className="icon_grid-2x2"></span>
//                                             <span className="icon_ul"></span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-5.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-6.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-9.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-10.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-11.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4 col-md-6 col-sm-6">
//                                     <div className="product__item">
//                                         <div className="product__item__pic set-bg" data-setbg="img/product/product-12.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                             <ul className="product__item__pic__hover">
//                                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="product__item__text">
//                                             <h6><a href="#">Crab Pool Security</a></h6>
//                                             <h5>$30.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="product__pagination">
//                                 <a href="#">1</a>
//                                 <a href="#">2</a>
//                                 <a href="#">3</a>
//                                 <a href="#"><i className="fa fa-long-arrow-right"></i></a>
//                             </div>

//                             {/* Rest of the content remains the same */}

//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }




// import React, { useEffect, useRef, useState } from 'react';
// import MetaData from '../Layout/MetaData';
// import "./allProduct.css"
// import ProductComboBox from './ProductComboBox';
// import ProductFeaturedBox from './ProductFeaturedBox';
// import { Link, useAsyncError, useLocation, useParams } from 'react-router-dom';
// import ProductSidebar from './ProductComponant/ProductSidebar';
// import SortProductByFeatured from './ProductComponant/SortProductByFeatured';
// import ProductBox from './ProductComponant/ProductBox';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../../Store/features/product/productSlice';
// import SitePagination from './SitePagination';
// import Loader from '../Loader/Loader';


// export default function AllProducts() {
//     const { isLoading, products, productCount } = useSelector((state) => state.product)
//     const dispatch = useDispatch()

//     // const [TotalRecords, setTotalRecords] = useState(productCount);
//     const [showPagination, setshowPagination] = useState(false);
//     const [PageNo, setPageNo] = useState(1);
//     const [PageSize, setPageSize] = useState(10);
//     const [TotalRecords, setTotalRecords] = useState(productCount);

//     const param = useParams()

//     let categoryParamArray = []
//     categoryParamArray.push(parseInt(param.category_id) ?? 0)
//     const search = useLocation().search;

//     const queryParams = new URLSearchParams(location.search);
//     const SearchTerm = queryParams.get('SearchTerm');

//     const [CategoryID, setCategoryID] = useState(categoryParamArray)
//     const [SizeID, setSizeID] = useState([]);
//     const [ColorID, setColorID] = useState(null);
//     const [TagID, setTagID] = useState([]);
//     const [ManufacturerID, setManufacturerID] = useState([]);
//     const [MinPrice, setMinPrice] = useState(null);
//     const [MaxPrice, setMaxPrice] = useState(null);
//     const [Rating, setRating] = useState(null);
//     const [productSearch, setProductSearch] = useState('');


//     const setFilterValueInParent = async (e, value, type) => {
//         let categoriesIdsCommaSeperated = CategoryID.length > 0 ? CategoryID.join(",") : "";
//         let brandsIdsCommaSeperated = ManufacturerID.length > 0 ? ManufacturerID.join(",") : "";
//         let sizeIdsCommaSeperated = SizeID.length > 0 ? SizeID.join(",") : "";
//         let tagsIdsCommaSeperated = TagID.length > 0 ? TagID.join(",") : "";
//         let minPriceLocal = MinPrice;
//         let maxPriceLocal = MaxPrice;
//         let colorIdLocal = ColorID;
//         let ratingLocal = Rating;
//         if (type == "category") {

//             let updatedCategories = [...CategoryID];
//             const index = updatedCategories.indexOf(value);

//             if (index === -1) {
//                 updatedCategories.push(value);
//             } else {
//                 updatedCategories.splice(index, 1);
//             }
//             updatedCategories = updatedCategories.filter((num) => num !== 0);

//             await setCategoryID(updatedCategories);
//             categoriesIdsCommaSeperated = updatedCategories.join(",");


//         } else if (type == "brand") {

//             let updatedBrands = [...ManufacturerID];
//             const index = updatedBrands.indexOf(value);

//             if (index === -1) {
//                 updatedBrands.push(value);
//             } else {
//                 updatedBrands.splice(index, 1);
//             }
//             updatedBrands = updatedBrands.filter((num) => num !== 0);

//             await setManufacturerID(updatedBrands);
//             brandsIdsCommaSeperated = updatedBrands.join(",");


//         } else if (type == "size") {

//             let updatedSize = [...SizeID];
//             const index = updatedSize.indexOf(value);

//             if (index === -1) {
//                 updatedSize.push(value);
//             } else {
//                 updatedSize.splice(index, 1);
//             }
//             updatedSize = updatedSize.filter((num) => num !== 0);

//             await setSizeID(updatedSize);
//             sizeIdsCommaSeperated = updatedSize.join(",");


//         } else if (type == "price") {

//             // setTimeout(() => {
//             //     const priceArray = value.split("-");
//             //     setMinPrice(priceArray[0]);
//             //     setMaxPrice(priceArray[1]);
//             // }, 100);

//             const priceArray = value.split("-");
//             await setMinPrice(priceArray[0]);
//             await setMaxPrice(priceArray[1]);

//             minPriceLocal = priceArray[0];
//             maxPriceLocal = priceArray[1];

//         } else if (type == "color") {

//             await setColorID(value);
//             colorIdLocal = value;


//         }
//         else if (type == "rating") {

//             await setRating(value);
//             ratingLocal = value;


//         } else if (type == "tag") {


//             let updatedTags = [...TagID];
//             const index = updatedTags.indexOf(value);

//             if (index === -1) {
//                 updatedTags.push(value);
//             } else {
//                 updatedTags.splice(index, 1);
//             }
//             updatedTags = updatedTags.filter((num) => num !== 0);

//             await setTagID(updatedTags);
//             tagsIdsCommaSeperated = updatedTags.join(",");

//         }


//     }
//     // console.log(MaxPrice)
//     // console.log(MinPrice)

//     // console.log("CAtegory Id kya mili hai",CategoryID)







//     useEffect(() => {
//         const param = {

//             SearchTerm: SearchTerm || productSearch,
//             SizeID: SizeID.join(","),
//             // ColorID: ColorID,
//             CategoryID: CategoryID.join(","),
//             // TagID: TagID.join(","),
//             ManufacturerID: ManufacturerID.join(","),
//             MinPrice: MinPrice,
//             MaxPrice: MaxPrice,
//             Rating: Rating,
//             // OrderByColumnName: OrderByColumnName,
//             PageNo: PageNo,
//             PageSize: PageSize,
//             // productSearch: productSearch||""


//         }
//         dispatch(getAllProducts(param))
//     }, [param, CategoryID, ManufacturerID, SizeID, MaxPrice, MinPrice, Rating, PageNo, PageSize,productSearch])



//     const activeProducts = Array.isArray(products) ? products.filter(product => product.IsActive) : [];


//     // Get All Products 
//     const setCurrentPage = (pageNumber) => {
//         setPageNo(pageNumber);
//     }
//     console.log("Product Page per kuch mila",productSearch)
//     return (
//         <>
//             <MetaData title="All Prodcut" />

//             {isLoading
//                 ? <Loader />
//                 :
//                 <>

//                     <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg" style={{
//                         backgroundImage: "url('/assets/img/cat5.jpeg')", backgroundSize: "cover",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: "center",
//                         backgroundAttachment: "scroll"
//                     }}>
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12 text-center">
//                                     <div className="breadcrumb__text">
//                                         <h2>All Products</h2>
//                                         <div className="breadcrumb__option">
//                                             <Link to="/" style={{ color: "#180150" }}>Home</Link>
//                                             <span>Shop</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="product spad allProductSection">
//                         <div className="container-fluid">

//                         <SortProductByFeatured productSearch={productSearch} setProductSearch={setProductSearch} />


//                             <div className="row">
//                                 <div className="col-lg-3 col-md-5">
//                                     <ProductSidebar setFilterValueInParent={setFilterValueInParent} />
//                                 </div>

//                                 <div className="col-lg-9 col-md-7">
//                                     {
//                                         !products || products.length === 0 ? (
//                                             <div className="">
//                                                 <h3>
//                                                     <strong>Your Cart is Empty</strong>
//                                                 </h3>
//                                                 <h4>Explore more shortlist some item</h4>
//                                             </div>
//                                         ) :
//                                             // <ProductBox item={products}/>
//                                             <div className="row">
//                                                 {Array.isArray(activeProducts) &&
//                                                     activeProducts.map((product, ind) => (
//                                                         <div className="col-lg-3 col-md-6 col-sm-6 col-6 " key={ind}>
//                                                             <ProductBox key={product._id} product={product} />
//                                                         </div>
//                                                     ))
//                                                 }
//                                             </div>


//                                         // products && products?.map((item, ind) => (
//                                         //     <div className="" key={ind}>

//                                         //         <ProductBox item={item} />
//                                         //     </div>
//                                         // ))


//                                         // <ProductBox />
//                                     }

//                                 </div>


//                             </div>
//                             <div className=" row product-pagination">
//                                 <div className="col-xl-12 col-md-12-col-sm-12">
//                                     <SitePagination
//                                         PageNo={PageNo}
//                                         TotalRecords={TotalRecords}
//                                         PageSize={PageSize}
//                                         setCurrentPage={setCurrentPage}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </>
//             }
//         </>
//     );
// }





















import React, { useEffect, useRef, useState } from 'react';
import MetaData from '../Layout/MetaData';
import "./allProduct.css"
import ProductComboBox from './ProductComboBox';
import ProductFeaturedBox from './ProductFeaturedBox';
import { Link, useAsyncError, useLocation, useParams } from 'react-router-dom';
import ProductSidebar from './ProductComponant/ProductSidebar';
import SortProductByFeatured from './ProductComponant/SortProductByFeatured';
import ProductBox from './ProductComponant/ProductBox';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../Store/features/product/productSlice';
import SitePagination from './SitePagination';
import Loader from '../Loader/Loader';


export default function AllProducts() {
    const { isLoading, products, productCount } = useSelector((state) => state.product)
    const dispatch = useDispatch()

    // const [TotalRecords, setTotalRecords] = useState(productCount);
    const [showPagination, setshowPagination] = useState(false);
    const [PageNo, setPageNo] = useState(1);
    const [PageSize, setPageSize] = useState(10);
    const [TotalRecords, setTotalRecords] = useState(productCount);
    const [newArrivals, setNewArrivals] = useState(false)
    const [newArrivalsProducts, setNewArrivalsProducts] = useState([])

    // console.log("setNewArrivals", newArrivals)

    const param = useParams()

    let categoryParamArray = []
    categoryParamArray.push(parseInt(param.category_id) ?? 0)
    const search = useLocation().search;

    const queryParams = new URLSearchParams(location.search);
    const SearchTerm = queryParams.get('SearchTerm');

    const [CategoryID, setCategoryID] = useState(categoryParamArray)
    const [SizeID, setSizeID] = useState([]);
    const [ColorID, setColorID] = useState(null);
    const [TagID, setTagID] = useState([]);
    const [ManufacturerID, setManufacturerID] = useState([]);
    const [MinPrice, setMinPrice] = useState(null);
    const [MaxPrice, setMaxPrice] = useState(null);
    const [Rating, setRating] = useState(null);
    const [productSearch, setProductSearch] = useState('');
    const [OrderByColumnName, setOrderByColumnName] = useState('');


    const setFilterValueInParent = async (e, value, type) => {
        let categoriesIdsCommaSeperated = CategoryID.length > 0 ? CategoryID.join(",") : "";
        let brandsIdsCommaSeperated = ManufacturerID.length > 0 ? ManufacturerID.join(",") : "";
        let sizeIdsCommaSeperated = SizeID.length > 0 ? SizeID.join(",") : "";
        let tagsIdsCommaSeperated = TagID.length > 0 ? TagID.join(",") : "";
        let minPriceLocal = MinPrice;
        let maxPriceLocal = MaxPrice;
        let colorIdLocal = ColorID;
        let ratingLocal = Rating;
        if (type == "category") {

            let updatedCategories = [...CategoryID];
            const index = updatedCategories.indexOf(value);

            if (index === -1) {
                updatedCategories.push(value);
            } else {
                updatedCategories.splice(index, 1);
            }
            updatedCategories = updatedCategories.filter((num) => num !== 0);

            await setCategoryID(updatedCategories);
            categoriesIdsCommaSeperated = updatedCategories.join(",");


        } else if (type == "brand") {

            let updatedBrands = [...ManufacturerID];
            const index = updatedBrands.indexOf(value);

            if (index === -1) {
                updatedBrands.push(value);
            } else {
                updatedBrands.splice(index, 1);
            }
            updatedBrands = updatedBrands.filter((num) => num !== 0);

            await setManufacturerID(updatedBrands);
            brandsIdsCommaSeperated = updatedBrands.join(",");


        } else if (type == "size") {

            let updatedSize = [...SizeID];
            const index = updatedSize.indexOf(value);

            if (index === -1) {
                updatedSize.push(value);
            } else {
                updatedSize.splice(index, 1);
            }
            updatedSize = updatedSize.filter((num) => num !== 0);

            await setSizeID(updatedSize);
            sizeIdsCommaSeperated = updatedSize.join(",");


        } else if (type == "price") {

            // setTimeout(() => {
            //     const priceArray = value.split("-");
            //     setMinPrice(priceArray[0]);
            //     setMaxPrice(priceArray[1]);
            // }, 100);

            const priceArray = value.split("-");
            await setMinPrice(priceArray[0]);
            await setMaxPrice(priceArray[1]);

            minPriceLocal = priceArray[0];
            maxPriceLocal = priceArray[1];

        } else if (type == "color") {

            await setColorID(value);
            colorIdLocal = value;


        }
        else if (type == "rating") {

            await setRating(value);
            ratingLocal = value;


        } else if (type == "tag") {


            let updatedTags = [...TagID];
            const index = updatedTags.indexOf(value);

            if (index === -1) {
                updatedTags.push(value);
            } else {
                updatedTags.splice(index, 1);
            }
            updatedTags = updatedTags.filter((num) => num !== 0);

            await setTagID(updatedTags);
            tagsIdsCommaSeperated = updatedTags.join(",");

        }


    }
    // console.log(MaxPrice)
    // console.log(MinPrice)

    // console.log("CAtegory Id kya mili hai",CategoryID)


    // const setSortByFilter=(e)=>{
    //     setOrderByColumnName(e.target.value)
    //     console.log("Product Page per",OrderByColumnName)
    // }


    const setSortByFilter = (value) => {
        if (value) {
            setOrderByColumnName(value); // Update the state with the selected value
            console.log("Product Page per", value); // Log the selected value
        } else {
            console.log("Received undefined or invalid value:", value);
        }
    }
    const setPageSizeFromProductFilter = (value) => {
        if (value) {

            setPageSize(parseInt(value));
            console.log("Product Page per", value);
        } else {
            console.log("Received undefined or invalid value:", value);
        }
    }


    useEffect(() => {
        const param = {

            SearchTerm: SearchTerm || productSearch,
            SizeID: SizeID.join(","),
            // ColorID: ColorID,
            CategoryID: CategoryID.join(","),
            // TagID: TagID.join(","),
            ManufacturerID: ManufacturerID.join(","),
            MinPrice: MinPrice,
            MaxPrice: MaxPrice,
            Rating: Rating,
            OrderByColumnName: OrderByColumnName,
            PageNo: PageNo,
            // PageSize: PageSize||10,
            // productSearch: productSearch||""


        }
        dispatch(getAllProducts(param))

        // setOrderByColumnName("")
    }, [param, CategoryID, ManufacturerID, SizeID, MaxPrice, MinPrice, Rating, PageNo, PageSize, productSearch, OrderByColumnName])



    const activeProducts = Array.isArray(products) ? products.filter(product => product.IsActive) : [];


    // Get All Products 
    const setCurrentPage = (pageNumber) => {
        setPageNo(pageNumber);
    }

    // useEffect(() => {
    //     setTotalRecords(productCount || 0);
    //     if (newArrivals) {
    //         const newArivalsActiveProduct = Array.isArray(products) ? products.filter(product => product.IsActive && product.MarkAsNew) : [];
    //         setNewArrivalsProducts(newArivalsActiveProduct)
    //     }


    // }, [productCount, newArrivals]);
    // console.log(newArrivalsProducts)

    useEffect(() => {
        setTotalRecords(productCount || 0);
    
        if (newArrivals) {
            const newArrivalsActiveProduct = Array.isArray(products) 
                ? products.filter(product => 
                    product.IsActive && 
                    product.MarkAsNew && 
                    Array.isArray(product.ProductPictures) && 
                    product.ProductPictures.length > 0 // ✅ Check for images
                ) 
                : [];
    
            setNewArrivalsProducts(newArrivalsActiveProduct);
        }
    }, [productCount, newArrivals, products]); // ✅ Added 'products' as dependency
    


    return (
        <>
            <MetaData title="All Prodcut" />


            <>

                <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg" style={{
                    backgroundImage: "url('/assets/img/cat5.jpeg')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "scroll"
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>All Products</h2>
                                    <div className="breadcrumb__option">
                                        <Link to="/" style={{ color: "#180150" }}>Home</Link>
                                        <span>Shop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product spad allProductSection">
                    <div className="container-fluid">

                        <SortProductByFeatured productSearch={productSearch} setProductSearch={setProductSearch} setSortByFilter={setSortByFilter} setPageSizeFromProductFilter={setPageSizeFromProductFilter} setFilterValueInParent={setFilterValueInParent} setNewArrivals={setNewArrivals} />


                        <div className="row">
                            <div className="col-lg-3 col-md-5">
                                <ProductSidebar setFilterValueInParent={setFilterValueInParent} />
                            </div>

                            <div className="col-lg-9 col-md-7">
                                {
                                    !products || products.length === 0 ? (
                                        <div className="">
                                            <h3>
                                                <strong>Your Cart is Empty</strong>
                                            </h3>
                                            <h4>Explore more shortlist some item</h4>
                                        </div>
                                    ) :
                                        // <ProductBox item={products}/>
                                        <div className="row">

                                            {newArrivalsProducts.length > 0 ?
                                                (Array.isArray(newArrivalsProducts) &&
                                                    newArrivalsProducts.map((product, ind) => (
                                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 " key={ind}>
                                                            <ProductBox key={product._id} product={product} />
                                                        </div>
                                                    ))
                                                )
                                                : (Array.isArray(activeProducts) &&
                                                    activeProducts.map((product, ind) => (
                                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6 " key={ind}>
                                                            <ProductBox key={product._id} product={product} />
                                                        </div>
                                                    ))
                                                )}
                                            {/* {Array.isArray(activeProducts) &&
                                                activeProducts.map((product, ind) => (
                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 " key={ind}>
                                                        <ProductBox key={product._id} product={product} />
                                                    </div>
                                                ))
                                            } */}
                                        </div>


                                    // products && products?.map((item, ind) => (
                                    //     <div className="" key={ind}>

                                    //         <ProductBox item={item} />
                                    //     </div>
                                    // ))


                                    // <ProductBox />
                                }

                            </div>


                        </div>
                        <div className=" row product-pagination">
                            <div className="col-xl-12 col-md-12-col-sm-12">
                                <SitePagination
                                    PageNo={PageNo}
                                    TotalRecords={TotalRecords}
                                    PageSize={PageSize}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    );
}
