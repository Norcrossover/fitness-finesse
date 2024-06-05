import Image from "next/image";

const LinePageSnippet = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <p className="bg-slate-100 rounded-xl sm:text-lg text-center shadow p-2 m-2">
        This line chart helps visualize the total weight lifted per workout
        session. By fetching data from an API endpoint, we grab the workout logs
        for each user and sum the total weight for each workout session to plot.
        Users can easily track their progress and trend in lifting performance,
        helping with setting future goals for reaching new personal records.
        Using chartjs2, the total weight it shown as a popup while hovering over
        a specific point and shows x and y labels to identify the data.
        Furthermore, there are labels above the help display the total weight
        thanks to the data labels plugin. The data is presented in visible way
        to help distinguish between data points.
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
