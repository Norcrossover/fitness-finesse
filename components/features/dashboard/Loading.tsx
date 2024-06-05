type LoadingProps = {
  text: string;
};

const Loading = ({ text }: LoadingProps) => {
  return (
    <div>
      <p className="text-xl p-4 sm:text-2xl font-bold text-center">
        {text} <span className="text-cyan animate-pulse">exercise</span> page!
      </p>
    </div>
  );
};

export default Loading;
