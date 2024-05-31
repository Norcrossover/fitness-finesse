// For each item
type ExerciseLoggerProps = {
  title: string;
  num: number;
};

const ExerciseLogger = ({ title, num }: ExerciseLoggerProps) => {
  return (
    <div className="flex flex-col p-2 gap-5 items-center text-center">
      <div className="flex justify-around w-full items-center gap-4">
        <span className="w-10 outline outline-2 outline-white rounded-full text-white">
          {num}
        </span>
        <h2 className="text-xl sm:text-3xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default ExerciseLogger;
