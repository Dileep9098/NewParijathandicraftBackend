// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllUser } from '../../../Store/features/Admin/userSlice';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { showErrorMsg } from '../../../utils/ShowMessage';
// import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart


// export default function Dashboard() {
//   const dispatch=useDispatch()
//   const[allOrders,setAllOrders]=useState()
//   const[allProduct,setAllProducts]=useState()
//   const[totalAmount,setTotalAmount]=useState()
 
//   const { users } = useSelector((state) => state.adminUser);
//   useEffect(() => {
//             dispatch(getAllUser());
    
//     const fetchData = async () => {
//         try {
//             const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_ORDERS"], { withCredentials: true });
//             const totalProduct = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });
            
//             console.log('API Response:', response);

//             if (response.data.success) {
//                 setAllOrders(response.data.orders);
//                 setTotalAmount(response.data.totalAmount)
//                 console.log("Updated orders state:", response.data.orders);
//             }
//             if (totalProduct.data.success) {
//               setAllProducts(totalProduct.data.allProductsFeatures);
//                 console.log("Updated allProductsFeatures state:", totalProduct.data.allProductsFeatures);
//             }
//              else {
//                 showErrorMsg(response.data.message);
//             }
//         } catch (error) {
//             console.log('Error:', error);
//             showErrorMsg(error.response?.data?.message || 'An error occurred');
//         }
//     };

//     fetchData();
// }, []);


// const monthlyRevenueData = {
//   series: [
//     {
//       name: 'Revenue',
//       data: [10, 15, 12, 22, 19, 30, 40, 60, 55, 70, 100, 120]
//     }
//   ],
//   options: {
//     chart: {
//       type: 'line',
//       height: '300px',
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     },
//     title: {
//       text: 'Monthly Revenue',
//       align: 'center',
//     }
//   }
// };

// const salesData = {
//   series: [300, 135, 48, 154],
//   options: {
//     chart: {
//       type: 'pie',
//       height: '350px',
//     },
//     labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
//     title: {
//       text: 'Total Sales',
//       align: 'center',
//     }
//   }
// };

//   return (
//     <>

//             <div className="container-fluid">

//               <div className="row">
//                 <div className="col-12">
//                   <div className="page-title-box">
//                     <div className="page-title-right">
//                       <form className="d-flex">
//                         <div className="input-group">
//                           <input type="text" className="form-control form-control-light" id="dash-daterange"/>
//                             <span className="input-group-text bg-primary border-primary text-white">
//                               <i className="mdi mdi-calendar-range font-13"></i>
//                             </span>
//                         </div>
//                         <Link to="#" className="btn btn-primary ms-2">
//                           <i className="mdi mdi-autorenew"></i>
//                         </Link>
//                         <Link to="#" className="btn btn-primary ms-1">
//                           <i className="mdi mdi-filter-variant"></i>
//                         </Link>
//                       </form>
//                     </div>
//                     <h4 className="page-title"> <i className="ri-align-left me-2"></i>Dashboard</h4>
//                   </div>
//                 </div>
//               </div>

              // <div className="row">
              //   <div className="col-xl-5 col-lg-6">

              //     <div className="row">
              //       <div className="col-sm-6">
              //         <div className="card widget-flat">
              //           <div className="card-body">
              //             <div className="float-end">
              //               <i className="mdi mdi-account-multiple widget-icon"></i>
              //             </div>
              //             <h5 className=" mt-0" style={{fontSize:"20px",fontWeight:"600",color:"rgb(0, 8, 62)"}} title="Number of Customers">Total USer</h5>
              //             <h3 className="mt-3 mb-3">{users?users.length:0}</h3>
              //             {/* <p className="mb-0 text-muted">
              //               <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 5.27%</span>
              //               <span className="text-nowrap">Since last month</span>
              //             </p> */}
              //           </div> 
              //         </div> 
              //       </div> 

              //       <div className="col-sm-6">
              //         <div className="card widget-flat">
              //           <div className="card-body">
              //             <div className="float-end">
              //               <i className="mdi mdi-cart-plus widget-icon"></i>
              //             </div>
              //             <h5 className=" mt-0" style={{fontSize:"20px",fontWeight:"600",color:"rgb(0, 8, 62)"}} title="Number of Orders">Total Orders</h5>
              //             <h3 className="mt-3 mb-3">{allOrders?allOrders.length:0}</h3>
              //             {/* <p className="mb-0 text-muted">
              //               <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold"></i> 1.08%</span>
              //               <span className="text-nowrap">Since last month</span>
              //             </p> */}
              //           </div>
              //         </div> 
              //       </div> 
              //     </div> 

              //     <div className="row">
              //       <div className="col-sm-6">
              //         <div className="card widget-flat">
              //           <div className="card-body">
              //             <div className="float-end">
              //               <i className="mdi mdi-currency-usd widget-icon"></i>
              //             </div>
              //             <h5 className="mt-0" style={{fontSize:"20px",fontWeight:"600",color:"rgb(0, 8, 62)"}} title="Average Revenue">Total Income</h5>
              //             <h3 className="mt-3 mb-3" >&#8377; {totalAmount}</h3>
              //             {/* <p className="mb-0 text-muted">
              //               <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold"></i> 7.00%</span>
              //               <span className="text-nowrap">Since last month</span>
              //             </p> */}
              //           </div>
              //         </div> 
              //       </div> 

              //       <div className="col-sm-6">
              //         <div className="card widget-flat">
              //           <div className="card-body">
              //             <div className="float-end">
              //               {/* <i className="mdi mdi-pulse widget-icon"></i> */}
              //               <i className="ri-list-unordered widget-icon"></i>
              //             </div>
              //             <h5 className=" mt-0" style={{fontSize:"20px",fontWeight:"600",color:"rgb(0, 8, 62)"}} title="Growth">Total Products</h5>
              //             <h3 className="mt-3 mb-3">{allProduct?allProduct.length:0}</h3>
              //             {/* <p className="mb-0 text-muted">
              //               <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 4.87%</span>
              //               <span className="text-nowrap">Since last month</span>
              //             </p> */}
              //           </div>
              //         </div> 
              //       </div> 
              //     </div>
              //   </div> 

              //   <div className="col-xl-7 col-lg-6">
              //     <div className="card card-h-100">
              //       <div className="d-flex card-header justify-content-between align-items-center">
              //         <h4 className="header-title">Monthly Revenue</h4>
              //         <div className="dropdown">
              //           <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              //             <i className="mdi mdi-dots-vertical"></i>
              //           </Link>
              //           <div className="dropdown-menu dropdown-menu-end">
                        
              //             <Link to="#" className="dropdown-item">Sales Report</Link>
                        
              //             <Link to="#" className="dropdown-item">Export Report</Link>
                        
              //             <Link to="#" className="dropdown-item">Profit</Link>
                        
              //             <Link to="#" className="dropdown-item">Action</Link>
              //           </div>
              //         </div>
              //       </div>
              //       <div className="card-body pt-0">
              //         <div dir="ltr">
              //         <ReactApexChart
              //     options={monthlyRevenueData.options}
              //     series={monthlyRevenueData.series}
              //     type="line"
              //     height="300px"
              //   />                      </div>

              //       </div>
              //     </div> 

              //   </div> 
              // </div>
             
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="card">
//                     <div className="d-flex card-header justify-content-between align-items-center">
//                       <h4 className="header-title">Revenue By Location</h4>
//                       <div className="dropdown">
//                         <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
//                           <i className="mdi mdi-dots-vertical"></i>
//                         </Link>
//                         <div className="dropdown-menu dropdown-menu-end">
                        
