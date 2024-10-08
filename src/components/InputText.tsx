import React, { ChangeEvent } from "react";

interface InputTextProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  value,
  onChange,
  required = false,
  type = "text",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <div className="text-base font-normal mb-2">{label}</div>
      <input
        type={type}
        id={id}
        className="border border-white rounded-lg bg-custom-blue w-full py-3 px-4 text-white placeholder-gray-300"
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
