import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center align-center p-10 m-10">
      <SignUp path="/sign-up" />
    </div>
  );
}
