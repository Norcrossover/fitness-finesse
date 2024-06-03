import JournalBlock from "@/components/features/journal/JournalBlock";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

const Journal = () => {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div className="container mx-auto h-screen flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl text-center font-bold">
            Define your future self
          </h1>
          <JournalBlock />
        </div>
      </SignedIn>
    </>
  );
};

export default Journal;
