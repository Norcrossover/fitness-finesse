import Image from "next/image";

const ExercisePageSnippet = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Image
        src="/ExercisesPage.png" // Ensure the path matches the file name exactly
        alt="A snippet of the Exercise Page is given to show what is displayed on the page."
        width={500}
        height={500}
        className="w-full shadow rounded self-center p-2 m-2"
      />
      <p className="bg-slate-100 rounded shadow p-2 m-2">
        Using the WGER API, this page displays displays the API&apos;s data in a
        carousel. This carousel has to buttons located on the left and right
        hand side of the content that allows for easy page navigation.
        Additionally, depending on your preference, you can edit the number of
        items on the page using the dropdown located at the top of the page.
        Lastly, if you&apos;re looking for a specific exercise, be sure to use
        the search bar to filter exercises based on your search query.
      </p>
    </div>
  );
};

export default ExercisePageSnippet;
