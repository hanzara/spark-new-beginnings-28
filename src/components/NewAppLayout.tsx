import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import HomeTab from './tabs/HomeTab';
import ChamaTab from './tabs/ChamaTab';
import AdvancedFeaturesTab from './tabs/AdvancedFeaturesTab';

interface NewAppLayoutProps {
  children: React.ReactNode;
}

const NewAppLayout: React.FC<NewAppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [showAdvancedFeatures, setShowAdvancedFeatures] = useState(false);

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

  const handleAdvancedFeatures = () => {
    setShowAdvancedFeatures(true);
  };

  const handleBackFromAdvanced = () => {
    setShowAdvancedFeatures(false);
  };

  // Show special tab content for main navigation tabs
  const showTabContent = () => {
    if (location.pathname === '/' && activeTab === 'home') {
      return <HomeTab />;
    }
    if ((location.pathname.startsWith('/chama') || location.pathname === '/create-chama' || location.pathname === '/join-chama') && activeTab === 'chama') {
      if (showAdvancedFeatures) {
        return <AdvancedFeaturesTab onBack={handleBackFromAdvanced} />;
      }
      return <ChamaTab onAdvancedFeatures={handleAdvancedFeatures} />;
    }
    return children;
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