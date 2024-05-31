interface BasicInformation {
  id: number;
  name: string;
}

interface Muscle {
  id: number;
  name: string;
  name_en: string;
  is_front: boolean;
  image_url_main: string;
  image_url_secondary: string;
}

interface Language {
  id: number;
  short_name: string;
  full_name: string;
}

export interface Exercise {
  id: number;
  name: string;
  aliases?: string[];
  uuid?: string;
  exercise_base_id?: number;
  description?: string;
  created?: string;
  category: BasicInformation;
  equipment: BasicInformation[];
  muscles: Muscle[];
  muscles_secondary: Muscle[];
  language?: Language;
  license_author?: string;
}
