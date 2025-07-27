// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function AddProduct() {
//   return (
//     <>
//       <div className="container-fluid">

//         <div className="row">
//           <div className="col-12">
//             <div className="page-title-box">
//               <div className="page-title-right">
//                 <ol className="breadcrumb m-0">
//                   <li className="breadcrumb-item"><Link to="/admin/product" className='text-dark'>Product</Link></li>
//                   <li className="breadcrumb-item active">Create Product</li>
//                 </ol>
//               </div>
//               <h4 className="page-title"><i className="ri-align-left me-2"></i> Create Product</h4>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-body">

//                 <h4 className="header-title mb-3"> Create Product</h4>

//                 <form>
//                   <div id="basicwizard">

//                     <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
//                       <li className="nav-item">
//                         <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-tag-multiple font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">Product Basic Info</span>
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a href="#basictab2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-face-man-profile font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">Prices</span>
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a href="#basictab3" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-truck-fast-outline font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">Shipping</span>
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a href="#basictab4" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-store font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">Inventory</span>
//                         </a>
//                       </li>
//                     </ul>
//                       <li className="nav-item">
//                         <a href="#basictab5" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-image-multiple font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">Pictures</span>
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a href="#basictab6" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-desktop-mac-dashboard font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">SEO</span>
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a href="#basictab7" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
//                           <i className="mdi mdi-monitor font-18 align-middle me-1"></i>
//                           <span className="d-none d-sm-inline">Product Attributes</span>
//                         </a>
//                       </li>

//                     <div className="tab-content b-0 mb-0">
//                       <div className="tab-pane" id="basictab1">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="userName">User name</label>
//                               <div className="col-md-9">
//                                 <input type="text" className="form-control" id="userName" name="userName" value="hyper" />
//                               </div>
//                             </div>
//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="password"> Password</label>
//                               <div className="col-md-9">
//                                 <input type="password" id="password" name="password" className="form-control" value="123456789" />
//                               </div>
//                             </div>

//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="confirm">Re Password</label>
//                               <div className="col-md-9">
//                                 <input type="password" id="confirm" name="confirm" className="form-control" value="123456789" />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <ul className="list-inline wizard mb-0">
//                           <li className="next list-inline-item float-end">
//                             <a href="javascript:void(0);" className="btn btn-info">Add More Info <i className="mdi mdi-arrow-right ms-1"></i></a>
//                           </li>
//                         </ul>
//                       </div>

//                       <div className="tab-pane" id="basictab2">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="name"> First name</label>
//                               <div className="col-md-9">
//                                 <input type="text" id="name" name="name" className="form-control" value="Francis" />
//                               </div>
//                             </div>
//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="surname"> Last name</label>
//                               <div className="col-md-9">
//                                 <input type="text" id="surname" name="surname" className="form-control" value="Brinkman" />
//                               </div>
//                             </div>

//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="email">Email</label>
//                               <div className="col-md-9">
//                                 <input type="email" id="email" name="email" className="form-control" value="cory1979@hotmail.com" />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <ul className="pager wizard mb-0 list-inline">
//                           <li className="previous list-inline-item">
//                             <button type="button" className="btn btn-light"><i className="mdi mdi-arrow-left me-1"></i> Back to Account</button>
//                           </li>
//                           <li className="next list-inline-item float-end">
//                             <button type="button" className="btn btn-info">Add More Info <i className="mdi mdi-arrow-right ms-1"></i></button>
//                           </li>
//                         </ul>
//                       </div>

//                       <div className="tab-pane" id="basictab3">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="text-center">
//                               <h2 className="mt-0"><i className="mdi mdi-check-all"></i></h2>
//                               <h3 className="mt-0">Thank you !</h3>

//                               <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
//                                 mattis dictum aliquet.</p>

