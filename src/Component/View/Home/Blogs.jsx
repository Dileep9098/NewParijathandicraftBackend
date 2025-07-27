import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';
const BASE_URL = import.meta.env.VITE_IMG_URL;

function Blogs() {
    const [AllBlogs, setAllBlogs] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState(4); // Control the number of products displayed

    useEffect(() => {

        const fatchData = async () => {
            try {
                //   debugger
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_BLOGS"], { withCredentials: true })
                // console.log(response)
                if (response.data.success) {
                    setAllBlogs(response.data.AllBlogs)
                }
                else {
                    showErrorMsg(response.data.message)
                }
            } catch (error) {
                showErrorMsg(error.response.data.message);

            }
        }
        fatchData();

    }, []);

    const loadMoreProducts = () => {
        setDisplayedProducts(displayedProducts + 4); // Load 10 more products
    };
    return (
        <>
            <section className="from-blog spad mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title from-blog__title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {AllBlogs.slice(0, displayedProducts).map((item, ind) => (
                            // Check if the product is active
                            item.IsActive === "true" && (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2" key={ind}>
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img src={`${BASE_URL}/${item.file}`} alt={`${item.file}`} />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul style={{ paddingLeft: "0" }}>
                                                <li><i className="fa fa-calendar-o"></i> {new Date(item.createdAt).toLocaleDateString()}</li>
                                                <li><i className="fa fa-comment-o"></i> {item.ProductReviews.length}</li>
                                            </ul>
                                            <h5><a href="#">{item.mainTitle.slice(0, 100)}...</a></h5>
                                            <p>{item.Descriptions.slice(0, 200)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    {AllBlogs.length > displayedProducts && (
                        <div className="text-center">
                            <button onClick={loadMoreProducts} className="btn viewMore">
                                View More <i className="ri-arrow-down-s-line"></i>
                            </button>
                        </div>
                    )}
                </div>
            </section>



        </>
    )
}

export default Blogs
