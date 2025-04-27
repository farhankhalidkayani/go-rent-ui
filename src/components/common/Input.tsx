import React from "react";
import "./Input.css";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = "",
}) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={id} className="input-label">
        {label} {required && <span className="required-mark">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input-field ${error ? "input-error" : ""}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
