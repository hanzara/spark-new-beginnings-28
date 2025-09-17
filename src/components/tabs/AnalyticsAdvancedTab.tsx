import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BarChart3, PieChart, TrendingUp, Users, Calendar, DollarSign, Shield, FileText, Activity, Target, Zap } from 'lucide-react';

interface AnalyticsAdvancedTabProps {
  onBack: () => void;
}

const AnalyticsAdvancedTab: React.FC<AnalyticsAdvancedTabProps> = ({ onBack }) => {
  const features = [
    { title: 'Dashboard', icon: BarChart3, color: 'from-blue-500 to-blue-600' },
    { title: 'Charts & Graphs', icon: PieChart, color: 'from-green-500 to-green-600' },
    { title: 'Performance', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { title: 'User Metrics', icon: Users, color: 'from-orange-500 to-orange-600' },
    { title: 'Time Analysis', icon: Calendar, color: 'from-indigo-500 to-indigo-600' },
    { title: 'Revenue Tracking', icon: DollarSign, color: 'from-yellow-500 to-yellow-600' },
    { title: 'Security Audit', icon: Shield, color: 'from-red-500 to-red-600' },
    { title: 'Reports', icon: FileText, color: 'from-cyan-500 to-cyan-600' },
    { title: 'Real-time Data', icon: Activity, color: 'from-pink-500 to-pink-600' },
    { title: 'Goal Tracking', icon: Target, color: 'from-emerald-500 to-emerald-600' },
    { title: 'Insights', icon: Zap, color: 'from-slate-500 to-slate-600' },
    { title: 'Forecasting', icon: TrendingUp, color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="h-10 w-10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold text-foreground">Advanced Features</h2>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.title}
              className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`mx-auto w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsAdvancedTab;