import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-5 m-5 md:h-[1000px] min-h-3/4">
      <h1 className="text-2xl font-semibold text-center m-4 p-4">
        Welcome back!
      </h1>
      <SignIn path="/sign-in" />
    </div>
  );
}
