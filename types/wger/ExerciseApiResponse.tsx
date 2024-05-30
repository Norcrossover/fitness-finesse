import { Exercise } from "./Exercise";

export interface ExerciseApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exercise[];
}
