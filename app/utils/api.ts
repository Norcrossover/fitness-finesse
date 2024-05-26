export const fetchWorkouts = async () => {
  const response = await fetch("/api/wger");
  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }
  const data = await response.json();
  return data;
};
