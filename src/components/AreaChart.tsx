
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
      <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsArea data={data}>
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip contentStyle={{ background: "#1c1925", border: "none" }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6E3AFF"
              fill="url(#colorGradient)"
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6E3AFF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6E3AFF" stopOpacity={0} />
              </linearGradient>
            </defs>
          </RechartsArea>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
