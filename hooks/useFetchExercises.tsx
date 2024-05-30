import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { WgerExercise } from "@/types/wgerExercise";
import { WgerExerciseApiResponse } from "@/types/wgerExerciseApiResponse";

const useFetchExercises = (initialUrl: string) => {
  const [data, setData] = useState<WgerExercise[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState<string>(initialUrl);

  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true);
      try {
        const allData: WgerExercise[] = [];
        let nextUrl: string | null = url;

        // TODO: Uncomment if we want to query the API for the entire exercise list!
        // while (nextUrl) {
        for (let i = 0; nextUrl && i < 2; i++) {
          const response: AxiosResponse<WgerExerciseApiResponse> =
            await axios.get<WgerExerciseApiResponse>(nextUrl);
          console.log(response);
          const { data } = response;
          allData.push(...data.results);
          nextUrl = data.next;
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
