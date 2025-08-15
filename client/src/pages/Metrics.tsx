import ItemCard from "@/components/ItemCard";
import { useState } from "react";
import type { Item } from "@/hooks/useItems";
import calculateMetrics from "@/utils/calculateMetrics";

const storedCount = localStorage.getItem("count");
const storedVolume = localStorage.getItem("volume");
const count = JSON.parse(storedCount ?? "[]");
const volume = Number(storedVolume);

function Metrics() {
  const [itemCounts, setItemCounts] = useState<Item[]>(count);

  const handleCountChange = (itemId: string, number: number) => {
    setItemCounts((prev) =>
      prev.map((item) =>
        item.item_id === itemId ? { ...item, count: item.count + number } : item
      )
    );
  };

  return (
    <div className="flex justify-center">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-[70rem] overflow-x-hidden">
        {itemCounts.map((item) => {
          const metrics = calculateMetrics(item, volume);

          return (
            <ItemCard
              key={item.item_id}
              metrics={metrics}
              onCountChange={(number: number) =>
                handleCountChange(item.item_id, number)
              }></ItemCard>
          );
        })}
      </div>
    </div>
  );
}
export default Metrics;
