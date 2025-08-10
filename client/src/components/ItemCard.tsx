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

function ItemCard({ id, name }: { id: string; name: string }) {
  const [increment, setIncrement] = useState(0);

  return (
    <Card className="w-[25rem] h-auto" key={id}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h2 className="text-gray-500">{id}</h2>
          <Badge className="bg-green-500 rounded-full p-1 h-1" />
        </CardTitle>
        <CardDescription className="flex gap-2">
          <h2 className="text-3xl text-black flex-1">{name}</h2>
          <div className="inline-flex items-center border rounded-md overflow-hidden">
            {/* MINUS BUTTON */}
            <Button
              onClick={() => setIncrement((prev) => prev - 1)}
              variant="outline"
              size="icon"
              className="rounded-none border-0">
              <Minus />
            </Button>

            {/* NUMBER DISPLAY */}
            <span className="px-4 select-none">{increment}</span>

            {/* PLUS BUTTON */}
            <Button
              onClick={() => setIncrement((prev) => prev + 1)}
              variant="outline"
              size="icon"
              className="rounded-none border-0">
              <Plus />
            </Button>
          </div>
          {/* RESET BUTTON */}
          <Button
            disabled={increment !== 0 ? false : true}
            size={"icon"}
            variant={"destructive"}
            onClick={() => setIncrement(0)}>
            <RotateCcw className="self-center w-6" />
          </Button>
        </CardDescription>
      </CardHeader>
      <Separator />
      {/* METRICS */}
      <CardContent className="flex justify-between gap-4">
        <div>
          <h3 className="text-sm">DOH</h3>
          <p className="font-bold text-2xl">12.0</p>
        </div>
        <Separator orientation="vertical" />
        <div>
          <h3 className="text-sm">Weekend Cover</h3>
          <p className="font-bold text-2xl">12.0</p>
        </div>
        <Separator orientation="vertical" />
        <div>
          <h3 className="text-sm">Available Space</h3>
          <p className="font-bold text-2xl">12.0</p>
        </div>
      </CardContent>
    </Card>
  );
}
export default ItemCard;
