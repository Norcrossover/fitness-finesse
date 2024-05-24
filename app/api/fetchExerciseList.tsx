import React, { useState } from "react";

const exerciseUrl = "https://wger.de/api/v2/exercise/";



const fetchExercises = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchExerciseData = async () =>  {
    const response = await fetch(exerciseUrl);
  }
  
}

export default fetchExercises;