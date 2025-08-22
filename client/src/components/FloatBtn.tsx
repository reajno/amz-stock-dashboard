import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check } from "lucide-react";

import type { Order } from "@/pages/Metrics";

function FloatBtn({ order }: { order: Order[] }) {
  const handleDownload = () => {
    const validOrder = order.filter((item) => item.order > 0);

    if (validOrder.length === 0) {
      return;
    }

    const orderToString = validOrder
      .map((item) => `${item.item_id} - ${item.order}`)
      .join("\n");
    navigator.clipboard.writeText(orderToString);

    toast("Order copied to clipboard!", {
      position: "bottom-center",
      icon: <Check />,
    });
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleDownload}
            size="icon"
            className="size-12 rounded-4xl bg-green-500 fixed bottom-20 right-1/12">
            <ClipboardCopy />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to Clipboard</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
}
export default FloatBtn;
