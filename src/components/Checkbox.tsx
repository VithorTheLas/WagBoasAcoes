import React, { useState } from "react";

interface CheckboxProps {
  required?: boolean;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  required = false,
  checked = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
  };

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        required={required}
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`w-8 h-8 border border-white rounded-lg transition-colors duration-200 ease-in-out ${
          isChecked
            ? "bg-blue-500 border-blue-500"
            : "bg-custom-blue border-gray-300"
        }`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
