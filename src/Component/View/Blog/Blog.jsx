import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';
import { Link } from 'react-router-dom';
import "./blog.css"

const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function Blog() {
    const [AllBlogs, setAllBlogs] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState(4); // Control the number of blogs displayed
    const [allLatestProduct, setAllLatestProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_BLOGS"], { withCredentials: true });
                const getAllLetestProduct = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });


                if (response.data.success) {
                    setAllBlogs(response.data.AllBlogs);
                }
                if (getAllLetestProduct.data.success) {
                    setAllLatestProduct(getAllLetestProduct.data.allProductsFeatures)

                } else {
                    showErrorMsg(response.data.message);
                }
            } catch (error) {
                showErrorMsg(error.response.data.message);
            }
        };
        fetchData();
    }, []);

    const loadMoreProducts = () => {
        setDisplayedProducts(displayedProducts + 4); // Load more blogs
    };




    const activeProducts = Array.isArray(allLatestProduct) ? allLatestProduct.filter(product => product.IsActive && product.MarkAsNew) : [];
    // console.log("Letest", activeProducts)

    const chunkProducts = (allLatestProduct, chunkSize) => {
        let result = [];
        for (let i = 0; i < allLatestProduct.length; i += chunkSize) {
            result.push(allLatestProduct.slice(i, i + chunkSize));
        }
        return result;
    };

    // Split the active products into rows of 3 products each
    const productChunks = chunkProducts(activeProducts, 6);

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

        // Cleanup Owl Carousel on unmount
        return () => {
            $('.latest-product__slider').owlCarousel('destroy');
        };
    }, [productChunks]); // Add productChunks as a dependency


    return (
        <>
            <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Blog</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/">Home</Link>
                                    <span>Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <div className="letest-section-title">

                                            <h4>Recent News</h4>
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
                        <div className="col-lg-8 col-md-7">
                            <div className="row">
                                {/* Display Blogs */}
                                {AllBlogs.slice(0, displayedProducts).map((item, ind) => (
                                    item.IsActive === "true" && (
                                        <div className="col-lg-6 col-md-6 col-sm-6" key={ind}>
                                            <div className="blog__item">
                                                <div className="blog__item__pic">
                                                    <img src={`${BASE_URL}/${item.file}`} alt={`${item.file}`} className='img-fluid' />
                                                </div>
                                                <div className="blog__item__text">
                                                    <ul>
                                                        <li><i className="fa fa-calendar-o"></i> {new Date(item.createdAt).toLocaleDateString()}</li>
                                                        <li><i className="fa fa-comment-o"></i> {item.ProductReviews.length}</li>
                                                    </ul>
                                                    <h5><Link to="/all-product/0/all-categories">{item.mainTitle.slice(0, 100)}...</Link></h5>
                                                    <p>{item.Descriptions.slice(0, 200)}...</p>
                                                    <Link to="/all-product/0/all-categories" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>

                            {/* View More Button */}
                            {AllBlogs.length > displayedProducts && (
                                <div className="text-center">
                                    <button onClick={loadMoreProducts} className="btn viewMore">
                                        View More <i className="ri-arrow-down-s-line"></i>
                                    </button>
                                </div>
                            )}

                            {/* <div className="col-lg-12">
                                <div className="product__pagination blog__pagination">
                                    <Link href="#">1</Link>
                                    <Link href="#">2</Link>
                                    <Link href="#">3</Link>
                                    <Link href="#"><i className="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
