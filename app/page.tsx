import FormAi from "./components/home/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 sm:px-12 gap-y-7">
      <div>
        <h1 className="text-xl text-center font-extrabold pb-3">
          Welcome to AI Buddy
        </h1>
      </div>
      <FormAi />
    </main>
  );
}
