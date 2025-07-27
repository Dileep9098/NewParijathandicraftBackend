import { Navigate, useLocation } from "react-router-dom";

function CheckoutAuth({ isAuthentication, user, children }) {
  const location = useLocation();
  debugger
  
  console.log(isAuthentication)

  // If the user is already authenticated and trying to access login or sign-up page, redirect to home or dashboard based on role
//   if (isAuthentication && (location.pathname.includes("/login") || location.pathname.includes("/sign-up"))) {
//     // debugger
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/" />;
//     }
//   }

debugger
if (isAuthentication &&(location.pathname.includes("/checkout")))
{
 return <Navigate to="/checkout"/>
}


 
  return <>{children}</>;
}

export default CheckoutAuth;
