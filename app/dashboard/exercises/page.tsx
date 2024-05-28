"use client";
import React from "react";
import Card from "@/components/common/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

const FetchExercises = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const exerciseUrl = "https://wger.de/api/v2/exercise/";
  useEffect(() => {
    const fetchExerciseData = async () => {
      axios
        .get(exerciseUrl)
        .then((response) => {
          setLoading(true);
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setError(error);
        });
    };
    fetchExerciseData();
  }, []);

  return { data, loading, error };
};

const Page = () => {
  const { data, loading, error } = FetchExercises();
  // console.log(data);
  // const exerciseNameList: [] = data ? data.map((exercise: { name: any; }) => exercise.name) : [];
  // console.log(exerciseNameList);

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        {loading && <h1 className="text-2xl text-center">Loading...</h1>}
        {error && (
          <h1 className="text-2xl text-center">Error! Message: {error} </h1>
        )}
        {!loading && !error && (
          <main className="h-full w-full items-center justify-items-center p-4 m-4">
            <h1 className="text-center text-2xl p-2 m-2">Exercise Page</h1>
            <div className="grid grid-cols-4 gap-4">
              {data &&
                data.map(
                  (exercise) =>
                    exercise.description && (
                      <Card key={exercise.id} imgSrc={""} imgAlt={""}>
                        <h2 className="font-semibold p-1 m-1">
                          {exercise.name || "No name available"}
                        </h2>
                        <p className="p-1 m-1 text-sm">
                          {exercise.description || "No description available"}
                        </p>
                      </Card>
                    ),
                )}
            </div>
          </main>
        )}
      </SignedIn>
    </>
  );
};

export default Page;
