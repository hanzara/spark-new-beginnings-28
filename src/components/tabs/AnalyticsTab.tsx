import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AnalyticsTabProps {
  onAdvancedFeatures: () => void;
}

const AnalyticsTab: React.FC<AnalyticsTabProps> = ({ onAdvancedFeatures }) => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'ANALYTICS',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigate('/analytics'),
    },
    {
      title: 'REPORTS',
      icon: PieChart,
      color: 'from-green-500 to-green-600',
      onClick: () => navigate('/analytics'),
    },
    {
      title: 'PERFORMANCE',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      onClick: () => navigate('/analytics'),
    },
    {
      title: 'ADVANCED FEATURES',
      icon: Settings,
      color: 'from-orange-500 to-orange-600',
      onClick: onAdvancedFeatures,
    },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Quick Action</h2>
        <p className="text-muted-foreground">Choose an action to get started</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <Card 
              key={action.title}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={action.onClick}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{action.title}</h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsTab;