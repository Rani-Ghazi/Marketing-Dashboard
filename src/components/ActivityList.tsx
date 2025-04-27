
import { Card } from "@/components/ui/card";
import { Mail, Globe, FileText, Check, Clock, AlertCircle } from "lucide-react";

const activities = [
  { 
    name: "Email Campaign", 
    status: "Active", 
    date: "Apr 24, 2025",
    icon: Mail,
    statusColor: "bg-green-500/20 text-green-400 border border-green-500/20"
  },
  { 
    name: "Social Media Ads", 
    status: "Completed", 
    date: "Apr 23, 2025",
    icon: Globe,
    statusColor: "bg-blue-500/20 text-blue-400 border border-blue-500/20"
  },
  { 
    name: "Content Creation", 
    status: "Pending", 
    date: "Apr 22, 2025",
    icon: FileText,
    statusColor: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Active":
      return Clock;
    case "Completed":
      return Check;
    case "Pending":
      return AlertCircle;
    default:
      return Clock;
  }
};

export function ActivityList() {
  return (
    <Card className="glass-card p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        Recent Activity
      </h3>
      <div className="space-y-6">
        {activities.map((activity, index) => {
          const StatusIcon = getStatusIcon(activity.status);
          return (
            <div 
              key={activity.name}
              className="flex items-center justify-between fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{activity.name}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${activity.statusColor}`}>
                <StatusIcon className="w-3 h-3" />
                <span>{activity.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
