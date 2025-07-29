// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function PopularCategory() {
//     const { isLoading, childCategories } = useSelector((state) => state.category)

//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getAllSubCategory())
//         // console.log(childCategories)

//     }, [])
//   return (
//     <>
//       <section className='popular-category1 mb-3'>
//                 <div className="container">
//                     <div className="row ">
//                         <div className="popular-category">
//                             <div className="line-container left-lines">
//                                 <span className="line large-line"></span>
//                             </div>
//                             <h1 className='popularCategory mb-3'>! Popular Category !</h1>
//                             <div className="line-container right-lines">
//                                 <span className="line large-line"></span>
//                             </div>
//                         </div>

//                         <div id='owlCarousel2' className="owl-carousel">
//                             <div className='popular-category2'>
//                                 <Link href="">
//                                     <img src="assets/img/banner/banner-1.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Hello</h4>
//                                 </Link>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-2.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 2</h4>
//                                 </a>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-1.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 3</h4>
//                                 </a>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-2.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 4</h4>
//                                 </a>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-1.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 5</h4>
//                                 </a>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-2.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 6</h4>
//                                 </a>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-2.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 7</h4>
//                                 </a>
//                             </div>
//                             <div className='popular-category2'>
//                                 <a href="">
//                                     <img src="assets/img/banner/banner-2.jpg" alt="" className="slider-image img-fluid circle-image" />
//                                     <h4>Category 8</h4>
//                                 </a>
//                             </div>
//                         </div>


//                     </div>

//                 </div>
//             </section>

//     </>
//   )
// }



import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel' // Import a React-friendly carousel (e.g., react-owl-carousel)
import { getAllSubCategory } from '../../../Store/features/category/categorySlice'
const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function PopularCategory() {
    const { isLoading, childCategories } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSubCategory())
    }, [dispatch])

    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive: {
            0: { items: 2 },
            600: { items: 2 },
            1000: { items: 6 },
        }
    }

    return (
        <>
            <section className='popular-category1 mb-3'>
                <div className="container">
                    <div className="row">
                        <div className="popular-category">
                            <div className="line-container left-lines">
                                <span className="line large-line"></span>
                            </div>
                            <h1 className='popularCategory mb-3'>! Popular Category !</h1>
                            <div className="line-container right-lines">
                                <span className="line large-line"></span>
                            </div>
                        </div>

                        {/* Owl Carousel React Component */}
                        <OwlCarousel id="owlCarousel2" className="owl-carousel" {...options}>
                            {/* {childCategories && childCategories.map((category, index) => (
                                <div key={index} className='popular-category2'>
                                     {
                                     category?.file ?
                                    <Link to={`/category/${category.id}`}> 
                                        <img
                                           src={`/image/category/${category?.file}`}
                                            alt={category.name}
                                            className="slider-image img-fluid circle-image"
                                        />
                                        <h4>{category?.Name}</h4>
                                    </Link>
                                    :""}
                                </div>
                            ))} */}
                            {childCategories && childCategories.length > 0 &&
                                childCategories.map((category, ind) => (
                                    <>
                                        {
                                            category?.file ?
                                                <div key={ind} className='popular-category2'>
                                                    <Link to={`/all-product/0/all-categories`}>
                                                        <img
                                                            src={category?.file.url||`${BASE_URL}/${category?.file}`}
                                                            alt={category.name}
                                                            className="slider-image img-fluid circle-image"
                                                        />
                                                        <h4>{category?.Name}</h4>
                                                    </Link>
                                                </div>
                                                : ""
                                        }

                                    </>
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}
