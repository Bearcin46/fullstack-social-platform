import React from "react";

interface inputs {
  type?: string;
  name: string;
  placeholder: string;
  error: string | any;
  label: string;
  register: object;
}

const FormInput: React.FC<inputs> = ({
  type = "text",
  error,
  placeholder,
  name,
  label,
  register,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} name={name} {...register} />
      {error && <small>{error.message}</small>}
    </div>
  );
};

export default FormInput;
