
import { Card } from "@/components/ui/card";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Direct Traffic", value: 540, color: '#6E3AFF' },
  { name: "Social Media", value: 320, color: '#9B5DE5' },
  { name: "Email Marketing", value: 210, color: '#C77DFF' },
  { name: "Referrals", value: 130, color: '#D5B3FF' }
];

export function PieChart() {
  return (
    <Card className="glass-card p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Traffic Sources
        </h3>
        <div className="text-sm text-muted-foreground">
          Last 30 days
        </div>
      </div>
      <div className="h-[300px] fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPie>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                background: "rgba(28, 25, 37, 0.9)", 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => (
                <span className="text-sm text-muted-foreground">{value}</span>
              )}
            />
          </RechartsPie>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
