import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';
import { isLoadingSelector } from '../../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <>
      {isLoading ? (
        <p> Loading...</p>
      ) : (
          <>
            <label htmlFor="">Find contacts by name</label>
            <input type="text" id="findContacts" onChange={handleFilterChange} />
          </>
      )}
      
    </>
  );
}

export default Filter;