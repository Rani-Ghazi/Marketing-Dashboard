
import { ArrowUpRight, Users, Box, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "New Users",
    value: "+573",
    icon: Users,
    change: "+12.5%",
  },
  {
    title: "Total Orders",
    value: "1,245",
    icon: Box,
    change: "+15.2%",
  },
  {
    title: "Sales Revenue",
    value: "$42.5k",
    icon: CreditCard,
    change: "+8.9%",
  },
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="glass-card p-4 flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-full bg-primary/10">
            <stat.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <div className="flex items-baseline space-x-2.5">
              <p className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <div className="flex items-center text-green-400 text-sm">
                <ArrowUpRight className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
