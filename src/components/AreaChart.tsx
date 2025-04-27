
import { Card } from "@/components/ui/card";
import { Area, AreaChart as RechartsArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", value: 50000 },
  { month: "Feb", value: 85000 },
  { month: "Mar", value: 45000 },
  { month: "Apr", value: 90000 },
  { month: "May", value: 65000 },
  { month: "Jun", value: 120000 },
  { month: "Jul", value: 77000 },
];

export function AreaChart() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        Revenue Overview
      </h3>
      <div className="h-[300px] fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsArea data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6E3AFF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6E3AFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              stroke="#666" 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#666" 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip 
              contentStyle={{ 
                background: "rgba(28, 25, 37, 0.9)", 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }} 
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6E3AFF"
              strokeWidth={2}
              fill="url(#colorGradient)"
            />
          </RechartsArea>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
