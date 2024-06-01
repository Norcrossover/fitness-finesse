"use client";
import { ChangeEvent, useState } from "react";
import Button from "@/components/common/Button";
import ExerciseBlock from "./ExerciseBlock";
import axios from "axios";
import { ExerciseLog, WorkoutLog, ExerciseSet } from "@/models/WorkoutLog";
import ExerciseLogger from "./ExerciseLogger";

const WorkoutLogger = () => {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [exercises, setExercises] = useState<ExerciseLog[]>([
    { name: "", sets: [{ reps: 0, weight: 0 }] },
  ]);

  const addExercise = (): void => {
    setExercises([...exercises, { name: "", sets: [{ reps: 0, weight: 0 }] }]);
  };

  const removeExercise = (): void => {
    if (exercises.length > 1) {
      setExercises(exercises.slice(0, -1));
    }
  };

  const addSet = (exerciseName: string): void => {
    setExercises(
      exercises.map((exercise: ExerciseLog) => {
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

  const removeSet = (exerciseName: string): void => {
    setExercises(
      exercises.map((exercise: ExerciseLog) => {
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

  const handleExerciseChange = (oldName: string, newName: string): void => {
    const newExercises = exercises.map((exercise: ExerciseLog) => {
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
  ): void => {
    const newExercises = exercises.map((exercise: ExerciseLog) => {
      if (exercise.name === exerciseName) {
        return {
          ...exercise,
          sets: exercise.sets.map((set: ExerciseSet, index: number) => {
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

  const clearFormFields = () => {
    setWorkoutName("");
    setExercises([{ name: "", sets: [{ reps: 0, weight: 0 }] }]);
  };

  const submitWorkoutLog = async (workoutLog: WorkoutLog): Promise<void> => {
    try {
      await axios.post("/api/workoutlogs", workoutLog);
      clearFormFields();
    } catch (error) {
      console.error("Error saving workout log:", error);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    const workoutLog: WorkoutLog = {
      userId: "userId", // Replace with actual userId
      exerciseList: exercises.map((exercise: ExerciseLog) => ({
        name: exercise.name,
        sets: exercise.sets.map((set: ExerciseSet) => ({
          reps: set.reps,
          weight: set.weight,
        })),
      })),
    };
    submitWorkoutLog(workoutLog);
  };

  return (
    <div className="container mx-auto text-white text-center sm:text-left my-14">
      <div className="w-5/6 mx-auto sm:w-full">
        <form className="bg-slate-800 p-10 rounded-xl" onSubmit={handleSubmit}>
          <ExerciseLogger num={1} title="New Workout" />
          {/* <FormWorkout
            id="workoutName"
            title="Workout Name"
            type="text"
            value={workoutName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setWorkoutName(e.target.value)
            }
            classInput="input-workout lg:inline-block"
            classLabel="label-workout lg:inline-block lg:mr-8 mt-8"
          /> */}
          <hr className="my-4" />
          {/* <h2 className="text-xl font-semibold sm:text-left">
            Enter in your exercise details
          </h2> */}
          {exercises.map((exercise: ExerciseLog, index: number) => (
            <ExerciseBlock
              key={index}
              exercise={exercise}
              handleExerciseChange={handleExerciseChange}
              handleSetChange={handleSetChange}
              addSet={addSet}
              removeSet={removeSet}
            />
          ))}
          <h2 className="text-xl font-semibold sm:text-right">
            Add more exercises here
          </h2>
          <div className="flex justify-center sm:justify-end gap-4 mt-4">
            <Button
              text="+ Exercise"
              className="button-rounded-cyan"
              onClick={addExercise}
              type="button"
            />
            <Button
              text="- Exercise"
              className="button-rounded-pink"
              onClick={removeExercise}
              type="button"
            />
          </div>
          {/* <hr className="my-4" /> */}
          <div className="flex flex-col font-semibold items-center">
            <h2 className="text-xl">Finished logging? Click here to finish!</h2>
            <Button
              text="Submit"
              className="button-rounded-submit mt-8 p-2"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkoutLogger;
