import Button from "@/components/common/Button";

const Journal = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-8 my-10 gap-6">
      <h1 className="text-4xl text-center sm:font-bold mb-6">
        Define your future self
      </h1>
      <div className="flex gap-6 mb-6">
        <Button
          text="Goals"
          className="bg-cyan-400 text-lg w-24 sm:w-32 p-2 sm:mx-10 lg:mx-28  rounded-lg hover:bg-cyan-300 transition duration-300"
        />
        <Button
          text="Reflect"
          className="bg-cyan-400 text-lg w-24 sm:w-32 p-2 sm:mx-10 lg:mx-28 rounded-lg hover:bg-cyan-300 transition duration-300"
        />
      </div>
      <div className="w-full sm:w-3/4">
        <label htmlFor="entry" className="sr-only">
          Text area for writing
        </label>
        <textarea
          id="entry"
          name="entry"
          className="w-full h-64 border border-black p-2 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Start writing here..."
        ></textarea>
      </div>
    </div>
  );
};

export default Journal;
