import React from "react";

function CheckboxInput({ id, label, checked, onChange }) {
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckboxInput;
