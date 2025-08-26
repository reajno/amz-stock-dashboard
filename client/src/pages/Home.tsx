import InputCard from "@/components/InputCard";

function Home() {
  localStorage.removeItem("count");
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <InputCard />
    </div>
  );
}
export default Home;
