import mongoose, { Schema, Document } from "mongoose";

export interface ExerciseSet {
  reps: number;
  weight: number;
}

export interface ExerciseLog {
  name: string;
  sets: ExerciseSet[];
}

export interface WorkoutLog {
  userId: string;
  exerciseList: ExerciseLog[];
}

const exerciseSetSchema = new Schema<ExerciseSet>({
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const exerciseLogSchema = new Schema<ExerciseLog>({
  name: { type: String, required: true },
  sets: { type: [exerciseSetSchema], required: true },
});

const workoutLogSchema = new Schema<WorkoutLog>(
  {
    userId: { type: String, required: true },
    exerciseList: { type: [exerciseLogSchema], required: true },
  },
  {
    timestamps: true,
  },
);

const WorkoutLog =
  mongoose.models.WorkoutLog ||
  mongoose.model<WorkoutLog>("WorkoutLog", workoutLogSchema);

export default WorkoutLog;
