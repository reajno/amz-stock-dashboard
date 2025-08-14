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

import { useNavigate } from "react-router";
import useItems from "@/hooks/useItems";

export type parsedCount = {
  item_id: string;
  count: number;
};

function InputCard() {
  const [input, setInput] = useState("");
  const { postItemCount } = useItems();
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const count = parseInput(input);
    const validCount: parsedCount[] = count.filter((row) => row !== null);

    if (!validCount.length) return;
    postItemCount(validCount);
    navigate("/metrics");
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
        <form
          className="flex-1 flex flex-col"
          onSubmit={handleSubmit}
          id="countForm">
          <Textarea
            className="flex-1 resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button type="submit" form="countForm" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
export default InputCard;
