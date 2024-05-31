import React from "react";
import { Exercise } from "../../../types/wger/Exercise";

const ExerciseCard: React.FC<Exercise> = ({
  name,
  description,
  category,
  equipment,
  muscles,
  muscles_secondary,
  license_author,
}) => (
  <div className=" bg-slate-100 grid grid-cols-1 p-4 rounded-lg shadow-lg hover:border hover:border-cyan-500 hover:transformation hover:scale-110">
    <h2 className="font-semibold p-1 m-1">{name}</h2>
    <p className="hidden hover:block p-1 m-1 text-sm">{description}</p>
    <p className="p-1 m-1 text-sm">
      Equipment: {equipment.map((item) => item.name).join(", ")}
    </p>
    <p className="p-1 m-1 text-sm">
      Muscles: {muscles.map((muscle) => muscle.name).join(", ")}
    </p>
    <p className="p-1 m-1 text-sm">
      Secondary Muscles:{" "}
      {muscles_secondary.map((muscle) => muscle.name).join(", ") ||
        "No secondary muscles targeted"}
    </p>
  </div>
);

export default ExerciseCard;
