import React, { useCallback, memo } from "react";

interface ExerciseSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const ExerciseSearchBar: React.FC<ExerciseSearchBarProps> = ({ searchQuery, onSearchChange }) => {
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchChange(e.target.value);
    },
    [onSearchChange]
  );

  return (
    <input
      id="ExerciseSearchBar"
      aria-label="Exercise search bar"
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search exercises..."
      className="p-2 m-2 border rounded hover:bg-slate-100 focus:border focus:border-cyan-500 shadow"
    />
  );
};

export default memo(ExerciseSearchBar);
