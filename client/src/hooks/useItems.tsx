import { useState } from "react";
import calculateMetrics from "@/utils/calculateMetrics";
import type { parsedCount } from "@/components/InputCard";
import type { MetricsResult } from "@/utils/calculateMetrics";

export type Item = {
  item_id: string;
  item_name: string;
  count: number;
  eaches: number;
  percent_use: number;
};

function useItems() {
  const [itemCount, setItemCount] = useState<MetricsResult[]>([]);
  const [siteVolume, setSiteVolume] = useState(20000);

  const postItemCount = async (count: parsedCount[]) => {
    try {
      const res = await fetch("http://localhost:3001/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(count),
      });
      const data = await res.json();
      if (data.error) throw data.error;

      const countWithMetrics = data.map((row: Item) => {
        return calculateMetrics(row, siteVolume);
      });

      localStorage.setItem("count", JSON.stringify(countWithMetrics));
      localStorage.setItem("volume", siteVolume.toString());
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return {
    postItemCount,
    itemCount,
    siteVolume,
  };
}
export default useItems;
