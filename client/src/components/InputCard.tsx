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
function InputCard() {
  const [input, setInput] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(input);
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
        {/* POST REQUEST SUBMIT */}
        <form className="flex-1 flex flex-col">
          <Textarea
            className="flex-1 resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleClick}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
export default InputCard;
