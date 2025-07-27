// import React, { useEffect, useRef, useState } from 'react'
// import ProductComboBox from '../ProductComboBox'
// import ProductFeaturedBox from '../ProductFeaturedBox'
// import { Link } from 'react-router-dom';

// export default function SortProductByFeatured({ productSearch, setProductSearch }) {
//     const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//     const [isBrandOpen, setIsBrandOpen] = useState(false);
//     const [isSizeOpen, setIsSizeOpen] = useState(false);
//     const [isPriceOpen, setIsPriceOpen] = useState(false);
//     const [isRattingOpen, setIsRattingOpen] = useState(false);
//     const [isPopularTagOpen, setIsPopularTagOpen] = useState(false);
//     const [search, setSearch] = useState('')

//     const handleToggle = () => {
//         setIsCategoryOpen(!isCategoryOpen);
//     };

//     const handleBrand = () => { setIsBrandOpen(!isBrandOpen) }
//     const handleSize = () => { setIsSizeOpen(!isSizeOpen) }
//     const handlePrice = () => { setIsPriceOpen(!isPriceOpen) }
//     const handleRatting = () => { setIsRattingOpen(!isRattingOpen) }
//     const handlePopular = () => { setIsPopularTagOpen(!isPopularTagOpen) }


//     //    const headerRef = useRef();
//     //     useEffect(() => {
//     //         window.addEventListener("scroll", () => {
//     //             let position = window.pageYOffset;
//     //             if (position > 100) {
//     //                 headerRef.current.classList.add('FilterShowInButtom');
//     //                 // headerRef.current.classList.remove('AddHeaderColor');
//     //             } else {
//     //                 headerRef.current.classList.remove('FilterShowInButtom');
//     //                 // headerRef.current.classList.add('AddHeaderColor');
//     //             }
//     //         });
//     //     }, []);



//     const headerRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (headerRef.current) {
//                 let position = window.pageYOffset;
//                 if (position > 100) {
//                     headerRef.current.classList.add('FilterShowInButtom');
//                 } else {
//                     headerRef.current.classList.remove('FilterShowInButtom');
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         // Cleanup the event listener when the component unmounts
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
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


//     const handleSearch = (e) => {
//         e.preventDefault();
//         setProductSearch(search); 

//     };
//     return (
//         <>
//             <div className="topSectionShopOnMobile row mb-3" ref={headerRef}>
//                 <div className="col-lg-6 md-6 col-sm-6 col-6 topSectionShopOnMobile1">
//                     <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
//                         <div className="">
//                             <h6>SORT BY</h6>
//                             <span>New Arrivals</span>
//                         </div>
//                         <span className="material-symbols-outlined ms-auto">sort</span>
//                     </div>

//                     <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
//                         <div className="offcanvas-header">
//                             <h5 className="offcanvas-title" id="offcanvasBottomLabel">Sort By</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                         </div>
//                         <div className="offcanvas-body small">
//                             <div className="form-check">
//                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
//                                 <label className="form-check-label" htmlFor="exampleRadios1">
//                                     New Arrivals
//                                 </label>
//                             </div>
//                             <div className="form-check">
//                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                 <label className="form-check-label" htmlFor="exampleRadios2">
//                                     Product Name
//                                 </label>
//                             </div>
//                             <div className="form-check">
//                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                 <label className="form-check-label" htmlFor="exampleRadios2">
//                                     Price Low to High
//                                 </label>
//                             </div>
//                             <div className="form-check">
//                                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
//                                 <label className="form-check-label" htmlFor="exampleRadios2">
//                                     Price High to Low
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-6 md-6 col-sm-6 col-6">
//                     {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
//                     <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
//                         <div className="">
//                             <h6>FILTER</h6>
//                             <span>Applied <span className='countFilter'>0</span></span>
//                         </div>
//                         <span className="material-symbols-outlined ms-auto">filter_alt</span>
//                     </div>


//                     <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
//                         <div className="offcanvas-header">
//                             <h5 className="offcanvas-title" id="offcanvasRightLabel">Apply Filter</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                         </div>
//                         <div className="offcanvas-body">
//                             <div className="sidebar">
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
//                                 <div className="sidebar__item ">
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
//                                     <div className="latest-product__text ">
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
//                     </div>



//                 </div>
//             </div>

