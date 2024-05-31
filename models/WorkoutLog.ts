import mongoose, { Schema, Document } from "mongoose";

export interface ExerciseLog {
  name: string;
  reps: number;
  sets: number;
  weight: number;
}

export interface WorkoutLog extends Document {
  id: number;
  exerciseList: ExerciseLog[];
}

const exerciseLogSchema = new Schema<ExerciseLog>({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const workoutLogSchema = new Schema<WorkoutLog>(
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
  mongoose.model<WorkoutLog>("WorkoutLog", workoutLogSchema);

export default WorkoutLog;
