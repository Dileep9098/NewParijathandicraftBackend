// // import React, { useEffect, useState } from 'react';
// // import { useParams, Link, useNavigate } from 'react-router-dom';

// // import { Helmet } from 'react-helmet';

// // import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
// // import { Country, State, City } from 'country-state-city';
// // import { useDispatch } from 'react-redux';

// // const UpdateProfile = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const [UserID, setUserID] = useState('');
// //     const [FirstName, setFirstName] = useState('');
// //     const [LastName, setLastName] = useState('');
// //     const [MobileNo, setMobileNo] = useState('');
// //     const [AddressLineOne, setAddressLineOne] = useState('');
// //     const [PostalCode, setPostalCode] = useState('');
// //     const [StateProvinceId, setStateProvinceId] = useState('');
// //     const [CityId, setCityId] = useState('');
// //     const [StatesProvincesList, setStatesProvincesList] = useState([]);
// //     const [CitiesList, setCitiesList] = useState([]);
// //     const [LocalizationLabelsArray, setLocalizationLabelsArray] = useState([]);






// //     const [selectedCountry, setSelectedCountry] = useState('');
// //     const [selectedState, setSelectedState] = useState('');
// //     const [selectedCity, setSelectedCity] = useState('');
// //     const [countryList, setCountryList] = useState([]);
// //     const [stateList, setStateList] = useState([]);
// //     const [cityList, setCityList] = useState([]);

// //     console.log(selectedCountry)
// //     console.log(selectedState)
// //     console.log(selectedCity)

// //     useEffect(() => {
// //         const countries = Country.getAllCountries();
// //         setCountryList(countries);
// //     }, []);

// //     const handleCountryChange = (event) => {
// //         const countryCode = event.target.value;
// //         setSelectedCountry(countryCode);
// //         setSelectedState('');
// //         const states = State.getStatesOfCountry(countryCode);
// //         setStateList(states);

// //     };

// //     const handleStateChange = (event) => {
// //         const stateCode = event.target.value;
// //         setSelectedState(stateCode);
// //         const cities = City.getCitiesOfState(selectedCountry, stateCode);
// //         setCityList(cities);

// //     };
// //     return (
// //         <>
// //             {/* <Helmet>
// //                 <title>{siteTitle} - Update Profile</title>
// //                 <meta name="description" content={siteTitle + " - Update Profile"} />
// //                 <meta name="keywords" content="Update Profile"></meta>
// //             </Helmet> */}
// //             <SiteBreadcrumb title="Update Profile" parent="Home" />

// //             <section className="login-page section-big-py-space bg-light">
// //                 <div className="custom-container">


// //                     <Row className="row">
// //                         <Col xl="8" lg="8" md="8" className="offset-xl-2 offset-lg-2 offset-md-2">
// //                             <div className="theme-card">
// //                                 <h3 className="text-center">
// //                                         Update Profile
// //                                 </h3>
// //                                 <Form className="theme-form">
// //                                     <div className="form-row row">
// //                                         <Col md="6">
// //                                             <FormGroup>

// //                                                 <Label htmlFor="FirstName">
// //                                                 First Name
// //                                                     <span className="required-field">*</span></Label>
// //                                                 <Input type="text" className="form-control" placeholder="Enter first name" id="FirstName" name="FirstName"
// //                                                     required={true}
// //                                                     value=""
// //                                                     onChange={(e) => setFirstName(e.target.value)}
// //                                                 />

// //                                             </FormGroup>
// //                                         </Col>
// //                                         <Col md="6">
// //                                             <FormGroup>
// //                                                 <Label htmlFor="LastName">
// //                                                 Last Name
// //                                                     <span className="required-field">*</span></Label>
// //                                                 <Input type="text" className="form-control" placeholder="Enter last name" id="LastName" name="LastName"
// //                                                     required={true}
// //                                                     value={LastName}
// //                                                     onChange={(e) => setLastName(e.target.value)}
// //                                                 />
// //                                             </FormGroup>
// //                                         </Col>

// //                                         <Col md="6">
// //                                             <FormGroup>
// //                                                 <Label htmlFor="CountryProvinceId">
// //                                                 Country
// //                                                 </Label>

// //                                                 <select
// //                                                     className="form-control"
// //                                                     name="StateProvinceId"
// //                                                     id="StateProvinceId"
// //                                                     required={false}
// //                                                     value={selectedCountry}
// //                                                     onChange={handleCountryChange}
// //                                                 >
// //                                                     <option value="-999">Select State</option>

