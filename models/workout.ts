import mongoose, { Schema, Document } from "mongoose";

export type ExerciseLog = {
  name: string;
  reps: number;
  sets: number;
};

export interface IWorkoutLog extends Document {
  id: number;
  exerciseList: ExerciseLog[];
}

const exerciseLogSchema = new Schema<ExerciseLog>({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
});

const workoutLogSchema = new Schema<IWorkoutLog>(
  {
    id: { type: Number, required: true },
    exerciseList: [exerciseLogSchema],
  },
  {
    timestamps: true,
  },
);

const WorkoutLog =
  mongoose.models.WorkoutLog ||
  mongoose.model<IWorkoutLog>("WorkoutLog", workoutLogSchema);

export default WorkoutLog;
