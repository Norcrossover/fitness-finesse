import React from "react";
import FormWorkout from "./FormWorkout";

const SetFields = ({ exerciseId, set, handleSetChange }) => (
  <div className="sm:flex justify-around">
    <FormWorkout
      id={`numReps-${exerciseId}-${set.id}`}
      title="# of Reps"
      type="number"
      value={set.reps}
      onChange={(e) => handleSetChange(exerciseId, set.id, e)}
      classInput="input-workout lg:inline-block"
      classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
    />
    <FormWorkout
      id={`numWeight-${exerciseId}-${set.id}`}
      title="Weight (lbs)"
      type="number"
      value={set.weight}
      onChange={(e) => handleSetChange(exerciseId, set.id, e)}
      classInput="input-workout lg:inline-block"
      classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
    />
  </div>
);

export default SetFields;
