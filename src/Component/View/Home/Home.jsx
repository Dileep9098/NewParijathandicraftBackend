// import React, { useEffect, useState } from 'react'

// import OwlCarousel from 'react-owl-carousel';


// import "./home.css"
// import { Link } from 'react-router-dom';
// import Categories from './Categories';
// import FeaturedProducts from './FeaturedProducts';
// import Banner from './Banner';
// import Blogs from './Blogs';
// import Deals from './Deals';
// import PopularCategory from './PopularCategory';
// import CampaignSection from './CampaignSection';
// import NewProduct from './NewProduct';
// import Contact from './Contact';
// import HomeSlider from './HomeSlider';
// import MetaData from '../Layout/MetaData';


// export default function Home() {
  

import React, { useEffect, useState } from 'react'

import OwlCarousel from 'react-owl-carousel';


import "./home.css"
import { Link } from 'react-router-dom';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Banner from './Banner';
import Blogs from './Blogs';
import Deals from './Deals';
import PopularCategory from './PopularCategory';
import CampaignSection from './CampaignSection';
import NewProduct from './NewProduct';
import Contact from './Contact';
import HomeSlider from './HomeSlider';
import MetaData from '../Layout/MetaData';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';


export default function Home() {
      const [allProduct, setAllProduct] = useState([]);
  

 useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });
                if (response.data.success) {
                    setAllProduct(response.data.allProductsFeatures);
                } else {
                    showErrorMsg(response.data.message);
                }
            } catch (error) {
                showErrorMsg(error.response.data.message);
            }
        };
        fetchData();
    }, []);

    // console.log("Kya re kya kar aha haiu",allProduct)

   
    return (
        <>
        <MetaData title={"Home"}/>
           


            {/* <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter & Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya & Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg" style={{ backgroundImage: "url('assets/img/hero/banner.jpg')" }}>
                                <div className="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>Vegetable <br />100% Organic</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="#" className="primary-btn">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

 <HomeSlider/>
          <Categories/>
          <FeaturedProducts AllProducts={allProduct}/>
          <Banner/>
          <Blogs/>
          <Deals/>
          <PopularCategory/>
          <CampaignSection/> 
          <NewProduct AllProducts={allProduct}/>
          <Contact/>

            {/* <section className="categories">
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            className="categories__slider owl-carousel"
                            loop
                            margin={10}
                            nav
                            autoplay={true}
                            autoplayTimeout={2000}
                            autoplayHoverPause={true}
                            responsive={{
                                0: { items: 1 },
                                600: { items: 2 },
                                1000: { items: 4 },
                            }}

                            navText={[
                                "<div className='owl-prev'>&lt;</div>", 
                                "<div className='owl-next'>&gt;</div>", 
                            ]}

                        >
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: "url('assets/img/categories/cat-2.jpg')" }}>
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: "url('assets/img/categories/cat-3.jpg')" }}>
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: "url('assets/img/categories/cat-4.jpg')" }}>
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: "url('assets/img/categories/cat-5.jpg')" }}>
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>           */}

          
            {/* <!-- Banner Begin --> */}
          
            {/* <!-- Banner End --> */}

            {/* <!-- Latest Product Section Begin --> */}
            {/* <section className="latest-product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <OwlCarousel
                                    className="latest-product__slider owl-carousel"
                                    loop
                                    margin={10}
                                    nav
                                    autoplay={true}
                                    autoplayTimeout={3000}
                                    autoplayHoverPause={true}
                                    responsive={{
                                        0: { items: 1 },
                                        600: { items: 2 },
                                        1000: { items: 4 },
                                    }}
                                    navText={[
                                        "<div className='owl-prev'>&lt;</div>", // Custom previous button
                                        "<div className='owl-next'>&gt;</div>", // Custom next button
                                    ]}
                                >

                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="latest-prdouct__slider__item">
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                            <a href="#" className="latest-product__item">
                                                <div className="latest-product__item__pic">
                                                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>Crab Pool Security</h6>
                                                    <span>$30.00</span>
                                                </div>
                                            </a>
                                        </div>
                                    
                                </OwlCarousel>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Top Rated Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Review Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}
           


            {/* <!-- ========== Start New Products ========== --> */}

         

            {/* <!-- ========== End New Products ========== --> */}




       


        </>
    )
}

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';

// export default function Home() {
//   return (
//     <>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea
//         sx={{
//           transition: 'transform 0.3s ease-in-out', // Animation transition
//           '&:hover': {
//             transform: 'scale(1.05)', // Scale the card on hover
//           },
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="140"
//           image="assets/img/banner/banner-1.jpg"
//           alt="green iguana"
//         />
//       </CardActionArea>
//     </Card>
//     <h1>hello</h1>
// </>
//   );
// }

