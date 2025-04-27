
import { Activity, ArrowUpRight, Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "Active Users",
    value: "2,847",
    icon: Users,
    change: "+12.5%",
    changeColor: "text-green-400",
  },
  {
    title: "Total Sales",
    value: "OMR 45.2k",
    icon: DollarSign,
    change: "+15.2%",
    changeColor: "text-green-400",
  },
  {
    title: "Revenue Growth",
    value: "+23.1%",
    icon: TrendingUp,
    change: "+8.9%",
    changeColor: "text-green-400",
  },
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title} 
          className="glass-card p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden"
          style={{ 
            animationDelay: `${index * 150}ms`,
            background: 'linear-gradient(to right, rgba(28, 25, 37, 0.8), rgba(28, 25, 37, 0.6))'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-lg">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div className={`flex items-center ${stat.changeColor} text-sm gap-1`}>
              <ArrowUpRight className="w-4 h-4" />
              <span>{stat.change}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{stat.title}</p>
          <p className="text-2xl font-bold mt-1 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
  );
}
