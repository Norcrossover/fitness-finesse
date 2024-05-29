import { useEffect, useState } from "react";
import axios from "axios";
import { Exercise } from "./exerciseInterfaces";

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exercise[];
}

const useFetchExercises = (initialUrl: string) => {
  const [data, setData] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState<string>(initialUrl);

  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true);
      try {
        const allData: Exercise[] = [];
        let nextUrl: string | null = url;
        // while (nextUrl) {
        for (let i = 0; i < 2; i++) {
          const response: ApiResponse = await axios.get<ApiResponse>(nextUrl);
          console.log(response);
          allData.push(...response?.results);
          nextUrl = response.next;
        }
        setData(allData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchExerciseData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchExercises;
