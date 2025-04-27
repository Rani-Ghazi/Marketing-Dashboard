
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  trend?: "up" | "down";
  trendValue?: string;
}

export function StatsCard({ title, value, trend, trendValue }: StatsCardProps) {
  return (
    <Card className="glass-card p-6">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
      {trend && trendValue && (
        <p className={`text-sm mt-2 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
          {trend === "up" ? "↑" : "↓"} {trendValue}
        </p>
      )}
    </Card>
  );
}
