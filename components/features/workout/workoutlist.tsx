import React, { useEffect, useState } from "react";
import { fetchWorkouts } from "../../../utils/api";

type Workout = {
  id: number;
  name: string;
  exercises: Array<{
    id: number;
    name: string;
  }>;
};

const WorkoutList: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await fetchWorkouts();
        setWorkouts(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    loadWorkouts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Workouts</h1>
      {workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.name}</h2>
          <ul>
            {workout.exercises.map((exercise) => (
              <li key={exercise.id}>{exercise.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