// //                                                     {countryList.map((country) => (
// //                                                         <option key={country.isoCode} value={country.isoCode}>
// //                                                             {country.name}
// //                                                         </option>
// //                                                     ))}


// //                                                 </select>

// //                                             </FormGroup>
// //                                         </Col>

// //                                         <Col md="6">
// //                                             <FormGroup>
// //                                                 <Label htmlFor="StateProvinceId">
// //                                                 State/Province
// //                                                 </Label>

// //                                                 <select
// //                                                     className="form-control"
// //                                                     name="StateProvinceId"
// //                                                     id="StateProvinceId"
// //                                                     required={false}
// //                                                     onChange={handleStateChange} value={selectedState}
// //                                                 >
// //                                                     <option value="-999">Select State</option>
// //                                                     {selectedCountry && stateList.map((state) => (
// //                                                         <option key={state.isoCode} value={state.isoCode}>
// //                                                             {state.name}
// //                                                         </option>
// //                                                     ))}


// //                                                 </select>

// //                                             </FormGroup>
// //                                         </Col>
// //                                         <Col md="6">
// //                                             <FormGroup>
// //                                                 <Label htmlFor="CityId">
// //                                                 City
// //                                                 </Label>

// //                                                 <select
// //                                                     className="form-control"
// //                                                     name="CityId"
// //                                                     id="CityId"
// //                                                     required={false}
// //                                                     onChange={(e)=>(setSelectedCity(e.target.value))}

// //                                                 >
// //                                                     <option value="-999">Select City</option>
// //                                                     {selectedCountry && cityList.map((city) => (
// //                                                         <option key={city.id} value={city.name}>
// //                                                         {city.name}
// //                                                       </option>
// //                                                     ))}


// //                                                 </select>


// //                                             </FormGroup>
// //                                         </Col>

// //                                         <Col md="6">
// //                                             <FormGroup>

// //                                                 <Label htmlFor="MobileNo">
// //                                                 Contact No
// //                                                 </Label>
// //                                                 <Input type="text" className="form-control" placeholder="Enter contact no" id="MobileNo" name="MobileNo"
// //                                                     value={MobileNo}
// //                                                     onChange={(e) => setMobileNo(e.target.value)}
// //                                                 />
// //                                             </FormGroup>
// //                                         </Col>

// //                                         <Col md="6">
// //                                             <FormGroup>
// //                                                 <Label htmlFor="PostalCode">
// //                                                 Postal Code
// //                                                 </Label>
// //                                                 <Input type="number" className="form-control" placeholder="Enter postal code" id="PostalCode" name="PostalCode"
// //                                                     value={PostalCode}
// //                                                     onChange={(e) => setPostalCode(e.target.value)}
// //                                                 />
// //                                             </FormGroup>
// //                                         </Col>

// //                                         <Col md="12">
// //                                             <FormGroup>
// //                                                 <Label htmlFor="AddressLineOne">
// //                                                 Shipping Address
// //                                                     <span className="required-field">*</span></Label>
// //                                                 <Input type="text" className="form-control" placeholder="Enter shipping address" id="AddressLineOne" name="AddressLineOne"
// //                                                     required={true}
// //                                                     value={AddressLineOne}
// //                                                     onChange={(e) => setAddressLineOne(e.target.value)}
// //                                                 />
// //                                             </FormGroup>
// //                                         </Col>

// //                                         <Col md="12">
// //                                             <button className="btn btn-sm btn-normal mb-3" type="submit" id="lbl_uprofile_submit">
// //                                             Update Profile
// //                                             </button>


// //                                         </Col>

// //                                         <Col md="12">
// //                                             <p>

// //                                                 <Link to="/" className="txt-default">
// //                                                 Go To Home Page
// //                                                 </Link>


// //                                             </p>
// //                                         </Col>
// //                                     </div>
// //                                 </Form>


// //                             </div>
// //                         </Col>
// //                     </Row>
// //                 </div>
// //             </section>




// //         </>
// //     );
// // }

// // export default UpdateProfile;


// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
// import { Country, State, City } from 'country-state-city';
// import { useDispatch } from 'react-redux';

