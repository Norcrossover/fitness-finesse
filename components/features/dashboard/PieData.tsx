"use client";
import { useEffect, useState } from "react";
import PieChart from "@/components/common/PieChart";
import { useAuth } from "@clerk/nextjs";
import fetchWorkoutLogs from "@/app/utils/fetchWorkouts";
import { WorkoutLog } from "@/models/WorkoutLog";
import { Colors } from "@/lib/Color";

interface PieChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

const PieData = () => {
  const { getToken, userId } = useAuth();
  const [pieChartData, setPieChartData] = useState<PieChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (userId) {
      fetchWorkoutLogsData(userId);
    }
  }, [userId]);

  const fetchWorkoutLogsData = async (userId: string) => {
    try {
      const workoutLogs: WorkoutLog[] = await fetchWorkoutLogs(userId);
      processPieChartData(workoutLogs);
    } catch (error) {
      console.error("Error processing workout logs:", error);
    }
  };

  const processPieChartData = (logs: WorkoutLog[]) => {
    const exerciseCounts: { [key: string]: number } = {};

    logs.forEach((log) => {
      log.exerciseList.forEach((exercise) => {
        if (exerciseCounts[exercise.name]) {
          exerciseCounts[exercise.name]++;
        } else {
          exerciseCounts[exercise.name] = 1;
        }
      });
    });

    const sortedExercises = Object.entries(exerciseCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const labels = sortedExercises.map((exercise) => exercise[0]);
    const data = sortedExercises.map((exercise) => exercise[1]);

    setPieChartData({
      labels,
      datasets: [
        {
          data,
          backgroundColor: Colors.slice(0, data.length),
        },
      ],
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left",
      },
      title: {
        display: true,
        text: "Top 10 Most Performed Exercises",
        color: "black",
        font: {
          size: 18,
        },
      },
      datalabels: {
        display: false, // Enabling this will have numbers
      },
    },
    elements: {
      arc: {
        borderWidth: 3,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl flex justify-center items-center h-full">
      {pieChartData.labels.length > 0 && (
        <PieChart data={pieChartData} options={options} />
      )}
    </div>
  );
};

export default PieData;
