// import React from 'react'
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// const top100Films = [
//     { label: 'The Shawshank Redemption', year: 1994 },
//     { label: 'The Godfather', year: 1972 },
//     { label: 'The Godfather: Part II', year: 1974 },
//     { label: 'The Dark Knight', year: 2008 },
//     { label: '12 Angry Men', year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: 'Pulp Fiction', year: 1994 },
//     {
//       label: 'The Lord of the Rings: The Return of the King',
//       year: 2003,
//     },
//     { label: 'The Good, the Bad and the Ugly', year: 1966 },
//     { label: 'Fight Club', year: 1999 },
//     {
//       label: 'The Lord of the Rings: The Fellowship of the Ring',
//       year: 2001,
//     },
//     {
//       label: 'Star Wars: Episode V - The Empire Strikes Back',
//       year: 1980,
//     },
//     { label: 'Forrest Gump', year: 1994 },
//     { label: 'Inception', year: 2010 },
//     {
//       label: 'The Lord of the Rings: The Two Towers',
//       year: 2002,
//     },
//     { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//     { label: 'Goodfellas', year: 1990 },
//     { label: 'The Matrix', year: 1999 },
//     { label: 'Seven Samurai', year: 1954 },
//     {
//       label: 'Star Wars: Episode IV - A New Hope',
//       year: 1977,
//     },
//     { label: 'City of God', year: 2002 },
//     { label: 'Se7en', year: 1995 },
//     { label: 'The Silence of the Lambs', year: 1991 },
//     { label: "It's a Wonderful Life", year: 1946 },
//     { label: 'Life Is Beautiful', year: 1997 },
//     { label: 'The Usual Suspects', year: 1995 },
//     { label: 'Léon: The Professional', year: 1994 },
//     { label: 'Spirited Away', year: 2001 },
//     { label: 'Saving Private Ryan', year: 1998 },
//     { label: 'Once Upon a Time in the West', year: 1968 },
//     { label: 'American History X', year: 1998 },
//     { label: 'Interstellar', year: 2014 },
//     { label: 'Casablanca', year: 1942 },
//     { label: 'City Lights', year: 1931 },
//     { label: 'Psycho', year: 1960 },
//     { label: 'The Green Mile', year: 1999 },
//     { label: 'The Intouchables', year: 2011 },
//     { label: 'Modern Times', year: 1936 },
//     { label: 'Raiders of the Lost Ark', year: 1981 },
//     { label: 'Rear Window', year: 1954 },
//     { label: 'The Pianist', year: 2002 },
//     { label: 'The Departed', year: 2006 },
//     { label: 'Terminator 2: Judgment Day', year: 1991 },
//     { label: 'Back to the Future', year: 1985 },
//     { label: 'Whiplash', year: 2014 },
//     { label: 'Gladiator', year: 2000 },
//     { label: 'Memento', year: 2000 },
//     { label: 'The Prestige', year: 2006 },
//     { label: 'The Lion King', year: 1994 },
//     { label: 'Apocalypse Now', year: 1979 },
//     { label: 'Alien', year: 1979 },
//     { label: 'Sunset Boulevard', year: 1950 },
//     {
//       label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//       year: 1964,
//     },
//     { label: 'The Great Dictator', year: 1940 },
//     { label: 'Cinema Paradiso', year: 1988 },
//     { label: 'The Lives of Others', year: 2006 },
//     { label: 'Grave of the Fireflies', year: 1988 },
//     { label: 'Paths of Glory', year: 1957 },
//     { label: 'Django Unchained', year: 2012 },
//     { label: 'The Shining', year: 1980 },
//     { label: 'WALL·E', year: 2008 },
//     { label: 'American Beauty', year: 1999 },
//     { label: 'The Dark Knight Rises', year: 2012 },
//     { label: 'Princess Mononoke', year: 1997 },
    
   
//     {
//       label: 'Eternal Sunshine of the Spotless Mind',
//       year: 2004,
//     },
//     { label: 'Amadeus', year: 1984 },
//     { label: 'To Kill a Mockingbird', year: 1962 },
//     { label: 'Toy Story 3', year: 2010 },
//     { label: 'Logan', year: 2017 },
//     { label: 'Full Metal Jacket', year: 1987 },
  
//   ];
  

// export default function ProductComboBox() {
//     return (
//         <>

//             <Autocomplete
               
//                 disablePortal
//                 options={top100Films}
//                 sx={{ width: 300, }}
//                 renderInput={(params) => <TextField {...params} label="Sort By" style={{color:"red",fontStyle:"italic",}}/>}
//             />
//         </>
//     )
// }



import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductComboBox({ setPageSizeFromProductFilter }) {
    const [selectedValue, setSelectedValue] = useState('');  // Initialize with an empty string or a default value

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value); // Update local state
        if (setPageSizeFromProductFilter) {
            setPageSizeFromProductFilter(value); // Pass the selected value directly to the parent
        }
    };

    return (
        <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{ color: "#001367", fontStyle: "italic" }}>Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue} 
                    label="Featured"
                    onChange={handleChange} 
                >
                    <MenuItem value="10" style={{ color: "#001367", fontStyle: "italic" }}>10 Products Per Page</MenuItem>
                    <MenuItem value="20" style={{ color: "#001367", fontStyle: "italic" }}>20 Products Per Page</MenuItem>
                    <MenuItem value="30" style={{ color: "#001367", fontStyle: "italic" }}>30 Products Per Page</MenuItem>
                    <MenuItem value="40" style={{ color: "#001367", fontStyle: "italic" }}>40 Products Per Page</MenuItem>
                    <MenuItem value="50" style={{ color: "#001367", fontStyle: "italic" }}>50 Products Per Page</MenuItem>
                    <MenuItem value="100" style={{ color: "#001367", fontStyle: "italic" }}>100 Products Per Page</MenuItem>
                  
                </Select>
            </FormControl>
        </Box>
    );
}
