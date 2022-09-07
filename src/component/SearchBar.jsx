import React from 'react';
import {useState} from 'react'

const SearchBar = ({ searchBarData }) => {
  const [stateSearchBar, setStateSearchBar] = useState('');
  const searchBarHandler = (event) => {
    setStateSearchBar(event.target.value);
    searchBarData(event.target.value);
  };

  return (
    <div>
      <h1>SearchBar</h1>
      <label>
        Search{' '}
        <input type="text" value={stateSearchBar} onChange={searchBarHandler} />{' '}
      </label>
    </div>
  );
};

export default SearchBar;
