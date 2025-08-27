import { useState } from "react";
import calculateMetrics from "@/utils/calculateMetrics";
import type { parsedCount } from "@/components/InputCard";

export type Item = {
  item_id: string;
  item_name: string;
  count: number;
  eaches: number;
  percent_use: number;
};

function useItems() {
  const [siteVolume] = useState(20000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const postItemCount = async (count: parsedCount[]) => {
    localStorage.removeItem("count");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://amz-stock-dashboard-9jlu.vercel.app/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(count),
        }
      );
      const data = await res.json();

      if (data.error) throw data.error;

      const countWithMetrics = data.map((row: Item) => {
        return calculateMetrics(row, siteVolume);
      });

      localStorage.setItem("count", JSON.stringify(countWithMetrics));
      localStorage.setItem("volume", siteVolume.toString());
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
        console.error(error.message);
      } else {
        setError(new Error("Unexpected error"));
        console.error("Unexpected error", error);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    postItemCount,
    siteVolume,
    loading,
    error,
  };
}
export default useItems;
