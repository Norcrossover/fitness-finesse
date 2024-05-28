import Button from "@/components/common/Button";

const Journal = () => {
  return (
    <>
      <div className="my-10 flex flex-col text-center items-center gap-8">
        <h1 className="text-2xl w-1/2">Define your future self</h1>
        <Button
          text="Goals"
          className="bg-cyan-400 text-lg w-2/6 p-2 rounded-lg hover:bg-cyan-300 transition duration-300"
        />
        <Button
          text="Reflect"
          className="bg-cyan-400 text-lg w-2/6 p-2 rounded-lg hover:bg-cyan-300 transition duration-300"
        />
      </div>
      <div className="mx-8 mb-8">
        <label htmlFor="entry" className="hidden">
          Text area for writing
        </label>
        <textarea
          id="entry"
          name="entry"
          className="w-full h-64 border border-slate-400 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="Start writing here..."
        ></textarea>
      </div>
    </>
  );
};

export default Journal;