//                           <Link to="#" className="dropdown-item">Sales Report</Link>
                        
//                           <Link to="#" className="dropdown-item">Export Report</Link>
                          
//                           <Link to="#" className="dropdown-item">Profit</Link>
                          
//                           <Link to="#" className="dropdown-item">Action</Link>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="card-body pt-0">
//                       <div className="mb-4 mt-3">
//                         <div id="world-map-markers" style={{height: "217px"}}></div>
//                       </div>
//                       <h5 className="mb-1 mt-0 fw-normal">New York</h5>
//                       <div className="progress-w-percent">
//                         <span className="progress-value fw-bold">72k </span>
//                         <div className="progress progress-sm">
//                           <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                       </div>
//                       <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
//                       <div className="progress-w-percent">
//                         <span className="progress-value fw-bold">39k </span>
//                         <div className="progress progress-sm">
//                           <div className="progress-bar" role="progressbar" style={{width: "39%"}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                       </div>
//                       <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
//                       <div className="progress-w-percent">
//                         <span className="progress-value fw-bold">25k </span>
//                         <div className="progress progress-sm">
//                           <div className="progress-bar" role="progressbar" style={{width: "39%"}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                       </div>

//                       <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
//                       <div className="progress-w-percent mb-0">
//                         <span className="progress-value fw-bold">61k </span>
//                         <div className="progress progress-sm">
//                           <div className="progress-bar" role="progressbar" style={{width: "61%"}} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div> 
//                 </div> 
//               </div>
             
              // <div className="row">
              //   <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
              //     <div className="card">
              //       <div className="d-flex card-header justify-content-between align-items-center">
              //         <h4 className="header-title">Top Selling Products</h4>
              //         <Link to="#" className="btn btn-sm btn-light">Export <i className="mdi mdi-download ms-1"></i></Link>
              //       </div>

              //       <div className="card-body pt-0">
              //         <div className="table-responsive">
              //           <table className="table table-centered table-nowrap table-hover mb-0">
              //             <tbody>
                           
                         
              //               <tr>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">Lightweight Jacket</h5>
              //                   <span className="text-muted font-13">12 March 2018</span>
              //                 </td>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">$20.00</h5>
              //                   <span className="text-muted font-13">Price</span>
              //                 </td>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">184</h5>
              //                   <span className="text-muted font-13">Quantity</span>
              //                 </td>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
              //                   <span className="text-muted font-13">Amount</span>
              //                 </td>
              //               </tr>
              //               <tr>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
              //                   <span className="text-muted font-13">05 March 2018</span>
              //                 </td>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">$28.49</h5>
              //                   <span className="text-muted font-13">Price</span>
              //                 </td>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">69</h5>
              //                   <span className="text-muted font-13">Quantity</span>
              //                 </td>
              //                 <td>
              //                   <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
              //                   <span className="text-muted font-13">Amount</span>
              //                 </td>
              //               </tr>

              //             </tbody>
              //           </table>
              //         </div> 
              //       </div>
              //     </div> 
              //   </div> 

              //   <div className="col-xl-3 col-lg-6 order-lg-1">
              //     <div className="card">
              //       <div className="d-flex card-header justify-content-between align-items-center">
              //         <h4 className="header-title">Total Sales</h4>
              //         <div className="dropdown">
              //           <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              //             <i className="mdi mdi-dots-vertical"></i>
              //           </Link>
              //           <div className="dropdown-menu dropdown-menu-end">
                          
              //             <Link to="#" className="dropdown-item">Sales Report</Link>
                          
              //             <Link to="#" className="dropdown-item">Export Report</Link>
                          
              //             <Link to="#" className="dropdown-item">Profit</Link>
                          
              //             <Link to="#" className="dropdown-item">Action</Link>
              //           </div>
              //         </div>
              //       </div>

              //       <div className="card-body pt-0">
              //         <div id="average-sales" className="apex-charts mb-4 mt-2" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"></div>


              //         <div className="chart-widget-list">
              //           <p>
              //             <i className="mdi mdi-square text-primary"></i> Direct
              //             <span className="float-end">$300.56</span>
              //           </p>
              //           <p>
              //             <i className="mdi mdi-square text-danger"></i> Affilliate
              //             <span className="float-end">$135.18</span>
              //           </p>
              //           <p>
              //             <i className="mdi mdi-square text-success"></i> Sponsored
              //             <span className="float-end">$48.96</span>
              //           </p>
              //           <p className="mb-0">
              //             <i className="mdi mdi-square text-warning"></i> E-mail
              //             <span className="float-end">$154.02</span>
              //           </p>
              //         </div>
              //       </div>
              //     </div> 
              //   </div> 

              // </div>
             

