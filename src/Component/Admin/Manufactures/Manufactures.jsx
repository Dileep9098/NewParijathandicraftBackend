




// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import { useDispatch, useSelector } from 'react-redux';
// import { format } from 'date-fns';
// import { showSuccessMsg, showErrorMsg } from '../../../utils/ShowMessage';
// import Loader from '../../View/Loader/Loader';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import Avatar from '@mui/material/Avatar'; // Avatar component from MUI
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// import {  deleteParentCategory, getAllParentCategory, parentCategory, updateParentCategory } from "../../../Store/features/category/categorySlice"

// import "../Category/category.css"
// import axiosInstance from '../../../ApiHendler/axiosInstance';



// export default function Manufactures() {


//     const dispatch = useDispatch();
//     const { isLoading, parentCategories, error, childCategories } = useSelector((state) => state.category);


//     // ===== Parent Category 

//     const [parentCategoryName, setParentCategoryName] = useState()
//     const [parentCategoryImage, setParentCategoryId] = useState()
//     const [getId, setGetId] = useState()

//     const handleMainCategotry = async (e) => {
//         e.preventDefault();

//         const myform = new FormData();
//         myform.append("pname", parentCategoryName);
//         myform.append("file", parentCategoryImage);
//         try {
//             dispatch(parentCategory(myform)).then((data) => {
//                 if (data.payload.success) {
//                     showSuccessMsg("Parent Category added successfully!");
//                     dispatch(getAllParentCategory())
//                 }
//             });
//         } catch (error) {
//             showErrorMsg("Failed to add Parent Category.");
//         }
//     }

//     useEffect(() => {
//         dispatch(getAllParentCategory())
//     }, [])

//     const parentcolumns = [
//         { field: 'id', headerName: 'ID', },
//         {
//             field: 'avatar', headerName: 'Avatar', width: 150, renderCell: (params) => (
//                 <Avatar alt={params.row.Name} src={`/image/category/${params.row.Image}`} />
//             )
//         },

//         { field: 'Name', headerName: 'Name', width: 300 },
//         { field: 'createAt', headerName: 'CreateAt', width: 200 },
//         {
//             field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => (
//                 <div>
//                     <Button color="primary" onClick={() => handleEdit(params.row.dataId)} data-bs-toggle="modal" data-bs-target="#exampleModalEdit" data-bs-whatever="@mdo1"><EditIcon /></Button>
//                     <Button color="secondary" onClick={() => handleDelete(params.row.dataId)}><DeleteIcon /></Button>
//                 </div>
//             )
//         }
//     ]
//     const rows = (parentCategories || []).map((category, index) => ({

//         id: index + 1,
//         dataId: category._id,
//         Image: category.file,
//         Name: category.name,
//         createAt: category.createdAt ? format(new Date(category.createdAt), 'PPP') : 'N/A',

//     }));


//     const handleDelete = (id) => {
//         console.log(id)
//         try {
//             dispatch(deleteParentCategory(id)).then((data) => {
//                 if (data.payload.success) {
//                     showSuccessMsg(data.payload.message)
//                     dispatch(getAllParentCategory())
//                 }
//                 else {
//                     showErrorMsg(data.payload.message)
//                 }
//             })
//         } catch (error) {
//             showErrorMsg(error)
//         }

//     }


//     const handleEdit = (id) => {
//         setGetId(id)
//         try {
//             const category = parentCategories.find(category => category._id === id);

//             if (category) {
//                 setParentCategoryName(category.name);
//                 setParentCategoryId(category.file);
//             }

//         } catch (error) {
//             console.log(error);
//         }

//     }

//     const handleSubmitEdit = (e) => {
//         e.preventDefault();
//         try {
//             const myform = new FormData();
//             myform.append("pname", parentCategoryName);
//             if (parentCategoryImage) {
//                 myform.append("file", parentCategoryImage);
//             }
//             //     myform.forEach((value, key) => {
//             //     console.log(`${key}: ${value}`);
//             // });

//             dispatch(updateParentCategory({ getId, myform })).then((data) => {
//                 console.log(data.payload)
//                 if (data.payload.success) {
//                     showSuccessMsg(data.payload.message)
//                     dispatch(getAllParentCategory())
//                 }
//             });

