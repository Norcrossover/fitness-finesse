"use client";
import { useState } from "react";
import ExerciseLogger from "@/components/features/workout/ExerciseLogger";
import FormWorkout from "@/components/features/workout/FormWorkout";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";

const Logger = () => {
  const [formFields, setFormFields] = useState([{ id: 1 }]);

  const addFormField = () => {
    const newId = formFields.length + 1; // Need to have unique Id's for all input elements
    setFormFields([...formFields, { id: newId }]);
  };

  const removeFormField = () => {
    // At least 1 row of inputs
    if (formFields.length > 1) {
      setFormFields(formFields.slice(0, -1));
    } else {
      // #TODO: Update
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center sm:text-left font-bold mx-auto container my-10">
        Log Your Workout
      </h1>
      <div className="container mx-auto text-white text-center sm:text-left my-14">
        <div className="w-5/6 mx-auto sm:w-full">
          <h2 className="text-xl font-semibold mb-4 sm:mt-0 sm:text-left">
            Enter In Your Workout!
          </h2>
          {/* I forgot that buttons inside of forms have a default behavior of triggering GET */}
          <form className="bg-slate-800 p-10 rounded-xl">
            <ExerciseLogger title="Workout Name" num={1} />
            <hr className="my-4 " />
            <h2 className="text-xl font-semibold sm:text-left">
              Enter in your workout details
            </h2>
            <fieldset className="sm:my-8 text-center">
              <legend className="sr-only">Log your workout below</legend>
              {formFields.map((field) => (
                <div key={field.id} className="sm:flex justify-around">
                  <hr className="my-4" />
                  <FormWorkout
                    id={`numSets-${field.id}`}
                    title="# of Sets"
                    type="number"
                    classInput="input-workout lg:inline-block"
                    classLabel="label-workout lg:inline-block lg:mr-8 mt-8"
                  />
                  <FormWorkout
                    id={`numReps-${field.id}`}
                    title="# of Reps"
                    type="number"
                    classInput="input-workout lg:inline-block"
                    classLabel="label-workout lg:inline-block  lg:mr-8 sm:mt-8"
                  />
                  <FormWorkout
                    id={`numWeight-${field.id}`}
                    title="# of Weight"
                    type="number"
                    classInput="input-workout lg:inline-block"
                    classLabel="label-workout lg:inline-block lg:mr-8 sm:mt-8"
                  />
                </div>
              ))}
              <hr className="my-4" />
              <h2 className="text-xl font-semibold mb-4 sm:text-left">
                Add additional notes to your workout
              </h2>
              <TextArea
                id="numEntry"
                text="Text area for leaving notes on your workout"
                className="w-1/2 h-52 my-8 border border-black p-2 text-center rounded-xl focus:outline-none focus:border-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Start writing here..."
              />
              <hr className="my-4" />
              <h2 className="text-xl font-semibold mb-4  sm:text-left">
                Add or remove sets
              </h2>

              <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-28">
                <Button
                  text="+ More"
                  className="button-rounded-cyan mt-8"
                  onClick={addFormField}
                  type="button"
                />
                <Button
                  text="- Less"
                  className="button-rounded-cyan mt-8"
                  onClick={removeFormField}
                  type="button"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logger;
