import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Handshake, Shield, TrendingUp, Users, Heart, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeTab = () => {
  const navigate = useNavigate();

  const portalButtons = [
    {
      title: 'Bank Portal',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      path: '/bank-portal',
    },
    {
      title: 'Partner Dashboard', 
      icon: Handshake,
      color: 'from-green-500 to-green-600',
      path: '/partner-dashboard',
    },
    {
      title: 'Admin Portal',
      icon: Shield,
      color: 'from-red-500 to-red-600', 
      path: '/admin-portal',
    },
  ];

  const featureButtons = [
    {
      title: 'Investment',
      icon: TrendingUp,
      color: 'from-emerald-500 to-emerald-600',
      path: '/investment',
    },
    {
      title: 'Smart Finance',
      icon: Shield,
      color: 'from-cyan-500 to-cyan-600',
      path: '/smart-finance',
    },
    {
      title: 'Community',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      path: '/community-hub',
    },
    {
      title: 'Trivia Game',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      path: '/trivia-game',
    },
    {
      title: 'Analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      path: '/analytics',
    },
  ];

  return (
    <div className="space-y-8 pb-20">
      {/* Portal Buttons */}
      <div className="grid gap-4 md:grid-cols-3">
        {portalButtons.map((portal) => {
          const IconComponent = portal.icon;
          return (
            <Card 
              key={portal.title}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(portal.path)}
            >
              <CardContent className={`p-8 bg-gradient-to-br ${portal.color} text-white relative`}>
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{portal.title}</h3>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Feature Buttons Grid */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {featureButtons.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.title}
              className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`mx-auto w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
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

export default HomeTab;