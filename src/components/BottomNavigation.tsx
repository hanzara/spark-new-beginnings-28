import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Wallet, HandCoins, BarChart3 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'HOME', icon: Home, path: '/' },
    { id: 'chama', label: 'CHAMA', icon: Briefcase, path: '/chamas' },
    { id: 'wallet', label: 'WALLET', icon: Wallet, path: '/smart-wallet' },
    { id: 'loans', label: 'LOANS', icon: HandCoins, path: '/loan-management' },
    { id: 'analytics', label: 'ANALYTICS', icon: BarChart3, path: '/analytics' },
  ];

  const handleTabClick = (tab: any) => {
    onTabChange(tab.id);
    if (tab.id === 'home') {
      navigate('/');
    } else {
      navigate(tab.path);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t z-40">
      <div className="flex items-center justify-around py-2 px-4 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => handleTabClick(tab)}
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <IconComponent className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-primary' : ''}`}>
                {tab.label}
              </span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;