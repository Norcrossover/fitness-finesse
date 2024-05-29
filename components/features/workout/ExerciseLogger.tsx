import Button from "../../common/Button";

// For each item
type ExerciseLoggerProps = {
  title: string;
  num: number;
};

const ExerciseLogger = ({ title, num }: ExerciseLoggerProps) => {
  return (
    <div className="flex flex-col justify-between items-center p-2 gap-4">
      <div className="flex items-center">
        <span className="mr-10 p-2 outline outline-2 outline-white rounded-full text-white">
          {num}
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <Button text="+ Add" className="button-rounded-cyan" />
    </div>
  );
};

export default ExerciseLogger;
