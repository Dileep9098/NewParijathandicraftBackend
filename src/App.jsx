// import React, { useEffect } from 'react'
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

// import Test from './test'
// import Home from './Component/View/Home/Home'
// import Layout from './Component/View/Layout/Layout'
// import AllProducts from './Component/View/Products/AllProducts'
// import MobileBottomNavigation from './Component/View/Layout/MobileBottomNavigation'
// import ProductDetails from './Component/View/Products/ProductDetails'
// import Blog from './Component/View/Blog/Blog'
// import Cart from './Component/View/Cart/Cart'
// import Checkout from './Component/View/Checkout/Checkout'
// import Login from './Component/View/User/Login'
// import SignUp from './Component/View/User/SignUp'
// import Contact from './Component/View/Contact/Contact'
// import { ToastContainer, Zoom } from 'react-toastify'
// import Dashboard from './Component/Admin/Dashboard/Dashboard.jsx'
// import Footer from './Component/View/Layout/Footer.jsx'
// import Desh from './Component/Admin/Dashboard/Desh.jsx'
// import AdminLayout from './Component/Admin/AdminLayout/AdminLayout.jsx'
// import Product from './Component/Admin/Product/Product.jsx'
// import AddProduct from './Component/Admin/Product/AddProduct.jsx'
// import ProductReview from './Component/Admin/Product/ProductReview.jsx'
// import UploadBulkProduct from './Component/Admin/Product/UploadBulkProduct.jsx'
// import { useSelector } from 'react-redux'
// import { loadUser } from './Store/features/authSlice/authSlice.js'
// import CheckAuth from './Component/Comman/CheckAuth.jsx'
// import { store } from './Store/store.js'
// import Loader from './Component/View/Loader/Loader.jsx'
// import Profile from './Component/View/User/Profile.jsx'

// export default function App() {
//   const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);
//   return (
//     <>
//       <BrowserRouter>

//         <Routes>
//           <Route path='/' element={<Layout />}>

//             {/* <Route path='/' element={<Mobile/>}/> */}
//             <Route path='/' element={<Home />} />
//             <Route path='/all-product' element={<AllProducts />} />
//             <Route path='/product-details' element={<ProductDetails />} />
//             <Route path='/blog' element={<Blog />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/checkout' element={<Checkout />} />
//             {/* <Route
//             path="/checkout"
//             element={isAuthentication ? <Checkout /> : <Navigate to="/login" />}
//           /> */}
//             <Route path='/contact' element={<Contact />} />
//           </Route>
//           <Route path="/login" element={<CheckAuth isAuthentication={isAuthentication} user={user}>
//             <Login />
//           </CheckAuth>} />

//           <Route path="/sign-up" element={<CheckAuth isAuthentication={isAuthentication} user={user}>
//             <SignUp />
//           </CheckAuth>} />
//           {/* <Route path='/sign-up' element={<SignUp />} /> */}
//           {/* <Route path='/dashboard' element={<Dashboard />} /> */}


//           {/* <Route path='/loader' element={<Loader />} /> */}


//           {/* ======================++++++++++++ Admin Routes  +++++++++++++++++========================= */}

//             <Route path='/admin' element={<AdminLayout />}>
//               <Route path='dashboard' element={<CheckAuth isAuthentication={isAuthentication} user={user}><Dashboard /></CheckAuth>} />
//               <Route path='product' element={<Product />} />
//               <Route path='add-product' element={<AddProduct />} />
//               <Route path='product-review' element={<ProductReview />} />
//               <Route path='product-bulk-upload' element={<UploadBulkProduct />} />

//             </Route>

//         </Routes>
//         {/* <Footer />
//         <MobileBottomNavigation /> */}

//       </BrowserRouter>

//       <ToastContainer
//         position='top-right'
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable={true}
//         pauseOnHover={true}
//         closeOnClick={true}
//         theme='colored'
//         transition={Zoom}

//       />
//     </>
//   )
// }