//             <div className="row">
//                 <div className="topSectionShop mb-3">
//                     <h5>Searching for "Your Favorites Product"</h5>
//                     <div className="ms-auto topSectionShop1">
//                         <div className="me-5 topSectionShop2">
//                             {/* <ProductComboBox /> */}
//                         </div>
//                         <div className="topSectionShop3">
//                             <ProductFeaturedBox />
//                         </div>
//                         <div className="mt-2 search-container">
//                             <form action="" onSubmit={handleSearch}>

//                                 <input type="text" className="form-control search-input" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
//                                 <button className="search-btn">
//                                     <i className="fa fa-search"></i>
//                                 </button>
//                             </form>
//                         </div>

//                     </div>
//                 </div>

//             </div>

//         </>
//     )
// }








import React, { useEffect, useRef, useState } from 'react'
import ProductComboBox from '../ProductComboBox'
import ProductFeaturedBox from '../ProductFeaturedBox'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllParentCategory, getAllSubCategory } from '../../../../Store/features/category/categorySlice';
import axiosInstance from '../../../../ApiHendler/axiosInstance';
import Config from '../../../Comman/Config';
import { GetDefaultCurrencySymbol } from '../../../../utils/CommonHelper';
import ProductRatingStars from './ProductRatingStars';
import { showErrorMsg } from '../../../../utils/ShowMessage';
const BASE_URL = import.meta.env.VITE_IMG_URL;

