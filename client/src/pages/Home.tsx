import InputCard from "@/components/InputCard";
import ItemCard from "@/components/ItemCard";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <InputCard />
      <ItemCard />
    </div>
  );
}
export default Home;
