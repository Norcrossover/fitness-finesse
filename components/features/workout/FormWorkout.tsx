// For each item
// E.g. Step 1: # Number of exercises
type FormWorkoutProps = {
  id: string;
  title?: string;
  type?: string;
  classInput?: string;
  classLabel?: string;
};

const FormSection = ({
  id,
  title = "",
  type = "number",
  classInput = "",
  classLabel = "",
}: FormWorkoutProps) => (
  <div>
    {/* This can be changed to the data we actually need */}
    <label htmlFor={id} className={classLabel}>{`${title}`}</label>
    <input id={id} name={id} type={type} min={0} className={classInput} />
  </div>
);

export default FormSection;
