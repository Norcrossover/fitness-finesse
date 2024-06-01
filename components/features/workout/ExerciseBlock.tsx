import React, { ChangeEvent } from "react";
import FormWorkout from "@/components/features/workout/FormWorkout";
import Button from "@/components/common/Button";
import { ExerciseLog } from "@/models/WorkoutLog";

interface ExerciseBlockProps {
  exercise: ExerciseLog;
  handleExerciseChange: (oldName: string, newName: string) => void;
  handleSetChange: (
    exerciseName: string,
    setIndex: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  addSet: (exerciseName: string) => void;
  removeSet: (exerciseName: string) => void;
}

const ExerciseBlock: React.FC<ExerciseBlockProps> = ({
  exercise,
  handleExerciseChange,
  handleSetChange,
  addSet,
  removeSet,
}) => {
  const handleNameChange = (e) => {
    handleExerciseChange(exercise.name, e.target.value);
  };

  return (
    <div className="exercise-block mb-8">
      <FormWorkout
        id={`exerciseName-${exercise.name}`}
        title="Exercise Name"
        type="text"
        value={exercise.name}
        onChange={handleNameChange}
        classInput="input-workout lg:inline-block"
        classLabel="label-workout lg:inline-block lg:mr-8 mt-8"
      />
      {exercise.sets.map((set, index) => (
        <div key={index} className="sm:flex justify-around">
          <FormWorkout
            id={`numReps-${exercise.name}-${index}`}
            title="# of Reps"
            type="number"
            value={set.reps}
            onChange={(e) => handleSetChange(exercise.name, index, e)}
            classInput="input-workout lg:inline-block"
            classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
          />
          <FormWorkout
            id={`numWeight-${exercise.name}-${index}`}
            title="Weight (lbs)"
            type="number"
            value={set.weight}
            onChange={(e) => handleSetChange(exercise.name, index, e)}
            classInput="input-workout lg:inline-block"
            classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
          />
        </div>
      ))}
      <div className="flex justify-center sm:justify-start gap-4 mt-4">
        <Button
          text="+ Add Set"
          className="button-rounded-cyan"
          onClick={() => addSet(exercise.name)}
          type="button"
        />
        <Button
          text="- Remove Set"
          className="button-rounded-cyan"
          onClick={() => removeSet(exercise.name)}
          type="button"
        />
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default ExerciseBlock;