//         } catch (error) {
//             console.log(error);
//         }
//     };



//     return (
//         <>
//             {isLoading ? <Loader /> : (
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="page-title-box">
//                                 <div className="page-title-right">
//                                     <ol className="breadcrumb m-0">
//                                         <li className="breadcrumb-item"><Link to="#" className='text-primary'> Category</Link></li>
//                                         <li className="breadcrumb-item active">Category</li>
//                                     </ol>
//                                 </div>
//                                 <h4 className="page-title"><i className="ri-align-left me-2"></i>Category</h4>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="col-12">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <div className="row mb-2">
//                                         <div className="col-sm-5">
//                                             <div className="dropdown dropdownAction">
//                                                 <Tooltip title="Add Categories" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
//                                                     <IconButton>
//                                                         <Stack direction="row" spacing={2}>
//                                                             <Button variant="contained" endIcon={<AddIcon />}>
//                                                                 Add Category
//                                                             </Button>
//                                                         </Stack>
//                                                     </IconButton>
//                                                 </Tooltip>
//                                                 <div className="dropdown-menu dropdown-menu-start">
//                                                     <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo1"> <i className="mdi mdi-ray-vertex me-1"></i> Main Category</Link>

//                                                     <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> <i className="mdi mdi-relation-many-to-one me-1"></i> Sub Category</Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-sm-7">
//                                             <div className="text-sm-end">
//                                                 <button type="button" className="btn btn-success mb-2 me-1">
//                                                     <i className="mdi mdi-cog-outline"></i>
//                                                 </button>
//                                                 <button type="button" className="btn btn-light mb-2 me-1">Import</button>
//                                                 <button type="button" className="btn btn-light mb-2">Export</button>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="row">
//                                         <div className="col-12 categoriesTable mb-3">
//                                             <h3>Main Category</h3>
//                                             <Box sx={{ height: 400, width: '100%' }}>
//                                                 <DataGrid
//                                                     rows={rows}
//                                                     columns={parentcolumns}
//                                                     initialState={{
//                                                         pagination: {
//                                                             paginationModel: {
//                                                                 pageSize: 5,
//                                                             },
//                                                         },
//                                                     }}
//                                                     pageSizeOptions={[5]}
//                                                     checkboxSelection
//                                                     disableRowSelectionOnClick
//                                                 />
//                                             </Box>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel"> Add Parent Category</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={handleMainCategotry} enctype="multipart/form-data">
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6">
//                                         <label htmlFor="" className=''> Category Name :</label>
//                                         <input type="text" className="form-control" placeholder="Enter Category Name" name="pname" onChange={(e) => setParentCategoryName(e.target.value)} value={parentCategoryName} />

//                                     </div>
//                                     <div className="col-lg-6">
//                                         <label htmlFor="" className=''> Parent Category Image :</label>
//                                         <input type="file" className="form-control" name="file" onChange={(e) => setParentCategoryId(e.target.files[0])} />

//                                     </div>

//                                 </div>

//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                     <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Save Category</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Update Parent Category</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={handleSubmitEdit} encType="multipart/form-data">
//                                 <div className="row mb-2">
//                                     <div className="col-lg-6">
//                                         <label htmlFor="" className="">Category Name:</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Enter Category Name"
//                                             name="pname"
//                                             onChange={(e) => setParentCategoryName(e.target.value)} // Update name
//                                             value={parentCategoryName} // Bind state to input
//                                         />
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <label htmlFor="" className="">Parent Category Image:</label>
//                                         <input
//                                             type="file"
//                                             className="form-control"
//                                             name="file"
//                                             onChange={(e) => setParentCategoryId(e.target.files[0])} // Update image file
//                                         />
//                                         {/* If there is an existing image, display it */}
//                                         {parentCategoryImage && <img src={`/image/category/${parentCategoryImage}`} alt="Current Category Image" style={{ width: '80px', marginTop: '10px' }} />}
//                                     </div>
//                                 </div>