// import React, { useEffect } from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { loadUser } from './Store/features/authSlice/authSlice.js';
// import { store } from './Store/store.js';

// import Home from './Component/View/Home/Home';
// import Layout from './Component/View/Layout/Layout';
// import AllProducts from './Component/View/Products/AllProducts';
// import ProductDetails from './Component/View/Products/ProductDetails';
// import Blog from './Component/View/Blog/Blog';
// import Cart from './Component/View/Cart/Cart';
// import Checkout from './Component/View/Checkout/Checkout';
// import Login from './Component/View/User/Login';
// import SignUp from './Component/View/User/SignUp';
// import Contact from './Component/View/Contact/Contact';
// import Dashboard from './Component/Admin/Dashboard/Dashboard.jsx';
// import AdminLayout from './Component/Admin/AdminLayout/AdminLayout.jsx';
// import Product from './Component/Admin/Product/Product.jsx';
// import AddProduct from './Component/Admin/Product/AddProduct.jsx';
// import ProductReview from './Component/Admin/Product/ProductReview.jsx';
// import UploadBulkProduct from './Component/Admin/Product/UploadBulkProduct.jsx';
// import CheckAuth from './Component/Comman/CheckAuth.jsx';
// import { ToastContainer, Zoom } from 'react-toastify';
// import CheckoutAuth from './Component/Comman/CheckoutAuth.jsx';

// export default function App() {
//   const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/all-product" element={<AllProducts />} />
//             <Route path="/product-details" element={<ProductDetails />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/cart" element={<Cart />} />


//             <Route path='checkout' element={<Checkout />} />
//             {/* <Route
//               path="checkout"
//               element={<CheckoutAuth isAuthentication={isAuthentication} user={user}><Checkout/></CheckoutAuth>}
//             /> */}

//             <Route path="/contact" element={<Contact />} />
//           </Route>

//           {/* Authentication Routes */}
//           <Route path="/login" element={<CheckAuth isAuthentication={isAuthentication} user={user}><Login /></CheckAuth>} />
//           <Route path="/sign-up" element={<CheckAuth isAuthentication={isAuthentication} user={user}><SignUp /></CheckAuth>} />

//           {/* Admin Routes - Only accessible by admin users */}
// <Route path="/admin" element={<CheckAuth isAuthentication={isAuthentication} user={user}><AdminLayout /></CheckAuth>}>
//   <Route path='dashboard' element={<Dashboard />} />
//   <Route path='product' element={<Product />} />
//   <Route path='add-product' element={<AddProduct />} />
//   <Route path='product-review' element={<ProductReview />} />
//   <Route path='product-bulk-upload' element={<UploadBulkProduct />} />
// </Route>

//         </Routes>
//       </BrowserRouter>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable={true}
//         pauseOnHover={true}
//         closeOnClick={true}
//         theme="colored"
//         transition={Zoom}
//       />
//     </>
//   );
// }



// import React, { useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { loadUser } from "./Store/features/authSlice/authSlice";
// import { store } from "./Store/store";
// import Layout from "./Component/View/Layout/Layout";
// import Home from "./Component/View/Home/Home";
// import AllProducts from "./Component/View/Products/AllProducts";
// import ProductDetails from "./Component/View/Products/ProductDetails";
// import Blog from "./Component/View/Blog/Blog";
// import Cart from "./Component/View/Cart/Cart";
// import Checkout from "./Component/View/Checkout/Checkout";
// import Contact from "./Component/View/Contact/Contact";
// import Login from "./Component/View/User/Login";
// import SignUp from "./Component/View/User/SignUp";
// import Profile from "./Component/View/User/Profile";
// import AdminLayout from "./Component/Admin/AdminLayout/AdminLayout";
// import Dashboard from "./Component/Admin/Dashboard/Dashboard";
// import Product from "./Component/Admin/Product/Product";
// import AddProduct from "./Component/Admin/Product/AddProduct";
// import ProductReview from "./Component/Admin/Product/ProductReview";
// import UploadBulkProduct from "./Component/Admin/Product/UploadBulkProduct";
// import ProtectedRoute from "./Component/Comman/ProtectedRoute";
// import { ToastContainer, Zoom } from "react-toastify";

