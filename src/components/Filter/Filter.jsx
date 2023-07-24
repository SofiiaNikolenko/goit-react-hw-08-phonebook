import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filter/filterSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="findContacts">Find contacts by name</label>
      <input
        type="text"
        id="findContacts"
        onChange={handleFilterChange}
        placeholder="Enter contact name"
      />
    </div>
  );
}

export default Filter;
