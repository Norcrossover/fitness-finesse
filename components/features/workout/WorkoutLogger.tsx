"use client";
import { ChangeEvent, useState } from "react";
import FormWorkout from "@/components/features/workout/FormWorkout";
import Button from "@/components/common/Button";
import ExerciseBlock from "./ExerciseBlock";
import axios from "axios";
import { ExerciseSet, ExerciseLog, WorkoutLog } from "@/models/WorkoutLog";

const WorkoutLogger = () => {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [exercises, setExercises] = useState<ExerciseLog[]>([
    { name: "", sets: [{ reps: 0, weight: 0 }] },
  ]);

  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: [{ reps: 0, weight: 0 }] }]);
  };

  const removeExercise = () => {
    if (exercises.length > 1) {
      setExercises(exercises.slice(0, -1));
    }
  };

  const addSet = (exerciseName: string) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.name === exerciseName) {
          return {
            ...exercise,
            sets: [...exercise.sets, { reps: 0, weight: 0 }],
          };
        }
        return exercise;
      }),
    );
  };

  const removeSet = (exerciseName: string) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.name === exerciseName && exercise.sets.length > 1) {
          return {
            ...exercise,
            sets: exercise.sets.slice(0, -1),
          };
        }
        return exercise;
      }),
    );
  };

  const handleExerciseChange = (oldName: string, newName: string) => {
    const newExercises = exercises.map((exercise) => {
      if (exercise.name === oldName) {
        return { ...exercise, name: newName };
      }
      return exercise;
    });
    setExercises(newExercises);
  };

  const handleSetChange = (
    exerciseName: string,
    setIndex: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newExercises = exercises.map((exercise) => {
      if (exercise.name === exerciseName) {
        return {
          ...exercise,
          sets: exercise.sets.map((set: ExerciseSet, index) => {
            if (index === setIndex) {
              return {
                ...set,
                [event.target.name]: Number(event.target.value),
              };
            }
            return set;
          }),
        };
      }
      return exercise;
    });
    setExercises(newExercises);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const workoutLog: WorkoutLog = {
      userId: "userId", // Replace with actual userId
      exerciseList: exercises.map((exercise) => ({
        name: exercise.name,
        sets: exercise.sets.map((set: ExerciseSet) => ({
          reps: set.reps,
          weight: set.weight,
        })),
      })),
    };
    try {
      await axios.post("/api/workoutlogs", workoutLog);
      // Clear form fields after submission
      setWorkoutName("");
      setExercises([{ name: "", sets: [{ reps: 0, weight: 0 }] }]);
    } catch (error) {
      console.error("Error saving workout log:", error);
    }
  };

  return (
    <div className="container mx-auto text-white text-center sm:text-left my-14">
      <div className="w-5/6 mx-auto sm:w-full">
        <form className="bg-slate-800 p-10 rounded-xl" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold sm:text-left">
            Enter in your workout name
          </h2>
          <FormWorkout
            id="workoutName"
            title="Workout Name"
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            classInput="input-workout lg:inline-block"
            classLabel="label-workout lg:inline-block lg:mr-8 mt-8"
          />
          <hr className="my-4" />
          <h2 className="text-xl font-semibold sm:text-left">
            Enter in your exercise details
          </h2>
          {exercises.map((exercise, index) => (
            <ExerciseBlock
              key={index}
              exercise={exercise}
              handleExerciseChange={handleExerciseChange}
              handleSetChange={handleSetChange}
              addSet={addSet}
              removeSet={removeSet}
            />
          ))}
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <Button
              text="+ Add Exercise"
              className="button-rounded-cyan"
              onClick={addExercise}
              type="button"
            />
            <Button
              text="- Remove Exercise"
              className="button-rounded-cyan"
              onClick={removeExercise}
              type="button"
            />
          </div>
          <Button
            text="Submit"
            className="button-rounded-cyan mt-8"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default WorkoutLogger;
