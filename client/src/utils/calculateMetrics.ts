import type { Item } from "@/hooks/useItems";

export type MetricsResult = {
  item_id: string;
  item_name: string;
  count: number;
  eaches: number;
  percent_use: number;
  daysOnHand: number;
  weekendCover: number;
};

const calculateMetrics = (object: Item, siteVolume: number) => {
  const { eaches, count, percent_use } = object;

  const getDaysOnHand = () => {
    const result = (eaches * count) / (siteVolume * percent_use);
    return Number(result.toFixed(2));
  };

  const getWeekendCover = () => {
    const result = (eaches * count) / (siteVolume * percent_use) - 3;
    return Number(result.toFixed(2));
  };

  return {
    ...object,
    daysOnHand: getDaysOnHand(),
    weekendCover: getWeekendCover(),
  };
};

export default calculateMetrics;

// {
//   "item_id": "COR95251",
//   "item_name": "Box 268",
//   "eaches": 150,
//   "percent_use": 0.0144,
//   "count": 6
// }
