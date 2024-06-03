import axios from "axios";
import { WorkoutLog } from "@/models/WorkoutLog";

const fetchWorkoutLogs = async (userId: string): Promise<WorkoutLog[]> => {
  try {
    const response = await axios.get(`/api/workoutlogs`);
    return response.data.workoutLogs;
  } catch (error) {
    console.error("ERROR CODE: Error fetching workout logs");
    return [];
  }
};

export default fetchWorkoutLogs;
