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
