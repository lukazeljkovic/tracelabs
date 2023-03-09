import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';


const SearchBar = ({placeholder, onChange, id}) => {
  return (
    <div>
        <SearchIcon />
        <Input
        id = {id}
        placeholder={placeholder}
        onChange={onChange}
        />
        <p></p>
    </div>
  )
}

export default SearchBar