//             </div>
            
//     </>
//   )
// }





import React, { useEffect, useRef, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar } from 'recharts';

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUser } from '../../../Store/features/Admin/userSlice';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import { PieChart, Pie, Cell, Tooltip as PieTooltip } from 'recharts';  // Import PieChart components

import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import svgCrowbar from "svg-crowbar";
import html2canvas from 'html2canvas';
import * as XLSX from "xlsx"
import SitePagination from "../../View/Products/SitePagination";


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// Sample Data
const salesData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 700 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 1100 },
];

const countrySales = [
  { country: "USA", sales: 1200 },
  { country: "India", sales: 900 },
  { country: "Germany", sales: 700 },
  { country: "China", sales: 1300 },
];

const Dashboard = () => {

  const dispatch = useDispatch()
  const [allOrders, setAllOrders] = useState()
  const [allProduct, setAllProducts] = useState()
  const [totalAmount, setTotalAmount] = useState()
  const [totalProduct, setTotalProduct] = useState()
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [monthlyUser, setMonthlyUser] = useState([]);
  const [countryData, setCountryData] = useState([]);

  const [topSellingProducts, setTopSellingProducts] = useState([]);

 const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

  const { users ,userCount} = useSelector((state) => state.adminUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Run both requests in parallel to reduce wait time
        const [response, totalProduct] = await Promise.all([
          axiosInstance.get(Config.END_POINT_LIST["GET_ALL_ORDERS"], { withCredentials: true }),
          axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true })
        ]);
  
        console.log('API Response:', response);
  
        // Handle orders data
        if (response.data.success) {
          setAllOrders(response.data.orders);
          setTotalAmount(response.data.totalAmount);
          // console.log("Updated orders state:", response.data.orders);
        } else {
          showErrorMsg(response.data.message);
        }
  
        // Handle products data
        if (totalProduct.data.success) {
          setAllProducts(totalProduct.data.allProductsFeatures);
          setTotalProduct(totalProduct.data.productCount);
          // console.log("Updated allProductsFeatures state:", totalProduct.data.allProductsFeatures);
        } else {
          showErrorMsg(totalProduct.data.message);
        }
        
      } catch (error) {
        console.log('Error:', error);
        showErrorMsg(error.response?.data?.message || 'An error occurred');
      }
    };
  
    // Fetch user data
    dispatch(getAllUser());
  
    // Call the fetchData function
    fetchData();
    
  }, [dispatch]); // Add dispatch to dependencies if you want to run it only when dispatch changes
  
  

  const data = [
    { month: 'Jan', revenue: 5000 },
    { month: 'Feb', revenue: 6000 },
    { month: 'Mar', revenue: 7000 },
    { month: 'Apr', revenue: 8000 },
    { month: 'May', revenue: 7500 },
    { month: 'Jun', revenue: 8500 },
    { month: 'Jul', revenue: 9000 },
    { month: 'Aug', revenue: 9500 },
    { month: 'Sep', revenue: 9200 },
    { month: 'Oct', revenue: 8800 },
    { month: 'Nov', revenue: 9700 },
    { month: 'Dec', revenue: 9900 },
];

  // const salesData = [
  //   { name: 'USA', sales: 5000 },
  //   { name: 'Germany', sales: 3000 },
  //   { name: 'UK', sales: 4000 },
  //   { name: 'India', sales: 6000 },
  //   { name: 'Australia', sales: 3500 },
  // ];

  // // Calculate total sales for percentage calculation
  // const totalSales = salesData.reduce((acc, item) => acc + item.sales, 0);




