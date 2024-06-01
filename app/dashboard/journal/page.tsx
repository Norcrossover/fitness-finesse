import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";

const Journal = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl text-center font-bold">
        Define your future self
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-28">
        <Button text="Goals" className="button-rounded-cyan" />
        <Button text="Reflect" className="button-rounded-cyan" />
      </div>
      <div className="w-3/4">
        <TextArea
          id="entry"
          text="Text area for writing your goals or reflections"
          className="w-full h-64 border border-black p-2 text-center rounded-xl focus:outline-none focus:border-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Start writing here..."
        />
      </div>
    </div>
  );
};

export default Journal;
