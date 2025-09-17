
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import NewAppLayout from "@/components/NewAppLayout";

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

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <NewAppLayout>{children}</NewAppLayout>;
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
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/download" element={<AppDownloadPage />} />
                <Route path="*" element={
                  <ProtectedRoute>
                    <AppLayout>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/chamas" element={<ChamasPage />} />
                        <Route path="/available-chamas" element={<AvailableChamasPage />} />
                        <Route path="/chama/:id" element={<ChamaDetailPage />} />
                        <Route path="/chama-detail/:id" element={<ChamaDetailPage />} />
                        <Route path="/create-chama" element={<CreateChamaPage />} />
                        <Route path="/join-chama" element={<JoinChamaPage />} />
                        <Route path="/advanced-chama" element={<AdvancedChamaPage />} />
                        <Route path="/smart-finance" element={<SmartFinancePage />} />
                        <Route path="/partner-dashboard" element={<PartnerDashboardPage />} />
                        <Route path="/investment" element={<InvestmentPage />} />
                        <Route path="/staking" element={<StakingPage />} />
                        <Route path="/p2p-trading" element={<P2PTradingPage />} />
                        <Route path="/smart-wallet" element={<SmartWalletPage />} />
                        <Route path="/mobile-money" element={<MobileMoneyPage />} />
                        <Route path="/personal-savings" element={<PersonalSavingsPage />} />
                        <Route path="/apply-loan" element={<ApplyLoanPage />} />
                        <Route path="/loan-management" element={<LoanManagementPage />} />
                        <Route path="/adaptive-credit" element={<AdaptiveCreditPage />} />
                        <Route path="/blockchain-lending" element={<BlockchainLendingPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/community-hub" element={<CommunityHubPage />} />
                        <Route path="/community-networking" element={<CommunityNetworkingPage />} />
                        <Route path="/voting-system" element={<VotingSystemPage />} />
                        <Route path="/financial-navigator" element={<FinancialNavigatorPage />} />
                        <Route path="/admin-portal" element={<AdminPortalPage />} />
                        <Route path="/bank-portal" element={<BankPortalPage />} />
                        <Route path="/trivia-game" element={<TriviaGamePage />} />
                        <Route path="/make-contribution" element={<MakeContributionPage />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </AppLayout>
                  </ProtectedRoute>
                } />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
