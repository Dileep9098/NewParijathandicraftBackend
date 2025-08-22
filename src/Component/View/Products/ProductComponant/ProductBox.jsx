// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

// export default function ProductBox(item) {

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
//                         item: 2
//                     },
//                     600: {
//                         item: 3
//                     },
//                     1000: {
//                         item: 5
//                     }
//                 }
//             });
//         }
//     }, []);

//     return (
//         <>
//             <div className="product__discount">
//                 <div className="section-title product__discount__title">
//                     <h2>Sale Off</h2>
//                 </div>
//                 <div className="row">
//                     <div className="product__discount__slider owl-carousel" id="owlCarousel4">

//                         {item && item.length > 0 ? (
//                             item.map((data, ind) => (
//                                 <div className="col" key={ind}>
//                                     <div className="product__discount__item">
//                                         <Link to="/product-details">
//                                             <div className="product__discount__item__pic set-bg"
//                                                 style={{ backgroundImage: `url('/image/products/${data.ProductPictures[0]}')`}}>
//                                                 <div className="product__discount__percent">-20%</div>
//                                                 <ul className="product__item__pic__hover">
//                                                     <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                     <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                     <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="product__discount__item__text">
//                                                 <span>Dried Fruit</span>
//                                                 <h5><a href="#">Raisin’n’nuts</a></h5>
//                                                 <div className="product__item__price">$30.00 <span>$36.00</span></div>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             ""
//                         )}


//                     </div>
//                 </div>
//             </div>
//             <div className="filter__item">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-5">
//                         <div className="filter__sort">
//                             <span>Sort By</span>
//                             <select>
//                                 <option value="0">Default</option>
//                                 <option value="0">Default</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4">
//                         <div className="filter__found">
//                             <h6><span>16</span> Products found</h6>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-3">
//                         <div className="filter__option">
//                             <span className="icon_grid-2x2"></span>
//                             <span className="icon_ul"></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-4.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-5.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-6.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-8.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-9.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-10.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-11.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6">
//                     <div className="product__item">
//                         <div className="product__item__pic set-bg" data-setbg="img/product/product-12.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                             <ul className="product__item__pic__hover">
//                                 <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                 <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product__item__text">
//                             <h6><a href="#">Crab Pool Security</a></h6>
//                             <h5>$30.00</h5>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="product__pagination">
//                 <a href="#">1</a>
//                 <a href="#">2</a>
//                 <a href="#">3</a>
//                 <a href="#"><i className="fa fa-long-arrow-right"></i></a>
//             </div>

//         </>
//     )
// }


// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

// export default function ProductBox( item ) {  // Defaulting item to an empty array
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
//                         item: 2
//                     },
//                     600: {
//                         item: 3
//                     },
//                     1000: {
//                         item: 5
//                     }
//                 }
//             });
//         }
//     }, []);

//     console.log("Item",item)

//     return (
//         <>
//             <div className="product__discount">
//                 <div className="section-title product__discount__title">
//                     <h2>Sale Off</h2>
//                 </div>
//                 <div className="row">
//                     <div className="product__discount__slider owl-carousel" id="owlCarousel4">
//                         {item.length > 0 ? (
//                             item.map((data, ind) => (
//                                 <div className="col" key={ind}>
//                                     <div className="product__discount__item">
//                                         <Link to={`/product-details/${data.sku}`}>
//                                             <div className="product__discount__item__pic set-bg"
//                                                  style={{ backgroundImage: `url('/image/products/${data.ProductPictures[0]}')` }}>
//                                                 <div className="product__discount__percent">-20%</div>
//                                                 <ul className="product__item__pic__hover">
//                                                     <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                     <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                     <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="product__discount__item__text">
//                                                 <span>{data.category || "Category"}</span>
//                                                 <h5><a href="#">{data.ProductName}</a></h5>
//                                                 <div className="product__item__price">
//                                                     ${data.Price} <span>${data.OldPrice}</span>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products found</p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Filter and Pagination */}
//             <div className="filter__item">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-5">
//                         <div className="filter__sort">
//                             <span>Sort By</span>
//                             <select>
//                                 <option value="0">Default</option>
//                                 <option value="1">Price</option>
//                                 <option value="2">Popularity</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4">
//                         <div className="filter__found">
//                             <h6><span>{item.length}</span> Products found</h6>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-3">
//                         <div className="filter__option">
//                             <span className="icon_grid-2x2"></span>
//                             <span className="icon_ul"></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row">
//                 {item.length > 0 ? (
//                     item.map((data, index) => (
//                         <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
//                             <div className="product__item">
//                                 <div className="product__item__pic set-bg"
//                                      style={{ backgroundImage: `url('/image/products/${data.ProductPictures[0]}')` }}>
//                                     <ul className="product__item__pic__hover">
//                                         <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                     </ul>
//                                 </div>
//                                 <div className="product__item__text">
//                                     <h6><a href="#">{data.ProductName}</a></h6>
//                                     <h5>${data.Price}</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products to display</p>
//                 )}
//             </div>

