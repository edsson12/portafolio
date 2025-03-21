import TopBar from "./components/TopBar/TopBar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 text-[0.92rem] leading-relaxed sm:px-10 lg:px-10">
      <TopBar />
    </div>
  );
}
