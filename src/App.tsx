
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import VerticalNavigation from "@/components/VerticalNavigation";
import HorizontalSubNav from "@/components/HorizontalSubNav";

// Page imports
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import CompanyPage from "./pages/CompanyPage";
import AppDownloadPage from "./pages/AppDownloadPage";
import ChamasPage from "./pages/ChamasPage";
import ChamaDetailPage from "./pages/ChamaDetailPage";
import CreateChamaPage from "./pages/CreateChamaPage";
import JoinChamaPage from "./pages/JoinChamaPage";
import AdvancedChamaPage from "./pages/AdvancedChamaPage";
import InvestmentPage from "./pages/InvestmentPage";
import StakingPage from "./pages/StakingPage";
import P2PTradingPage from "./pages/P2PTradingPage";
import SmartWalletPage from "./pages/SmartWalletPage";
import MobileMoneyPage from "./pages/MobileMoneyPage";
import PersonalSavingsPage from "./pages/PersonalSavingsPage";
import LoanManagementPage from "./pages/LoanManagementPage";
import AdaptiveCreditPage from "./pages/AdaptiveCreditPage";
import BlockchainLendingPage from "./pages/BlockchainLendingPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CommunityHubPage from "./pages/CommunityHubPage";
import CommunityNetworkingPage from "./pages/CommunityNetworkingPage";
import VotingSystemPage from "./pages/VotingSystemPage";
import FinancialNavigatorPage from "./pages/FinancialNavigatorPage";
import AdminPortalPage from "./pages/AdminPortalPage";
import BankPortalPage from "./pages/BankPortalPage";
import AvailableChamasPage from "./pages/AvailableChamasPage";
import SmartFinancePage from "./pages/SmartFinancePage";
import PartnerDashboardPage from "./pages/PartnerDashboardPage";
import TriviaGamePage from "./pages/TriviaGamePage";
import MakeContributionPage from "./pages/MakeContributionPage";
import ApplyLoanPage from "./pages/ApplyLoanPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Sub-navigation configurations
const getSubNavItems = (pathname: string) => {
  if (pathname.startsWith('/chamas') || pathname === '/create-chama' || pathname === '/join-chama' || pathname === '/advanced-chama' || pathname === '/available-chamas') {
    return [
      { title: 'My Chamas', path: '/chamas', description: 'View and manage your chamas' },
      { title: 'Available Chamas', path: '/available-chamas', badge: 'New', description: 'Browse and join chamas' },
      { title: 'Create Chama', path: '/create-chama', description: 'Start a new chama' },
      { title: 'Join Chama', path: '/join-chama', description: 'Join an existing chama' },
      { title: 'Advanced Features', path: '/advanced-chama', badge: 'Pro', description: 'Advanced chama management' },
    ];
  }
  
  if (pathname.startsWith('/investment') || pathname === '/staking' || pathname === '/p2p-trading') {
    return [
      { title: 'Portfolio', path: '/investment', description: 'Investment portfolio' },
      { title: 'Staking', path: '/staking', badge: 'Earn', description: 'Stake and earn rewards' },
      { title: 'P2P Trading', path: '/p2p-trading', description: 'Peer-to-peer trading' },
    ];
  }
  
  if (pathname.startsWith('/smart-wallet') || pathname === '/mobile-money' || pathname === '/personal-savings') {
    return [
      { title: 'Smart Wallet', path: '/smart-wallet', badge: 'AI', description: 'AI-powered wallet management' },
      { title: 'Mobile Money', path: '/mobile-money', description: 'M-Pesa integration' },
      { title: 'Personal Savings', path: '/personal-savings', badge: 'New', description: 'Personal savings & lending' },
    ];
  }
  
  if (pathname.startsWith('/loan-management') || pathname === '/adaptive-credit' || pathname === '/blockchain-lending' || pathname === '/apply-loan') {
    return [
      { title: 'Apply for Loan', path: '/apply-loan', badge: 'New', description: 'Apply for a chama loan' },
      { title: 'My Loans', path: '/loan-management', description: 'Manage your loans' },
      { title: 'Adaptive Credit', path: '/adaptive-credit', badge: 'Smart', description: 'AI-powered credit scoring' },
      { title: 'Blockchain Lending', path: '/blockchain-lending', badge: 'DeFi', description: 'Decentralized lending' },
    ];
  }
  
  if (pathname.startsWith('/community-hub') || pathname === '/community-networking' || pathname === '/voting-system' || pathname === '/financial-navigator') {
    return [
      { title: 'Community Hub', path: '/community-hub', description: 'Community features' },
      { title: 'Networking', path: '/community-networking', badge: 'New', description: 'Cross-chama networking' },
      { title: 'Voting System', path: '/voting-system', description: 'Democratic decision making' },
      { title: 'Financial Navigator', path: '/financial-navigator', badge: 'Guide', description: 'Financial guidance' },
    ];
  }
  
  return null;
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const subNavItems = getSubNavItems(location.pathname);

  return (
    <div className="flex h-screen bg-gray-50 relative">
      <VerticalNavigation />
      
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {subNavItems && (
          <HorizontalSubNav items={subNavItems} />
        )}
        
        <main className="flex-1 overflow-auto">
          <div className="w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<CompanyPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/download" element={<AppDownloadPage />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <Index />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/chamas" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <ChamasPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/available-chamas" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <AvailableChamasPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/chama/:id" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <ChamaDetailPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/chama-detail/:id" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <ChamaDetailPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/create-chama" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <CreateChamaPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/join-chama" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <JoinChamaPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/advanced-chama" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <AdvancedChamaPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/smart-finance" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <SmartFinancePage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/partner-dashboard" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <PartnerDashboardPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/investment" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <InvestmentPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/staking" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <StakingPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/p2p-trading" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <P2PTradingPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/smart-wallet" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <SmartWalletPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/mobile-money" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <MobileMoneyPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/personal-savings" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <PersonalSavingsPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/apply-loan" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <ApplyLoanPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/loan-management" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <LoanManagementPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/adaptive-credit" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <AdaptiveCreditPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/blockchain-lending" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <BlockchainLendingPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/analytics" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <AnalyticsPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/community-hub" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <CommunityHubPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/community-networking" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <CommunityNetworkingPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/voting-system" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <VotingSystemPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/financial-navigator" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <FinancialNavigatorPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/admin-portal" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <AdminPortalPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/bank-portal" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <BankPortalPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/trivia-game" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <TriviaGamePage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="/make-contribution" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <MakeContributionPage />
                    </AppLayout>
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
