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
    {/* <p className="p-1 m-1 text-sm">{description}</p> */}
    {/* {image && (
      <div className="relative w-full h-64 mb-4">
        <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded"/>
      </div>
    )} */}
    {/* <p className="p-1 m-1 text-sm">Category: {category}</p> */}
    <p className="p-1 m-1 text-sm">Equipment: {equipment.join(", ")}</p>
    <p className="p-1 m-1 text-sm">Muscles: {muscles.join(", ")}</p>
    <p className="p-1 m-1 text-sm">
      Secondary Muscles: {muscles_secondary.join(", ")}
    </p>
    {/* <p className="p-1 m-1 text-sm">License Author: {license_author}</p> */}
  </div>
);

export default ExerciseCard;