// useEffect(() => {
//   if (allOrders) {
//     const revenueData = {};

//     allOrders.forEach(order => {
//       const orderDate = new Date(order.createdAt);
//       const month = orderDate.toLocaleString('default', { month: 'short' });

//       if (!revenueData[month]) {
//         revenueData[month] = 0;
//       }
//       revenueData[month] += Number(order.totalOrderPrice);
//     });

//     // Convert object to array
//     const formattedData = Object.keys(revenueData).map(month => ({
//       month,
//       revenue: revenueData[month],
//     }));

//     setMonthlyRevenue(formattedData);
//   }
// }, [allOrders]);



useEffect(() => {
  if (allOrders) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const revenueData = {};
    const userData = {};
    // Initialize all months with 0 revenue and user count
    months.forEach(month => {
      revenueData[month] = 0;
      userData[month] = 0;
    });

    // Calculate revenue from orders
    allOrders.forEach(order => {
      const orderDate = new Date(order.createdAt);
      const month = orderDate.toLocaleString('default', { month: 'short' });

      revenueData[month] += Number(order.totalOrderPrice);
    });

    // Calculate user registration count by month
    users.forEach(user => {
      const userDate = new Date(user.createdAt);
      const month = userDate.toLocaleString('default', { month: 'short' });

      userData[month] += 1;  // Increment the user count for the respective month
    });

    // Format the revenue data for chart
    const formattedRevenueData = months.map(month => ({
      month,
      revenue: revenueData[month],
    }));

    // Format the user data for chart
    const formattedUserData = months.map(month => ({
      month,
      userCount: userData[month], // Display user count
    }));

    // Set the state with formatted data
    setMonthlyRevenue(formattedRevenueData);
    setMonthlyUser(formattedUserData);
  }
}, [allOrders, users]);



const chartRef = useRef(null); // Create a ref to access the chart container

const downloadPDF = () => {
  const chartElement = chartRef.current;
  // console.log(chartElement); // Check if the chart element is found

  if (chartElement) {
    // Use html2canvas to capture the chart element
    html2canvas(chartElement, { scale: 2, useCORS: true }).then((canvas) => {
      // console.log(canvas); // Log the canvas to see if it's being captured
      const imgData = canvas.toDataURL('image/png');

      // Create a new jsPDF instance and add the image
      const doc = new jsPDF();
      doc.text("Monthly Revenue Chart", 10, 10);

      // Add the image to the PDF with correct scaling
      doc.addImage(imgData, 'PNG', 10, 20, 180, 150); // Adjust the dimensions as needed

      // Save the PDF
      doc.save("monthly_revenue.pdf");
    }).catch((err) => {
      console.error("Error capturing chart with html2canvas:", err);
    });
  } else {
    console.error("Chart element not found!");
  }
};

const downloadCSV = () => {
  const csvContent = [
    ['Month', 'Revenue'],
    ...monthlyRevenue.map(item => [item.month, item.revenue]),
  ].map(row => row.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'monthly_revenue.csv');
};

