import Image from "next/image";

const LinePageSnippet = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Image
        src="/PieDemo.png"
        alt="A pie chart showing top 10 more performed exercises and occurrences"
        width={500}
        height={500}
        className="w-full shadow rounded-xl self-center p-2 m-2"
      />
      <p className="bg-slate-100 rounded-xl text-center shadow p-2 m-2">
        This pie chart that displays the top 10 most performed exercises. Again,
        by fetching data from an API endpoint, we collect the workout logs for
        each user and analyze the frequency of each exercise. This information
        helps users understand which exercises they perform the most, allowing
        them to see their workout patterns and routines. Using chartjs 2 pie,
        each exercise has a corresponding color and number associated with it's
        frequency and type. It has a distinct color for each slice of pie and
        allows for responsive design as the data/color is shown as a pop up when
        hovering over a specific portion of the pie. Furthermore, a user can
        choose what exercises to see by clicking on one of the choices from the
        legend. This helps focus on specific workouts and their occurrences.
      </p>
    </div>
  );
};

export default LinePageSnippet;
