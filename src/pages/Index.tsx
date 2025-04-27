
import { StatsCard } from "@/components/StatsCard";
import { AreaChart } from "@/components/AreaChart";
import { ActivityList } from "@/components/ActivityList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Track your business metrics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AreaChart />
          </div>
          <div>
            <ActivityList />
          </div>
        </div>

        {/* Attribution */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>Developed by Rani Ghazi</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
