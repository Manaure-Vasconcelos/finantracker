import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Info } from "lucide-react";
import { Separator } from "./ui/separator";

function Accounts() {
  return (
    <Card className="bg-slate-800">
      <CardHeader>
        <CardTitle className="text-muted-foreground flex items-center justify-between">
          Cuentas
          <Edit size={20} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col mt-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              💸
            </div>
            <div className="ml-2">Primary</div>
          </div>
          <p>$10448.02</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              👤
            </div>
            <div className="ml-2">Secondary</div>
          </div>
          <p>R$100.00</p>
        </div>
      </CardContent>
      <Separator className="bg-muted-foreground" />
      <CardFooter className="flex flex-col mt-3 gap-2">
        <span className="w-full flex justify-between">
          <p className="flex items-center gap-2">
            Total: <Info size={18} />
          </p>
          <p>R$548.02</p>
        </span>
        <span className="w-full flex justify-between">
          <p className="flex items-center gap-2">
            Tasa Câmbio: <Info size={18} />
          </p>
          <p>$231 / R$1</p>
        </span>
      </CardFooter>
    </Card>
  );
}

export default Accounts;
