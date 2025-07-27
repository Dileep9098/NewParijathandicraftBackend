// import React from 'react'
// import { Link } from 'react-router-dom'
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { showErrorMsg } from '../../../utils/ShowMessage';

// export default function CampaignSection() {
//         const [allCompaingns, setAllCompaingns] = useState([])
    
//     useEffect(() => {

//         const fatchData = async () => {
//             try {
//                 //   debugger
//                 const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_COMPAINGNS"], { withCredentials: true })
//                 // console.log(response)
//                 if (response.data.success) {
//                     setAllCompaingns(response.data.allCompaingns)
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
//   return (
//     <>
//       <section className='mb-3'>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
//                             <div className="compaign-banner-main">

//                                 <div className="compaign-img">
//                                     <img src="assets/img/banner/banner-1.jpg" alt="" />
//                                 </div>
//                                 <div className="compaign-title">
//                                     <div className="">
//                                         <div className="">
//                                             <h3>hello</h3>
//                                         </div>
//                                         <h4>Okay</h4>
//                                         <p><Link>View Details <i className="ri-arrow-right-double-line"></i></Link></p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
//                             <div className="compaign-banner-main">

//                                 <div className="compaign-img">
//                                     <img src="assets/img/banner/banner-1.jpg" alt="" />
//                                 </div>
//                                 <div className="compaign-title">
//                                     <div className="">
//                                         <div className="">
//                                             <h3>hello</h3>
//                                         </div>
//                                         <h4>Okay</h4>
//                                         <p><Link>View Details <i className="ri-arrow-right-double-line"></i></Link></p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
//                             <div className="compaign-banner-main">

//                                 <div className="compaign-img">
//                                     <img src="assets/img/banner/banner-1.jpg" alt="" />
//                                 </div>
//                                 <div className="compaign-title">
//                                     <div className="">
//                                         <div className="">
//                                             <h3>hello</h3>
//                                         </div>
//                                         <h4>Okay</h4>
//                                         <p><Link>View Details <i className="ri-arrow-right-double-line"></i></Link></p>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

      
//     </>
//   )
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';
const BASE_URL = import.meta.env.VITE_IMG_URL;



export default function CampaignSection() {
    const [allCompaingns, setAllCompaingns] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_COMPAINGNS"], { withCredentials: true });
                if (response.data.success) {
                    setAllCompaingns(response.data.allCompaingns);
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
        <section className="mb-3">
            <div className="container-fluid">
                <div className="row">
                    {/* Dynamically render the campaigns */}
                    {allCompaingns.map((campaign) => (
                        <div key={campaign._id} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
                            <div className="compaign-banner-main">
                                <div className="compaign-img">
                                    <img src={`${BASE_URL}/${campaign?.file}`} alt={campaign.mainTitle} />
                                </div>
                                <div className="compaign-title">
                                    <h3>{campaign.mainTitle}</h3>
                                    <h4>{campaign.DiscountTitle}</h4>
                                    <p>{campaign.body}</p>
                                    <p><Link to={`/campaigns/${campaign._id}`}>View Details <i className="ri-arrow-right-double-line"></i></Link></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
