import React from 'react';

const SearchBar = ({keyword, onChange}) => {
  const BarStyle = {
    width:"20rem",
    background:"#F0F0F0",
    border:"none",
    padding:"0.5rem",
    "border-radius": "10px",
    "margin-bottom": "10px"
  };
  return (
    <input
     style={BarStyle}
     key="search-bar"
     value={keyword}
     placeholder={"search food trucks"}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;