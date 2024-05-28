export interface Exercise {
  id: number;
  name: string;
  description: string;
  category: number;
  equipment: number[];
  muscles: number[];
  muscles_secondary: number[];
  license_author: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exercise[];
}