// export default function SortProductByFeatured({ setProductSearch, setSortByFilter, props.setFilterValueInParent }) {
export default function SortProductByFeatured(props) {
    const { childCategories, parentCategories } = useSelector((state) => state.category)
    const { isLoading, products, productCount } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const [allMenufactures, setAllMenufactures] = useState([])
    const [allProductSize, setAllProductSize] = useState([])
    const [allLatestProduct, setAllLatestProduct] = useState([])
    const [activeLatestProducts, setActiveLatestProducts] = useState([]);
    const [defaultCurrency, setDefaultCurrency] = useState(GetDefaultCurrencySymbol());
    const [count, setCount] = useState(0)
    // console.log(count, "Count")

    const [radioChecked, setRadioChecked] = useState(null);
    const [PriceValuesArray, setPriceValuesArray] = useState(
        [
            {
                id: "10-100",
                name: `${defaultCurrency}10 - ${defaultCurrency}100`
            },
            {
                id: "100-200",
                name: `${defaultCurrency}100 - ${defaultCurrency}200`
            },
            {
                id: "200-300",
                name: `${defaultCurrency}200 - ${defaultCurrency}300`
            },
            {
                id: "300-400",
                name: `${defaultCurrency}300 - ${defaultCurrency}400`
            },
            {
                id: "400-500",
                name: `${defaultCurrency}400 - ${defaultCurrency}500`
            },
            {
                id: "500-600",
                name: `${defaultCurrency}500 - ${defaultCurrency}600`
            },
            {
                id: "600-1000000000",
                name: `Above ${defaultCurrency}600`
            }
        ]
    );

    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isRattingOpen, setIsRattingOpen] = useState(false);
    const [isPopularTagOpen, setIsPopularTagOpen] = useState(false);
    const [search, setSearch] = useState('')
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => {
        setShowMenu(false);
    };


    const handleToggle = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const handleBrand = () => { setIsBrandOpen(!isBrandOpen) }
    const handleSize = () => { setIsSizeOpen(!isSizeOpen) }
    const handlePrice = () => { setIsPriceOpen(!isPriceOpen) }
    const handleRatting = () => { setIsRattingOpen(!isRattingOpen) }
    const handlePopular = () => { setIsPopularTagOpen(!isPopularTagOpen) }


    //    const headerRef = useRef();
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



    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                let position = window.pageYOffset;
                if (position > 100) {
                    headerRef.current.classList.add('FilterShowInButtom');

                } else {
                    headerRef.current.classList.remove('FilterShowInButtom');
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Initialize Owl Carousel when the component mounts
        $('.latest-product__slider').owlCarousel({
            loop: true,               // Infinite loop
            margin: 10,               // Space between items
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,                // Show next/prev buttons
            responsive: {
                0: {
                    items: 1,        // Show 1 item on small screens
                },
                600: {
                    items: 1,        // Show 3 items on medium screens
                },
                1000: {
                    items: 1,        // Show 3 items on large screens
                },
            },
        });

        // Cleanup Owl Carousel on unmount
        return () => {
            $('.latest-product__slider').owlCarousel('destroy');
        };
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        props.setProductSearch(search);

    };


    // work on filter
    // Get All Categrory 



    useEffect(() => {
        dispatch(getAllSubCategory());
        dispatch(getAllParentCategory());

        const fatchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_MENUFACTURES"], { withCredentials: true })
                const productSize = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCT_SIZE"], { withCredentials: true })
                const getAllLetestProduct = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });

                if (response.data.success) {
                    setAllMenufactures(response.data.menufactures)
                }
                if (response.data.success) {
                    setAllProductSize(productSize.data.ProdcutSizes)
                }
                if (getAllLetestProduct.data.success) {
                    setAllLatestProduct(getAllLetestProduct.data.allProductsFeatures)
                    setActiveLatestProducts(response.data.products.filter(product => product.IsActive));

                }
                else {
                    showErrorMsg(response.data.message)
                }

            } catch (error) {
                showErrorMsg(error);

            }
        }

        fatchData();
    }, [dispatch]);


    const clearAllFilter = (e) => {
        e.preventDefault()
        // navigate("/all-product/0/all-categories")
        window.location.reload();

    }

    const activeProducts = Array.isArray(allLatestProduct) ? allLatestProduct.filter(product => product.IsActive ) : [];
    // console.log("Letest", activeProducts)

    const chunkProducts = (allLatestProduct, chunkSize) => {
        let result = [];
        for (let i = 0; i < allLatestProduct.length; i += chunkSize) {
            result.push(allLatestProduct.slice(i, i + chunkSize));
        }
        return result;
    };

    const productChunks = chunkProducts(activeProducts, 4);

    useEffect(() => {
        $('.latest-product__slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });

        return () => {
            $('.latest-product__slider').owlCarousel('destroy');
        };
    }, [productChunks]);



    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMenu]);
    const [selectedValue, setSelectedValue] = useState('');  // Initialize with an empty string or a default value

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value); 
        if (props.setSortByFilter) {
            props.setSortByFilter(value); 
        }
    };

    return (
        <>
            <div className="topSectionShopOnMobile row mb-3" ref={headerRef}>
                <div className="col-lg-6 md-6 col-sm-6 col-6 topSectionShopOnMobile1">
                    <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                        <div className="">
                            <h6>SORT BY</h6>
                            <span>New Arrivals</span>
                        </div>
                        <span className="material-symbols-outlined ms-auto">sort</span>
                    </div>

                    <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasBottomLabel">Sort By</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body small">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={(e)=>props.setNewArrivals(true)} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    New Arrivals
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Price ASC"  onChange={handleChange} />
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Price Low to High
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="Price DESC"  onChange={handleChange} />
                                <label className="form-check-label" htmlFor="exampleRadios4">
                                    Price High to Low
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="Date ASC"  onChange={handleChange} />
                                <label className="form-check-label" htmlFor="exampleRadios5">
                                Date Ascending
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="Date DESC"  onChange={handleChange} />
                                <label className="form-check-label" htmlFor="exampleRadios6">
                                Date Descending
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 md-6 col-sm-6 col-6">
                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                    <div className="d-flex topSectionShopOnMobile2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div className="">
                            <h6>FILTER</h6>
                            <span>Applied <span className='countFilter' id="counterFilter">{count}</span></span>
                        </div>
                        <span className="material-symbols-outlined ms-auto">filter_alt</span>
                    </div>


                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">Apply Filter</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="sidebar">
                                <div className="sidebar__item CategoryData">
                                    <div className="LeftSideCategory" onClick={handleToggle}>
                                        <h5 style={{ cursor: 'pointer' }}>
                                            Category
                                        </h5>
                                        <i
                                            className={`ri-arrow-right-s-fill ${isCategoryOpen ? 'arrowopen' : ''}`}
                                            style={{ transition: 'transform 0.3s ease' }}
                                        ></i>
                                    </div>

                                    {
                                        parentCategories && parentCategories.length > 0 ? (
                                            parentCategories.map((category, ind) => (
                                                <div className={`dropdown-content ${isCategoryOpen ? 'open' : ''}`} key={ind}>
                                                    <p id='ParentCategoryName'>{category?.Name}</p>

                                                    {
                                                        childCategories && childCategories.length > 0 ? (
                                                            childCategories.filter(child => child.parentCategory?._id === category._id).length > 0 ? (
                                                                childCategories.filter(child => child.parentCategory?._id === category._id).map((childCategory, ind) => (
                                                                    <div className="form-check" key={ind}>
                                                                        <input className="form-check-input" type="checkbox" id={childCategory._id}
                                                                            onChange={(e) => {

                                                                                if (e.target.checked) {
                                                                                    setCount(count + 1);
                                                                                } else {
                                                                                    setCount(count - 1);
                                                                                }

                                                                                props.setFilterValueInParent(e, childCategory._id, "category");
                                                                            }}
                                                                        />
                                                                        <label className="form-check-label" htmlFor={childCategory._id}>
                                                                            {childCategory?.Name}
                                                                        </label>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <span id='NotVailabel'>Not Available !</span>
                                                            )
                                                        ) : (
                                                            <p>Not Available</p>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        ) : ""
                                    }
                                </div>
                                <div className="sidebar__item">
                                    <div className="LeftSideCategory" onClick={handleBrand}>
                                        <h5 style={{ cursor: 'pointer' }}>
                                            Brand
                                        </h5>
                                        <i
                                            className={`ri-arrow-right-s-fill ${isBrandOpen ? 'arrowopen' : ''}`}
                                            style={{ transition: 'transform 0.3s ease' }}
                                        ></i>
                                    </div>
                                    <div className={`dropdown-content ${isBrandOpen ? 'open' : ''}`}>
                                        {
                                            allMenufactures && allMenufactures.length > 0 ? (
                                                allMenufactures.map((manufactures, ind) => (
                                                    <div className="form-check" key={ind}>
                                                        <input className="form-check-input" type="checkbox" id={manufactures._id} onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setCount(count + 1);
                                                            } else {
                                                                setCount(count - 1);
                                                            }
                                                            props.setFilterValueInParent(e, manufactures._id, "brand")
                                                        }} />
                                                        <label className="form-check-label" htmlFor={manufactures._id}>
                                                            {manufactures.name}
                                                        </label>
                                                    </div>
                                                )))
                                                : ""
                                        }



                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="LeftSideCategory" onClick={handleSize}>
                                        <h5 style={{ cursor: 'pointer' }}>
                                            size
                                        </h5>
                                        <i
                                            className={`ri-arrow-right-s-fill ${isSizeOpen ? 'arrowopen' : ''}`}
                                            style={{ transition: 'transform 0.3s ease' }}
                                        ></i>
                                    </div>
                                    <div className={`dropdown-content ${isSizeOpen ? 'open' : ''}`}>
                                        {
                                            allProductSize && allProductSize.length > 0 ? (
                                                allProductSize.map((productSize, ind) => (
                                                    <div className="form-check" key={ind}>
                                                        <input className="form-check-input" type="checkbox" id={productSize?._id} onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setCount(count + 1);
                                                            } else {
                                                                setCount(count - 1);
                                                            }
                                                            props.setFilterValueInParent(e, productSize?._id, "size")
                                                        }} />
                                                        <label className="form-check-label" htmlFor={productSize?._id}>
                                                            {productSize?.name}
                                                        </label>
                                                    </div>
                                                )))
                                                : ""
                                        }



                                    </div>
                                </div>
                                {PriceValuesArray != undefined && PriceValuesArray != null && PriceValuesArray.length > 0
                                    ?
                                    <div className="sidebar__item">


                                        <div className="LeftSideCategory" onClick={handlePrice}>
                                            <h5 style={{ cursor: 'pointer' }}>
                                                Price
                                            </h5>
                                            <i
                                                className={`ri-arrow-right-s-fill ${isPriceOpen ? 'arrowopen' : ''}`}
                                                style={{ transition: 'transform 0.3s ease' }}
                                            ></i>
                                        </div>
                                        <div className={`dropdown-content ${isPriceOpen ? 'open' : ''}`}>
                                            {
                                                PriceValuesArray?.map((item, idx) =>
                                                    <div className="form-check" key={item.id}>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id={item.id}
                                                            checked={radioChecked === item.id} // Check if this is the selected one
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setCount(count + 1);
                                                                } else {
                                                                    setCount(count - 1);
                                                                }
                                                                props.setFilterValueInParent(e, item.id, "price"); // Set the filter value
                                                                setRadioChecked(item.id); // Update the selected state
                                                            }}
                                                        />
                                                        <label className="form-check-label" htmlFor={item.id}>
                                                            {item.name}
                                                        </label>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>
                                    : <></>}


                                <div className="sidebar__item">
                                    <div className="LeftSideCategory" onClick={handleRatting}>
                                        <h5 style={{ cursor: 'pointer' }}>
                                            Ratting
                                        </h5>
                                        <i
                                            className={`ri-arrow-right-s-fill ${isRattingOpen ? 'arrowopen' : ''}`}
                                            style={{ transition: 'transform 0.3s ease' }}
                                        ></i>
                                    </div>
                                    <div className={`dropdown-content ${isRattingOpen ? 'open' : ''}`}>
                                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                                            <Link to="#"
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setCount(count + 1);
                                                    } else {
                                                        setCount(count - 1);
                                                    } props.setFilterValueInParent(e, 5, "rating");
                                                }}>
                                                <ProductRatingStars Rating={5} />
                                            </Link>
                                        </div>
                                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                                            <Link to="#"
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setCount(count + 1);
                                                    } else {
                                                        setCount(count - 1);
                                                    } props.setFilterValueInParent(e, 4, "rating");
                                                }}
                                            >
                                                <ProductRatingStars Rating={4} />
                                            </Link>
                                        </div>
                                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                                            <Link to="#"
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setCount(count + 1);
                                                    } else {
                                                        setCount(count - 1);
                                                    } props.setFilterValueInParent(e, 3, "rating");
                                                }}
                                            >
                                                <ProductRatingStars Rating={3} />
                                            </Link>
                                        </div>
                                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                                            <Link to="#"
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setCount(count + 1);
                                                    } else {
                                                        setCount(count - 1);
                                                    } props.setFilterValueInParent(e, 2, "rating");
                                                }}
                                            >
                                                <ProductRatingStars Rating={2} />
                                            </Link>
                                        </div>


                                    </div>
                                </div>

                                <div className="Clera-all-filter">

                                    <p className='text-light' style={{ cursor: "pointer" }} onClick={clearAllFilter}>
                                        <i className="ri-loop-right-line me-2"></i>Clear All Filter
                                    </p>
                                </div>

                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <div className="letest-section-title">

                                            <h4>Latest Products</h4>
                                        </div>
                                        <div className="latest-product__slider owl-carousel">
                                            {/* Loop through productChunks and render each chunk as a row */}
                                            {productChunks.map((chunk, index) => (
                                                <div key={index} className="latest-prdouct__slider__item">
                                                    {/* Loop through each product in the chunk */}
                                                    {chunk.map((product, productIndex) => (
                                                        <a href="#" key={productIndex} className="latest-product__item">
                                                            <div className="latest-product__item__pic">
                                                                <img src={`${BASE_URL}/${product.ProductPictures[0]}`} alt={product.ProductName} />
                                                            </div>
                                                            <div className="latest-product__item__text">
                                                                <h6>{product.ProductName.slice(0, 50)}...</h6>
                                                                {/* <span>&#8377; {product.Price}</span> */}
                                                                <span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span>

                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="row">
                <div className="topSectionShop mb-3">
                    <h5>Searching for "Your Favorites Product"</h5>
                    <div className="ms-auto topSectionShop1">
                        <div className="me-5 topSectionShop2">
                            {/* <ProductComboBox setPageSizeFromProductFilter={setPageSizeFromProductFilter} /> */}
                        </div>
                        <div className="topSectionShop3">
                            <ProductFeaturedBox setSortByFilter={props.setSortByFilter} />
                        </div>
                        <div className="mt-2 search-container">
                            <form action="" onSubmit={handleSearch}>

                                <input type="text" className="form-control search-input" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                                <button className="search-btn">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}




// {/* <div className="sidebar__item">
// <div className="latest-product__text ">
//     <h4>Latest Products</h4>
//     <div className="latest-product__slider owl-carousel">
//         <div className="latest-prdouct__slider__item">
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>

//             {/* Other items */}
//         </div>
//         <div className="latest-prdouct__slider__item">
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>

//             {/* Other items */}
//         </div>
//         <div className="latest-prdouct__slider__item">
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>
//             <a href="#" className="latest-product__item">
//                 <div className="latest-product__item__pic">
//                     <img src="assets/img/blog/blog-2.jpg" alt="" />
//                 </div>
//                 <div className="latest-product__item__text">
//                     <h6>Crab Pool Security</h6>
//                     <span>$30.00</span>
//                 </div>
//             </a>

//             {/* Other items */}
//         </div>

//     </div>

// </div>
// </div> */}