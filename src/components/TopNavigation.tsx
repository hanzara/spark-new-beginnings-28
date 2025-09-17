import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useAuth } from '@/hooks/useAuth';
import { useProfilePhoto } from '@/hooks/useProfilePhoto';
import { useNotifications } from '@/hooks/useNotifications';
import AuthModal from './AuthModal';
import NotificationCenter from './NotificationCenter';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { Search, Bell } from 'lucide-react';

const TopNavigation = () => {
  const { user } = useAuth();
  const { profilePhoto } = useProfilePhoto();
  const { notifications } = useNotifications();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <>
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for anything"
                  className="pl-10 w-full h-10 bg-muted/50 border-0 focus:bg-background transition-colors"
                />
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ChamaVault
              </h1>
            </div>

            {/* Right Side Icons */}
            <div className="flex-1 flex items-center justify-end space-x-3">
              <LanguageSelector />
              <ThemeToggle />
              
              {user ? (
                <>
                  {/* Notification Bell */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setNotificationOpen(true)}
                    className="relative h-9 w-9"
                  >
                    <Bell className="h-4 w-4" />
                    {unreadCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center p-0"
                      >
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </Badge>
                    )}
                  </Button>
                  
                  {/* Profile Avatar */}
                  <Avatar className="h-8 w-8">
                    {profilePhoto?.photo_url ? (
                      <AvatarImage src={profilePhoto.photo_url} alt="Profile" />
                    ) : (
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => setAuthModalOpen(true)}
                  className="h-9"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen} 
      />
      <NotificationCenter 
        isOpen={notificationOpen}
        onClose={() => setNotificationOpen(false)}
      />
    </>
  );
};

export default TopNavigation;