//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                     <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save Category</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     );
// }



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { showSuccessMsg, showErrorMsg } from '../../../utils/ShowMessage';
import Loader from '../../View/Loader/Loader';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import "../Category/category.css";
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';

export default function Manufactures() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [displaySeqNo, setDisplaySeqNo] = useState('');
    const [IsActive, setIsActive] = useState('');
    const [getId, setGetId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [allMenufactures, setAllMenufactures] = useState([])

    useEffect(() => {

        const fatchData = async () => {
            try {
                //   debugger
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_MENUFACTURES"], { withCredentials: true })
                // console.log(response)

                if (response.data.success) {
                    setAllMenufactures(response.data.menufactures)
                    //   dispatch(getAllSubCategory())
                }
                else {
                    showErrorMsg(response.data.message)
                }
            } catch (error) {
                showErrorMsg(error.response.data.message);

            }
        }

        fatchData();


        console.log("All Menufacturs me kya", allMenufactures)

    }, [dispatch]);

    const handleMenufatures = async (e) => {
        e.preventDefault();

        try {
            //   debugger
            const response = await axiosInstance.post(Config.END_POINT_LIST["ADD_MENUFATURES"], { IsActive, name, displaySeqNo ,address}, { withCredentials: true })
            // console.log(response)

            if (response.data.success) {
                showSuccessMsg(response.data.message)
                //   dispatch(getAllSubCategory())
            }
            else {
                showErrorMsg(response.data.message)
            }
        } catch (error) {
            showErrorMsg(error.response.data.message);

        }

    };

    const handleDelete = async (id) => {
        try {
            //   debugger
            const response = await axiosInstance.delete(`${Config.END_POINT_LIST["DELETE_MENUFACTURES"]}/${id}`, { withCredentials: true })
            // console.log(response)

            if (response.data.success) {
                showSuccessMsg(response.data.message)
                setAllMenufactures((prevState) => prevState.filter((category) => category._id !== id));
            }
            else {
                showErrorMsg(response.data.message)
            }
        } catch (error) {
            showErrorMsg(error.response.data.message);

        }

    };

    // debugger
    const handleEdit = async (id) => {
        console.log(id)
        setGetId(id)

        try {
            const category = allMenufactures.find(category => category._id === id);
            //  debugger
            if (category) {
                setName(category.name);
                setAddress(category.address?category.address:"");
                setIsActive(category.IsActive);
                setDisplaySeqNo(category.displaySeqNo);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handelEditManufactures = async (e) => {
        e.preventDefault();
        try {
            //   debugger
            const response = await axiosInstance.put(`${Config.END_POINT_LIST["UPDATE_MENUFACTURES"]}/${getId}`, { IsActive, name, displaySeqNo,address }, { withCredentials: true })
            // console.log(response)

            if (response.data.success) {
                showSuccessMsg(response.data.message)
                setAllMenufactures((prevState) =>
                    prevState.map((category) =>
                        category._id === getId
                            ? { ...category, name, IsActive, displaySeqNo,address } 
                            : category
                    )
                );
            }
            else {
                showErrorMsg(response.data.message)
            }
        } catch (error) {
            showErrorMsg(error.response.data.message);

        }

    }

    const filteredCategories = (allMenufactures || []).filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link to="#" className='text-primary'> Manufactures</Link></li>
                                    <li className="breadcrumb-item active">Manufactures</li>
                                </ol>
                            </div>
                            <h4 className="page-title"><i className="ri-align-left me-2"></i>Manufactures</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-sm-5">
                                        <div className="dropdown dropdownAction">
                                            <Button variant="contained" endIcon={<AddIcon />} data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                                Add New
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-sm-end">
                                            <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                                            <button type="button" className="btn btn-light mb-2">Export</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 categoriesTable mb-3">
                                        <h3>Manufactures</h3>
                                        <input
                                            type="text"
                                            style={{ float: "right", border: "2px solid gray", color: "black", fontStyle: "italic" }}
                                            className="form-control mb-3 w-25 "
                                            placeholder="Search manufactures.."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <div className="table-responsive">


                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr className="text-light" style={{ backgroundImage: "linear-gradient(to right, #243949 0%, #496b86 100%)", color: "white" }}>

                                                        <th className='text-light fs-5'>ID</th>
                                                        <th className='text-light fs-5'>Name</th>
                                                        <th className='text-light fs-5'>Address</th>
                                                        <th className='text-light fs-5'>Status</th>
                                                        <th className='text-light fs-5'>CreateAt</th>
                                                        <th className='text-light fs-5'>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentItems.map((category, index) => (
                                                        <tr key={category._id}>
                                                            <td>{index + 1}</td>

                                                            <td>{category.name}</td>
                                                            <td>{category.address??"N/A"}</td>
                                                            <td ><span style={{ backgroundColor: category.IsActive === "true" ? '#66bb6a' : '#03a9f4', color: "white", padding: '3px 10px', borderRadius: '5px', textAlign: 'center', fontSize: "12px" }}>{category.IsActive === 'true' ? "Active" : "InActive"}</span></td>
                                                            <td>{category.createdAt ? format(new Date(category.createdAt), 'PPP') : 'N/A'}</td>


                                                            <td>
                                                                <div className="dropdown dropdownAction">
                                                                    <Tooltip title="Action" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <IconButton>
                                                                            <FormatListBulletedIcon />
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                    <div className="dropdown-menu dropdown-menu-end">

                                                                        <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => handleEdit(category._id)} > <i className="mdi mdi-square-edit-outline me-1"  ></i> Edit</Link>
                                                                        <Link className="dropdown-item" onClick={() => handleDelete(category._id)}> <i className="mdi mdi-delete me-1"></i> Delete</Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Pagination */}
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
                                                </li>
                                                {[...Array(totalPages)].map((_, index) => (
                                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                        <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                                                    </li>
                                                ))}
                                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Add Category Modal */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Menufactures </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleMenufatures}>
                                <div className="row mb-2">
                                    <div className="col-lg-6">
                                        <label htmlFor="" className=''>Manufacturer Name :</label>
                                        <input type="text" className="form-control" placeholder="Enter Manufacturer Name " name="name" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="example-multiselect1" className="form-label">Is Active :</label>
                                        <select id="example-multiselect1" className="form-control" name="IsActive" onChange={(e) => setIsActive(e.target.value)} >
                                            <option value="" selected>Select One</option>
                                            <option value="true"> Active</option>
                                            <option value="false">In Active</option>

                                        </select>
                                    </div>
                                    <div className="col-lg-6 mt-2">
                                        <label htmlFor="" className='Display Seq No'>Display Seq No  :</label>
                                        <input type="number" className="form-control" placeholder="Display Seq No " name="displaySeqNo" onChange={(e) => setDisplaySeqNo(e.target.value)} value={displaySeqNo} />
                                    </div>
                                    <div className="col-lg-6 mt-2">
                                        <label htmlFor="" className='Address'>Address  :</label>
                                        <input type="text" className="form-control" placeholder="Address " name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Menufactures </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handelEditManufactures}>
                                <div className="row mb-2">
                                    <div className="col-lg-6">
                                        <label htmlFor="" className=''>Manufacturer Name :</label>
                                        <input type="text" className="form-control" placeholder="Enter Manufacturer Name " name="name" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="example-multiselect1" className="form-label">Is Active :</label>
                                        <select id="example-multiselect1" className="form-control" name="IsActive" onChange={(e) => setIsActive(e.target.value)} value={IsActive} >
                                            <option value="" selected>Select One</option>
                                            <option value="true"> Active</option>
                                            <option value="false">In Active</option>

                                        </select>
                                    </div>
                                    <div className="col-lg-6 mt-2">
                                        <label htmlFor="" className='Display Seq No'>Display Seq No  :</label>
                                        <input type="number" className="form-control" placeholder="Display Seq No " name="displaySeqNo" onChange={(e) => setDisplaySeqNo(e.target.value)} value={displaySeqNo} />
                                    </div>
                                    <div className="col-lg-6 mt-2">
                                        <label htmlFor="" className='Address'>Address  :</label>
                                        <input type="text" className="form-control" placeholder="Address " name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
