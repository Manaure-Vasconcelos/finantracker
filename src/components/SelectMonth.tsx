import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectMonth() {
  return (
    <Select>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Septiembre"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Octubre</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectMonth;
