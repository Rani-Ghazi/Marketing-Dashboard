
import { Card } from "@/components/ui/card";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 540 },
  { name: "Social", value: 320 },
  { name: "Email", value: 210 },
  { name: "Other", value: 130 }
];

const COLORS = ['#6E3AFF', '#9B5DE5', '#C77DFF', '#D5B3FF'];

export function PieChart() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        Traffic Sources
      </h3>
      <div className="h-[300px] fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPie>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                background: "rgba(28, 25, 37, 0.9)", 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px"
              }}
            />
            <Legend />
          </RechartsPie>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
