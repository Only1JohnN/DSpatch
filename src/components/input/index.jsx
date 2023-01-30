import "./styles.css";
import React from "react";

const TextInput = ({
  id,
  label,
  width,
  name,
  value,
  type,
  onChange,
  disabled,
  placeholder,
  required,
  onBlur,
  viewOnly,
}) => {
  return (
    <div className='text-wrap'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label
          style={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px", marginBottom: ".5rem" }}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={id}
          placeholder={placeholder}
          color='#092C4C'
          name={name}
          value={value}
          type={type}
          disabled={disabled || viewOnly}
          onChange={onChange}
          style={{
            maxWidth: width || "100%",
            marginBottom: "20px",
            border: "1px solid #828282",
            height: "50px",
            paddingLeft: "12px",
            borderRadius: "3px",
          }}
          required={required}
          className='input_comp'
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default TextInput;
