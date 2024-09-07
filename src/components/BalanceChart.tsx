"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const chartData = [
  { daysOfWeek: "Sunday", ingressos: 150, gastos: 60 },
  { daysOfWeek: "Monday", ingressos: 186, gastos: 80 },
  { daysOfWeek: "Tuesday", ingressos: 305, gastos: 200 },
  { daysOfWeek: "Wednesday", ingressos: 237, gastos: 120 },
  { daysOfWeek: "Thursday", ingressos: 73, gastos: 190 },
  { daysOfWeek: "Friday", ingressos: 209, gastos: 130 },
  { daysOfWeek: "Saturday", ingressos: 214, gastos: 140 },
];

const chartConfig = {
  ingressos: {
    label: "Ingressos",
    color: "#4ade80",
  },
  gastos: {
    label: "Gastos",
    color: "#ef4444",
  },
} satisfies ChartConfig;

function BalanceChart() {
  return (
    <Card className="bg-slate-800">
      <CardHeader>
        <CardTitle className="text-muted-foreground">Resumen Semanal</CardTitle>
      </CardHeader>
      <CardContent className="mt-3">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="daysOfWeek"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="ingressos" fill="var(--color-ingressos)" radius={4} />
            <Bar dataKey="gastos" fill="var(--color-gastos)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default BalanceChart;

/* function BalanceChart() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-gray-400 mb-4">Balance mensual</h2>
      <div className="flex justify-between items-center mb-4">
        <p>Ingresos</p>
        <p className="text-green-400">R$110.00</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p>Gastos</p>
        <p className="text-red-400">R$10.00</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Balance</p>
        <p>R$100.00</p>
      </div>
    </div>
  );
}

export default BalanceChart; */
