// For each item
// E.g. Weight lifting, 4 x lorem ipsum 4 x lorem ipsum ...
type Category = {
  title: string;
  exercises: string[];
};

const WorkoutCategory = ({ title, exercises }: Category) => {
  return (
    // Similar to that of the wire frame
    <div className="text-white mb-4 bg-slate-800 rounded-xl p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="p-4">
        {/* Placeholder data, later it will loop through exercised fetched from */}
        {exercises.map((exercise, index) => (
          <p key={index} className="mb-2">
            {exercise}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCategory;
