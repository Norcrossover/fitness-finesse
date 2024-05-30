import { WgerExercise } from "./wgerExercise";

export interface WgerExerciseApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: WgerExercise[];
}
