import React from "react";

const FormWorkout: React.FC<{
  id: string;
  title: string;
  type: string;
  classInput: string;
  classLabel: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, title, type, classInput, classLabel, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={id} className={classLabel}>
      {title}
    </label>
    <input
      id={id}
      type={type}
      className={classInput}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormWorkout;
