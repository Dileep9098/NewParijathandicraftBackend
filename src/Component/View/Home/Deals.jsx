// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { showErrorMsg } from '../../../utils/ShowMessage';

// export default function Deals() {
//       // State for countdown timers
//         const [timeLeftDeal1, setTimeLeftDeal1] = useState("");
//         const [timeLeftDeal2, setTimeLeftDeal2] = useState("");

//         const [allHotDealBanner, setAllHotDealBanner] = useState([])

//         // Countdown logic for both deals

//         useEffect(() => {
//             const countdownEndDateDeal1 = new Date("2025/03/25 00:00:00").getTime();
//             const countdownEndDateDeal2 = new Date("2026/03/25 00:00:00").getTime();

//             const interval1 = setInterval(() => {
//                 const now = new Date().getTime();
//                 const distance1 = countdownEndDateDeal1 - now;

//                 if (distance1 <= 0) {
//                     clearInterval(interval1);
//                     setTimeLeftDeal1("EXPIRED");
//                 } else {
//                     const days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
//                     const hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                     const minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
//                     const seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

//                     setTimeLeftDeal1({ days: days1, hours: hours1, minutes: minutes1, seconds: seconds1 });
//                 }
//             }, 1000);

//             const interval2 = setInterval(() => {
//                 const now = new Date().getTime();
//                 const distance2 = countdownEndDateDeal2 - now;

//                 if (distance2 <= 0) {
//                     clearInterval(interval2);
//                     setTimeLeftDeal2("EXPIRED");
//                 } else {
//                     const days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
//                     const hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                     const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
//                     const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

//                     setTimeLeftDeal2({ days: days2, hours: hours2, minutes: minutes2, seconds: seconds2 });
//                 }
//             }, 1000);

//             // Cleanup on component unmount
//             return () => {
//                 clearInterval(interval1);
//                 clearInterval(interval2);
//             };
//         }, []);

//         useEffect(() => {

//             const fatchData = async () => {
//                 try {
//                     //   debugger
//                     const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_HOT_DEAL_BANNER"], { withCredentials: true })
//                     // console.log(response)
//                     if (response.data.success) {
//                         setAllHotDealBanner(response.data.allHotDealBanner)
//                     }
//                     else {
//                         showErrorMsg(response.data.message)
//                     }
//                 } catch (error) {
//                     showErrorMsg(error.response.data.message);

//                 }
//             }
//             fatchData();

//         }, [showErrorMsg]);
//         // console.log(allHotDealBanner)

//   return (
//     <>
//         <section className="deals section-padding">
//                 <div className="container">
//                     <div className="row">
//                         {/* Deal 1 */}
//                         <div className="col-lg-6 deal-col mb-2">

//                             <div
//                                 className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
//                                 style={{ backgroundImage: "url('assets/img/featured/feature-8.jpg')" }}
//                             >

//                                 <div className="deal-top">
//                                     <h2 className="text-brand">Deal of the Day</h2>
//                                     <h5>Limited quantities.</h5>
//                                 </div>
//                                 <div className="deal-content">
//                                     <h6 className="product-title">
//                                         <Link to="shop-product-right.html">Summer Collection New Modern Design</Link>
//                                     </h6>
//                                     <div className="product-price">
//                                         <span className="new-price">$139.00</span>
//                                         <span className="old-price">$160.99</span>
//                                     </div>

//                                 </div>
//                                 <div className="hurryup linkToAmazon ">
//                                     <span>Hurry Up! Offer Ends In</span>
//                                 </div>
//                                 <div className="deal-bottom ">


//                                     <div className="deals-countdown ">
//                                         {timeLeftDeal1 === "EXPIRED" ? (
//                                             <p>EXPIRED</p>
//                                         ) : (
//                                             <>
//                                                 <div className="row">
//                                                     <div className="col-lg-2 col-md-2"></div>
//                                                     <div className="col-lg-2 col-md-2 col maketime">
//                                                         <h5>{timeLeftDeal1.days}</h5>
//                                                         <p>Days</p>
//                                                     </div>

