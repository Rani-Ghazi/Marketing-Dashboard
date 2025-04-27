
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
}

export function StatsCard({ title, value, trend, trendValue }: StatsCardProps) {
  const formattedValue = value.startsWith("$") ? `OMR ${value.slice(1)}` : value;
  
  return (
    <Card className="glass-card p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        {formattedValue}
      </p>
      <div className={`flex items-center mt-4 text-sm ${
        trend === "up" ? "text-green-400" : "text-red-400"
      }`}>
        {trend === "up" ? (
          <ArrowUp className="w-4 h-4 mr-1" />
        ) : (
          <ArrowDown className="w-4 h-4 mr-1" />
        )}
        <span>{trendValue}</span>
      </div>
    </Card>
  );
}
