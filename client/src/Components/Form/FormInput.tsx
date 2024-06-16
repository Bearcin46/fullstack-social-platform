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
    <div className="flex flex-col mb-4 gap-2 relative">
      <label htmlFor={name} className="font-semibold text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...register}
        className={`px-5 py-2 rounded-sm ${error ? "border-red-800" : ""}`}
      />
      {error && error.message && (
        <small className="text-xs font-semibold text-red-800">
          {error.message}
        </small>
      )}
    </div>
  );
};

export default FormInput;
