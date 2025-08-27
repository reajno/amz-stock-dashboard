import ItemCard from "@/components/ItemCard";
import { useState, useEffect } from "react";
import type { Item } from "@/hooks/useItems";
import calculateMetrics from "@/utils/calculateMetrics";
import FloatBtn from "@/components/FloatBtn";

const storedVolume = localStorage.getItem("volume");
const volume = Number(storedVolume);

export type Order = {
  item_id: string;
  order: number;
};

function Metrics() {
  const [itemCounts, setItemCounts] = useState<Item[]>([]);
  const [order, setOrder] = useState<Order[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) setItemCounts(JSON.parse(storedCount));
  }, []);

  // Sync itemCounts with localStorage whenever it changes
  useEffect(() => {
    if (itemCounts.length > 0) {
      localStorage.setItem("count", JSON.stringify(itemCounts));
    }
  }, [itemCounts]);

  const handleCountChange = (itemId: string, number: number) => {
    setItemCounts((prev) =>
      prev.map((item) =>
        item.item_id === itemId ? { ...item, count: item.count + number } : item
      )
    );
    setOrder((prev) => {
      const exists = prev.some((item) => item.item_id === itemId);

      if (exists) {
        return prev.map((item) =>
          item.item_id === itemId
            ? { ...item, order: item.order + number }
            : item
        );
      }
      return [...prev, { item_id: itemId, order: number }];
    });
  };

  return (
    <div className="flex justify-center">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 gap-4 md:gap-6">
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
      <FloatBtn order={order} />
    </div>
  );
}
export default Metrics;
