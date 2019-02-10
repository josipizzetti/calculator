import React from 'react';
import PropTypes from 'prop-types';
import './CalcButtonRow.scss';

const CalcButtonRow = ({ options, handleClickButton }) => (
  <div className='calc-button-row'>
    {options.map(opt =>
      <div
        key={opt.label}
        name={opt.label}
        className={`calc-btn calc-btn__${opt.class}`}
        onClick={() => handleClickButton((opt.value || opt.label))}>
        {opt.label}
      </div>
    )}
  </div>
);

CalcButtonRow.propTypes = {
  options: PropTypes.array
};

export default (CalcButtonRow);
