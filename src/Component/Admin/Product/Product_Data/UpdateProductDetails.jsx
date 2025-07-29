
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Snow theme
import 'react-quill/dist/quill.bubble.css';
import { useDropzone } from "react-dropzone";
import "./product.css";
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'date-fns';
import Config from '../../../Comman/Config';
import axiosInstance from '../../../../ApiHendler/axiosInstance';
import SelectCategory from './SelectCategory';
import { showSuccessMsg, showErrorMsg } from '../../../../utils/ShowMessage';
import { getSingleProduct, updateProduct } from '../../../../Store/features/product/productSlice';
import Loader from '../../../View/Loader/Loader';

const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function UpdateProductDetails() {
  const [previewFiles, setPreviewFiles] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, products, } = useSelector((state) => state.product)
  const { id } = useParams()
  // console.log(id)



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
  const [Price, setPrice] = useState('')
  const [IsTaxExempt, setIsTaxExempt] = useState(false)

  const [IsShippingFree, setIsShippingFree] = useState(false)
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
  const [IsBoundToStockQuantity, setIsBoundToStockQuantity] = useState()
  const [DisplayStockQuantity, setDisplayStockQuantity] = useState()
  const [OrderMinimumQuantity, setOrderMinimumQuantity] = useState('')
  const [OrderMaximumQuantity, setOrderMaximumQuantity] = useState('')
  const [MarkAsNew, setMarkAsNew] = useState(false)
  const [DisplaySeqNo, setDisplaySeqNo] = useState('')
  const [IsActive, setIsActive] = useState()
  const [DiscountProductsMappings, setDiscountProductsMappings] = useState('')
  const [ProductDigitalFileMappings, setProductDigitalFileMappings] = useState()
  const [ProductPictures, setProductPictures] = useState([])
  const [ProductReviews, setProductReviews] = useState('')
  const [ProductsCategoriesMappings, setProductsCategoriesMappings] = useState([])
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
    dispatch(getSingleProduct(id))

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '';
    }
    return date.toISOString().split('T')[0];
  };

  // console.log("Discount kya hai bhai DiscountProductsMappings", DiscountProductsMappings);
  // console.log("Discount kya hai bhai allDiscountDetails", allDiscountDetails);

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

    // console.log("Discount details found:", discount);

    if (discount) {

      const discountAmount = (discount.DiscountValue / 100) * OldPrice;
      const finalPrice = OldPrice - discountAmount;

      // console.log("Bhai mere FinalPrice Kya hai:", finalPrice);

      setPrice(finalPrice); // Set the final price
    } else {
      console.log("No matching discount found!");
    }
  };

  useEffect(() => {
    calculateFinalPrice();
  }, [allDiscountDetails, DiscountProductsMappings]);


  // useEffect(() => {
  //   if (products) {
  //     setProductName(products.ProductName || '');
  //     setAttachmentURL(products.AttachmentURL || '');
  //     setIsDiscountCreatePageSearchEnabled(products.IsDiscountCreatePageSearchEnabled);
  //     setRating(products.Rating || '');
  //     setShortDescription(products.ShortDescription || '');
  //     setFullDescription(products.FullDescription || '');
  //     setVendorId(products.VendorId || '');
  //     setMenufacturs(products.Menufacturs?._id || '');
  //     setMetaTitle(products.MetaTitle || '');
  //     setMetaKeywords(products.MetaKeywords || '');
  //     setMetaDescription(products.MetaDescription || '');
  //     setOldPrice(products.OldPrice || '');
  //     setPrice(products.Price || '');
  //     setIsTaxExempt(products.IsTaxExempt || false);
  //     setIsShippingFree(products.IsShippingFree || true);
  //     setShippingCharge(products.ShippingCharge || '');
  //     setEstimatedShippingDays(products.EstimatedShippingDays || '');
  //     setShowOnHomePage(products.ShowOnHomePage || '');
  //     setAllowCustomerReviews(products.AllowCustomerReviews || '');
  //     setIsReturnAble(products.IsReturnAble || true);
  //     setIsDigitalProduct(products.IsDigitalProduct || false);
  //     setIsDiscountAllowed(products.IsDiscountAllowed || false);
  //     setSku(products.Sku || '');
  //     setWarehouseId(products.WarehouseId || '');
  //     setInventoryMethodId(products.InventoryMethodId || '');
  //     setStockQuantity(products.StockQuantity || '');
  //     setIsBoundToStockQuantity(products.IsBoundToStockQuantity || false);
  //     setDisplayStockQuantity(products.DisplayStockQuantity || false);
  //     setOrderMinimumQuantity(products.OrderMinimumQuantity || '');
  //     setOrderMaximumQuantity(products.OrderMaximumQuantity || '');
  //     setMarkAsNew(products.MarkAsNew || false);
  //     setDisplaySeqNo(products.DisplaySeqNo || '');
  //     setIsActive(products.IsActive || false);
  //     setDiscountProductsMappings(products.DiscountProductsMappings?._id || '');
  //     setProductDigitalFileMappings(products.ProductDigitalFileMappings?._id || '');
  //     setProductPictures(products.ProductPictures || []);
  //     setProductReviews(products.ProductReviews || '');
  //     setProductShippingMethodsMappings(products.ProductShippingMethodsMappings || '');
  //     setProductsTag(products.ProductsTag || '');
  //     setAvailableStartDate(formatDate(products.AvailableStartDate || ''));
  //     setAvailableEndDate(formatDate(products.AvailableEndDate || ''));
  //     setProductSize(products.ProductSize || '');
  //     setProductColor(products.ProductColor || '');
  //     setProductWeight(products.ProductWeight || '');

  //     // setProductsCategoriesMappings(products.ProductsCategoriesMappings);
  //     // debugger
  //     // if (products.ProductsCategoriesMappings && products.ProductsCategoriesMappings.length > 0) {
  //     //   products.ProductsCategoriesMappings.forEach((category, index) => {
  //     //     // debugger
  //     //     setProductsCategoriesMappings(category._id);
  //     //     console.log(category)
  //     //   });
  //     // }
  //     // if (Array.isArray(products.ProductsCategoriesMappings) && products.ProductsCategoriesMappings.length > 0) {
  //     //   setProductsCategoriesMappings(products.ProductsCategoriesMappings);
  //     // } else {
  //     //   // Handle the case where the mapping is not an array or is empty
  //     //   setProductsCategoriesMappings([]); // or some fallback value
  //     // }
  //     // setProductsCategoriesMappings(
  //     //   Array.isArray(products.ProductsCategoriesMappings) && products.ProductsCategoriesMappings.length > 0 ? 
  //     //   products.ProductsCategoriesMappings.map(category => category) : []
  //     // );


  //     console.log(products.ProductsCategoriesMappings)


  //   }
  // }, [products]);

  // debugger
  useEffect(() => {
    if (products) {
      setProductName(products.ProductName || '');
      setAttachmentURL(products.AttachmentURL || '');
      setIsDiscountCreatePageSearchEnabled(products.IsDiscountCreatePageSearchEnabled);
      setRating(products.Rating || '');
      setShortDescription(products.ShortDescription || '');
      setFullDescription(products.FullDescription || '');
      setVendorId(products.VendorId || '');
      setMenufacturs(products.Menufacturs?._id || '');
      setMetaTitle(products.MetaTitle || '');
      setMetaKeywords(products.MetaKeywords || '');
      setMetaDescription(products.MetaDescription || '');
      setOldPrice(products.OldPrice || '');
      setPrice(products.Price || '');
      setCustomProductSize(products.CustomProductSize || '');
      setPrice(products.Price || '');
      setIsTaxExempt(products.IsTaxExempt || false);
      setIsShippingFree(products.IsShippingFree || true);
      setShippingCharge(products.ShippingCharge || '');
      setEstimatedShippingDays(products.EstimatedShippingDays || '');
      setShowOnHomePage(products.ShowOnHomePage || '');
      setAllowCustomerReviews(products.AllowCustomerReviews || '');
      setIsReturnAble(products.IsReturnAble || true);
      setIsDigitalProduct(products.IsDigitalProduct || false);
      setIsDiscountAllowed(products.IsDiscountAllowed || false);
      setSku(products.Sku || '');
      setWarehouseId(products.WarehouseId || '');
      setInventoryMethodId(products.InventoryMethodId || '');
      setStockQuantity(products.StockQuantity || '');
      setIsBoundToStockQuantity(products.IsBoundToStockQuantity || false);
      setDisplayStockQuantity(products.DisplayStockQuantity || false);
      setOrderMinimumQuantity(products.OrderMinimumQuantity || '');
      setOrderMaximumQuantity(products.OrderMaximumQuantity || '');
      setMarkAsNew(products.MarkAsNew || false);
      setDisplaySeqNo(products.DisplaySeqNo || '');
      setIsActive(products.IsActive || false);
      setDiscountProductsMappings(products.DiscountProductsMappings?._id || '');
      setProductDigitalFileMappings(products.ProductDigitalFileMappings?._id || '');
      // debugger

      setProductPictures(products?.ProductPictures || []);

      setProductReviews(products.ProductReviews || '');
      setProductShippingMethodsMappings(products.ProductShippingMethodsMappings || '');
      setProductsTag(products.ProductsTag || '');
      setAvailableStartDate(formatDate(products.AvailableStartDate || ''));
      setAvailableEndDate(formatDate(products.AvailableEndDate || ''));


      setProductSize(products.ProductSize?._id || '');
      setTax(products.Tax?._id || '');

      setProductColor(products.ProductColor || '');
      setProductWeight(products.ProductWeight || '');

      // debugger
      setProductsCategoriesMappings(products?.ProductsCategoriesMappings || [])

      // Handling ProductsCategoriesMappings (assuming it's an array of category objects)

      // if (Array.isArray(products?.ProductsCategoriesMappings)) {
      //   const categoryIds = products?.ProductsCategoriesMappings.map(category => category._id);
      //   setProductsCategoriesMappings(categoryIds); 
      //   console.log(categoryIds); 
      // } else {
      //   setProductsCategoriesMappings([]); 
      // }

      // console.log(products.ProductsCategoriesMappings);
    }
  }, [products]);

  // console.log("gvgh",products);
  // console.log("skdfjdk",ProductPictures);


  const handleSubmitProduct = (e) => {
    e.preventDefault();

    const myform = new FormData();
    // debugger

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
        myform.append("ProductsCategoriesMappings", category._id);
        // console.log(category)
      });
    }



    // myform.forEach((value, key) => {
    //   console.log(`${key}: ${value}`)
    // })

    dispatch(updateProduct({ id, myform })).then((data) => {
      // console.log(data.payload.success)
      if (data.payload.success) {
        showSuccessMsg(data.payload.message)
        navigate("/admin/product")

      }
      else {
        showErrorMsg(data.payload.message)
      }
    })

  }

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setProductSize(value);

    if (value === 'other') {
      setShowCustomSizeInput(true);
    } else {
      setShowCustomSizeInput(false);
      setCustomSize('');
    }
  };


  if (isLoading) {
    return <Loader />
  }


  return (
    <>
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link to="/admin/product" className='text-dark'>Product</Link></li>
                  <li className="breadcrumb-item active">Update Product</li>
                </ol>
              </div>
              <div className="" style={{ display: "flex", justifyContent: "space-between" }}>

                <h4 className="page-title"><i className="ri-align-left me-2"></i> Update Product</h4>
                <Link to="/admin/product" className="page-title text-dark d-block d-md-none"  > <i className="ri-arrow-left-fill"></i> Back</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">

                <h4 className="header-title mb-3"> Update Product</h4>

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
                                <input type="text" className="form-control" id="userName" name="ProductName" onChange={(e) => setProductName(e.target.value)} value={ProductName} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="shortDescription">Short Description</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="shortDescription" name="ShortDescription" onChange={(e) => setShortDescription(e.target.value)} value={ShortDescription} />
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
                                <select className="form-select" id="example-select" name='Menufacturs' onChange={(e) => setMenufacturs(e.target.value)} value={Menufacturs}>
                                  <option >Select Menufactures</option>

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
                                <select className="form-select" id="example-select" onChange={(e) => setVendorId(e.target.value)} name='VendorId' value={VendorId}>
                                  <option value={"Parijat Handcraft"}>Parijat Handcraft</option>

                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Categories </label>
                              <div className="col-md-9">

                                <SelectCategory onCategoryChange={handleCategoryChange} value={ProductsCategoriesMappings} />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="ProductsTag">Tags</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="ProductsTag" name="ProductsTag" onChange={(e) => setProductsTag(e.target.value)} value={ProductsTag ? ProductsTag : ""} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">IsActive</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setIsActive(e.target.checked)} name='IsActive' checked={IsActive} value={IsActive} />
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
                                <div className=" position-relative" >
                                  <input type="date" className="form-control" onChange={(e) => setAvailableStartDate(e.target.value)} name='AvailableStartDate' value={AvailableStartDate} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName"> Available End Date </label>
                              <div className="col-md-9">

                                <div className="position-relative" >
                                  <input type="date" className="form-control" onChange={(e) => setAvailableEndDate(e.target.value)} name='AvailableEndDate' value={AvailableEndDate} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="Sku">Sku</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="Sku" name="Sku" onChange={(e) => setSku(e.target.value)} value={Sku} />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="tab-pane" id="basictab2">
                        <div className="row">
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="OldPrice">Base Price</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="OldPrice" name="OldPrice" onChange={(e) => setOldPrice(e.target.value)} value={OldPrice} />
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

                                  <select className="form-select text-dark" id="example-select" onChange={(e) => setDiscountProductsMappings(e.target.value)} name="DiscountProductsMappings" value={DiscountProductsMappings}>
                                    <option >Select Discount</option>

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

                                <select className="form-select" id="example-select" name='Tax' onChange={(e) => setTax(e.target.value)} value={Tax} >
                                  <option >Select Tax Details</option>

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
                              <label className="col-md-3 col-form-label" htmlFor="userName">Free Shipping</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheckcolor3"
                                    onChange={(e) => freeShippingAllowCheck(e.target.checked)} // Toggle state based on checkbox
                                    name="IsShippingFree"
                                    checked={IsShippingFree}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Conditionally render Shipping Charge field based on IsShippingFree */}
                          {!IsShippingFree && (
                            <div className="col-12">
                              <div className="row mb-3">
                                <label className="col-md-3 col-form-label" htmlFor="ShippingCharge">Shipping Charges</label>
                                <div className="col-md-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="ShippingCharge"
                                    name="ShippingCharge"
                                    onChange={(e) => setShippingCharge(e.target.value)}
                                    value={ShippingCharge}
                                  />
                                </div>
                              </div>
                            </div>
                          )}





                          <div className="col-12">
                            <div className="row mb-3">
                              <label for="example-select" className="col-md-3 col-form-label">Shipping Methods </label>
                              <div className="col-md-9">
                                <select className="form-select" id="example-select" onChange={(e) => setProductShippingMethodsMappings(e.target.value)} name='ProductShippingMethodsMappings' value={ProductShippingMethodsMappings}>
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
                                <select className="form-select" id="example-select" onChange={(e) => setInventoryMethodId(e.target.value)} name='InventoryMethodId' value={InventoryMethodId} >
                                  {/* <option selected>Select Inventory Method...</option> */}
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
                                <select className="form-select" id="example-select" onChange={(e) => setWarehouseId(e.target.value)} name='WarehouseId' value={WarehouseId}>
                                  {/* <option selected >Select Inventory Method...</option> */}
                                  <option selected >Warehouse 1</option>
                                  <option selected >Warehouse 2</option>

                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="StockQuantity">Stock Quantity</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="StockQuantity" name="StockQuantity" onChange={(e) => setStockQuantity(e.target.value)} value={StockQuantity} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="IsBoundToStockQuantity">Bound To Stock Quantity</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="IsBoundToStockQuantity" onChange={(e) => setIsBoundToStockQuantity(e.target.checked)} name='IsBoundToStockQuantity' checked={IsBoundToStockQuantity} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="userName">Display To Stock Quantity</label>
                              <div className="col-md-9">
                                <div className="form-check form-checkbox-info mb-2 fs-3">
                                  <input type="checkbox" className="form-check-input" id="customCheckcolor3" onChange={(e) => setDisplayStockQuantity(e.target.checked)} name='DisplayStockQuantity' checked={DisplayStockQuantity} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="OrderMinimumQuantity">Order Minimum Cart Quantity</label>
                              <div className="col-md-9">
                                <input type="number" className="form-control" id="OrderMinimumQuantity" name="OrderMinimumQuantity" onChange={(e) => setOrderMinimumQuantity(e.target.value)} value={OrderMinimumQuantity} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="OrderMaximumQuantity">Order Maximum Cart Quantity</label>
                              <div className="col-md-9">
                                <input type="number" className="form-control" id="OrderMaximumQuantity" name="OrderMaximumQuantity" onChange={(e) => setOrderMaximumQuantity(e.target.value)} value={OrderMaximumQuantity} />
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

                                    <div className="dropzone-previews mt-3">
                                      {ProductPictures.map((filePreview, index) => (
                                        <div key={index} className="dz-preview dz-file-preview">
                                          <div className="dz-image">
                                            {filePreview ? (
                                              <img src={filePreview.url} alt={`preview-${index}`} />
                                            ) : (
                                              <span>No image available</span>
                                            )}
                                          </div>
                                          <div className="dz-details">
                                            <div className="dz-filename">
                                              <span>{filePreview.name || 'No file name available'}</span>
                                            </div>
                                            <div className="dz-size">
                                              <span>{(filePreview.size / 1024).toFixed(2) + ' KB'}</span>
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
                                <input type="text" className="form-control" id="MetaTitle" name="MetaTitle" onChange={(e) => setMetaTitle(e.target.value)} value={MetaTitle} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="MetaKeywords">Meta Keywords</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="MetaKeywords" name="MetaKeywords" onChange={(e) => setMetaKeywords(e.target.value)} value={MetaKeywords} />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="MetaDescription">Meta Description</label>
                              <div className="col-md-9">
                                <textarea rows={4} type="text" className="form-control" id="MetaDescription" name="MetaDescription" onChange={(e) => setMetaDescription(e.target.value)} value={MetaDescription} />
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                      <div className="tab-pane" id="basictab7">
                        <div className="row">

                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" htmlFor="ProductSize">Size</label>
                              <div className="col-md-9">
                                <select
                                  className="form-select"
                                  id="ProductSize"
                                  name="ProductSize"
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
                                <input className="form-control" id="ProductColor" type="color" onChange={(e) => setProductColor(e.target.value)} name='ProductColor' value={ProductColor} ></input>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="row mb-3">
                              <label className="col-md-3 col-form-label" for="ProductWeight">Weight</label>
                              <div className="col-md-9">
                                <input type="text" className="form-control" id="ProductWeight" name="ProductWeight" placeholder='Weight in Gram' onChange={(e) => setProductWeight(e.target.value)} value={ProductWeight} />
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
