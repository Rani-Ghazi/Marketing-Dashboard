
import { StatsCard } from "@/components/StatsCard";
import { AreaChart } from "@/components/AreaChart";
import { ActivityList } from "@/components/ActivityList";
import { PieChart } from "@/components/PieChart";
import { QuickStats } from "@/components/QuickStats";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background p-4 md:p-6 lg:p-8 overflow-x-hidden">
      {/* Cool background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#1A1F2C] bg-opacity-95" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyQjM4IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="fade-in">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <StatsCard
            title="Total Revenue"
            value="$127,632.00"
            trend="up"
            trendValue="12.5%"
          />
          <StatsCard
            title="Active Users"
            value="2,342"
            trend="up"
            trendValue="8.2%"
          />
          <StatsCard
            title="Conversion Rate"
            value="3.14%"
            trend="down"
            trendValue="2.1%"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2">
            <AreaChart />
          </div>
          <div>
            <ActivityList />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <PieChart />
          <ActivityList />
        </div>

        {/* Attribution */}
        <footer className="text-center text-sm text-muted-foreground py-8 border-t border-border fade-in">
          <p>Developed by Rani Ghazi</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
