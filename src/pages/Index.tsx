
import { StatsCard } from "@/components/StatsCard";
import { AreaChart } from "@/components/AreaChart";
import { ActivityList } from "@/components/ActivityList";
import { PieChart } from "@/components/PieChart";
import { QuickStats } from "@/components/QuickStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
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
