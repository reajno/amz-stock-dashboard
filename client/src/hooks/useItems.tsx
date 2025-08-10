import { useState } from "react";

import type { parsedCount } from "@/components/InputCard";

export type ItemCount = {
  item_id: string;
  item_name: string;
  count: number;
  eaches: number;
  percent_use: number;
};

function useItems() {
  const [itemCount, setItemCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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

      setItemCount(data);

      return data;
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return {
    postItemCount,
    itemCount,
  };
}
export default useItems;
