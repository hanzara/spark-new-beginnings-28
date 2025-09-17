import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Wallet, CreditCard, ArrowUpDown, Smartphone, Calendar, DollarSign, Shield, BarChart3, Settings, Users, FileText } from 'lucide-react';

interface WalletAdvancedTabProps {
  onBack: () => void;
}

const WalletAdvancedTab: React.FC<WalletAdvancedTabProps> = ({ onBack }) => {
  const features = [
    { title: 'Wallet Overview', icon: Wallet, color: 'from-blue-500 to-blue-600' },
    { title: 'Payment Methods', icon: CreditCard, color: 'from-green-500 to-green-600' },
    { title: 'Transactions', icon: ArrowUpDown, color: 'from-purple-500 to-purple-600' },
    { title: 'Mobile Money', icon: Smartphone, color: 'from-orange-500 to-orange-600' },
    { title: 'Scheduled Payments', icon: Calendar, color: 'from-indigo-500 to-indigo-600' },
    { title: 'Currency Exchange', icon: DollarSign, color: 'from-yellow-500 to-yellow-600' },
    { title: 'Security', icon: Shield, color: 'from-red-500 to-red-600' },
    { title: 'Analytics', icon: BarChart3, color: 'from-cyan-500 to-cyan-600' },
    { title: 'Settings', icon: Settings, color: 'from-pink-500 to-pink-600' },
    { title: 'Account Linking', icon: Users, color: 'from-emerald-500 to-emerald-600' },
    { title: 'Statements', icon: FileText, color: 'from-slate-500 to-slate-600' },
    { title: 'Budget Tracking', icon: BarChart3, color: 'from-teal-500 to-teal-600' },
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

export default WalletAdvancedTab;