//             {/* Pagination */}
//             <div className="product__pagination">
//                 <a href="#">1</a>
//                 <a href="#">2</a>
//                 <a href="#">3</a>
//                 <a href="#"><i className="fa fa-long-arrow-right"></i></a>
//             </div>
//         </>
//     );
// }



// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

// export default function ProductBox({product} ) {  // Defaulting items to an empty object with an empty array

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
//                         items: 4
//                     }
//                 }
//             });
//         }
//     }, []);

//     return (
//         <>
//             <div className="product__discount">
//                 <div className="section-title product__discount__title">
//                     <h2>Sale Off</h2>
//                 </div>
//                 <div className="row">
//                     <div className="product__discount__slider owl-carousel" id="owlCarousel4">
//                         {/* {items.item.length > 0 ? (
//                             items.item.map((data, ind) => (
//                                 <div className="col" key={ind}>
//                                     <div className="product__discount__item">
//                                         <Link to={`/product-details/${data.sku}`}>
//                                             <div className="product__discount__item__pic set-bg"
//                                                  style={{ backgroundImage: `url('/image/products/${data.ProductPictures[0]}')` }}>
//                                                 <div className="product__discount__percent">-20%</div>
//                                                 <ul className="product__item__pic__hover">
//                                                     <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                                     <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                                     <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="product__discount__item__text">
//                                                 <span>{data.category || "Category"}</span>
//                                                 <h5><a href="#">{data.ProductName}</a></h5>
//                                                 <div className="product__item__price">
//                                                     ${data.Price} <span>${data.OldPrice}</span>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products found</p>
//                         )} */}
//                         <h1>Hello</h1>
//                     </div>
//                 </div>
//             </div>

//             {/* Filter and Pagination */}
//             {/* <div className="filter__item">
//                 <div className="row">
//                     <div className="col-lg-4 col-md-5">
//                         <div className="filter__sort">
//                             <span>Sort By</span>
//                             <select>
//                                 <option value="0">Default</option>
//                                 <option value="1">Price</option>
//                                 <option value="2">Popularity</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-4">
//                         <div className="filter__found">
//                             <h6><span>{items.item.length}</span> Products found</h6>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-3">
//                         <div className="filter__option">
//                             <span className="icon_grid-2x2"></span>
//                             <span className="icon_ul"></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row">
//                 {items.item.length > 0 ? (
//                     items.item.map((data, index) => (
//                         <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
//                             <div className="product__item">
//                                 <div className="product__item__pic set-bg"
//                                      style={{ backgroundImage: `url('/image/products/${data.ProductPictures[0]}')` }}>
//                                     <ul className="product__item__pic__hover">
//                                         <li><a href="#"><i className="fa fa-heart"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-retweet"></i></a></li>
//                                         <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
//                                     </ul>
//                                 </div>
//                                 <div className="product__item__text">
//                                     <h6><a href="#">{data.ProductName}</a></h6>
//                                     <h5>${data.Price}</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products to display</p>
//                 )}
//             </div> */}

//             {/* Pagination */}
//             <div className="product__pagination">
//                 <a href="#">1</a>
//                 <a href="#">2</a>
//                 <a href="#">3</a>
//                 <a href="#"><i className="fa fa-long-arrow-right"></i></a>
//             </div>
//         </>
//     );
// }


// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// export default function ProductBox({ product }) {  // Defaulting items to an empty object with an empty array

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
//                         items: 4
//                     }
//                 }
//             });
//         }
//     }, []);

//     return (
//         <>

//             <Card sx={{ maxWidth: 345 }}>
//                 <CardActionArea>
//                     <CardMedia
//                         component="img"
//                         height="140"
//                         image={`/image/products/${product.ProductPictures[0]}`}
//                         alt="green iguana"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h6" component="div">
//                             {product.ProductName.slice(0,100)}...
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                             species, ranging across all continents except Antarctica
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>


//         </>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick'; // Importing react-slick for the image carousel
// import './ProductBox.css';  // Import custom CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProductRatingStars from './ProductRatingStars';
// import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../../utils/ConversionHelper';

// export default function ProductBox({ product }) {
//     var filterProduct = []
//     useEffect(() => {

//         if (typeof window !== 'undefined' && window.jQuery) {
//             const $ = window.jQuery;
//             $('#owlCarousel4').owlCarousel({
//                 loop: true,
//                 dots: true,
//                 margin: 10,
//                 autoplay: true,
//                 autoplayTimeout: 3000,
//                 autoplayHoverPause: true,
//                 smartSpeed: 1000,
//                 responsive: {
//                     0: { items: 2 },
//                     600: { items: 3 },
//                     1000: { items: 4 },
//                 }
//             });
//         }

