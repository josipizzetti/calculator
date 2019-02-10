import React from 'react';
import PropTypes from 'prop-types';
import './ViewInput.scss';

const ViewInput = ({ lastResult, currentValue }) => (
  <div className='view-input__screen'>
    <div className='view-input__operation'>{lastResult || 0}</div>
    <div className='view-input__typed'>{currentValue || 0}</div>
  </div>
);

ViewInput.propTypes = {
  lastValue: PropTypes.number
};

export default (ViewInput);