// export default function App() {
//   const { isAuthentication, user } = useSelector((state) => state.auth);

//   // // debuggera
//   // useEffect(() => {
//   //   store.dispatch(loadUser());
//   // }, []);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const result = await store.dispatch(loadUser());
//       console.log(result);
//     };
//     fetchUser();
//   }, []);


//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/all-product" element={<AllProducts />} />
//             <Route path="/product-details" element={<ProductDetails />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/contact" element={<Contact />} />

//             <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//           </Route>
//           {/* <Route path="/sign-up" element={<ProtectedRoute><SignUp /></ProtectedRoute>} /> */}
//           {/* <Route path="/login" element={<ProtectedRoute  ><Login /></ProtectedRoute>} /> */}
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />


//           {/* Admin Routes */}
//           <Route path="/admin" element={<ProtectedRoute><AdminLayout/></ProtectedRoute>}>
//             <Route path='dashboard' element={<Dashboard />} />
//             <Route path='product' element={<Product />} />
//             <Route path='add-product' element={<AddProduct />} />
//             <Route path='product-review' element={<ProductReview />} />
//             <Route path='product-bulk-upload' element={<UploadBulkProduct />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable={true}
//         pauseOnHover={true}
//         closeOnClick={true}
//         theme="colored"
//         transition={Zoom}
//       />
//     </>
//   );
// }


// import React, { useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from "./Store/features/authSlice/authSlice";
// import { store } from "./Store/store";
// import Layout from "./Component/View/Layout/Layout";
// import Home from "./Component/View/Home/Home";
// import AllProducts from "./Component/View/Products/AllProducts";
// import ProductDetails from "./Component/View/Products/ProductDetails";
// import Blog from "./Component/View/Blog/Blog";
// import Cart from "./Component/View/Cart/Cart";
// import Checkout from "./Component/View/Checkout/Checkout";
// import Contact from "./Component/View/Contact/Contact";
// import Login from "./Component/View/User/Login";
// import SignUp from "./Component/View/User/SignUp";
// import Profile from "./Component/View/User/Profile";
// import AdminLayout from "./Component/Admin/AdminLayout/AdminLayout";
// import Dashboard from "./Component/Admin/Dashboard/Dashboard";
// import Product from "./Component/Admin/Product/Product";
// import AddProduct from "./Component/Admin/Product/AddProduct";
// import ProductReview from "./Component/Admin/Product/ProductReview";
// import UploadBulkProduct from "./Component/Admin/Product/UploadBulkProduct";
// import ProtectedRoute from "./Component/Comman/ProtectedRoute";
// import { ToastContainer, Zoom } from "react-toastify";
// import Loader from "./Component/View/Loader/Loader";
// import UpdateProfile from "./Component/View/User/UpdateProfile";

// export default function App() {
//   const { isAuthentication, user, isLoading } = useSelector((state) => state.auth);

//   // Fetch user when app loads
//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);
//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     const result = await store.dispatch(loadUser());
//   //     console.log('Load user result:', result);
//   //   };
//   //   fetchUser();
//   // }, []);

//   // useEffect(() => {
//   //   if (isAuthentication) {
//   //     dispatch(loadUser());  // Dispatch loadUser to fetch user data and update store
//   //   }
//   // }, [isAuthentication, dispatch]);


// if (isLoading) {
//   return <Loader/>  // Add a loading state
// }

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/all-product" element={<AllProducts />} />
//             <Route path="/product-details" element={<ProductDetails />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//             <Route path="/update-profile" element={<UpdateProfile />} />
//           </Route>
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />

//           {/* Admin Routes */}
//           <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="product" element={<Product />} />
//             <Route path="add-product" element={<AddProduct />} />
//             <Route path="product-review" element={<ProductReview />} />
//             <Route path="product-bulk-upload" element={<UploadBulkProduct />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>

