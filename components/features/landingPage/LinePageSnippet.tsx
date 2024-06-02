import Image from "next/image";

const LinePageSnippet = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <p className="bg-slate-100 rounded-xl text-center shadow p-2 m-2">
        This line chart helps visualize the total weight lifted per workout
        session. By fetching data from an API endpoint, we grab the workout logs
        for each user and sum the total weight for each workout session to plot.
        Users can easily track their progress and trend in lifting performance,
        helping with setting future goals for reaching new personal records.
      </p>
      <Image
        src="/LineDemo.png"
        alt="A line chart showing the total weight lifted for each workout"
        width={500}
        height={500}
        className="w-full shadow rounded-xl self-center p-2 m-2"
      />
    </div>
  );
};

export default LinePageSnippet;
