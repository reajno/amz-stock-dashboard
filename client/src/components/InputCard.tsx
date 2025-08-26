import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
  const { postItemCount, loading } = useItems();
  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const count = parseInput(input);
    const validCount: parsedCount[] = count.filter((row) => row !== null);

    if (!validCount.length) return;
    const isStored = await postItemCount(validCount);

    if (!loading && isStored) {
      navigate("/metrics");
    }
  };

  return (
    <Card className="w-md h-[25rem] justify-between shadow-xl">
      <CardContent className="flex-1 flex flex-col">
        <form
          className="flex-1 flex flex-col"
          onSubmit={handleSubmit}
          id="countForm">
          <Textarea
            className="flex-1 resize-none"
            placeholder="Copy and paste cycle count here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </CardContent>
      <CardFooter className="flex gap-4 ">
        <Button variant={"outline"}>Download Template</Button>
        <Button
          disabled={!input || loading ? true : false}
          type="submit"
          form="countForm"
          className="flex-1 bg-green-500">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
export default InputCard;