//                                                     <div className="col-lg-2 col-md-2 col maketime">
//                                                         <h5>{timeLeftDeal1.hours}</h5>
//                                                         <p>Hours</p>
//                                                     </div>
//                                                     <div className="col-lg-2 col-md-2 col maketime">
//                                                         <h5>{timeLeftDeal1.minutes}</h5>
//                                                         <p>Minutes</p>
//                                                     </div>
//                                                     <div className="col-lg-2 col-md-2 col maketime">
//                                                         <h5>{timeLeftDeal1.seconds}</h5>
//                                                         <p>Seconds</p>
//                                                     </div>
//                                                     <div className="col-lg-2 col-md-2"></div>

//                                                 </div>




//                                             </>

//                                         )}
//                                     </div>

//                                     <Link to="shop-grid-right.html" className="hover-up">
//                                         Shop Now <i className="ri-arrow-right-fill hover-arrow"></i>
//                                     </Link>

//                                 </div>
//                             </div>
//                         </div>


//                         <div className="col-lg-6 deal-col">
//                             <div
//                                 className="deal wow fadeIn animated"
//                                 style={{ backgroundImage: "url('assets/img/featured/feature-8.jpg')" }}
//                             >
//                                 <div className="deal-top">
//                                     <h2 className="text-brand">Men Clothing</h2>
//                                     <h5>Shirt & Bag</h5>
//                                 </div>
//                                 <div className="deal-content">
//                                     <h6 className="product-title">
//                                         <Link to="shop-product-right.html">Try something new on vacation</Link>
//                                     </h6>
//                                     <div className="product-price">
//                                         <span className="new-price">$178.00</span>
//                                         <span className="old-price">$256.99</span>
//                                     </div>
//                                 </div>
//                                 <div className="deal-bottom">
//                                     <p>Hurry Up! Offer Ends In:</p>

//                                     <a href="shop-grid-right.html" className="btn btn-primary">
//                                         Shop Now <i className="ri-arrow-right-fill text-dark"></i>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//     </>
//   )
// }





// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { showErrorMsg } from '../../../utils/ShowMessage';

// export default function Deals() {
//     // State for countdown timers
//     const [allHotDealBanner, setAllHotDealBanner] = useState([]);

//     // Countdown logic for deals
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_HOT_DEAL_BANNER"], { withCredentials: true });
//                 if (response.data.success) {
//                     setAllHotDealBanner(response.data.allHotDealBanner);
//                 } else {
//                     showErrorMsg(response.data.message);
//                 }
//             } catch (error) {
//                 showErrorMsg(error.response?.data?.message || 'Error fetching data');
//             }
//         };
//         fetchData();
//     }, [showErrorMsg]);

//     // Function to calculate the countdown
//     const calculateTimeLeft = (startDate, endDate) => {
//         const now = new Date().getTime();
//         const startTime = new Date(startDate).getTime();
//         const endTime = new Date(endDate).getTime();

//         // If the deal has already started or ended, return the remaining time
//         const remainingTime = endTime - now;

//         if (remainingTime <= 0) return "EXPIRED"; // If deal expired
//         else {
//             const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
//             return { days, hours, minutes, seconds };
//         }
//     };

//     return (
//         <section className="deals section-padding">
//             <div className="container">
//                 <div className="row">
//                     {allHotDealBanner
//                         .filter(deal => deal.IsActive === "true") // Show only active deals
//                         .map((deal, index) => {
//                             const { days, hours, minutes, seconds } = calculateTimeLeft(deal.AvailableStartDate, deal.AvailableEndDate);
//                             return (
//                                 <div key={index} className="col-lg-6 deal-col mb-2">
//                                     <div className="deal" style={{ backgroundImage: `url(/image/hotDealBanner/${deal.file})` }}>
//                                         <div className="deal-top">
//                                             <h2 className="text-brand">{deal?.topTitle.slice(0,30)}...</h2>
//                                             <h5>{deal?.bottomTitle.slice(0,120)}...</h5>
//                                         </div>
//                                         <div className="deal-content">
//                                             <h6 className="product-title">
//                                                 <a href={deal.dealMainUrl}>{deal.mainTitle}</Link>
//                                             </h6>
//                                         </div>
//                                         <div className="hurryup linkToAmazon">
//                                             <span>{deal?.dealMainText}</span>
//                                         </div>
//                                         <div className="deal-bottom">
//                                             <div className="deals-countdown">
//                                                 {days === "EXPIRED" ? (
//                                                     <p>EXPIRED</p>
//                                                 ) : (
//                                                     <div className="row">
//                                                         <div className="col-lg-2 col-md-2"></div>
//                                                         <div className="col-lg-2 col-md-2 col maketime">
//                                                             <h5>{days}</h5>
//                                                             <p>Days</p>
//                                                         </div>
//                                                         <div className="col-lg-2 col-md-2 col maketime">
//                                                             <h5>{hours}</h5>
//                                                             <p>Hours</p>
//                                                         </div>
//                                                         <div className="col-lg-2 col-md-2 col maketime">
//                                                             <h5>{minutes}</h5>
//                                                             <p>Minutes</p>
//                                                         </div>
//                                                         <div className="col-lg-2 col-md-2 col maketime">
//                                                             <h5>{seconds}</h5>
//                                                             <p>Seconds</p>
//                                                         </div>
//                                                         <div className="col-lg-2 col-md-2"></div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                             <a href={deal.dealMainUrl} className="hover-up">
//                                                 Shop Now <i className="ri-arrow-right-fill hover-arrow"></i>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                 </div>
//             </div>
//         </section>
//     );
// }


