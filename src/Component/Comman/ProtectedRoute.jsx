// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ isAdmin, element: Component, ...rest }) => {
  // const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);

//   if (isLoading) {
//     return <div>Loading...</div>; // Optional: A loading state for user data.
//   }
// //  debugger
//   if (!isAuthentication) {
//     // Redirect unauthenticated users to the login page
//     return <Navigate to="/login" />;
//   }

//   if (isAdmin && user.role !== "admin") {
//     // Redirect non-admin users to the login page if trying to access admin routes
//     return <Navigate to="/login" />;
//   }

//   return <Component {...rest} />;
// };

// export default ProtectedRoute;





// import React from 'react'
// import { Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// function ProtectedRoute({children}) {
//   const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);
//   const location = useLocation();

// //  debugger
//   if(!isAuthentication){
//     return <Navigate to= "/login"/>
//   }
//   if (isAuthentication && (location.pathname.includes("/login") || location.pathname.includes("/sign-up"))) {
//     // debugger
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/" />;
//     }
//   }

//  return children;
// }


// export default ProtectedRoute






// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function ProtectedRoute({ children }) {
//   const { isAuthentication, user } = useSelector((state) => state.auth);
//   const location = useLocation();

//   // If the user is not authenticated, redirect to login
//   if (!isAuthentication) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   // Redirect to the appropriate page if user is already logged in
//   if (isAuthentication && (location.pathname === "/login" || location.pathname === "/sign-up")) {
//     return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/"} />;
//   }

//   return children;
// }

// export default ProtectedRoute;




import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, adminOnly = false, redirectTo = '/' }) => {
  
  const { isAuthentication, user } = useSelector((state) => state.auth);

  // If the user is not authenticated, redirect to login
  if (!isAuthentication) {
    return <Navigate to="/login" />;
  }

  // If the route is admin-only, check if the user is an admin
  if (adminOnly && user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  // If the route doesn't require admin and the user is authenticated, allow access
  return children;
};

export default ProtectedRoute;






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
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/profile" element={<Profile />} />
//           </Route>

//           {/* Authentication Routes */}
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
//               <ProtectedRoute adminOnly={true}>
//                 <AdminLayout />
//               </ProtectedRoute>
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
//                   <Product />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="add-product"
//               element={
//                 <ProtectedRoute adminOnly={true}>
//                   <AddProduct />
//                 </ProtectedRoute>
//               }
//             />
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
//           </Route>
//         </Routes>

//         {/* Footer and Mobile Bottom Navigation (Optional) */}
//         <Footer />
//         <MobileBottomNavigation />
//       </BrowserRouter>
//     </>
//   );
// }