const downloadSVG = () => {
  const svgElement = document.querySelector('svg');
  const svgBlob = new Blob([svgElement.outerHTML], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'monthly_revenue.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


useEffect(() => {
  if (users && users.length > 0) {
    const countryCount = {};

    users.forEach(user => {
      const country = user.CountryName;
      if (country) {
        countryCount[country] = (countryCount[country] || 0) + 1;
      }
    });

    const formattedData = Object.keys(countryCount).map(country => ({
      name: country,
      userCount: countryCount[country],
    }));

    setCountryData(formattedData);
  }
}, [users]);

const totalUsers = countryData.reduce((acc, item) => acc + item.userCount, 0);


// console.log("Kya huaa kuch mila kya ",allOrders)

// console.log("Kya huaa kuch mila kya ",users)


// Assuming the orders array is in the format you provided
// const orders = [
//   // Your order data here...
// ];

// Example where cartJsonData is being parsed and used

useEffect(() => {
  if (allOrders && allProduct.length > 0) {
    // Initialize a Map to count the occurrences of each product
    const productCounts = new Map();

    allOrders.forEach(order => {
      try {
        const cartJsonData = JSON.parse(order.cartJsonData);

        cartJsonData.forEach(item => {
          const productId = item.ProductId;
          // Ensure that we are treating quantities as numbers
          const quantity = Number(item.Quantity);  // Convert quantity to number

          productCounts.set(
            productId,
            (productCounts.get(productId) || 0) + quantity
          );
        });
      } catch (error) {
        console.error('Error parsing cartJsonData:', error);
      }
    });

    // Create sorted product list with purchase counts
    const sortedProducts = allProduct
      .map(product => ({
        ...product,
        purchaseCount: productCounts.get(product._id) || 0, // Ensure it's a number
      }))
      .sort((a, b) => b.purchaseCount - a.purchaseCount);

    setTopSellingProducts(sortedProducts);
  }
}, [allOrders, allProduct]);


const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(topSellingProducts);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "TopSelling Product Details");
        XLSX.writeFile(wb, "TopSelling_Product_details.xlsx");
    };

// console.log("kya te",topSellingProducts)


// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = topSellingProducts.slice(indexOfFirstItem, indexOfLastItem);

// const totalPages = Math.ceil(topSellingProducts.length / itemsPerPage);



const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = topSellingProducts.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(topSellingProducts.length / itemsPerPage);
  return (
    <>
      <div className="container">
       
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="d-flex">
                  <div className="input-group">
                    <input type="text" className="form-control form-control-light" id="dash-daterange" />
                    <span className="input-group-text bg-primary border-primary text-white">
                      <i className="mdi mdi-calendar-range font-13"></i>
                    </span>
                  </div>
                  <Link to="#" className="btn btn-primary ms-2">
                    <i className="mdi mdi-autorenew"></i>
                  </Link>
                  <Link to="#" className="btn btn-primary ms-1">
                    <i className="mdi mdi-filter-variant"></i>
                  </Link>
                </form>
              </div>
              <h4 className="page-title"> <i className="ri-align-left me-2"></i>Dashboard</h4>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-6">

            <div className="row">
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-account-multiple widget-icon"></i>
                    </div>
                    <h5 className=" mt-0" style={{ fontSize: "20px", fontWeight: "600", color: "rgb(0, 8, 62)" }} title="Number of Customers">Total USer</h5>
                    <h3 className="mt-3 mb-3">{users ? users.length : 0}</h3>
                    {/* <p className="mb-0 text-muted">
                            <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 5.27%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p> */}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-cart-plus widget-icon"></i>
                    </div>
                    <h5 className=" mt-0" style={{ fontSize: "20px", fontWeight: "600", color: "rgb(0, 8, 62)" }} title="Number of Orders">Total Orders</h5>
                    <h3 className="mt-3 mb-3">{allOrders ? allOrders.length : 0}</h3>
                    {/* <p className="mb-0 text-muted">
                            <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold"></i> 1.08%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-currency-inr widget-icon"></i>
                    </div>
                    <h5 className="mt-0" style={{ fontSize: "20px", fontWeight: "600", color: "rgb(0, 8, 62)" }} title="Average Revenue">Total Income</h5>
                    <h3 className="mt-3 mb-3" >&#8377;{totalAmount}</h3>
                    {/* <p className="mb-0 text-muted">
                            <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold"></i> 7.00%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p> */}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      {/* <i className="mdi mdi-pulse widget-icon"></i> */}
                      <i className="ri-list-unordered widget-icon"></i>
                    </div>
                    <h5 className=" mt-0" style={{ fontSize: "20px", fontWeight: "600", color: "rgb(0, 8, 62)" }} title="Growth">Total Products</h5>
                    <h3 className="mt-3 mb-3">{totalProduct ? totalProduct: 0}</h3>
                    {/* <p className="mb-0 text-muted">
                            <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 4.87%</span>
                            <span className="text-nowrap">Since last month</span>
                          </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
      <div className="card card-h-100">
        <div className="d-flex card-header justify-content-between align-items-center">
          <h4 className="header-title">Monthly Revenue</h4>
          <div className="dropdown">
            <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link to="#" className="dropdown-item" onClick={downloadPDF}>Download PDF</Link>
              <Link to="#" className="dropdown-item" onClick={downloadCSV}>Download CSV</Link>
              <Link to="#" className="dropdown-item" onClick={downloadSVG}>Download SVG</Link>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div dir="ltr" ref={chartRef}> {/* Add the ref here */}
            <ResponsiveContainer height={300}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#4bc0c0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Line Chart */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Monthly User Registered</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyUser}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="userCount" stroke="#8884d8" strokeWidth={2} /> {/* Change dataKey to userCount */}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Map Chart */}


        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">



          {/* Revenue Distribution Pie Chart */}
          <div className="card-body pt-0">
            <div dir="ltr">
              {/* Pie Chart for Sales by Country */}
              <div className="mt-4">
                <h4 className="header-title">Customers Location </h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={countryData}
                      dataKey="userCount"
                      nameKey="name"
                      outerRadius="80%"
                      fill="#8884d8"
                      label={({ name, value }) => `${name}: ${(value / totalUsers * 100).toFixed(2)}%`} // Show percentage
                    >
                      {countryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4bc0c0' : '#ff7300'} />
                      ))}
                    </Pie>
                    <PieTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 order-lg-2 order-xl-1">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center">
                <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
                <Link to="#" className="btn btn-sm btn-light" onClick={handleExport}>Export <i className="mdi mdi-download ms-1"></i></Link>
              </div>
              <div className="card-body pt-0">
      <div className="table-responsive">
        <table className="table table-centered table-nowrap table-hover mb-0">
          <thead>
            <tr
              style={{
                backgroundImage:
                  'linear-gradient(to right,rgb(228, 228, 228) 0%,rgb(233, 234, 234) 100%)',
                color: 'white',
                fontWeight: '700',
                fontSize: '16px',
              }}
              className="text-white"
            >
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">No products available for the current page.</td>
              </tr>
            ) : (
              currentItems.map((product) =>
                product.purchaseCount > 0 ? (
                  <tr key={product._id}>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">{product.ProductName.slice(0, 40)}...</h5>
                      <span className="text-muted font-13">Product</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">&#8377; {product.Price}</h5>
                      <span className="text-muted font-13">Price</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">{product.purchaseCount}</h5>
                      <span className="text-muted font-13">Quantity</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">
                        &#8377; {(product.purchaseCount * product.Price).toFixed(2)}
                      </h5>
                      <span className="text-muted font-13">Amount</span>
                    </td>
                  </tr>
                ) : null
              )
            )}
          </tbody>
        </table>

        {/* Pagination Component */}
        <SitePagination
          PageNo={currentPage}
          setCurrentPage={setCurrentPage}
          PageSize={itemsPerPage}
          TotalRecords={topSellingProducts.length}
        />
      </div>
    </div>

            </div>
          </div>
        </div>

      </div>
    </>

  );
};

