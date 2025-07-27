// // // import { Navigate, useLocation } from "react-router-dom";

// // // function CheckAuth({ isAuthentication, user, children }) {
// // //   const location = useLocation();

// // //   console.log(location.pathname, isAuthentication);

// // //   if (location.pathname === "/") {
// // //     if (!isAuthentication) {
// // //       return <Navigate to="/" />;
// // //     } else {
// // //       if (user?.role === "admin") {
// // //         return <Navigate to="/admin/dashboard" />;
// // //       } else {
// // //         return <Navigate to="/shop/home" />;
// // //       }
// // //     }
// // //   }

// // //   if (
// // //     !isAuthentication &&
// // //     !(
// // //       location.pathname.includes("/") ||
// // //       location.pathname.includes("/sing-up")
// // //     )
// // //   ) {
// // //     return <Navigate to="/" />;
// // //   }

// // //   if (
// // //     isAuthentication &&
// // //     (location.pathname.includes("/") ||
// // //       location.pathname.includes("/sing-up"))
// // //   ) {
// // //     if (user?.role === "admin") {
// // //       return <Navigate to="/admin/dashboard" />;
// // //     } else {
// // //       return <Navigate to="/shop/home" />;
// // //     }
// // //   }

// // //   if (
// // //     isAuthentication &&
// // //     user?.role !== "admin" &&
// // //     location.pathname.includes("admin")
// // //   ) {
// // //     return <Navigate to="/unauth-page" />;
// // //   }

// // //   if (
// // //     isAuthentication &&
// // //     user?.role === "admin" &&
// // //     location.pathname.includes("shop")
// // //   ) {
// // //     return <Navigate to="/admin/dashboard" />;
// // //   }

// // //   return <>{children}</>;
// // // }

// // // export default CheckAuth;



// // import { Navigate, useLocation } from "react-router-dom";

// // function CheckAuth({ isAuthentication, user, children }) {
// //   const location = useLocation();
// //     console.log("Mil Kya Raha hai bhai ",user)


// //   console.log(location.pathname, isAuthentication, user);

// //   // Redirect to login if not authenticated and not on the signup or login page
// //   if (!isAuthentication && !location.pathname.includes("/sing-up") && !location.pathname.includes("/")) {
// //     return <Navigate to="/login" />;
// //   }

// //   // If user is not authenticated but trying to access a protected route, redirect to login
// //   // if (location.pathname !== "/" && !isAuthentication) {
// //   //   return <Navigate to="/" />;
// //   // }
// //   if (isAuthentication) {
// //     if (user?.role === "admin") {
// //       return <Navigate to="/admin/dashboard" />;
// //     } else {
// //       return <Navigate to="/" />;
// //     }
// //   }

// //   // If user is authenticated, but not admin, redirect them if they try to access the admin page
// //   if (isAuthentication && user?.role !== "admin") {
// //     return <Navigate to="/" />;
// //   }

// //   // If user is admin and trying to access the shop page, redirect to the admin dashboard
// //   if (isAuthentication && user?.role === "admin") {
// //     return <Navigate to="/admin/dashboard" />;
// //   }

// //   // Redirect based on the user role when navigating to home or dashboard


// //   // If user is authenticated and trying to access any public page, redirect them accordingly
// //   // if (isAuthentication && (location.pathname.includes("/") || location.pathname.includes("/sing-up"))) {
// //   //   if (user?.role === "admin") {
// //   //     return <Navigate to="/admin/dashboard" />;
// //   //   } else {
// //   //     return <Navigate to="/user/dashboard" />;
// //   //   }
// //   // }

// //   // Default: return the children (protected routes)
// //   return <>{children}</>;
// // }

// // export default CheckAuth;


// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthentication, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthentication);

//   if (location.pathname === "/") {
//     if (!isAuthentication) {
//       return <Navigate to="/login" />;
//     } else {
//       if (user?.role === "admin") {
//         return <Navigate to="/admin/dashboard" />;
//       } else {
//         return <Navigate to="/shop/home" />;
//       }
//     }
//   }

//   if (
//     !isAuthentication &&
//     !(
//       location.pathname.includes("/login") ||
//       location.pathname.includes("/register")
//     )
//   ) {
//     return <Navigate to="/auth/login" />;
//   }

//   if (
//     isAuthentication &&
//     (location.pathname.includes("/login") ||
//       location.pathname.includes("/register"))
//   ) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   if (
//     isAuthentication &&
//     user?.role !== "admin" &&
//     location.pathname.includes("admin")
//   ) {
//     return <Navigate to="/unauth-page" />;
//   }

//   if (
//     isAuthentication &&
//     user?.role === "admin" &&
//     location.pathname.includes("shop")
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;


// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthentication, user, children }) {
//   const location = useLocation();

//   // Redirect to login if the user is not authenticated and trying to access a protected route
//   if (!isAuthentication && !location.pathname.includes("/login") && !location.pathname.includes("/sign-up")) {
//     return <Navigate to="/login" />;
//   }

//   // If the user is authenticated and trying to access the login or sign-up page, redirect them to the appropriate page
//   if (isAuthentication && (location.pathname.includes("/login") || location.pathname.includes("/sign-up"))) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   // If the user is not authenticated and trying to access the checkout page, redirect them to login
//   if (location.pathname.includes("/checkout") && !isAuthentication) {
//     return <Navigate to="/login" />;
//   }

//   // If the user is authenticated but not an admin and trying to access admin pages
//   if (isAuthentication && user?.role !== "admin" && location.pathname.includes("/admin")) {
//     return <Navigate to="/shop/home" />;
//   }

//   // If the user is authenticated as admin and trying to access the shop pages, redirect to admin dashboard
//   if (isAuthentication && user?.role === "admin" && location.pathname.includes("/shop")) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   // Default return (allows access to children if no conditions match)
//   return <>{children}</>;
// }

// export default CheckAuth;


import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthentication, user, children }) {
  const location = useLocation();
  console.log(user?.role)
  

  // If the user is already authenticated and trying to access login or sign-up page, redirect to home or dashboard based on role
  if (isAuthentication && (location.pathname.includes("/login") || location.pathname.includes("/sign-up"))) {
    // debugger
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  // If the user is not authenticated and trying to access a protected route (not login/signup), redirect to login
  if (!isAuthentication && !location.pathname.includes("/login") && !location.pathname.includes("/sign-up")) {
    return <Navigate to="/login" />;
  }



  // If the user is not authenticated and trying to access the checkout page, redirect to login
  // if (location.pathname.includes("/checkout") && !isAuthentication) {
  //   return <Navigate to="/login" />;
  // }

  // If the user is authenticated but not an admin and trying to access admin pages, redirect to home
  if (isAuthentication && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to="/" />;
  }

  // If the user is authenticated as admin and trying to access shop pages, redirect to admin dashboard
  if (isAuthentication && user?.role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }
  // if(location.pathname.includes("/checkout") )
  // {
  //  return <Navigate to="/checkout"/>
  // }

  // Default return (allows access to children if no conditions match)
  return <>{children}</>;
}

export default CheckAuth;