// <ToastContainer
//   position="top-right"
//   autoClose={5000}
//   hideProgressBar={false}
//   newestOnTop={false}
//   rtl={false}
//   pauseOnFocusLoss
//   draggable={true}
//   pauseOnHover={true}
//   closeOnClick={true}
//   theme="colored"
//   transition={Zoom}
// />
//     </>
//   );
// }




// import React, { useEffect } from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { loadUser } from './Store/features/authSlice/authSlice.js';
// import { store } from './Store/store.js';
// import Test from './test';
// import Home from './Component/View/Home/Home';
// import Layout from './Component/View/Layout/Layout';
// import AllProducts from './Component/View/Products/AllProducts';
// import ProductDetails from './Component/View/Products/ProductDetails';
// import Blog from './Component/View/Blog/Blog';
// import Cart from './Component/View/Cart/Cart';
// import Checkout from './Component/View/Checkout/Checkout';
// import Login from './Component/View/User/Login';
// import SignUp from './Component/View/User/SignUp';
// import Contact from './Component/View/Contact/Contact';
// import Dashboard from './Component/Admin/Dashboard/Dashboard.jsx';
// import AdminLayout from './Component/Admin/AdminLayout/AdminLayout.jsx';
// import Product from './Component/Admin/Product/Product.jsx';
// import AddProduct from './Component/Admin/Product/AddProduct.jsx';
// import ProductReview from './Component/Admin/Product/ProductReview.jsx';
// import UploadBulkProduct from './Component/Admin/Product/UploadBulkProduct.jsx';
// import Footer from './Component/View/Layout/Footer.jsx';
// import MobileBottomNavigation from './Component/View/Layout/MobileBottomNavigation';
// import ProtectedRoute from './Component/Comman/ProtectedRoute'; 
// import Profile from './Component/View/User/Profile.jsx';


// import React, { useEffect } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from "./Store/features/authSlice/authSlice";
// import { store } from "./Store/store";
// import Layout from "./Component/View/Layout/Layout";
// import Home from "./Component/View/Home/Home";
// import AllProducts from "./Component/View/Products/AllProducts";
// import ProductDetails from "./Component/View/Products/ProductDetails";
// import Blog from "./Component/View/Blog/Blog";
// import Cart from "./Component/View/Cart/Cart";
// import Checkout from "./Component/View/Checkout/Checkout";
// import Contact from "./Component/View/Contact/Contact";
// import Login from "./Component/View/User/Login";
// import SignUp from "./Component/View/User/SignUp";
// import Profile from "./Component/View/User/Profile";
// import AdminLayout from "./Component/Admin/AdminLayout/AdminLayout";
// import Dashboard from "./Component/Admin/Dashboard/Dashboard";

// import ProductReview from "./Component/Admin/Product/ProductReview";
// import UploadBulkProduct from "./Component/Admin/Product/UploadBulkProduct";
// import ProtectedRoute from "./Component/Comman/ProtectedRoute";
// import { ToastContainer, Zoom } from "react-toastify";
// import Loader from "./Component/View/Loader/Loader";
// import UpdateProfile from "./Component/View/User/UpdateProfile";
// import MobileBottomNavigation from "./Component/View/Layout/MobileBottomNavigation";
// import ForgotPassword from "./Component/View/User/ForgotPassword";
// import PasswordResset from "./Component/View/User/PasswordResset";
// import UpdatePassword from "./Component/View/User/UpdatePassword";
// import UserDashboard from "./Component/Admin/UserManagement/UserDashboard";
// import AddUser from "./Component/Admin/UserManagement/AddUser";
// import Category from "./Component/Admin/Category/Category";
// import Manufactures from "./Component/Admin/Manufactures/Manufactures";
// import PaymentsMethods from "./Component/Admin/PaymentMethod/PaymentsMethods";
// import DiscountDashboard from "./Component/Admin/Discount/DiscountDashboard";
// import ContactDashboard from "./Component/Admin/Contact/ContactDashboard";
// import SubscriberDashboard from "./Component/Admin/Contact/SubscriberDashboard";
// import HomeBannerDashboard from "./Component/Admin/HomeBanner/HomeBannerDashboard";
// import Compaingns from "./Component/Admin/Compaingns/Compaingns";
// import SiteLogo from "./Component/Admin/SiteLogo/SiteLogo";
// import Product from "./Component/Admin/Product/Product_Data/Product";
// import AddProduct from "./Component/Admin/Product/Product_Data/AddProduct";
// import UpdateProductDetails from "./Component/Admin/Product/Product_Data/UpdateProductDetails";
import BlogsDashboard from "./Component/Admin/Blogs/BlogsDashboard";
// import HotDealBannerDashboard from "./Component/Admin/hotDealBanner/HotDealBannerDashboard";
import ProductSize from "./Component/Admin/ProductSize/ProductSize";