//                               <div className="mb-3">
//                                 <div className="form-check d-inline-block">
//                                   <input type="checkbox" className="form-check-input" id="customCheck1" />
//                                   <label className="form-check-label" for="customCheck1">I agree with the Terms and Conditions</label>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <ul className="pager wizard mb-0 list-inline mt-1">
//                           <li className="previous list-inline-item">
//                             <button type="button" className="btn btn-light"><i className="mdi mdi-arrow-left me-1"></i> Back to Profile</button>
//                           </li>
//                           <li className="next list-inline-item float-end">
//                             <button type="button" className="btn btn-info">Submit</button>
//                           </li>
//                         </ul>
//                       </div>
// <div className="tab-pane" id="basictab4">
//   <div className="row">
//     <div className="col-12">
//       <div className="row mb-3">
//         <label className="col-md-3 col-form-label" for="userName">User name</label>
//         <div className="col-md-9">
//           <input type="text" className="form-control" id="userName" name="userName" value="hyper" />
//         </div>
//       </div>
//       <div className="row mb-3">
//         <label className="col-md-3 col-form-label" for="password"> Password</label>
//         <div className="col-md-9">
//           <input type="password" id="password" name="password" className="form-control" value="123456789" />
//         </div>
//       </div>

//       <div className="row mb-3">
//         <label className="col-md-3 col-form-label" for="confirm">Re Password</label>
//         <div className="col-md-9">
//           <input type="password" id="confirm" name="confirm" className="form-control" value="123456789" />
//         </div>
//       </div>
//     </div>
//   </div>

//   <ul className="list-inline wizard mb-0">
//     <li className="next list-inline-item float-end">
//       <a href="javascript:void(0);" className="btn btn-info">Add More Info <i className="mdi mdi-arrow-right ms-1"></i></a>
//     </li>
//   </ul>
// </div>

//                       <div className="tab-pane" id="basictab5">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="name"> First name</label>
//                               <div className="col-md-9">
//                                 <input type="text" id="name" name="name" className="form-control" value="Francis" />
//                               </div>
//                             </div>
//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="surname"> Last name</label>
//                               <div className="col-md-9">
//                                 <input type="text" id="surname" name="surname" className="form-control" value="Brinkman" />
//                               </div>
//                             </div>

//                             <div className="row mb-3">
//                               <label className="col-md-3 col-form-label" for="email">Email</label>
//                               <div className="col-md-9">
//                                 <input type="email" id="email" name="email" className="form-control" value="cory1979@hotmail.com" />
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <ul className="pager wizard mb-0 list-inline">
//                           <li className="previous list-inline-item">
//                             <button type="button" className="btn btn-light"><i className="mdi mdi-arrow-left me-1"></i> Back to Account</button>
//                           </li>
//                           <li className="next list-inline-item float-end">
//                             <button type="button" className="btn btn-info">Add More Info <i className="mdi mdi-arrow-right ms-1"></i></button>
//                           </li>
//                         </ul>
//                       </div>

//                       <div className="tab-pane" id="basictab6">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="text-center">
//                               <h2 className="mt-0"><i className="mdi mdi-check-all"></i></h2>
//                               <h3 className="mt-0">Thank you !</h3>

//                               <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
//                                 mattis dictum aliquet.</p>

//                               <div className="mb-3">
//                                 <div className="form-check d-inline-block">
//                                   <input type="checkbox" className="form-check-input" id="customCheck1" />
//                                   <label className="form-check-label" for="customCheck1">I agree with the Terms and Conditions</label>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <ul className="pager wizard mb-0 list-inline mt-1">
//                           <li className="previous list-inline-item">
//                             <button type="button" className="btn btn-light"><i className="mdi mdi-arrow-left me-1"></i> Back to Profile</button>
//                           </li>
//                           <li className="next list-inline-item float-end">
//                             <button type="button" className="btn btn-info">Submit</button>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="tab-pane" id="basictab7">
//                         <div className="row">
//                           <div className="col-12">
//                             <div className="text-center">
//                               <h2 className="mt-0"><i className="mdi mdi-check-all"></i></h2>
//                               <h3 className="mt-0">Thank you !</h3>

//                               <p className="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
//                                 mattis dictum aliquet.</p>

//                               <div className="mb-3">
//                                 <div className="form-check d-inline-block">
//                                   <input type="checkbox" className="form-check-input" id="customCheck1" />
//                                   <label className="form-check-label" for="customCheck1">I agree with the Terms and Conditions</label>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <ul className="pager wizard mb-0 list-inline mt-1">
//                           <li className="previous list-inline-item">
//                             <button type="button" className="btn btn-light"><i className="mdi mdi-arrow-left me-1"></i> Back to Profile</button>
//                           </li>
//                           <li className="next list-inline-item float-end">
//                             <button type="button" className="btn btn-info">Submit</button>
//                           </li>
//                         </ul>
//                       </div>

