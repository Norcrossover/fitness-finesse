// For each item
type TextAreaProps = {
  id: string;
  text: string;
  className: string;
  placeholder?: string;
};

// Make placeholder optional
const TextArea = ({ id, text, className, placeholder = "" }: TextAreaProps) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {text}
      </label>
      <textarea
        id={id}
        name={id}
        className={className}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