//     }, []);


//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     const reloadProductDetail = (_productId, _categoryName, _productName) => {
//         let productDetailUrlFromForceReload = `/product-detail/${_productId}/${replaceWhiteSpacesWithDashSymbolInUrl(_categoryName) ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(_productName)}`;
//         if (ProductDetailPageForceUpload && _productId) {
//             navigate(productDetailUrlFromForceReload, { replace: true });
//         }
//     }

//     return (
//         <div className="card custom-card">
//             {
//                 product.ProductPictures.length > 1 ?
//                     <div className="product-image">
//                         {/* <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings}/${product.ProductName}`}> */}
//                         <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
//                             <Slider {...sliderSettings}>
//                                 {product.ProductPictures && product.ProductPictures.map((img, index) => (
//                                     <img
//                                         key={index}
//                                         className="card-img-top"
//                                         src={`/image/products/${img}`}
//                                         alt={`Product image ${index + 1}`}
//                                     />
//                                 ))}
//                             </Slider>
//                         </Link>

//                     </div>
//                     :
//                     <div className="product-image">
//                          <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
//                         <img

//                             className="card-img-top"
//                             src={`/image/products/${product.ProductPictures}`}
//                             alt={`Product image `}
//                         />
//                         </Link>
//                     </div>

//             }
//             <div className="card-body">
//                 <h5 className="card-title">{product.ProductName.slice(0, 75)}...</h5>
//                 <ProductRatingStars Rating={product?.Rating == 0 || product.Rating == null ? 5 : product.Rating} />
//                 {/* <p className="product-price">₹{product.Price} <span className="old-price">₹{product.OldPrice}</span></p> */}
//                 <p className="product-price"><span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span></p>
//             </div>


//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick'; // Importing react-slick for the image carousel
// import './ProductBox.css';  // Import custom CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProductRatingStars from './ProductRatingStars';
// import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../../utils/ConversionHelper';

// export default function ProductBox({ product }) {

//     useEffect(() => {
//         if (typeof window !== 'undefined' && window.jQuery) {
//             const $ = window.jQuery;
//             $('#owlCarousel4').owlCarousel({
//                 loop: true,
//                 dots: true,
//                 margin: 10,
//                 autoplay: true,
//                 autoplayTimeout: 3000,
//                 autoplayHoverPause: true,
//                 smartSpeed: 1000,
//                 responsive: {
//                     0: { items: 2 },
//                     600: { items: 3 },
//                     1000: { items: 4 },
//                 }
//             });
//         }
//     }, []);

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="card custom-card">
//             {
//                 product.ProductPictures.length > 1 ?
//                     <div className="product-image">
//                         <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
//                             <Slider {...sliderSettings}>
//                                 {product.ProductPictures.map((img, index) => (
//                                     <img
//                                         key={index}
//                                         className="card-img-top"
//                                         src={`/image/products/${img}`}
//                                         alt={`Product image ${index + 1}`}
//                                     />
//                                 ))}
//                             </Slider>
//                         </Link>
//                     </div>
//                     :
//                     <div className="product-image">
//                         <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
//                             <img className="card-img-top" src={`/image/products/${product.ProductPictures}`} alt={`Product image`} />
//                         </Link>
//                     </div>
//             }
//             <div className="card-body">
//                 <h5 className="card-title">{product.ProductName.slice(0, 75)}...</h5>
//                 <ProductRatingStars Rating={product?.Rating == 0 || product.Rating == null ? 5 : product.Rating} />
//                 <p className="product-price">
//                     <span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span>
//                 </p>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick'; // Importing react-slick for the image carousel
// import './ProductBox.css';  // Import custom CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProductRatingStars from './ProductRatingStars';
// import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../../utils/ConversionHelper';

// export default function ProductBox({ product }) {