export default Dashboard;





// // Assuming the orders array is in the format you provided
// const orders = [
//   // Your order data here...
// ];

// // Create a map to store product quantities
// const productQuantities = {};

// // Loop through all orders
// orders.forEach(order => {
//   // Get the cartJsonData (which contains product information)
//   const cartJsonData = JSON.parse(order.cartJsonData[0]);

//   cartJsonData.forEach(item => {
//     const productId = item.ProductId;
//     const quantity = parseInt(item.Quantity);

//     // Update the product quantity in the map
//     if (productQuantities[productId]) {
//       productQuantities[productId] += quantity;
//     } else {
//       productQuantities[productId] = quantity;
//     }
//   });
// });

// // Now, find the product with the maximum quantity
// let maxQuantity = 0;
// let topSellingProduct = null;

// for (let productId in productQuantities) {
//   if (productQuantities[productId] > maxQuantity) {
//     maxQuantity = productQuantities[productId];
//     topSellingProduct = productId;
//   }
// }

// console.log("Top selling product ID:", topSellingProduct);
// console.log("Total quantity sold:", maxQuantity);




// import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart




// import React, { useEffect, useState } from 'react';

// export default function Dashboard() {

//   const [sidebarSize, setSidebarSize] = useState('condensed');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Handle window resize to change sidebar size
//   const handleResize = () => {
//     if (window.innerWidth <= 768) { // Mobile or smaller screens
//       setSidebarSize('full');
//     } else { // Larger screens
//       setSidebarSize('condensed');
//     }
//   };

//   useEffect(() => {
//     // Run once to set the initial sidebar size
//     handleResize();
//     // Attach the resize listener
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     htmlElement.setAttribute('data-bs-theme', 'light');
//     htmlElement.setAttribute('data-layout-mode', 'fluid');
//     htmlElement.setAttribute('data-menu-color', 'dark');
//     htmlElement.setAttribute('data-topbar-color', 'light');
//     htmlElement.setAttribute('data-layout-position', 'fixed');
//     htmlElement.setAttribute('data-sidenav-size', sidebarSize);  // Use sidebarSize dynamically
//     // htmlElement.classList.add('sidebar-enable');
//     htmlElement.classList.add('menuitem-active');

//     // Adjust the class and attributes based on the sidebar size and open state
//     if (isSidebarOpen) {
//       // Use sidebarSize dynamically
//       htmlElement.classList.add('sidebar-enable');
//     } else {
     
//       htmlElement.classList.remove('sidebar-enable');
//     }
   
//   }, [isSidebarOpen, sidebarSize]); 

//   // Toggle sidebar visibility
//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };


//   return (
//     <>
//       <div className="wrapper">
//         {/* <!-- ========== Topbar Start ========== --> */}
//         <div className="navbar-custom">
//           <div className="topbar container-fluid">
//             <div className="d-flex align-items-center gap-lg-2 gap-1">

