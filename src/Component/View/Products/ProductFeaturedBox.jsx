// import React from 'react'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useState } from 'react';

// export default function ProductFeaturedBox() {
//     const [age, setAge] = useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };
//   return (
//     <>
//         <Box sx={{ minWidth: 220,}}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label" style={{color:"#001367",fontStyle:"italic"}}>Featured</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Featured"
//           onChange={handleChange}
//         >
//           <MenuItem value={10} style={{color:"#001367",fontStyle:"italic"}}>Price Assending</MenuItem>
//           <MenuItem value={20} style={{color:"#001367",fontStyle:"italic"}}>Price Descending</MenuItem>
//           <MenuItem value={10} style={{color:"#001367",fontStyle:"italic"}}>Date Assending</MenuItem>
//           <MenuItem value={20} style={{color:"#001367",fontStyle:"italic"}}>Date Descending</MenuItem>
          
//         </Select>
//       </FormControl>
//     </Box>


      
//     </>
//   )
// }




import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductFeaturedBox({ setSortByFilter }) {
    const [selectedValue, setSelectedValue] = useState('');  // Initialize with an empty string or a default value

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value); // Update local state
        if (setSortByFilter) {
            setSortByFilter(value); // Pass the selected value directly to the parent
        }
    };

    return (
        <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{ color: "#001367", fontStyle: "italic" }}>Featured</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue} // Bind the select value to the state
                    label="Featured"
                    onChange={handleChange} // Pass event to handleChange
                >
                    <MenuItem value="Price ASC" style={{ color: "#001367", fontStyle: "italic" }}>Price Ascending</MenuItem>
                    <MenuItem value="Price DESC" style={{ color: "#001367", fontStyle: "italic" }}>Price Descending</MenuItem>
                    <MenuItem value="Date ASC" style={{ color: "#001367", fontStyle: "italic" }}>Date Ascending</MenuItem>
                    <MenuItem value="Date DESC" style={{ color: "#001367", fontStyle: "italic" }}>Date Descending</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