// const UpdateProfile = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [FirstName, setFirstName] = useState('');
//     const [LastName, setLastName] = useState('');
//     const [MobileNo, setMobileNo] = useState('');
//     const [AddressLineOne, setAddressLineOne] = useState('');
//     const [PostalCode, setPostalCode] = useState('');
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [selectedState, setSelectedState] = useState('');
//     const [selectedCity, setSelectedCity] = useState('');
//     const [countryList, setCountryList] = useState([]);
//     const [stateList, setStateList] = useState([]);
//     const [cityList, setCityList] = useState([]);

//     useEffect(() => {
//         const countries = Country.getAllCountries();
//         setCountryList(countries);
//     }, []);

//     const handleCountryChange = (event) => {
//         const countryCode = event.target.value;
//         setSelectedCountry(countryCode);
//         setSelectedState('');
//         setSelectedCity('');
//         setCityList([]);  // Clear cities when country changes
//         const states = State.getStatesOfCountry(countryCode);
//         setStateList(states);
//     };

//     const handleStateChange = (event) => {
//         const stateCode = event.target.value;
//         setSelectedState(stateCode);
//         const cities = City.getCitiesOfState(selectedCountry, stateCode);
//         setCityList(cities);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!FirstName || !LastName || !selectedCountry || !selectedState || !selectedCity) {
//             alert("Please fill all the required fields");
//             return;
//         }

//         // Handle the form submission logic (dispatch, navigate, etc.)
//         console.log('Profile updated:', { FirstName, LastName, MobileNo, AddressLineOne, PostalCode, selectedCountry, selectedState, selectedCity });
//         navigate('/'); // Redirect to home page after update
//     };

//     return (
//         <>
//             {/* Helmet for SEO */}
//             <Helmet>
//                 <title>Update Profile</title>
//                 <meta name="description" content="Update Profile" />
//                 <meta name="keywords" content="Update Profile"></meta>
//             </Helmet>

//             {/* Breadcrumbs component (ensure it's defined somewhere in your project) */}
//             {/* <SiteBreadcrumb title="Update Profile" parent="Home" /> */}

//             <section className="login-page section-big-py-space bg-light">
//                 <div className="custom-container">
//                     <Row className="row">
//                         <Col xl="8" lg="8" md="8" className="offset-xl-2 offset-lg-2 offset-md-2">
//                             <div className="theme-card">
//                                 <h3 className="text-center">Update Profile</h3>
//                                 <Form className="theme-form" onSubmit={handleSubmit}>
//                                     <div className="form-row row">
//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="FirstName">First Name <span className="required-field">*</span></Label>
//                                                 <Input
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Enter first name"
//                                                     id="FirstName"
//                                                     name="FirstName"
//                                                     required={true}
//                                                     value={FirstName}
//                                                     onChange={(e) => setFirstName(e.target.value)}
//                                                 />
//                                             </FormGroup>
//                                         </Col>
//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="LastName">Last Name <span className="required-field">*</span></Label>
//                                                 <Input
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Enter last name"
//                                                     id="LastName"
//                                                     name="LastName"
//                                                     required={true}
//                                                     value={LastName}
//                                                     onChange={(e) => setLastName(e.target.value)}
//                                                 />
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="Country">Country</Label>
//                                                 <select
//                                                     className="form-control"
//                                                     name="Country"
//                                                     id="Country"
//                                                     value={selectedCountry}
//                                                     onChange={handleCountryChange}
//                                                 >
//                                                     <option value="">Select Country</option>
//                                                     {countryList.map((country) => (
//                                                         <option key={country.isoCode} value={country.isoCode}>
//                                                             {country.name}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="State">State/Province</Label>
//                                                 <select
//                                                     className="form-control"
//                                                     name="State"
//                                                     id="State"
//                                                     value={selectedState}
//                                                     onChange={handleStateChange}
//                                                 >
//                                                     <option value="">Select State</option>
//                                                     {stateList.map((state) => (
//                                                         <option key={state.isoCode} value={state.isoCode}>
//                                                             {state.name}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="City">City</Label>
//                                                 <select
//                                                     className="form-control"
//                                                     name="City"
//                                                     id="City"
//                                                     value={selectedCity}
//                                                     onChange={(e) => setSelectedCity(e.target.value)}
//                                                 >
//                                                     <option value="">Select City</option>
//                                                     {cityList.map((city) => (
//                                                         <option key={city.id} value={city.name}>
//                                                             {city.name}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="MobileNo">Contact No</Label>
//                                                 <Input
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Enter contact no"
//                                                     id="MobileNo"
//                                                     name="MobileNo"
//                                                     value={MobileNo}
//                                                     onChange={(e) => setMobileNo(e.target.value)}
//                                                 />
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="6">
//                                             <FormGroup>
//                                                 <Label htmlFor="PostalCode">Postal Code</Label>
//                                                 <Input
//                                                     type="number"
//                                                     className="form-control"
//                                                     placeholder="Enter postal code"
//                                                     id="PostalCode"
//                                                     name="PostalCode"
//                                                     value={PostalCode}
//                                                     onChange={(e) => setPostalCode(e.target.value)}
//                                                 />
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="12">
//                                             <FormGroup>
//                                                 <Label htmlFor="AddressLineOne">Shipping Address <span className="required-field">*</span></Label>
//                                                 <Input
//                                                     type="text"
//                                                     className="form-control"
//                                                     placeholder="Enter shipping address"
//                                                     id="AddressLineOne"
//                                                     name="AddressLineOne"
//                                                     required={true}
//                                                     value={AddressLineOne}
//                                                     onChange={(e) => setAddressLineOne(e.target.value)}
//                                                 />
//                                             </FormGroup>
//                                         </Col>

