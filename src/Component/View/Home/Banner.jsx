import React from 'react'
import { Link } from 'react-router-dom'
const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6  col-12 mb-3">
                            <div className="banner__pic">
                                <img src={`${BASE_URL}/1738654242262.jpeg`} alt="Handcrafted Art" />
                            </div>
                            <div className="banner__contant">
                                <h1 className="shadowed-title">Best Options</h1>
                                <h4>Explore Unique, Artisanal Creations for Your Home</h4>
                                <p>Each handcrafted piece is a unique work of art, made with love and passion.</p>

                                <div className="banner_btn">
                                    <Link to="/all-product/0/all-categories" className="btn shopNowBtn me-2">Shop Now</Link>
                                    <Link to="/all-product/0/all-categories" className="btn viewMoreDetails">View More Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6  col-12">
                            <div className="banner__pic">
                                {/* <img src="/image/compaingns/1738610713554.png" alt="" /> */}
                                <img src={`${BASE_URL}/1738610713554.png`} alt="" />
                            </div>
                            <div className="banner__contant">
                            <h1  className="shadowed-title">Handmade Treasures</h1>
    <h4>Discover Timeless Craftsmanship from Skilled Artisans</h4>
    <p>Each piece is carefully crafted to tell its own unique story. Bring home a piece of art that’s made with love and passion.</p>

                                <div className="banner_btn">
                                    <Link to="/all-product/0/all-categories" className="btn shopNowBtn me-2">Shop Now</Link>
                                    <Link to="/all-product/0/all-categories" className="btn viewMoreDetails">View More Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
