import React from 'react';
import { searchQuery } from '../reducers/SearchSlice';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className='input-group rounded mt-2 mb-2'>
      <input
        type='search'
        className='form-control rounded'
        placeholder='Search company name'
        aria-label='Search'
        aria-describedby='search-addon'
        onChange={(event) => dispatch(searchQuery(event.target.value))}
      />
    </div>
  );
};

export default Search;
