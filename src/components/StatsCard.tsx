
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  trend?: "up" | "down";
  trendValue?: string;
}

export function StatsCard({ title, value, trend, trendValue }: StatsCardProps) {
  return (
    <Card className="glass-card p-6 float-animation">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        {value}
      </p>
      {trend && trendValue && (
        <p className={`text-sm mt-2 flex items-center gap-1 ${
          trend === "up" ? "text-green-400" : "text-red-400"
        }`}>
          {trend === "up" ? "↑" : "↓"}
          <span className="font-medium">{trendValue}</span>
        </p>
      )}
    </Card>
  );
}