//     useEffect(() => {
//         if (typeof window !== 'undefined' && window.jQuery) {
//             const $ = window.jQuery;
//             $('#owlCarousel4').owlCarousel({
//                 loop: true,
//                 dots: true,
//                 margin: 10,
//                 autoplay: true,
//                 autoplayTimeout: 3000,
//                 autoplayHoverPause: true,
//                 smartSpeed: 1000,
//                 responsive: {
//                     0: { items: 2 },
//                     600: { items: 3 },
//                     1000: { items: 4 },
//                 }
//             });
//         }
//     }, []);

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="card custom-card">
//             {
//                 product.ProductPictures.length > 1 ?
//                     <div className="product-image">
//                         <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
//                             <Slider {...sliderSettings}>
//                                 {product.ProductPictures.map((img, index) => (
//                                     <img
//                                         key={index}
//                                         className="card-img-top"
//                                         src={`/image/products/${img}`}
//                                         alt={`Product image ${index + 1}`}
//                                     />
//                                 ))}
//                             </Slider>
//                         </Link>
//                     </div>
//                     :
//                     <div className="product-image">
//                         <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
//                             <img className="card-img-top" src={`/image/products/${product.ProductPictures}`} alt={`Product image`} />
//                         </Link>
//                     </div>
//             }
//             <div className="card-body">
//                 <h5 className="card-title">{product.ProductName.slice(0, 75)}...</h5>
//                 <ProductRatingStars Rating={product?.Rating == 0 || product.Rating == null ? 5 : product.Rating} />
//                 <p className="product-price">
//                     <span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span>
//                 </p>
//             </div>
//         </div>
//     );
// }




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Importing react-slick for the image carousel
import './ProductBox.css';  // Import custom CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductRatingStars from './ProductRatingStars';
import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../../utils/ConversionHelper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import icons
import ShopIcon from '@mui/icons-material/Shop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AddCustomerWishList } from '../../../../utils/CartHelper';
import AutoCurrencyPrice from '../../../../CurrencyConvetor/AutoCurrencyPrice';
const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function ProductBox({ product }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const HandleAddToWishList = ({ ProductId, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, DiscountPrice, CouponCode }) => {

        let customerWishList = AddCustomerWishList(ProductId, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, DiscountPrice, CouponCode);
        localStorage.setItem("customerWishList", customerWishList)

    };

    return (
        <div className="card custom-card">
            {
                product.ProductPictures.length > 1 ?
                    <div className="product-image">
                        <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
                            <Slider {...sliderSettings}>
                                {product.ProductPictures.map((img, index) => (
                                    <img
                                        key={index}
                                        className="card-img-top"
                                        src={img.url}
                                        alt={`Product image ${index + 1}`}
                                    />
                                ))}
                            </Slider>
                        </Link>
                    </div>
                    :
                    <div className="product-image">
                        <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>
                            {/*                             <img className="card-img-top" src={product.ProductPictures[0].url} alt={`Product image`} /> */}
                            <img
                                className="card-img-top"
                                src={
                                    product?.ProductPictures?.[0]?.url ||
                                    `${BASE_URL}/${product?.ProductPictures?.[0]}` || // only if you're supporting string paths
                                    '/images/fallback.jpg' // fallback image path
                                }
                                alt="Product image"
                            />

                        </Link>
                    </div>
            }
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>  {product.ProductName.slice(0, isMobile ? 45 : 75)}...</Link>
                </h5>
                <div className="card-price-show">

                    <ProductRatingStars Rating={product?.Rating == 0 || product.Rating == null ? 5 : product.Rating} />
                    <p className="product-price">
                        {/* <span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span> */}
                        <span>
                            <AutoCurrencyPrice Price={product.Price} />
                            {product.OldPrice && <sub><del><AutoCurrencyPrice Price={product.OldPrice} /></del></sub>}      
                        </span>
                    </p>
                </div>

            </div>
            <div className="product-hover-icons">
                {/* <i className="ri-shopping-cart-fill hover-icon cart-icon"></i> 
                <i className="ri-heart-fill hover-icon wishlist-icon"></i>   */}
                <Tooltip title="Add to Card" placement="left">
                    <IconButton>
                        <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`} className='hover-icon-link'> <ShopIcon className='hover-icon' /></Link>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add to Wishlist" placement="left">
                    <IconButton>
                        <Link to="#" onClick={(e) => { e.preventDefault(); HandleAddToWishList({ ProductId: product._id, ProductName: product.ProductName, Price: product.Price, IsShippingFree: product.IsShippingFree, ShippingCharge: product.ShippingCharge, OrderMaximumQuantity: product.OrderMaximumQuantity, StockQuantity: product.StockQuantity, ProductPictures: product.ProductPictures[0], DiscountPrice: product.DiscountProductsMappings.DiscountValue, CouponCode: product.DiscountProductsMappings.couponCode, }) }}
                            className='hover-icon-link'> <FavoriteIcon className='hover-icon' /></Link>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Quick View" placement="left">
                    <IconButton>
                        <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`} className='hover-icon-link'> <VisibilityIcon className='hover-icon' /></Link>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Compare" placement="left">
                    <IconButton>
                        <Link to="/add-to-wishlist" className='hover-icon-link'> <CachedIcon className='hover-icon' /></Link>
                    </IconButton>
                </Tooltip>
                {/* <i className="ri-align-justify hover-icon compare-icon"></i>    */}
            </div>


        </div>
    );
}
