import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

 const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <h2> Find Contacts By Name</h2>
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Search"
        onChange={evt => dispatch(qwery(evt.currentTarget.value))}
             value={filter}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter