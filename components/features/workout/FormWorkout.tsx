import React, { ChangeEvent } from "react";

interface FormWorkoutProps {
  id: string;
  title: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  classInput: string;
  classLabel: string;
}

const FormWorkout: React.FC<FormWorkoutProps> = ({
  id,
  title,
  type,
  value,
  onChange,
  classInput,
  classLabel,
}) => {
  return (
    <div className="form-workout">
      <label htmlFor={id} className={classLabel}>
        {title}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={classInput}
      />
    </div>
  );
};

export default FormWorkout;