import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';
import { Link } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function Deals() {
    const [allHotDealBanner, setAllHotDealBanner] = useState([]);
    const [countdown, setCountdown] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_HOT_DEAL_BANNER"], { withCredentials: true });
                if (response.data.success) {
                    setAllHotDealBanner(response.data.allHotDealBanner);
                } else {
                    showErrorMsg(response.data.message);
                }
            } catch (error) {
                showErrorMsg(error.response?.data?.message || 'Error fetching data');
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                const updatedCountdown = {};
                allHotDealBanner.forEach((deal) => {
                    const { days, hours, minutes, seconds } = calculateTimeLeft(deal.AvailableStartDate, deal.AvailableEndDate);
                    updatedCountdown[deal.id] = { days, hours, minutes, seconds };
                });
                return updatedCountdown;
            });
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [allHotDealBanner]);

    const calculateTimeLeft = (startDate, endDate) => {
        const now = new Date().getTime();
        const startTime = new Date(startDate).getTime();
        const endTime = new Date(endDate).getTime();

        // If the deal has already started or ended, return the remaining time
        const remainingTime = endTime - now;

        if (remainingTime <= 0) return { days: "EXPIRED", hours: "", minutes: "", seconds: "" }; // If deal expired
        else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            return { days, hours, minutes, seconds };
        }
    };

    return (
        <section className="deals section-padding">
            <div className="container">
                <div className="row">
                    {allHotDealBanner
                        .filter(deal => deal.IsActive === "true") // Show only active deals
                        .map((deal, index) => {
                            const { days, hours, minutes, seconds } = countdown[deal.id] || calculateTimeLeft(deal.AvailableStartDate, deal.AvailableEndDate);
                            return (
                                <div key={index} className="col-lg-6 deal-col mb-2">
                                    <div className="deal" style={{ backgroundImage: `url(${BASE_URL}/${deal?.file})` }}>
                                        <div className="deal-top">
                                            <h2 className="text-brand">{deal?.topTitle.slice(0, 30)}...</h2>
                                            <h5>{deal?.bottomTitle.slice(0, 120)}...</h5>
                                        </div>
                                        <div className="deal-content">
                                            <h6 className="product-title">
                                                <Link to={deal.dealMainUrl}>{deal.mainTitle}</Link>
                                            </h6>
                                        </div>
                                        <div className="hurryup linkToAmazon">
                                            <Link to={deal.dealMainUrl}>

                                                <span>{deal?.dealMainText}</span>
                                            </Link>
                                        </div>
                                        <div className="deal-bottom">
                                            <div className="deals-countdown">
                                                {days === "EXPIRED" ? (
                                                    <p>EXPIRED</p>
                                                ) : (
                                                    <div className="row">
                                                        <div className="col-lg-2 col-md-2"></div>
                                                        <div className="col-lg-2 col-md-2 col maketime">
                                                            <h5>{days}</h5>
                                                            <p>Days</p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-2 col maketime">
                                                            <h5>{hours}</h5>
                                                            <p>Hours</p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-2 col maketime">
                                                            <h5>{minutes}</h5>
                                                            <p>Minutes</p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-2 col maketime">
                                                            <h5>{seconds}</h5>
                                                            <p>Seconds</p>
                                                        </div>
                                                        <div className="col-lg-2 col-md-2"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <Link to={deal.dealMainUrl} className="hover-up">
                                                Shop Now <i className="ri-arrow-right-fill hover-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
