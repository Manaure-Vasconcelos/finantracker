import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SelectMonth from "./SelectMonth";
import AvatarMenu from "./AvatarMenu";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";

function BalanceOverview() {
  return (
    <Card className="w-full rounded-t-none rounded-b-3xl">
      <CardHeader className="fixed top-0 left-0 w-full z-10 bg-card bg-opacity-10">
        <CardTitle className="flex flex-row justify-start items-center gap-[5.3rem] p-2">
          <AvatarMenu />
          <SelectMonth />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center mt-[100px] mb-6">
        <p className="text-muted-foreground">Saldo actual en cuentas</p>
        <h1 className="text-3xl font-bold pt-1 pb-3">R$548.02</h1>
        <div className="flex justify-around mt-4">
          <div className="flex items-center gap-3">
            <CircleArrowUp size={30} color="#22c55e" />
            <span className="flex flex-col justify-start items-start gap-0">
              <p className="text-muted-foreground text-sm">Ingressos</p>
              <p className="text-lg">R$110.00</p>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CircleArrowDown size={30} color="#ef4444" />
            <span className="flex flex-col justify-start items-start gap-0">
              <p className="text-muted-foreground text-sm">Gastos</p>
              <p className="text-lg">R$110.00</p>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default BalanceOverview;
