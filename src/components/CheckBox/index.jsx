import React from "react";
import "./Checkbox.css";
import CheckIcon from "./CheckIconNew";

const CheckboxNew = ({ id, children, name, onClick, onChange, value, loading }) => (
  <div className='checkbox-new'>
    <input
      id={id}
      name={name}
      checked={value}
      onChange={onChange}
      type='checkbox'
      disabled={loading}
    />
    <label onClick={() => !loading && onClick && onClick()} htmlFor={id}>
      {loading ? (
        <div />
      ) : (
        <div className='checkIcon'>
          <div className='checked flexed-center'>
            <CheckIcon />
          </div>
        </div>
      )}
      <span>{children}</span>
    </label>
  </div>
);

export default CheckboxNew;
