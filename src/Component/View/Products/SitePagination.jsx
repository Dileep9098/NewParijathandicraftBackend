// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Pagination from "react-js-pagination";



// const SitePagination = (props) => {

//     const [activePage, setActivePage] = useState(props.CurrentPage);
//     const [TotalRecords, setTotalRecords] = useState(props.TotalRecords);
//     const [PageSize, setPageSize] = useState(props.PageSize);



//     const handlePageChange = (pageNumber) => {

//         console.log(`active page is ${pageNumber}`);
//         // setActivePage(pageNumber);
//         props.setCurrentPage(pageNumber);
//     }


//     useEffect(() => {

//     }, [])


//     return (

//         <div style={{ marginTop: "14px", float: "right" }}>
//             <Pagination
//                 activePage={activePage}
//                 itemsCountPerPage={PageSize}
//                 totalItemsCount={TotalRecords}
//                 pageRangeDisplayed={5}
//                 onChange={handlePageChange.bind(this)}
//                 prevPageText={"prev"}
//                 nextPageText={"next"}
//                 activeclassName={"page-item active"}
//                 activeLinkclassName={"page-link"}
//                 itemclassName={"page-item pagination-li-item-custom"}
//                 innerclassName={"pagination"}
//                 linkclassName={"page-link"}


//             />
//         </div>

//     );

// }

// export default SitePagination;




// import React from 'react';
// import Pagination from "react-js-pagination";

// const SitePagination = (props) => {

//     const handlePageChange = (pageNumber) => {
//         console.log(`active page is ${pageNumber}`);
//         props.setCurrentPage(pageNumber);
//     }

//     return (
//         <div className='pagination-product'>
//             {/* <Pagination
//                 activePage={props.PageNo}
//                 itemsCountPerPage={props.PageSize}
//                 totalItemsCount={props.TotalRecords}
//                 pageRangeDisplayed={5}
//                 onChange={handlePageChange}
//                 prevPageText={"prev"}
//                 nextPageText={"next"}
//                 activeclassName={"page-item active"}
//                 activeLinkclassName={"page-link"}
//                 itemclassName={"page-item pagination-li-item-custom"}
//                 innerclassName={"pagination"}
//                 linkclassName={"page-link"}
//             /> */}


//             {/* <Pagination
//                 activePage={props.PageNo}
//                 itemsCountPerPage={props.PageSize}
//                 totalItemsCount={props.TotalRecords || 0}  // default to 0 if TotalRecords is null
//                 pageRangeDisplayed={5}
//                 onChange={handlePageChange}
//                 prevPageText={"prev"}
//                 nextPageText={"next"}
//                 activeclassName={"page-item active"}
//                 activeLinkclassName={"page-link"}
//                 itemclassName={"page-item pagination-li-item-custom"}
//                 innerclassName={"pagination"}
//                 linkclassName={"page-link"}
//             /> */}
// <Pagination
//     activePage={props.PageNo}
//     itemsCountPerPage={props.PageSize}
//     totalItemsCount={props.TotalRecords || 0}
//     pageRangeDisplayed={5}
//     onChange={handlePageChange}
//     prevPageText={"prev"}
//     nextPageText={"next"}
//     activeClass={"page-item active"}         // ✅ Correct
//     activeLinkClass={"page-link"}           // ✅ Correct
//     itemClass={"page-item pagination-li-item-custom"}  // ✅ Correct
//     innerClass={"pagination"}               // ✅ Correct
//     linkClass={"page-link"}                 // ✅ Correct
// />

//         </div>
//     );
// }

// export default SitePagination;



import React from 'react';
import Pagination from "react-js-pagination";

const SitePagination = (props) => {

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        props.setCurrentPage(pageNumber);
    }

    return (
      <div className="pagination-product">
  <Pagination
    activePage={props.PageNo}
    itemsCountPerPage={props.PageSize}
    totalItemsCount={props.TotalRecords || 0}
    pageRangeDisplayed={window.innerWidth < 576 ? 5 : 5}
    onChange={handlePageChange}
    prevPageText={"«"}
    nextPageText={"»"}
    activeClass={"page-item active"}
    activeLinkClass={"page-link"}
    itemClass={"page-item pagination-li-item-custom"}
    innerClass={"pagination justify-content-center"}
    linkClass={"page-link"}
  />
</div>

    );
}

export default SitePagination;
