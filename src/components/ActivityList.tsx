
import { Card } from "@/components/ui/card";

const activities = [
  { name: "Email Campaign", status: "Active", date: "Apr 24, 2025" },
  { name: "Social Media Ads", status: "Completed", date: "Apr 23, 2025" },
  { name: "Content Creation", status: "Pending", date: "Apr 22, 2025" },
];

export function ActivityList() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={activity.name}
            className="flex items-center justify-between fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div>
              <p className="font-medium">{activity.name}</p>
              <p className="text-sm text-muted-foreground">{activity.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
              activity.status === "Active" ? "bg-green-500/20 text-green-400 border border-green-500/20" :
              activity.status === "Completed" ? "bg-blue-500/20 text-blue-400 border border-blue-500/20" :
              "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"
            }`}>
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