// import HotDealBannerDashboard from "./Component/Admin/hotDealBanner/HotDealBannerDashboard";
// import HotDealBannerDashboard from "./Component/Admin/hotDealBanner/HotDealBannerDashboard";
// import HotDealBannerDashboard from "./Component/Admin/hotDealBanner/HotDealBannerDashboard";

// export default function App() {
//   const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);

//   if (isLoading) {
//     return <Loader/>  // Add a loading state
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/all-product/:category_id/:category_name" element={<AllProducts />} />
//             <Route path="/product-details/:product_id/:category/:product_name" element={<ProductDetails />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/update-profile" element={<UpdateProfile />} />

//             <Route path="/checkout" element={<ProtectedRoute> <Checkout/></ProtectedRoute>} />

//           </Route>

//           {/* Authentication Routes */}
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/password/reset/:token" element={<PasswordResset />} />
//             <Route path="/password/update/"element={<UpdatePassword />} />
//           <Route
//             path="/login"
//             element={
//               isAuthentication ? <Navigate to="/" /> : <Login />
//             }
//           />
//           <Route
//             path="/sign-up"
//             element={
//               isAuthentication ? <Navigate to="/" /> : <SignUp />
//             }
//           />

//           {/* Admin Routes */}
//           <Route
//             path="/admin"
//             element={

//                 <AdminLayout />
//             }
//           >
//             <Route
//               path="dashboard"
//               element={
//                 <ProtectedRoute adminOnly={true}>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="product"
//               element={
//                 <ProtectedRoute adminOnly={true}>
//                   <Product/>
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="add-product"
//               element={ <AddProduct />}/>
//             <Route
//               path="update-product/:id"
//               element={ <UpdateProductDetails />}/>
//             {/* <Route
//               path="add-product"
//               element={
//                 <ProtectedRoute adminOnly={true}>
//                   <AddProduct />
//                 </ProtectedRoute>
//               }
//             /> */}
//             <Route
//               path="product-review"
//               element={
//                 <ProtectedRoute adminOnly={true}>
//                   <ProductReview />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="product-bulk-upload"
//               element={
//                 <ProtectedRoute adminOnly={true}>
//                   <UploadBulkProduct />
//                 </ProtectedRoute>
//               }
//             />


//             {/* ======================== + + User Management + + ================== */}
//             <Route
//               path="user-management"
//               element={

//                   <UserDashboard/>
//               }
//             />
//             <Route path="add-user"  element={<ProtectedRoute adminOnly={true}>  <AddUser/> </ProtectedRoute> }  />

//             {/* ======================== + + Category Management + + ================== */}
//             <Route path="category" element={<Category/>}/>

//             {/* ======================== + + Category Management + + ================== */}
//             <Route path="manufactures" element={<Manufactures/>}/>
//             <Route path="payments-method" element={<PaymentsMethods/>}/>
//             <Route path="discount-details" element={<DiscountDashboard/>}/>
//             <Route path="contact-details" element={<ContactDashboard/>}/>
//             <Route path="subscriber-details" element={<SubscriberDashboard/>}/>
//             <Route path="product-size" element={<ProductSize/>}/>


