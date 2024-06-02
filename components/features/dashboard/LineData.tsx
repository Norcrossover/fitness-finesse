"use client";
import { useEffect, useState } from "react";
import LineChart from "@/components/common/LineChart";
import { useAuth } from "@clerk/nextjs";
import fetchWorkoutLogs from "@/app/utils/fetchWorkouts";
import { WorkoutLog } from "@/models/WorkoutLog";

interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    backgroundColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
  }[];
}

const LineData = () => {
  const { getToken, userId } = useAuth();
  const [lineChartData, setLineChartData] = useState<LineChartData>({
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
      processLineChartData(workoutLogs);
    } catch (error) {
      console.error("Error processing workout logs:", error);
    }
  };

  const processLineChartData = (logs: WorkoutLog[]) => {
    const totalWeights = logs.map((log) => {
      return log.exerciseList.reduce((total, exercise) => {
        return (
          total +
          exercise.sets.reduce((setTotal, set) => {
            return setTotal + set.weight * set.reps;
          }, 0)
        );
      }, 0);
    });

    // Use the index as a unique identifier for the labels
    const workoutLabels = logs.map((_, index) => `Workout ${index + 1}`);

    setLineChartData({
      labels: workoutLabels,
      datasets: [
        {
          label: "Total Weight Lifted",
          data: totalWeights,
          borderColor: "black",
          borderWidth: 2,
          backgroundColor: "rgb(128, 222, 234)",
          pointBackgroundColor: "rgb(38, 198, 218)",
          pointBorderColor: "rgb(38, 198, 218)",
        },
      ],
    });
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Weight Lifted per Workout",
        color: "black",
        font: {
          size: 18,
        },
      },
      datalabels: {
        align: "start",
        anchor: "end",
        color: "black",
        font: {
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "# Sessions",
          color: "rgb(38, 198, 218)",
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Weight (lbs)",
          color: "rgb(38, 198, 218)",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl flex justify-center items-center h-full">
      {lineChartData.labels.length > 0 && (
        <LineChart data={lineChartData} options={options} />
      )}
    </div>
  );
};

export default LineData;
