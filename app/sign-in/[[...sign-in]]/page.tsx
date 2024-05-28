import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center align-center p-10 m-10">
      <SignIn path="/sign-in" />
    </div>
  );
}
