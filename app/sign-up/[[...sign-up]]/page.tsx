import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-10 m-10 min-h-1/2">
      <h1 className="text-2xl font-semibold text-center m-4 p-4">
        We{"'"}re glad to see you join us in this journey
      </h1>
      <SignUp path="/sign-up" />
    </div>
  );
}