//             {/* ======================== + + Home Banner Management + + ================== */}

//             <Route path="homeBanner-dashboard" element={<HomeBannerDashboard/>}/>
//             <Route path="Blogs-dashboard" element={<BlogsDashboard/>}/>
//             <Route path="hot-deal-banner-dashboard" element={<HotDealBannerDashboard/>}/>
//             <Route path="compaingns-dashboard" element={<Compaingns/>}/>
//             <Route path="siteLogo-dashboard" element={<SiteLogo/>}/>



//           </Route>




//         </Routes>

//         {/* Footer and Mobile Bottom Navigation (Optional) */}
//         {/* <Footer /> */}
//         {/* <MobileBottomNavigation /> */}
//       </BrowserRouter>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable={true}
//         pauseOnHover={true}
//         closeOnClick={true}
//         theme="colored"
//         transition={Zoom}
//       />
//     </>
//   );
// }



import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Store/features/authSlice/authSlice";
import { store, persistor } from "./Store/store"; 
import { PersistGate } from 'redux-persist/integration/react'; 
import Layout from "./Component/View/Layout/Layout";
import Home from "./Component/View/Home/Home";
import AllProducts from "./Component/View/Products/AllProducts";
import ProductDetails from "./Component/View/Products/ProductDetails";
import Blog from "./Component/View/Blog/Blog";
import Cart from "./Component/View/Cart/Cart";
import WishList from "./Component/View/Cart/WishList";
import Checkout from "./Component/View/Checkout/Checkout";
import PayUFailResponse from "./Component/View/Checkout/PayUFailResponse";
import Contact from "./Component/View/Contact/Contact";
import Login from "./Component/View/User/Login";
import SignUp from "./Component/View/User/SignUp";
import Profile from "./Component/View/User/Profile";
import AdminLayout from "./Component/Admin/AdminLayout/AdminLayout";
import Dashboard from "./Component/Admin/Dashboard/Dashboard";
import ProductReview from "./Component/Admin/Product/ProductReview";
import UploadBulkProduct from "./Component/Admin/Product/UploadBulkProduct";
import ProtectedRoute from "./Component/Comman/ProtectedRoute";
import { ToastContainer, Zoom } from "react-toastify";
import Loader from "./Component/View/Loader/Loader";
import UpdateProfile from "./Component/View/User/UpdateProfile";
import ForgotPassword from "./Component/View/User/ForgotPassword";
import PasswordResset from "./Component/View/User/PasswordResset";
import UpdatePassword from "./Component/View/User/UpdatePassword";
import UserDashboard from "./Component/Admin/UserManagement/UserDashboard";
import AddUser from "./Component/Admin/UserManagement/AddUser";
import Category from "./Component/Admin/Category/Category";
import Manufactures from "./Component/Admin/Manufactures/Manufactures";
import PaymentsMethods from "./Component/Admin/PaymentMethod/PaymentsMethods";
import DiscountDashboard from "./Component/Admin/Discount/DiscountDashboard";
import ContactDashboard from "./Component/Admin/Contact/ContactDashboard";
import SubscriberDashboard from "./Component/Admin/Contact/SubscriberDashboard";
import HomeBannerDashboard from "./Component/Admin/HomeBanner/HomeBannerDashboard";
import Compaingns from "./Component/Admin/Compaingns/Compaingns";
import SiteLogo from "./Component/Admin/SiteLogo/SiteLogo";
import Product from "./Component/Admin/Product/Product_Data/Product";
import AddProduct from "./Component/Admin/Product/Product_Data/AddProduct";
import UpdateProductDetails from "./Component/Admin/Product/Product_Data/UpdateProductDetails";

