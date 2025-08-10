import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import parseInput from "@/utils/parseInput";
import ItemCard from "./ItemCard";
import useItems from "@/hooks/useItems";

import type { ItemCount } from "@/hooks/useItems";

export type parsedCount = {
  item_id: string;
  count: number;
};

function InputCard() {
  const [input, setInput] = useState("");
  const { postItemCount, itemCount } = useItems() as {
    postItemCount: (count: parsedCount[]) => Promise<any>;
    itemCount: ItemCount[];
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const count = parseInput(input);
    // remove null rows
    const validCount: parsedCount[] = count.filter((row) => row !== null);

    if (!validCount.length) return;
    postItemCount(validCount);
  };

  return (
    <Card className="w-md h-[25rem] justify-between shadow-xl">
      <CardHeader>
        <CardTitle>BNE1 Pallet Counter</CardTitle>
        <CardDescription>Copy and paste cycle count below</CardDescription>
        <CardAction>
          <Button>Download Template</Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <form className="flex-1 flex flex-col" onSubmit={handleClick}>
          <Textarea
            className="flex-1 resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button type="submit" className="w-full" onClick={handleClick}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
export default InputCard;
