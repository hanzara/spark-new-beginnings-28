import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import HomeTab from './tabs/HomeTab';
import ChamaTab from './tabs/ChamaTab';
import AdvancedFeaturesTab from './tabs/AdvancedFeaturesTab';
import WalletTab from './tabs/WalletTab';
import LoansTab from './tabs/LoansTab';
import AnalyticsTab from './tabs/AnalyticsTab';
import WalletAdvancedTab from './tabs/WalletAdvancedTab';
import LoansAdvancedTab from './tabs/LoansAdvancedTab';
import AnalyticsAdvancedTab from './tabs/AnalyticsAdvancedTab';

interface NewAppLayoutProps {
  children: React.ReactNode;
}

const NewAppLayout: React.FC<NewAppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [showAdvancedFeatures, setShowAdvancedFeatures] = useState(false);
  const [advancedFeatureType, setAdvancedFeatureType] = useState<string>('');

  // Determine active tab based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveTab('home');
      setShowAdvancedFeatures(false);
    } else if (path.startsWith('/chama') || path === '/create-chama' || path === '/join-chama') {
      setActiveTab('chama');
      setShowAdvancedFeatures(false);
    } else if (path.startsWith('/smart-wallet') || path === '/mobile-money') {
      setActiveTab('wallet');
      setShowAdvancedFeatures(false);
    } else if (path.startsWith('/loan') || path === '/apply-loan') {
      setActiveTab('loans');
      setShowAdvancedFeatures(false);
    } else if (path === '/analytics') {
      setActiveTab('analytics');
      setShowAdvancedFeatures(false);
    } else {
      // For other routes, show the content without tab navigation
      setShowAdvancedFeatures(false);
    }
  }, [location.pathname]);

  const handleAdvancedFeatures = (type: string = 'chama') => {
    setShowAdvancedFeatures(true);
    setAdvancedFeatureType(type);
  };

  const handleBackFromAdvanced = () => {
    setShowAdvancedFeatures(false);
    setAdvancedFeatureType('');
  };

  // Show special tab content for main navigation tabs
  const showTabContent = () => {
    // Show advanced features based on type
    if (showAdvancedFeatures) {
      switch (advancedFeatureType) {
        case 'chama':
          return <AdvancedFeaturesTab onBack={handleBackFromAdvanced} />;
        case 'wallet':
          return <WalletAdvancedTab onBack={handleBackFromAdvanced} />;
        case 'loans':
          return <LoansAdvancedTab onBack={handleBackFromAdvanced} />;
        case 'analytics':
          return <AnalyticsAdvancedTab onBack={handleBackFromAdvanced} />;
        default:
          return <AdvancedFeaturesTab onBack={handleBackFromAdvanced} />;
      }
    }

    // Show main tab content
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'chama':
        return <ChamaTab onAdvancedFeatures={() => handleAdvancedFeatures('chama')} />;
      case 'wallet':
        return <WalletTab onAdvancedFeatures={() => handleAdvancedFeatures('wallet')} />;
      case 'loans':
        return <LoansTab onAdvancedFeatures={() => handleAdvancedFeatures('loans')} />;
      case 'analytics':
        return <AnalyticsTab onAdvancedFeatures={() => handleAdvancedFeatures('analytics')} />;
      default:
        return children;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      <main className="pt-4 px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          {showTabContent()}
        </div>
      </main>
      
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default NewAppLayout;