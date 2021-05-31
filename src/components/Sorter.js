import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Sorter({ onChange }) {
  const [sortBy, setSortBy] = useState('title');

  const onChangeHandle = e => {
    setSortBy(e.target.value);
    onChange(e.target.value);
  };

  return (
    <label key="sorter">
      Sort by&nbsp;
      <select onChange={onChangeHandle} value={sortBy}>
        <option>title</option>
        <option>author</option>
      </select>
    </label>
  );
}

Sorter.propTypes = {
  onChange: PropTypes.func,
};
