"use client";
import React, { useState, useMemo, useEffect } from "react";
import useFetchExercises from "../../../hooks/useFetchExercises";
import ExerciseCard from "./ExerciseCard";
import { Skeleton } from "@mui/material";

const ExerciseCarousel: React.FC = () => {
  const { data, loading, error } = useFetchExercises(
    "https://wger.de/api/v2/exerciseinfo/?limit=100&language=2",
  );
  loading = true;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [totalPages, setTotalPages] = useState<number>(0);

  const filteredData = useMemo(() => {
    return data.filter((exercise) =>
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [data, searchQuery]);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredData.length / itemsPerPage));
  }, [filteredData, itemsPerPage]);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  const ExerciseSearchBar = () => {
    return (
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search exercises..."
        className="p-2 m-2 border rounded hover:bg-slate-100 focus:border focus:border-cyan-500 shadow"
      />
    );
  };

  const ItemsDisplayedEditor = () => {
    return (
      <div className="flex m-2 p-2 justify-evenly items-center bg-slate-100 rounded shadow">
        <label
          htmlFor="itemsPerPageDropdown"
          className="text-center text-sm font-semibold mx-2"
        >
          Items per page
        </label>
        <select
          id="itemsPerPageDropdown"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="px-4 py-2 border rounded focus:border focus:border-cyan-500"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    );
  };

  if (loading)
    return (
      <>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-evenly">
            <Skeleton className="w-5/12 h-[100px]" />
            <Skeleton className="w-5/12 h-[100px]" />
          </div>
          <div className="flex justify-center gap-2">
            <Skeleton className="px-4 py-2 h-12 top-2/4 sticky" />
            <Skeleton className="w-11/12 h-[1000px]" />
            <Skeleton className="px-4 py-2 h-12 top-2/4 sticky" />
          </div>
        </div>
      </>
    );
  if (error) return <p>Error loading exercises: {error.message}</p>;

  return (
    <div className="h-full w-full items-center flex flex-col justify-items-center justify-center p-4">
      <div className=" flex flex-col sm:flex-row">
        <ExerciseSearchBar />
        <ItemsDisplayedEditor />
      </div>
      <div className="flex justify-between mb-4 relative">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded disabled:bg-gray-300 h-12 top-2/4 sticky"
        >
          Prev
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-2">
          {paginatedData.length === 0 && (
            <>
              <ExerciseCard
                key={null}
                id={0}
                name="No values were found with this search query, please try again"
                description=""
                category={{ id: 0, name: "" }}
                equipment={[]}
                muscles={[]}
                muscles_secondary={[]}
                license_author=""
                aliases={[]}
                uuid={""}
                exercise_base_id={0}
                created={""}
              />
            </>
          )}
          {paginatedData.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              id={exercise.id}
              name={exercise.name}
              description={exercise.description || "No description available"}
              category={exercise.category}
              equipment={exercise.equipment}
              muscles={exercise.muscles}
              muscles_secondary={exercise.muscles_secondary}
              license_author={exercise.license_author}
              aliases={[]}
              uuid={""}
              exercise_base_id={0}
              created={""}
              language={exercise.language}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded disabled:bg-gray-300 h-12 top-2/4 sticky"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExerciseCarousel;
