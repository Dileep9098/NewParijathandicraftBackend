// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import './HomeSlider.css'; // Import the CSS file

// const HomeSlider = () => {
//     // Slider settings
//     const settings = {
//         dots: true, // Show dots navigation
//         infinite: true, // Infinite loop
//         speed: 500, // Transition speed
//         slidesToShow: 1, // Show one slide at a time
//         slidesToScroll: 1, // Scroll one slide at a time
//         autoplay: true, // Enable autoplay
//         autoplaySpeed: 2000, // Autoplay speed in milliseconds




//     };

//     return (
//         <section className="home-slider-container">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-12">
//                         <Slider {...settings}>
//                             <div>
//                                 <img
//                                     src="assets/img/product/product-1.jpg"
//                                     alt="Slider Image 1"
//                                     className="home-slider-image"
//                                 />
//                                 <div className="home-slider-text">
//                                     <p>Text on Image 1</p>
//                                     <h2>hfbdsj</h2>
//                                     <h3>kbcmdbm</h3>
//                                 </div>
//                             </div>
//                             <div>
//                                 <img
//                                     src="assets/img/product/product-3.jpg"
//                                     alt="Slider Image 1"
//                                     className="home-slider-image"
//                                 />
//                                 <div className="home-slider-text">
//                                     <p>Text on Image 1</p>
//                                     <h2>hfbdsj</h2>
//                                     <h3>kbcmdbm</h3>
//                                 </div>
//                             </div>
//                             <div>
//                                 <img
//                                     src="assets/img/product/product-5.jpg"
//                                     alt="Slider Image 1"
//                                     className="home-slider-image"
//                                 />
//                                 <div className="home-slider-text">
//                                     <p>Text on Image 1</p>
//                                     <h2>hfbdsj</h2>
//                                     <h3>kbcmdbm</h3>
//                                 </div>
//                             </div>
//                             <div>
//                                 <img
//                                     src="assets/img/product/product-4.jpg"
//                                     alt="Slider Image 1"
//                                     className="home-slider-image"
//                                 />
//                                 <div className="home-slider-text">
//                                     <p>Text on Image 1</p>
//                                     <h2>hfbdsj</h2>
//                                     <h3>kbcmdbm</h3>
//                                 </div>
//                             </div>
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HomeSlider;

// import React, { useEffect, useState } from 'react';
// import './HomeSlider.css'; // Import the CSS file
// import { showErrorMsg } from '../../../utils/ShowMessage';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { Link } from 'react-router-dom';

// const HomeSlider = () => {
//     const [allHomeBanner, setAllHomeBanner] = useState([])
//     console.log(allHomeBanner)

//     useEffect(() => {

//         const fatchData = async () => {
//             try {
//                 //   debugger
//                 const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_HOME_BANNER"], { withCredentials: true })
//                 // console.log(response)
//                 if (response.data.success) {
//                     setAllHomeBanner(response.data.allHomeBanners)
//                 }
//                 else {
//                     showErrorMsg(response.data.message)
//                 }
//             } catch (error) {
//                 showErrorMsg(error.response.data.message);

//             }
//         }
//         fatchData();

//     }, []);


//     return (
//         <section className="home-slider-container">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-12">
//                         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//                             <div className="carousel-indicators">
//                                 {allHomeBanner &&
//                                     allHomeBanner.map((_, index) => (
//                                         <button
//                                             key={index}
//                                             type="button"
//                                             data-bs-target="#carouselExampleCaptions"
//                                             data-bs-slide-to={index}
//                                             className={index === 0 ? "active" : ""}
//                                             aria-label={`Slide ${index + 1}`}
//                                         ></button>
//                                     ))}
//                             </div>
//                             <div className="carousel-inner">
//                                 {allHomeBanner
//                                     ? allHomeBanner.map((item, ind) => (
//                                         <div
//                                             className={`carousel-item ${ind === 0 ? "active" : ""}`}
//                                             key={item._id}
//                                         >
//                                             <img
//                                                 src={`/image/banner/${item?.file}`}
//                                                 className="d-block w-100 home-slider-image"
//                                                 alt={`Banner ${ind + 1}`}
//                                             />
//                                             <div className="carousel-caption d-flex justify-content-center align-items-center">
//                                                 <div className="text-center carousel-caption-content">
//                                                     <h5 className="text-white display-4">{item.topTitle}</h5>
//                                                     <h1 className="lead">{item.mainTitle}</h1>
//                                                     <p className="text-white mb-4">{item.bottomTitle}</p>
//                                                     <Link to={item.leftButtonUrl} className="btn px-4 py-2">
//                                                         {item.leftButtonText}
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))
//                                     : ""}
//                             </div>
//                             <button
//                                 className="carousel-control-prev"
//                                 type="button"
//                                 data-bs-target="#carouselExampleCaptions"
//                                 data-bs-slide="prev"
//                             >
//                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button
//                                 className="carousel-control-next"
//                                 type="button"
//                                 data-bs-target="#carouselExampleCaptions"
//                                 data-bs-slide="next"
//                             >
//                                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HomeSlider;








import React, { useEffect, useState } from 'react';
import './HomeSlider.css'; // Import the CSS file
import { showErrorMsg } from '../../../utils/ShowMessage';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { Link } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_IMG_URL;

const HomeSlider = () => {
    const [allHomeBanner, setAllHomeBanner] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_HOME_BANNER"], { withCredentials: true });
                console.log(response.data);  // Check the response here
                if (response.data.success) {
                    setAllHomeBanner(response.data.allHomeBanners);
                } else {
                    showErrorMsg(response.data.message);
                }
            } catch (error) {
                showErrorMsg(error.response.data.message);
            }
        };
        fetchData();
    }, []);


    return (
        <section className="home-slider-container mb-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {allHomeBanner &&
                                    allHomeBanner.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to={index}
                                            className={index === 0 ? "active" : ""}
                                            aria-label={`Slide ${index + 1}`}
                                        ></button>
                                    ))}
                            </div>
                            <div className="carousel-inner">
                                {allHomeBanner
                                    ? allHomeBanner.map((item, ind) => (
                                        <div
                                            className={`carousel-item ${ind === 0 ? "active" : ""}`}
                                            key={item._id}
                                        >
                                            <img src={item?.file.url||`${BASE_URL}/${item?.file}`} className="d-block w-100 home-slider-image"
                                                alt={`Banner ${ind + 1}`} />

                                            {/* <img
                                                src={`/image/banner/${item?.file}`}
                                                className="d-block w-100 home-slider-image"
                                                alt={`Banner ${ind + 1}`}
                                            /> */}
                                            <div className="carousel-caption d-flex justify-content-center align-items-center">
                                                <div className="text-center carousel-caption-content">
                                                    <h5 className="text-white display-4">{item.topTitle}</h5>
                                                    <h1 className="lead">{item.mainTitle}</h1>
                                                    <p className="text-white ">{item.bottomTitle}</p>

                                                    <div className='bannerButton'>
                                                        <Link to={item.rightButtonUrl} className="btn btn-secondary me-2 mb-1">
                                                            {item.rightButtonText}
                                                        </Link>
                                                        {
                                                            item.leftButtonText === "" ?
                                                                ""
                                                                : <Link to={item.leftButtonUrl} className="btn px-4 py-2 btn-secondary">
                                                                    {item.leftButtonText}
                                                                </Link>
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : ""}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSlider;