//                                         <Col md="12">
//                                             <button className="btn btn-sm btn-normal mb-3" type="submit" id="lbl_uprofile_submit">
//                                                 Update Profile
//                                             </button>
//                                         </Col>

//                                         <Col md="12">
//                                             <p>
//                                                 <Link to="/" className="txt-default">Go To Home Page</Link>
//                                             </p>
//                                         </Col>
//                                     </div>
//                                 </Form>
//                             </div>
//                         </Col>
//                     </Row>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default UpdateProfile;




//  {/* <select
//                                                     className="form-control"
//                                                     name="CityId"
//                                                     id="CityId"
//                                                     required={false}
//                                                     value={CityId}
//                                                     onChange={(e) => setCityId(e.target.value)}
//                                                 >
//                                                     <option value="-999">Select City</option>
//                                                     {
//                                                         CitiesList?.map((item, idx) =>

//                                                             <option value={item.CityID}>{item.CityName}</option>

//                                                         )}


//                                                 </select> */}



//                                                  {/* <select
//                                                     className="form-control"
//                                                     name="StateProvinceId"
//                                                     id="StateProvinceId"
//                                                     required={false}
//                                                     value={StateProvinceId}
//                                                     onChange={(e) => HandleStateProvinceChagne(e.target.value)}
//                                                 >
//                                                     <option value="-999">Select State</option>
//                                                     {
//                                                         StatesProvincesList?.map((item, idx) =>

//                                                             <option value={item.StateProvinceID}>{item.StateName}</option>

//                                                         )}


//                                                 </select> */}



//                                                  {/* <select
//                                                     className="form-control"
//                                                     name="StateProvinceId"
//                                                     id="StateProvinceId"
//                                                     required={false}
//                                                     value={StateProvinceId}
//                                                     onChange={(e) => HandleStateProvinceChagne(e.target.value)}
//                                                 >
//                                                     <option value="-999">Select State</option>
//                                                     {
//                                                         StatesProvincesList?.map((item, idx) =>

//                                                             <option value={item.StateProvinceID}>{item.StateName}</option>

//                                                         )}


//                                                 </select> */}



//                                                 // const HandleStateProvinceChagne = async (value) => {
//                                                 //     if (value != undefined) {
//                                                 //         await setStateProvinceId(value);

//                                                 //         //--load city data when state changed
//                                                 //         await LoadCitiesData(value);
//                                                 //         // await LoadStateProvinceData();
//                                                 //     }

//                                                 // }

//                                                 // const LoadCitiesData = async (StateValue) => {
//                                                 //     let headersCity = {
//                                                 //         Accept: 'application/json',
//                                                 //         'Content-Type': 'application/json',
//                                                 //     }


//                                                 //     let paramCity = {
//                                                 //         requestParameters: {
//                                                 //             StateProvinceId: StateValue ?? StateProvinceId,
//                                                 //             recordValueJson: "[]",
//                                                 //         },
//                                                 //     };

