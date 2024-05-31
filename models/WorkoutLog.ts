import mongoose, { Schema, Document } from "mongoose";

export interface ExerciseSet {
  reps: number;
  weight: number;
}

export interface ExerciseLog {
  name: string;
  sets: ExerciseSet[];
}

export interface WorkoutLog extends Document {
  userId: string;
  exerciseList: ExerciseLog[];
}

const exerciseSetSchema = new Schema<ExerciseSet>({
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const exerciseLogSchema = new Schema<ExerciseLog>({
  name: { type: String, required: true },
  sets: [exerciseSetSchema],
});

const workoutLogSchema = new Schema<WorkoutLog>(
  {
    userId: { type: String, required: true },
    exerciseList: [exerciseLogSchema],
  },
  {
    timestamps: true,
  },
);

const WorkoutLog =
  mongoose.models.WorkoutLog ||
  mongoose.model<WorkoutLog>("WorkoutLog", workoutLogSchema);

export default WorkoutLog;
