"use client";
import React from "react";
import Card from "@/components/common/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const FetchExercises = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const exerciseUrl = "https://wger.de/api/v2/exercise/";
  useEffect(() => {
    const fetchExerciseData = async () =>  {
      axios.get(exerciseUrl).then((response) => {
        setLoading(true);
        setData(response.data.results);
        setLoading(false);
      }).catch((error) => {
        console.error(error.message);
        setError(error);
      })
    }
    fetchExerciseData();
  }, []);

  return {data, loading, error};
}

const Dashboard = () => {
  const {data, loading, error} = FetchExercises();
  console.log(data);
  const exerciseNameList: [] = data ? data.map((exercise: { name: any; }) => exercise.name) : [];
  console.log(exerciseNameList);

  
  return (
    <>
    <h1>Exercise Page</h1>
    <div>
      {exerciseNameList.map(exerciseName =>
        <Card imgSrc={""} imgAlt={""}>
          <h2>{exerciseName}</h2>
        </Card>
    )}
    </div>
    </>
  );
};

export default Dashboard;