//                                                 //     //--Get cities list
//                                                 //     let responseCities = await MakeApiCallAsync(Config.END_POINT_NAMES['GET_CITIES_LIST'], null, paramCity, headersCity, "POST", true);
//                                                 //     if (responseCities != null && responseCities.data != null) {
//                                                 //         await setCitiesList(JSON.parse(responseCities.data.data));

//                                                 //     }
//                                                 // }


//                                                 // const LoadStateProvinceData = async () => {
//                                                 //     let headersStateProvince = {
//                                                 //         Accept: 'application/json',
//                                                 //         'Content-Type': 'application/json',
//                                                 //     }


//                                                 //     let paramStateProvince = {
//                                                 //         requestParameters: {
//                                                 //             recordValueJson: "[]",
//                                                 //         },
//                                                 //     };

//                                                 //     //--Get state province list
//                                                 //     let responseStatesProvince = await MakeApiCallAsync(Config.END_POINT_NAMES['GET_STATES_PROVINCES_LIST'], null, paramStateProvince, headersStateProvince, "POST", true);
//                                                 //     if (responseStatesProvince != null && responseStatesProvince.data != null) {
//                                                 //         await setStatesProvincesList(JSON.parse(responseStatesProvince.data.data));

//                                                 //     }
//                                                 // }




import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
import { Country, State, City } from 'country-state-city';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../Store/features/authSlice/authSlice';
import { showSuccessMsg } from '../../../utils/ShowMessage';
import MetaData from '../Layout/MetaData';

const BASE_URL = import.meta.env.VITE_IMG_URL;



const UpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);

    const [name, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmailAddress] = useState('');
    const [file, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [phone, setMobileNo] = useState('');
    const [address, setAddressLineOne] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [PostalCode, setPostalCode] = useState('');


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);

    const [countryrid, setCountryId] = useState(null); // State to store country ID0
    const [staterid, setStateId] = useState(null); 
    const [cnt, setCnt] = useState(null); 
    const [cityrid, setCityrId] = useState(null); // State to store city ID

    const [CityName, setCityByPincode] = useState('')
    const [StateName, setStateByPincode] = useState('')
    const[CountryName,setCountryName]=useState()


    console.log("rtgfdgbfgfff sdfdsdfd", selectedCountry)
    console.log("rtgfdgbfgfff",)

    console.log(selectedState)
    console.log(selectedCity)

    useEffect(() => {
        const countries = Country.getAllCountries();
        setCountryList(countries);
        console.log(countries)
    }, []);


    // const handleCountryChange = async (event) => {
    //     const countryCode = event.target.value;
    //     setSelectedCountry(countryCode);
       
    //     setSelectedState('');
    //     const states = State.getStatesOfCountry(countryCode);
    //     setStateList(states);

    //     // Set the country ID based on selected country index
    //     const countryId = countryList.findIndex(country => country.isoCode === countryCode) + 1;
    //     setCountryId(countryId);
    //     console.log("Selected Country Code:", countryCode);
    //     console.log("Country ID:", countryId);
    //     console.log("sldflsd",cnt)
    // };

    const handleCountryChange = async (event) => {
        const countryCode = event.target.value;
        setSelectedCountry(countryCode);
       
        setSelectedState('');
        const states = State.getStatesOfCountry(countryCode);
        setStateList(states);
    
        // Set the country ID based on selected country index
        const countryId = countryList.findIndex(country => country.isoCode === countryCode) + 1;
        setCountryId(countryId);
    
        // Find the country name based on isoCode
        const selectedCountry = countryList.find(country => country.isoCode === countryCode);
        const countryName = selectedCountry ? selectedCountry.name : '';
    
        // Set the country name to cnt
        setCountryName(countryName);
    
        console.log("Selected Country Code:", countryCode);
        console.log("Country ID:", countryId);
        console.log("Country Name:", countryName);  // This will log the country name
    };
    

    const handleStateChange = (event) => {
        const stateCode = event.target.value;
        setSelectedState(stateCode);
        const cities = City.getCitiesOfState(selectedCountry, stateCode);
        setCityList(cities);

        // Set the state ID based on selected state index
        const stateId = stateList.findIndex(state => state.isoCode === stateCode) + 1;
        setStateId(stateId);
        console.log("Selected State Code:", stateCode);
        console.log("State ID:", stateId);
    };

    const handleCityChange = (event) => {
        const cityName = event.target.value;
        setCityrId(cityList.findIndex(city => city.name === cityName) + 1);
        console.log("Selected City Name:", cityName);
        console.log("City ID:", cityrid);
    };


    // console.log("Stored Country ID:", countryrid);
    // console.log("Stored State ID:", staterid);
    // console.log("Stored City ID:", cityrid);


    const [errorMsg, setErrorMsg] = useState('');

    const showErrorMsg = (message) => {
        setErrorMsg(message);
    };

    useEffect(() => {
        // debugger
        // Only trigger fetch when both country and postal code are set
        if (selectedCountry || PostalCode) {
            const fetchData = async () => {
                try {
                    // Check if the postal code is valid for the selected country (basic validation can be added here)
                    const response = await axios.get(`https://api.zippopotam.us/${selectedCountry}/${PostalCode}`);
                    console.log("Response:", response);

                    if (response.data && response.data.places && response.data.places.length > 0) {
                        // Assuming the API returns a place array, get city and state
                        setCityByPincode(response.data.places[0]['place name']);
                        setStateByPincode(response.data.places[0]['state']);
                        // setErrorMsg(''); // Clear any previous error message
                    } else {
                        showErrorMsg("Pincode does not match the country");
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    showErrorMsg("Pincode Error or not found");
                }
            };

            fetchData();
        } else {
            // If either country or postal code is not selected, show an error
            // showErrorMsg("Please select both Country and Pincode");
        }
    }, [selectedCountry, PostalCode]);


    console.log("PinCode accordding State kya mila hai", CityName)
    console.log("PinCode accordding City Name kya mila hai", StateName)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set preview of the image
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`
            name :      ${name} 
            lname :      ${lname} 
            email :      ${email} 
            phone :      ${phone} 
            addrees :      ${address} 
            shippingAddreess :      ${shippingAddress} 
            PostalCode :      ${PostalCode} 
            selectedCountry :      ${CountryName} 
            selectedState :      ${StateName} 
            selectedCity :      ${CityName} 
            image :      ${file} 
            
            `)
            
            const myform=new FormData


            myform.append("name",name)
            myform.append("lname",lname)
            myform.append("email",email)
            myform.append("phone",phone)
            myform.append("address",address)
            myform.append("shippingAddress",shippingAddress)
            myform.append("PostalCode",PostalCode)
            myform.append("CountryName",CountryName)
            myform.append("CityName",CityName)
            myform.append("StateName",StateName)
            myform.append("file",file)

            myform.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            dispatch(updateUser(myform)).then((data)=>{
                console.log(data.payload)
            if(data.payload.success){
                showSuccessMsg("Profile update Succefully !!")
                navigate("/")
                
            }
            })


    }


    useEffect(() => {

        if (user) {
            setName(user.name)
            setLastName(user.lname)
            setAddressLineOne(user.address)
            setShippingAddress(user.shippingAddress)
            setMobileNo(user.phone)
            setImage(user.file)
            setCityByPincode(user.CityName)
            setEmailAddress(user.email)
            setPostalCode(user.PostalCode)
            setStateByPincode(user.StateName)
            setCountryName(user.CountryName)
            // setSelectedCountry(user.CountryName)

        }
    }, [])


    // console.log("sldfnsld",CountryName)


    return (
        <>
                <MetaData title={"Update Profile"}/>


            <section className="login-page section-big-py-space bg-light">
                <div className="container">


                    <Row className="row">
                        <Col xl="8" lg="8" md="8" className="offset-xl-2 offset-lg-2 offset-md-2">
                            <div className="theme-card">
                                <h3 className="text-center"> Update an Account</h3>
                                <Form className="theme-form" onSubmit={handleSubmit}>
                                    <div className="form-row row">
                                        <Col md="6">
                                            <FormGroup>

                                                <Label htmlFor="FirstName">
                                                    First Name
                                                    <span className="required-field">*</span></Label>
                                                <Input type="text" className="form-control" placeholder="Enter first name" 
                                                id="FirstName" name="name"
                                                value={name}
                                                    required={true}
                                                    onChange={(e) => setName(e.target.value)}
                                                />

                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label htmlFor="lname">
                                                    Last Name
                                                    <span className="required-field">*</span></Label>
                                                <Input type="text" className="form-control" placeholder="Enter last name" id="LastName" name="lname"
                                                value={lname}
                                                    required={true}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>

                                                <Label htmlFor="EmailAddress">
                                                    Email
                                                    <span className="required-field">*</span></Label>
                                                <Input type="email" className="form-control" placeholder="Enter email" id="EmailAddress" name="email"
                                                value={email}
                                                    required={true}
                                                    onChange={(e) => setEmailAddress(e.target.value)}
                                                />



                                            </FormGroup>
                                        </Col>



                                        <Col md="6" className="select_input">
                                            <FormGroup>
                                                <Label htmlFor="CountryName">
                                                    Country
                                                    <span className="required-field">*</span></Label>

                                                <select onChange={handleCountryChange} value={selectedCountry} className="form-control"
                                                    name="CountryName"
                                                    id="CountryName"
                                                    required={true}>
                                                    <option value={user?.CountryName}>{user?user?.CountryName:"Select Country"}</option>
                                                    {countryList.map((country, index) => {
                                                        const countryId = index + 1;
                                                        return (
                                                            <option key={countryId} value={country.isoCode}>
                                                                {country.name}
                                                                
                                                                
                                                            </option>
                                                        );
                                                    })}
                                                </select>

                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup>
                                                <Label htmlFor="PostalCode">
                                                    Postal Code
                                                </Label>
                                                <Input type="number" className="form-control" placeholder="Enter postal code" id="PostalCode" name="PostalCode"
                                                    value={PostalCode}
                                                    onChange={(e) => setPostalCode(e.target.value)}
                                                />
                                                {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">


                                            <FormGroup>

                                                <Label htmlFor="EmailAddress">
                                                    State/Province
                                                    <span className="required-field">*</span></Label>
                                                <Input type="text" className="form-control" placeholder="Enter State/Province" name="StateName"
                                                    id="StateName"
                                                    required={false}
                                                    value={StateName}
                                                    onChange={(e)=>setStateByPincode(e.target.value)}
                                                // onChange={(e) => setEmailAddress(e.target.value)}
                                                />



                                            </FormGroup>
                                        </Col>
                                        <Col md="6">



                                            <FormGroup>

                                                <Label htmlFor="city">
                                                    City
                                                    <span className="required-field">*</span></Label>
                                                <Input type="text" className="form-control" placeholder="Enter City" name="CityName"
                                                    id="CityName"
                                                    required={false}
                                                    value={CityName}
                                                    onChange={(e)=>setCityByPincode(e.target.value)}
                                                // onChange={(e) => setEmailAddress(e.target.value)}
                                                />



                                            </FormGroup>
                                        </Col>


                                        <Col md="6">
                                            <FormGroup>

                                                <Label htmlFor="MobileNo">
                                                    Contact No
                                                </Label>
                                                <Input type="text" className="form-control" placeholder="Enter contact no" id="phone" name="phone"
                                                    onChange={(e) => setMobileNo(e.target.value)}
                                                    value={phone}
                                                />
                                            </FormGroup>
                                        </Col>



                                        <Col md="6">
                                            <FormGroup>
                                                <Label htmlFor="AddressLineOne">
                                                    Address
                                                    <span className="required-field">*</span></Label>
                                                <Input type="text" className="form-control" placeholder="Enter shipping address" id="AddressLineOne" name="address"
                                                    required={true}
                                                    onChange={(e) => setAddressLineOne(e.target.value)}
                                                    value={address}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label htmlFor="AddressLineOne">
                                                    Shipping Address
                                                    <span className="required-field">*</span></Label>
                                                <Input type="text" className="form-control" placeholder="Enter shipping address" id="AddressLineOne" name="shippingAddress"
                                                    required={true}
                                                    onChange={(e) => setShippingAddress(e.target.value)}
                                                    value={shippingAddress}

                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label htmlFor="ProfileImage">Profile Image</Label>
                                                <Input type="file" className="form-control" id="ProfileImage" onChange={handleImageChange}    />
                                            </FormGroup>
                                            {imagePreview && (
                                                <div>
                                                    <img src={user?`${BASE_URL}/${user?.file}`:imagePreview} alt="Image Preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                                </div>
                                            )}
                                        </Col>
                                        <Col md="12" className='text-center'>
                                            <button className="btn primary-btn mb-3 text-light" type="submit" id="lbl_singup_submitbnt">
                                                Create Account
                                            </button>


                                        </Col>


                                    </div>
                                </Form>


                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


        </>
    );
}

export default UpdateProfile;