//                     </div>
//                   </div>
//                 </form>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Snow theme
import 'react-quill/dist/quill.bubble.css';
import { useDropzone } from "react-dropzone";
import "./product.css";
import { useDispatch } from 'react-redux';
import { set } from 'date-fns';
import Config from '../../../Comman/Config';
import axiosInstance from '../../../../ApiHendler/axiosInstance';
import SelectCategory from './SelectCategory';
import { showSuccessMsg, showErrorMsg } from '../../../../utils/ShowMessage';
import { createProduct } from '../../../../Store/features/product/productSlice';


export default function AddProduct() {

  const [files, setFiles] = useState([]);
  const [previewFiles, setPreviewFiles] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [allMenufactures, setAllMenufactures] = useState([])
  const [allDiscountDetails, setAlldiscountDetails] = useState([])
  const [allProductSize, setAllProductSize] = useState([])
  const [allTaxDetails, setAllTaxDetails] = useState([])


  const [ProductName, setProductName] = useState('')
  const [AttachmentURL, setAttachmentURL] = useState('')
  const [IsDiscountCreatePageSearchEnabled, setIsDiscountCreatePageSearchEnabled] = useState()
  const [Rating, setRating] = useState('')
  const [ShortDescription, setShortDescription] = useState('')
  const [FullDescription, setFullDescription] = useState('')
  const [VendorId, setVendorId] = useState('')
  const [Menufacturs, setMenufacturs] = useState('')
  const [MetaTitle, setMetaTitle] = useState('')
  const [MetaKeywords, setMetaKeywords] = useState('')
  const [MetaDescription, setMetaDescription] = useState('')
  const [OldPrice, setOldPrice] = useState('')
  const [Price, setPrice] = useState(0)
  const [IsTaxExempt, setIsTaxExempt] = useState(false)
  const [IsShippingFree, setIsShippingFree] = useState(true)
  const [ShippingCharge, setShippingCharge] = useState('')
  const [EstimatedShippingDays, setEstimatedShippingDays] = useState('')
  const [ShowOnHomePage, setShowOnHomePage] = useState('')
  const [AllowCustomerReviews, setAllowCustomerReviews] = useState('')
  const [IsReturnAble, setIsReturnAble] = useState(true)
  const [IsDigitalProduct, setIsDigitalProduct] = useState(false)
  const [IsDiscountAllowed, setIsDiscountAllowed] = useState(false)
  const [Sku, setSku] = useState('')
  const [WarehouseId, setWarehouseId] = useState('')
  const [InventoryMethodId, setInventoryMethodId] = useState('')
  const [StockQuantity, setStockQuantity] = useState('')
  const [IsBoundToStockQuantity, setIsBoundToStockQuantity] = useState(false)
  const [DisplayStockQuantity, setDisplayStockQuantity] = useState(false)
  const [OrderMinimumQuantity, setOrderMinimumQuantity] = useState('')
  const [OrderMaximumQuantity, setOrderMaximumQuantity] = useState('')
  const [MarkAsNew, setMarkAsNew] = useState(false)
  const [DisplaySeqNo, setDisplaySeqNo] = useState('')
  const [IsActive, setIsActive] = useState(true)
  const [DiscountProductsMappings, setDiscountProductsMappings] = useState('')
  const [ProductDigitalFileMappings, setProductDigitalFileMappings] = useState()
  const [ProductPictures, setProductPictures] = useState([])
  const [ProductReviews, setProductReviews] = useState('')
  const [ProductsCategoriesMappings, setProductsCategoriesMappings] = useState('')
  const [ProductShippingMethodsMappings, setProductShippingMethodsMappings] = useState('')
  const [ProductsTag, setProductsTag] = useState()
  const [AvailableStartDate, setAvailableStartDate] = useState('')
  const [AvailableEndDate, setAvailableEndDate] = useState('')
  const [ProductSize, setProductSize] = useState('')
  const [Tax, setTax] = useState('')
  const [ProductColor, setProductColor] = useState('')
  const [ProductWeight, setProductWeight] = useState('')

  const [CustomProductSize, setCustomProductSize] = useState('');
  const [showCustomSizeInput, setShowCustomSizeInput] = useState(false);

  // Handle file selection and preview
  const onDrop = (acceptedFiles) => {
    const filePreviews = acceptedFiles.map((file) => ({
      file: file,
      previewUrl: URL.createObjectURL(file),
    }));
    setProductPictures(acceptedFiles);
    setPreviewFiles(filePreviews);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  // Get All Product Category
  useEffect(() => {
    const fatchData = async () => {
      try {
        const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_MENUFACTURES"], { withCredentials: true })
        const discountDetails = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_DISCOUNT_DETAILS"], { withCredentials: true })
        const productSize = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCT_SIZE"], { withCredentials: true })
        const taxDetail = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_TAX_DETAILS"], { withCredentials: true })

        if (response.data.success) {
          setAllMenufactures(response.data.menufactures)
        }
        else {
          showErrorMsg(response.data.message)
        }
        if (discountDetails.data.success) {
          setAlldiscountDetails(discountDetails.data.discountDetails)
        }
        else {
          showErrorMsg(discountDetails.data.message)
        }
        if (productSize.data.success) {
          setAllProductSize(productSize.data.ProdcutSizes)
        }
        if (taxDetail.data.success) {
          setAllTaxDetails(taxDetail.data.taxDetails)
        }
      } catch (error) {
        showErrorMsg(error.response.data.message);

      }
    }

    fatchData();
  }, [dispatch])


  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions)
    setProductsCategoriesMappings(selectedOptions)
  }



  /// Discount Allowed 

  const discountAllowCheck = () => {
    setIsDiscountAllowed((prevState) => !prevState); // Toggle the state
  };

  // Free Shipping Allowed 
  const freeShippingAllowCheck = () => {
    setIsShippingFree((prevState) => !prevState); // Toggle the state
  };



  console.log("Discount kya hai bhai DiscountProductsMappings", DiscountProductsMappings);
  console.log("Discount kya hai bhai allDiscountDetails", allDiscountDetails);

  // const discount = allDiscountDetails.find(discount => discount._id === DiscountProductsMappings);

  // console.log("Discount details found:", discount);

  // if (discount) {
  //   const discountAmount = (discount.DiscountValue / 100) * OldPrice;
  //   const finalPrice = OldPrice - discountAmount;

  //   console.log("Bhai mere FinalPrice Kya hai:", finalPrice);

  //   setPrice(finalPrice)
  // } else {
  //   console.log("No matching discount found!");
  // }



  const calculateFinalPrice = () => {
    const discount = allDiscountDetails.find(discount => discount._id === DiscountProductsMappings);

    console.log("Discount details found:", discount);

    if (discount) {

      const discountAmount = (discount.DiscountValue / 100) * OldPrice;
      const finalPrice = OldPrice - discountAmount;

      console.log("Bhai mere FinalPrice Kya hai:", finalPrice);

      setPrice(finalPrice); // Set the final price
    } else {
      console.log("No matching discount found!");
    }
  };

  useEffect(() => {
    calculateFinalPrice();
  }, [allDiscountDetails, DiscountProductsMappings]);






  const handleSubmitProduct = (e) => {
    e.preventDefault();
    // Create a new FormData object
    const myform = new FormData();


    // Append each state variable to the FormData object
    myform.append("ProductName", ProductName);
    myform.append("AttachmentURL", AttachmentURL);
    myform.append("IsDiscountCreatePageSearchEnabled", IsDiscountCreatePageSearchEnabled);
    myform.append("Rating", Rating);
    myform.append("ShortDescription", ShortDescription);
    myform.append("FullDescription", FullDescription);
    myform.append("VendorId", VendorId);
    myform.append("Menufacturs", Menufacturs);
    myform.append("MetaTitle", MetaTitle);
    myform.append("MetaKeywords", MetaKeywords);
    myform.append("MetaDescription", MetaDescription);
    myform.append("OldPrice", OldPrice);
    myform.append("Price", Price);
    myform.append("IsTaxExempt", IsTaxExempt);
    myform.append("IsShippingFree", IsShippingFree);
    myform.append("ShippingCharge", ShippingCharge);
    myform.append("EstimatedShippingDays", EstimatedShippingDays);
    myform.append("ShowOnHomePage", ShowOnHomePage);
    myform.append("AllowCustomerReviews", AllowCustomerReviews);
    myform.append("IsReturnAble", IsReturnAble);
    myform.append("IsDigitalProduct", IsDigitalProduct);
    myform.append("IsDiscountAllowed", IsDiscountAllowed);
    myform.append("Sku", Sku);
    myform.append("WarehouseId", WarehouseId);
    myform.append("InventoryMethodId", InventoryMethodId);
    myform.append("StockQuantity", StockQuantity);
    myform.append("IsBoundToStockQuantity", IsBoundToStockQuantity);
    myform.append("DisplayStockQuantity", DisplayStockQuantity);
    myform.append("OrderMinimumQuantity", OrderMinimumQuantity);
    myform.append("OrderMaximumQuantity", OrderMaximumQuantity);
    myform.append("MarkAsNew", MarkAsNew);
    myform.append("DisplaySeqNo", DisplaySeqNo);
    myform.append("IsActive", IsActive);
    myform.append("DiscountProductsMappings", DiscountProductsMappings);
    myform.append("ProductDigitalFileMappings", ProductDigitalFileMappings);
    myform.append("ProductReviews", ProductReviews);
    // myform.append("ProductsCategoriesMappings", ProductsCategoriesMappings);
    myform.append("ProductShippingMethodsMappings", ProductShippingMethodsMappings);
    myform.append("ProductsTag", ProductsTag);
    myform.append("AvailableStartDate", AvailableStartDate);
    myform.append("AvailableEndDate", AvailableEndDate);
    myform.append("ProductSize", ProductSize);
    myform.append("Tax", Tax);
    myform.append("CustomProductSize", CustomProductSize);
    myform.append("ProductColor", ProductColor);
    myform.append("ProductWeight", ProductWeight);
    if (ProductPictures && ProductPictures.length > 0) {
      ProductPictures.forEach((file, index) => {
        myform.append("ProductPictures", file);
      });
    }

    if (ProductsCategoriesMappings && ProductsCategoriesMappings.length > 0) {
      ProductsCategoriesMappings.forEach((category, index) => {
        // debugger
        myform.append("ProductsCategoriesMappings", category?._id);
        console.log(category)
      });
    }



    myform.forEach((value, key) => {
      console.log(`${key}: ${value}`)
    })

    dispatch(createProduct(myform)).then((data) => {
      console.log(data.payload.success)
      if (data.payload.success) {
        showSuccessMsg(data.payload.message)
        navigate("/admin/product")

      }
      else {
        showErrorMsg(data.payload.message)
      }
    })

    // You can now send the 'myform' FormData object with a fetch request or any other method
  }

  // console.log("DisCount Allowed", IsDiscountAllowed)
  // console.log("DisCount Allowed", allDiscountDetails)
  // console.log("DisCount Kya hai", DiscountProductsMappings)


  // console.log("Category Kya kya hai",ProductsCategoriesMappings)

  // Replace with your actual data

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setProductSize(value);

    if (value === 'other') {
      setShowCustomSizeInput(true);
    } else {
      setShowCustomSizeInput(false);
      setCustomSize(''); // Reset the custom size if another option is selected
    }
  };

  return (
    <>
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link to="/admin/product" className='text-dark'>Product</Link></li>
                  <li className="breadcrumb-item active">Create Product</li>
                </ol>
              </div>
              <h4 className="page-title"><i className="ri-align-left me-2"></i> Create Product</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">

                <h4 className="header-title mb-3"> Create Product</h4>

                <form encType="multipart/form-data" onSubmit={handleSubmitProduct}>
                  <div id="basicwizard">
                    <ul className="nav nav-pills form-wizard-header mb-4" style={{ display: 'flex', justifyContent: 'space-between', overflowX: 'auto' }}>
                      <li className="nav-item">
                        <a href="#basictab1" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-tag-multiple font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">Product Basic Info</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#basictab2" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-currency-inr font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">Prices</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#basictab3" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-truck-fast-outline font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">Shipping</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#basictab4" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-store font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">Inventory</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#basictab5" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-image-multiple font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">Pictures</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#basictab6" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-desktop-mac-dashboard font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">SEO</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#basictab7" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 py-2">
                          <i className="mdi mdi-monitor font-18 align-middle me-1"></i>
                          <span className="d-none d-sm-inline">Product Attributes</span>
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content b-0 mb-0">
                      <div className="tab-pane" id="basictab1">
                        <div className="row">
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Product name</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="userName" name="ProductName" onChange={(e) => setProductName(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="shortDescription">Short Description</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="shortDescription" name="ShortDescription" onChange={(e) => setShortDescription(e.target.value)} />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="shortDescription">Full Description</label>
                              <div className="col-md-9">
                                <ReactQuill theme="snow" value={FullDescription} onChange={setFullDescription} style={{ height: "150px" }} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 mt-4">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Manufacturer </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select" name='Menufacturs' onChange={(e) => setMenufacturs(e.target.value)} >
                                  <option selected>Select Menufactures</option>

                                  {allMenufactures && allMenufactures.map((menufacture, ind) => (
                                    <option key={ind} value={menufacture._id}>
                                      {menufacture.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Vendor </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select" onChange={(e) => setVendorId(e.target.value)} name='VendorId'>
                                  <option value={"Parijat Handcraft"}>Parijat Handcraft</option>
                                  <option value={"Parijat Handcraft"}>Parijat Handcraft</option>
                                  <option value={"Parijat Handcraft"}>Parijat Handcraft 3</option>
                                  <option value={"Parijat Handcraft"}>Parijat Handcraft 4</option>
                                  <option value={"Parijat Handcraft"}>Parijat Handcraft 5</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Categories </label>
                              <div className="col-md-9">
                                <SelectCategory onCategoryChange={handleCategoryChange} />
                              </div>

                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="ProductsTag">Tags</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="ProductsTag" name="ProductsTag" onChange={(e) => setProductsTag(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">IsActive</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setIsActive(e.target.checked)} name='IsActive' checked={IsActive} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Show on home Page</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setShowOnHomePage(e.target.checked)} name='ShowOnHomePage' checked={ShowOnHomePage} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Mark as new</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setMarkAsNew(e.target.checked)} name='MarkAsNew' checked={MarkAsNew} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Allow customer reviews</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setAllowCustomerReviews(e.target.checked)} name='AllowCustomerReviews' checked={AllowCustomerReviews} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName"> Available Start Date </label>
                              <div className="col-md-9">
                                <div className=" position-relative" id="datepicker2">
                                  <input type="date" className="form-control" onChange={(e) => setAvailableStartDate(e.target.value)} name='AvailableStartDate' />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName"> Available End Date </label>
                              <div className="col-md-9">
                                <div className="position-relative" id="datepicker2">
                                  <input type="date" className="form-control" onChange={(e) => setAvailableEndDate(e.target.value)} name='AvailableEndDate' />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="Sku">Sku</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="Sku" name="Sku" onChange={(e) => setSku(e.target.value)} />
                              </div>
                            </div>
                          </div>

                          {/* <div className="col-12">
                              <div className="row mb-3">
                                <div className="col-md-3">
                                  <label className="col-md-3 col-form-label" for="fullDescription">Full Description</label>
                                </div>
                                <div className="col-md-9">
                                <ReactQuill theme="snow" value={value} onChange={setValue} />
                                 
                                </div>
                              </div>


                            </div> */}

                        </div>

                        {/* <ul className="list-inline wizard mb-0">
                            <li className="next list-inline-item float-end">
                              <a href="javascript:void(0);" className="btn btn-info">Add More Info <i className="mdi mdi-arrow-right ms-1"></i></a>
                            </li>
                          </ul> */}
                      </div>
                      <div className="tab-pane" id="basictab2">
                        <div className="row">
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="OldPrice">Base Price</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="OldPrice" name="OldPrice" onChange={(e) => setOldPrice(e.target.value)} />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="userName">
                                Is Discount Allowed?
                              </label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  {/* Use `onClick` instead of `onChange` to make it work immediately */}
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheckcolor3"
                                    onClick={discountAllowCheck} // Use onClick here for immediate toggle
                                    checked={IsDiscountAllowed} // Bind the checkbox directly to the state
                                    name="IsDiscountAllowed"
                                  />
                                </div>
                              </div>
                            </div>

                          </div>

                          {IsDiscountAllowed && (
                            <div className="col-12">
                              <div className="row mb-3">
                                <label htmlFor="example-select" className="col-md-3 col-form-label">
                                  Discount
                                </label>
                                <div className="col-md-9">

                                  <select className="form-select text-dark" id="example-select" onChange={(e) => setDiscountProductsMappings(e.target.value)} name="DiscountProductsMappings">
                                    <option selected>Select Discount</option>

                                    {allDiscountDetails && allDiscountDetails.map((discount, ind) => (
                                      <option key={ind} value={discount._id}>
                                        {discount.title}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="Price">Price</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="Price " name="Price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                              </div>
                            </div>
                          </div>


                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="example-select">Tax Details</label>
                              <div className="col-md-9">

                                <select className="form-select" id="example-select" name='Tax' onChange={(e) => setTax(e.target.value)} >
                                  <option selected>Select Tax Details</option>

                                  {allTaxDetails && allTaxDetails.map((tax, ind) => (
                                    <option key={ind} value={tax?._id}>
                                      {tax?.tax_name} || {tax?.tax_rate} %
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                      <div className="tab-pane" id="basictab3">
                        <div className="row">
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Free Shipping</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => freeShippingAllowCheck(e.target.checked)} name='IsShippingFree' />
                                </div>
                              </div>
                            </div>
                          </div>
                          {IsShippingFree ?
                            <div className="col-12">
                              <div className="row mb-3">
                                <label className="col-md-3 col-form-label" for="ShippingCharge">Shipping Charges</label>
                                <div className="col-md-9">
                                  <input type="text" className="form-control" id="ShippingCharge" name="ShippingCharge" onChange={(e) => setShippingCharge(e.target.value)} />
                                </div>
                              </div>
                            </div>
                            : ""}
                          <div className="col-12">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Shipping Methods </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select" onChange={(e) => setProductShippingMethodsMappings(e.target.value)} name='ProductShippingMethodsMappings'>
                                  <option value="Same day delivery">Same day delivery</option>
                                  <option value="International Shipping">International Shipping</option>
                                  <option value="Local Shipping">Local Shipping</option>
                                  <option value="Real-time Carrier Rates">Real-time Carrier Rates</option>
                                  <option value="Flat-rate shipping">Flat-rate shipping</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="IsReturnAble">Return Able</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="IsReturnAble" onChange={(e) => setIsReturnAble(e.target.checked)} name='IsReturnAble' checked={IsReturnAble} />
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                      <div className="tab-pane" id="basictab4">
                        <div className="row">
                          <div className="col-12">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Inventory Method </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select" onChange={(e) => setInventoryMethodId(e.target.value)} name='InventoryMethodId' >
                                  <option selected>Select Inventory Method...</option>
                                  <option value="LIFO(last in first out)">LIFO(last in first out)</option>
                                  <option value="FIFO(first in first out)">FIFO(first in first out)</option>
                                  <option value="Specific identification method">Specific identification method</option>
                                  <option value="WAC (weighted average cost)" >WAC (weighted average cost)</option>
                                  <option value="Flat-rate shipping">Flat-rate shipping</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Warehouse  </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select" onChange={(e) => setWarehouseId(e.target.value)} name='WarehouseId'>
                                  <option selected >Select Inventory Method...</option>

                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="StockQuantity">Stock Quantity</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="StockQuantity" name="StockQuantity" onChange={(e) => setStockQuantity(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="IsBoundToStockQuantity">Bound To Stock Quantity</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="IsBoundToStockQuantity" onChange={(e) => setIsBoundToStockQuantity(e.target.checked)} name='IsBoundToStockQuantity' />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Display To Stock Quantity</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setDisplayStockQuantity(e.target.checked)} name='DisplayStockQuantity' />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="OrderMinimumQuantity">Order Minimum Cart Quantity</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="OrderMinimumQuantity" name="OrderMinimumQuantity" onChange={(e) => setOrderMinimumQuantity(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="OrderMaximumQuantity">Order Maximum Cart Quantity</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="OrderMaximumQuantity" name="OrderMaximumQuantity" onChange={(e) => setOrderMaximumQuantity(e.target.value)} />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="tab-pane" id="basictab5">
                        <div className="file-upload-container">
                          <div className="row">
                            <div className="col-12">
                              <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Upload Product Images</label>
                              </div>
                              <div className="col-12">
                                <div className="card">
                                  <div className="card-body">
                                    <div {...getRootProps()} className="dropzone">
                                      <input {...getInputProps()} />
                                      <div className="dz-message needsclick">
                                        <i className="h1 text-muted ri-upload-cloud-2-line"></i>
                                        <h3>Drop files here or click to upload.</h3>
                                        <span className="text-muted font-13">
                                          (You can upload multiple image files.)
                                        </span>
                                      </div>
                                    </div>

                                    {/* Display image previews */}
                                    <div className="dropzone-previews mt-3">
                                      {previewFiles.map((filePreview, index) => (
                                        <div key={index} className="dz-preview dz-file-preview">
                                          <div className="dz-image">
                                            <img src={filePreview.previewUrl} alt={filePreview.file.name} />
                                          </div>
                                          <div className="dz-details">
                                            <div className="dz-filename">
                                              <span>{filePreview.file.name}</span>
                                            </div>
                                            <div className="dz-size">
                                              <span>{(filePreview.file.size / 1024).toFixed(2)} KB</span>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="row mb-3">
                                <label className="col-md-3 col-form-label" for="IsDigitalProduct">Is Digital Product</label>
                                <div className="col-md-9">
                                  <div className="form-check form-checkbox-info mb-2 fs-3">
                                    <input type="checkbox" className="form-check-input" id="IsDigitalProduct" onChange={(e) => setIsDigitalProduct(e.target.checked)} name='IsDigitalProduct' checked={IsDigitalProduct} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                      <div className="tab-pane" id="basictab6">
                        <div className="row">
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="MetaTitle">Meta Title</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="MetaTitle" name="MetaTitle" onChange={(e) => setMetaTitle(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="MetaKeywords">Meta Keywords</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="MetaKeywords" name="MetaKeywords" onChange={(e) => setMetaKeywords(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="MetaDescription">Meta Description</label>
                              <div className="col-md-9">
                                <textarea rows={4} type="text" className="form-control" id="MetaDescription" name="MetaDescription" onChange={(e) => setMetaDescription(e.target.value)} />
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                      <div className="tab-pane" id="basictab7">
                        <div className="row">
                          {/* <div className="col-12">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Attribute </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select">
                                  <option selected>Select Inventory Method...</option>
                                  <option>LIFO(last in first out)</option>
                                  <option>FIFO(first in first out)</option>
                                  <option>Specific identification method</option>
                                  <option>WAC (weighted average cost)</option>
                                  <option>Flat-rate shipping</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Price Adjustment Type  </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select">
                                  <option selected>Select Inventory Method...</option>

                                </select>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="ProductSize">Size</label>
                              <div className="col-md-9">

                                <select className="form-select" id="example-select" name='Menufacturs' onChange={(e) => setProductSize(e.target.value)} >
                                  <option selected>Select Size</option>

                                  {allProductSize && allProductSize.map((productSize, ind) => (
                                    <option key={ind} value={productSize?._id}>
                                      {productSize?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div> */}


                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="ProductSize">Size</label>
                              <div className="col-md-9">
                                <select
                                  className="form-select"
                                  id="example-select"
                                  name="Menufacturs"
                                  value={ProductSize}
                                  onChange={handleSizeChange}
                                >
                                  <option value="">Select Size</option>
                                  {allProductSize && allProductSize.map((productSize, ind) => (
                                    <option key={ind} value={productSize._id}>
                                      {productSize.name}
                                    </option>
                                  ))}
                                  <option value="other">Other</option>
                                </select>

                                {showCustomSizeInput && (
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter custom size"
                                      value={CustomProductSize}
                                      name='CustomProductSize'
                                      onChange={(e) => setCustomProductSize(e.target.value)}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="ProductColor">Color</label>
                              <div className="col-md-9">
                                <input className="form-control" id="ProductColor" type="color" onChange={(e) => setProductColor(e.target.value)} name='ProductColor' ></input>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="ProductWeight">Weight</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="ProductWeight" name="ProductWeight" placeholder='Weight in Gram' onChange={(e) => setProductWeight(e.target.value)} />
                              </div>
                            </div>
                          </div>



                        </div>
                      </div>
                    </div>

                    {/* {add button save} */}
                    <div className="form-save-btn">

                      <Link to="/admin/add-product" className="btn btn-secondary me-3 mb-2">
                        <i className="ri-reset-right-line"></i> Reset
                      </Link>
                      <button className="btn adminAddBtn mb-2" type='submit'>
                        <i className="mdi mdi-send me-2"></i> Add Products
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div >

      </div >
    </>
  );
}



// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export default function AddProduct() {
//   const [value, setValue] = useState('');

//   return <ReactQuill theme="snow" value={value} onChange={setValue} />;
// }