//               <div className="logo-topbar">
//                 <Link to="index.html" className="logo-light">
//                   <span className="logo-lg">
//                     <img src="assets1/images/logo.png" alt="logo" />
//                   </span>
//                   <span className="logo-sm">
//                     <img src="assets1/images/logo-sm.png" alt="small logo" />
//                   </span>
//                 </Link>

//                 {/* Logo Dark */}
//                 <Link to="index.html" className="logo-dark">
//                   <span className="logo-lg">
//                     <img src="assets1/images/logo-dark.png" alt="dark logo" />
//                   </span>
//                   <span className="logo-sm">
//                     <img src="assets1/images/logo-dark-sm.png" alt="small logo" />
//                   </span>
//                 </Link>
//               </div>

//               <button className="button-toggle-menu" onClick={handleSidebarToggle}>
//                 <i className="mdi mdi-menu"></i>
//               </button>

//               <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
//                 <div className="lines">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </button>

//               <div className="app-search dropdown d-none d-lg-block">
//                 <form>
//                   <div className="input-group">
//                     <input type="search" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
//                     <span className="mdi mdi-magnify search-icon"></span>
//                     <button className="input-group-text btn btn-primary" type="submit">Search</button>
//                   </div>
//                 </form>

//                 <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">

//                   <div className="dropdown-header noti-title">
//                     <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
//                   </div>

//                   <Link to="#" className="dropdown-item notify-item">
//                     <i className="uil-notes font-16 me-1"></i>
//                     <span>Analytics Report</span>
//                   </Link>

//                   <Link to="#" className="dropdown-item notify-item">
//                     <i className="uil-life-ring font-16 me-1"></i>
//                     <span>How can I help you?</span>
//                   </Link>

//                   <Link to="#" className="dropdown-item notify-item">
//                     <i className="uil-cog font-16 me-1"></i>
//                     <span>User profile settings</span>
//                   </Link>

//                   <div className="dropdown-header noti-title">
//                     <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
//                   </div>

//                   <div className="notification-list">
//                     <Link to="#" className="dropdown-item notify-item">
//                       <div className="d-flex">
//                         <img className="d-flex me-2 rounded-circle" src="assets1/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32" />
//                         <div className="w-100">
//                           <h5 className="m-0 font-14">Erwin Brown</h5>
//                           <span className="font-12 mb-0">UI Designer</span>
//                         </div>
//                       </div>
//                     </Link>

//                     <Link to="#" className="dropdown-item notify-item">
//                       <div className="d-flex">
//                         <img className="d-flex me-2 rounded-circle" src="assets1/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
//                         <div className="w-100">
//                           <h5 className="m-0 font-14">Jacob Deo</h5>
//                           <span className="font-12 mb-0">Developer</span>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- ========== Topbar End ========== --> */}

//         {/* <!-- ========== Left Sidebar Start ========== --> */}
//         <div className={`leftside-menu ${sidebarSize === 'full' ? 'full-sidebar' : 'condensed-sidebar'}`}>

//           <Link to="index.html" className="logo logo-light">
//             <span className="logo-lg">
//               <img src="assets1/images/logo.png" alt="logo" />
//             </span>
//             <span className="logo-sm">
//               <img src="assets1/images/logo-sm.png" alt="small logo" />
//             </span>
//           </Link>

//           <Link to="index.html" className="logo logo-dark">
//             <span className="logo-lg">
//               <img src="assets1/images/logo-dark.png" alt="dark logo" />
//             </span>
//             <span className="logo-sm">
//               <img src="assets1/images/logo-dark-sm.png" alt="small logo" />
//             </span>
//           </Link>

//           <div className="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
//             <i className="ri-checkbox-blank-circle-line align-middle"></i>
//           </div>

//           <div className="button-close-fullsidebar">
//             <i className="ri-close-fill align-middle"></i>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// // import React, { useEffect, useState } from 'react';

// // export default function Dashboard() {
// //   // State to manage sidebar size (condensed or full)
// //   const [sidebarSize, setSidebarSize] = useState('condensed');
  
// //   // State to manage sidebar toggle
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   // Function to handle button click
// //   const handleSidebarToggle = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };


// //   // Applying the classes conditionally to the <html> tag based on sidebar toggle and screen size
// //   useEffect(() => {
// //     const htmlElement = document.documentElement;

// //     // Set data-sidenav-size dynamically
// //     htmlElement.setAttribute('data-sidenav-size', sidebarSize);

