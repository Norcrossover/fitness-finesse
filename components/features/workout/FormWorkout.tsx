// For each item
// E.g. Step 1: # Number of exercises
type FormWorkoutProps = {
  step: number;
  title: string;
  label: string;
};

const FormSection = ({ step, title, label }: FormWorkoutProps) => (
  <div>
    {/* This can be changed to the data we actually need */}
    <h3 className="text-lg mb-2">{`Step ${step}: ${title}`}</h3>
    <label
      htmlFor={label}
      className="sr-only"
    >{`This is a label for ${label}`}</label>
    <input
      id={label}
      name={label}
      type="number"
      min={0}
      className="w-1/2 lg:w-1/2 p-2 rounded-xl bg-white text-black mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>
);

export default FormSection;
