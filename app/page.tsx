import FormAi from "./components/home/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="p-4 sm:p-12 gap-y-7">
        <h1 className="text-xl text-center font-extrabold pb-3">
          Welcome to AI Buddy
        </h1>
        <FormAi />
      </div>
    </main>
  );
}
