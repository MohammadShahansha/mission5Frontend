import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const DropdownFilter = ({ interval, setInterval }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-[#00abf0] px-12 w-20 font-semibold mb-3 hover:bg-[#081b29] hover:text-white"
          variant="outline"
        >
          Filter By
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={interval} onValueChange={setInterval}>
          <DropdownMenuRadioItem value="daily">Daily</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="weekly">Weekly</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="monthly">Monthly</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="yearly">Yearly</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFilter;
