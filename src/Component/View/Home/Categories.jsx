// import React from 'react'

// export default function Categories() {
//     return (
//         <>
//             <section className="categories">
//                 <div className="container">
//                     <div className="row">
//                         <div className="categories__slider owl-carousel" id='owlCarousel1' >
//                             <div className="col-12">
//                                 <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-1.jpg')" }}>
//                                     <h5><a href="#">Fresh Fruit</a></h5>
//                                 </div>
//                             </div>
//                             <div className="col-12">
//                                 <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-2.jpg')" }}>
//                                     <h5><a href="#">Dried Fruit</a></h5>
//                                 </div>
//                             </div>
//                             <div className="col-12">
//                                 <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-3.jpg')" }}>
//                                     <h5><a href="#">Vegetables</a></h5>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3">
//                                 <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-4.jpg')" }}>
//                                     <h5><a href="#">drink fruits</a></h5>
//                                 </div>
//                             </div>
//                             <div className="col-lg-3">
//                                 <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg" style={{ backgroundImage: "url('assets/img/categories/cat-5.jpg')" }}>
//                                     <h5><a href="#">drink fruits</a></h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useSearchParams } from 'react-router-dom';
// import { getAllSubCategory } from '../../../Store/features/category/categorySlice';

// export default function Categories() {

//     const { isLoading, childCategories } = useSelector((state) => state.category)

//     const dispatch = useDispatch()
//     // useEffect(() => {
//     //     dispatch(getAllSubCategory())
//     //     // console.log(childCategories)

//     // }, [])

//     useEffect(() => {
//         $('#owlCarousel1').owlCarousel({
//             loop: true,
//             margin: 10,
//             nav: true,
//             autoplay: true,
//             autoplayTimeout: 3000,
//             autoplayHoverPause: true,
//             smartSpeed: 1000,
//             responsive: {
//                 0: { items: 1 },
//                 600: { items: 2 },
//                 1000: { items: 4 },
//             },
//         });
//         dispatch(getAllSubCategory())

//     }, [dispatch]);

//     return (
//         <section className="categories">
//             <div className="container">
//                 <div className="row">
//                     <div className="categories__slider owl-carousel" id="owlCarousel1">

//                         {childCategories && childCategories.length > 0 &&
//                             childCategories.map((category, ind) => (
//                                 <>
//                                     {
//                                         category?.file ?
//                                             <div className="col-3">
//                                                 <div
//                                                     className="categories__item set-bg"
//                                                     data-setbg={`/image/category/${category?.file}`}
//                                                     style={{ backgroundImage: `url('/image/category/${category?.file}')` }}
//                                                 >
//                                                     <h5><Link to={`/all-product/${category?.Name}`}>{category?.Name}</Link></h5>
//                                                 </div>
//                                             </div>

//                                             : ""
//                                     }

//                                 </>
//                             ))
//                         }


//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSubCategory } from '../../../Store/features/category/categorySlice';
const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function Categories() {
    const { isLoading, childCategories } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    // To track when categories are loaded
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        // Fetch categories on initial mount
        dispatch(getAllSubCategory());
    }, [dispatch]);

    useEffect(() => {
        // Initialize Owl Carousel only once when categories are fetched
        if (childCategories && childCategories.length > 0 && !initialized) {
            $('#owlCarousel1').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 4 },
                },
            });
            setInitialized(true); // Set initialized to true to prevent re-initialization
        }
    }, [childCategories, initialized]);

    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel" id="owlCarousel1">
                        {/* Check if childCategories is not null and has items */}
                        {childCategories && childCategories.length > 0 ? (
                            childCategories.map((category, ind) => (
                                category?.file ? (
                                    <div className="col" key={ind}> {/* Ensure each item has a unique key */}
                                        <div
                                            className="categories__item set-bg"
                                            data-setbg={category?.file.url || `${BASE_URL}/${category?.file}`}
                                            style={{
                                                backgroundImage: `url('${typeof category?.file === 'string'
                                                        ? `${BASE_URL}/${category.file}`
                                                        : category?.file?.url || ''
                                                    }')`
                                            }}
                                        >
                                            {/* <img src={`${BASE_URL}/${category?.file}`}  className="d-block w-100 home-slider-image"
                                                alt={`Banner ${ind + 1}`} /> */}
                                            <h5><Link to={`/all-product/0/all-categories`}>{category?.Name}</Link></h5>
                                        </div>
                                    </div>
                                ) : null
                            ))
                        ) : (
                            // Optional loading state or message
                            <p>Loading categories...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
