import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";

type Props = {
  metrics: {
    item_id: string;
    item_name: string;
    count: number;
    daysOnHand: number;
    weekendCover: number;
  };
  onCountChange: (number: number) => void;
};

function ItemCard({ metrics, onCountChange }: Props) {
  const [amountChange, setAmountChange] = useState(0);

  const handleDecrement = () => {
    onCountChange(-1);
    setAmountChange((prev) => prev - 1);
  };

  const handleIncrement = () => {
    onCountChange(1);
    setAmountChange((prev) => prev + 1);
  };

  const handleReset = () => {
    onCountChange(-amountChange);
    setAmountChange(0);
  };

  return (
    <Card className="md:w-max" key={metrics.item_id}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h2 className="text-gray-500 text-sm">{metrics.item_id}</h2>
          <Badge className="bg-green-500 rounded-full p-1 h-1" />
        </CardTitle>
        <CardDescription className="flex gap-2 ">
          <h2 className="text-3xl text-black flex-1">{metrics.item_name}</h2>
          <div className="inline-flex items-center flex-wrap gap-2">
            <div className=" border rounded-md">
              {/* MINUS BUTTON */}
              <Button
                onClick={handleDecrement}
                variant="outline"
                size="icon"
                className="rounded-none border-0">
                <Minus />
              </Button>
              {/* NUMBER DISPLAY */}
              <span className="px-4 select-none">{amountChange}</span>
              {/* PLUS BUTTON */}
              <Button
                onClick={handleIncrement}
                variant="outline"
                size="icon"
                className="rounded-none border-0">
                <Plus />
              </Button>
            </div>
            {/* RESET BUTTON */}
            <Button
              disabled={amountChange !== 0 ? false : true}
              size={"icon"}
              variant={"destructive"}
              onClick={handleReset}
              className="flex-shrink-0">
              <RotateCcw className="self-center w-6" />
            </Button>
          </div>
        </CardDescription>
      </CardHeader>
      <Separator />
      {/* METRICS */}
      <CardContent className="grid grid-cols-3 justify-between gap-2">
        <div>
          <h3 className="text-sm">Count</h3>
          <p className="font-bold text-2xl">{metrics.count}</p>
        </div>
        <div>
          <h3 className="text-sm">DOH</h3>
          <p className="font-bold text-2xl">{metrics.daysOnHand}</p>
        </div>
        <div>
          <h3 className="text-sm">Weekend Cover</h3>
          <p className="font-bold text-2xl">{metrics.weekendCover}</p>
        </div>
      </CardContent>
    </Card>
  );
}
export default ItemCard;