import HotDealBannerDashboard from "./Component/Admin/hotDealBanner/HotDealBannerDashboard";
import OrderList from "./Component/Admin/Orders/OrderList";
import OrderDetails from "./Component/Admin/Orders/OrderDetails";
import PrivacyPolicy from "./Component/View/Terms & Conditions/PrivacyPolicy";
import OrderHistory from "./Component/View/Order/OrderHistory";
import SingleOrderDetails from "./Component/View/Order/SingleOrderDetails";
import EditUserDetails from "./Component/Admin/UserManagement/EditUserDetails";
import PageNotFound from "./Component/View/PageNotFound/PageNotFound";
import Tax from "./Component/Admin/Tax/Tax";
import {fetchCurrency} from "./Store/features/currencySlice/currencySlice";


// Main App component
export default function App() {
  const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser()); 
    dispatch(fetchCurrency());

  }, [dispatch]);

  if (isLoading) {
    return <Loader />;  
  }

  return (
    <PersistGate loading={null} persistor={persistor}>  {/* Wrap your app with PersistGate */}

      <BrowserRouter>
        {/*             ------ Temporary comment ------- */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-product/:category_id/:category_name" element={<AllProducts />} />

            <Route path="/product-details/:product_id/:category/:product_name" element={<ProductDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my-wishlist" element={<WishList />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/order-response" element={<PayUFailResponse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/single-order-details/:id" element={<SingleOrderDetails />} />

            <Route path="/checkout" element={<ProtectedRoute> <Checkout /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute> <Profile /></ProtectedRoute>} />

          </Route>

          {/* Authentication Routes */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/password/reset/:token" element={<PasswordResset />} />
          <Route path="/password/update/" element={<UpdatePassword />} />
          <Route
            path="/login"
            element={
              isAuthentication ? <Navigate to="/" /> : <Login />
            }
          />
          <Route
            path="/sign-up"
            element={
              isAuthentication ? <Navigate to="/" /> : <SignUp />
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={

              <AdminLayout />
            }
          >
            <Route
              path="dashboard"
              element={
                <ProtectedRoute adminOnly={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="product"
              element={
                <ProtectedRoute adminOnly={true}>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route
              path="add-product"
              element={<AddProduct />} />
            <Route
              path="update-product/:id"
              element={<UpdateProductDetails />} />
            {/* <Route
              path="add-product"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AddProduct />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="product-review"
              element={
                <ProtectedRoute adminOnly={true}>
                  <ProductReview />
                </ProtectedRoute>
              }
            />
            <Route
              path="product-bulk-upload"
              element={
                <ProtectedRoute adminOnly={true}>
                  <UploadBulkProduct />
                </ProtectedRoute>
              }
            />


            {/* ======================== + + User Management + + ================== */}
            <Route
              path="user-management"
              element={

                <UserDashboard />
              }
            />
            <Route path="add-user" element={<ProtectedRoute adminOnly={true}>  <AddUser /> </ProtectedRoute>} />
            <Route path="edit-user-details/:id" element={<ProtectedRoute adminOnly={true}>  <EditUserDetails /> </ProtectedRoute>} />

            {/* ======================== + + Category Management + + ================== */}
            <Route path="category" element={<Category />} />

            {/* ======================== + + Category Management + + ================== */}
            <Route path="manufactures" element={<Manufactures />} />
            <Route path="payments-method" element={<PaymentsMethods />} />
            <Route path="discount-details" element={<DiscountDashboard />} />
            <Route path="contact-details" element={<ContactDashboard />} />
            <Route path="subscriber-details" element={<SubscriberDashboard />} />
            <Route path="product-size" element={<ProductSize />} />
            <Route path="tax" element={<Tax />} />


            {/* ======================== + + Home Banner Management + + ================== */}

            <Route path="homeBanner-dashboard" element={<HomeBannerDashboard />} />
            <Route path="Blogs-dashboard" element={<BlogsDashboard />} />
            <Route path="hot-deal-banner-dashboard" element={<HotDealBannerDashboard />} />
            <Route path="compaingns-dashboard" element={<Compaingns />} />
            <Route path="siteLogo-dashboard" element={<SiteLogo />} />

            {/* ======================== + + Home Banner Management + + ================== */}

            <Route path="order-list" element={<ProtectedRoute adminOnly={true}>  <OrderList /> </ProtectedRoute>} />
            <Route path="order-details/:id" element={<ProtectedRoute adminOnly={true}>  <OrderDetails /> </ProtectedRoute>} />



          </Route>




        </Routes>

        {/* Footer and Mobile Bottom Navigation (Optional) */}
        {/* <Footer /> */}
        {/* <MobileBottomNavigation /> */}
      </BrowserRouter>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover={true}
        closeOnClick={true}
        theme="colored"
        transition={Zoom}
      />
      {/* <a
          href="https://api.whatsapp.com/send?phone=919953965913&text=Hi%20Team%2C%20I%20need%20help%20regarding%20SIM%20activation%20and%20packages.%20Can%20you%20assist%3F
"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <i className="fab fa-whatsapp"></i>
        </a> */}


      <div className="bhaman-call-icon">
        <a
            href="https://api.whatsapp.com/send?phone=919953567333&text=Hi%20there!%20I%20recently%20came%20across%20Parijat%20Handicraft%20and%20I%20love%20your%20collection.%20Can%20you%20share%20more%20info%20about%20your%20products%20and%20how%20to%20place%20an%20order%3F"

          target="_blank"
          rel="noopener noreferrer"
          className='text-light'
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

    </PersistGate>
  );
}




// <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/all-product/:category_id/:category_name" element={<AllProducts />} />
//             <Route path="/product-details/:product_id/:category/:product_name" element={<ProductDetails />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/update-profile" element={<UpdateProfile />} />
//             <Route path="/checkout" element={<ProtectedRoute> <Checkout /></ProtectedRoute>} />
//           </Route>

//           {/* Authentication Routes */}
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/password/reset/:token" element={<PasswordResset />} />
//           <Route path="/password/update/" element={<UpdatePassword />} />
//           <Route
//             path="/login"
//             element={isAuthentication ? <Navigate to="/" /> : <Login />}
//           />
//           <Route
//             path="/sign-up"
//             element={isAuthentication ? <Navigate to="/" /> : <SignUp />}
//           />

//           {/* Admin Routes */}
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="dashboard" element={<ProtectedRoute adminOnly={true}><Dashboard /></ProtectedRoute>} />
//             <Route path="product" element={<ProtectedRoute adminOnly={true}><Product /></ProtectedRoute>} />
//             <Route path="add-product" element={<AddProduct />} />
//             <Route path="update-product/:id" element={<UpdateProductDetails />} />
//             <Route path="product-review" element={<ProtectedRoute adminOnly={true}><ProductReview /></ProtectedRoute>} />
//             <Route path="product-bulk-upload" element={<ProtectedRoute adminOnly={true}><UploadBulkProduct /></ProtectedRoute>} />
//             {/* User management and other admin routes here */}
//             <Route
//               path="user-management"
//               element={

//                 <UserDashboard />
//               }
//             />
//             <Route path="add-user" element={<ProtectedRoute adminOnly={true}>  <AddUser /> </ProtectedRoute>} />

//             {/* ======================== + + Category Management + + ================== */}
//             <Route path="category" element={<Category />} />

//             {/* ======================== + + Category Management + + ================== */}
//             <Route path="manufactures" element={<Manufactures />} />
//             <Route path="payments-method" element={<PaymentsMethods />} />
//             <Route path="discount-details" element={<DiscountDashboard />} />
//             <Route path="contact-details" element={<ContactDashboard />} />
//             <Route path="subscriber-details" element={<SubscriberDashboard />} />
//             <Route path="product-size" element={<ProductSize />} />


//             {/* ======================== + + Home Banner Management + + ================== */}

//             <Route path="homeBanner-dashboard" element={<HomeBannerDashboard />} />
//             <Route path="Blogs-dashboard" element={<BlogsDashboard />} />
//             <Route path="hot-deal-banner-dashboard" element={<HotDealBannerDashboard />} />
//             <Route path="compaingns-dashboard" element={<Compaingns />} />
//             <Route path="siteLogo-dashboard" element={<SiteLogo />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