// //     // Applying other classes when sidebar is open
// //     if (isSidebarOpen) {
// //       htmlElement.setAttribute('data-bs-theme', 'light');
// //       htmlElement.setAttribute('data-layout-mode', 'fluid');
// //       htmlElement.setAttribute('data-menu-color', 'dark');
// //       htmlElement.setAttribute('data-topbar-color', 'light');
// //       htmlElement.setAttribute('data-layout-position', 'fixed');
// //       htmlElement.classList.add('sidebar-enable');
// //       htmlElement.classList.add('menuitem-active');
// //     } else {
// //       htmlElement.removeAttribute('data-bs-theme');
// //       htmlElement.removeAttribute('data-layout-mode');
// //       htmlElement.removeAttribute('data-menu-color');
// //       htmlElement.removeAttribute('data-topbar-color');
// //       htmlElement.removeAttribute('data-layout-position');
// //       htmlElement.removeAttribute('data-sidenav-size');
// //       htmlElement.classList.remove('sidebar-enable');
// //     }
// //   }, [isSidebarOpen, sidebarSize]);

// //   return (
// //     <>
// //       <div className="wrapper">
// //         {/* ========== Topbar Start ========== */}
// //         <div className="navbar-custom">
// //           <div className="topbar container-fluid">
// //             <div className="d-flex align-items-center gap-lg-2 gap-1">

// //               <div className="logo-topbar">
// //                 <Link to="index.html" className="logo-light">
// //                   <span className="logo-lg">
// //                     <img src="assets1/images/logo.png" alt="logo" />
// //                   </span>
// //                   <span className="logo-sm">
// //                     <img src="assets1/images/logo-sm.png" alt="small logo" />
// //                   </span>
// //                 </Link>

// //                 {/* Logo Dark */}
// //                 <Link to="index.html" className="logo-dark">
// //                   <span className="logo-lg">
// //                     <img src="assets1/images/logo-dark.png" alt="dark logo" />
// //                   </span>
// //                   <span className="logo-sm">
// //                     <img src="assets1/images/logo-dark-sm.png" alt="small logo" />
// //                   </span>
// //                 </Link>
// //               </div>

// //               <button className="button-toggle-menu" onClick={handleSidebarToggle}>
// //                 <i className="mdi mdi-menu"></i>
// //               </button>

// //               <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
// //                 <div className="lines">
// //                   <span></span>
// //                   <span></span>
// //                   <span></span>
// //                 </div>
// //               </button>

// //               <div className="app-search dropdown d-none d-lg-block">
// //                 <form>
// //                   <div className="input-group">
// //                     <input type="search" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
// //                     <span className="mdi mdi-magnify search-icon"></span>
// //                     <button className="input-group-text btn btn-primary" type="submit">Search</button>
// //                   </div>
// //                 </form>

// //                 <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">

// //                   <div className="dropdown-header noti-title">
// //                     <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
// //                   </div>

// //                   <Link to="#" className="dropdown-item notify-item">
// //                     <i className="uil-notes font-16 me-1"></i>
// //                     <span>Analytics Report</span>
// //                   </Link>

// //                   <Link to="#" className="dropdown-item notify-item">
// //                     <i className="uil-life-ring font-16 me-1"></i>
// //                     <span>How can I help you?</span>
// //                   </Link>

// //                   <Link to="#" className="dropdown-item notify-item">
// //                     <i className="uil-cog font-16 me-1"></i>
// //                     <span>User profile settings</span>
// //                   </Link>

// //                   <div className="dropdown-header noti-title">
// //                     <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
// //                   </div>

// //                   <div className="notification-list">
// //                     <Link to="#" className="dropdown-item notify-item">
// //                       <div className="d-flex">
// //                         <img className="d-flex me-2 rounded-circle" src="assets1/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32" />
// //                         <div className="w-100">
// //                           <h5 className="m-0 font-14">Erwin Brown</h5>
// //                           <span className="font-12 mb-0">UI Designer</span>
// //                         </div>
// //                       </div>
// //                     </Link>

// //                     <Link to="#" className="dropdown-item notify-item">
// //                       <div className="d-flex">
// //                         <img className="d-flex me-2 rounded-circle" src="assets1/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
// //                         <div className="w-100">
// //                           <h5 className="m-0 font-14">Jacob Deo</h5>
// //                           <span className="font-12 mb-0">Developer</span>
// //                         </div>
// //                       </div>
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* ========== Topbar End ========== */}

// //         {/* ========== Left Sidebar Start ========== */}
// //         <div className="leftside-menu">
// //           <Link to="index.html" className="logo logo-light">
// //             <span className="logo-lg">
// //               <img src="assets1/images/logo.png" alt="logo" />
// //             </span>
// //             <span className="logo-sm">
// //               <img src="assets1/images/logo-sm.png" alt="small logo" />
// //             </span>
// //           </Link>

// //           <Link to="index.html" className="logo logo-dark">
// //             <span className="logo-lg">
// //               <img src="assets1/images/logo-dark.png" alt="dark logo" />
// //             </span>
// //             <span className="logo-sm">
// //               <img src="assets1/images/logo-dark-sm.png" alt="small logo" />
// //             </span>
// //           </Link>

// //           <div className="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
// //             <i className="ri-checkbox-blank-circle-line align-middle"></i>
// //           </div>

// //           <div className="button-close-fullsidebar">
// //             <i className="ri-close-fill align-middle"></i>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
