
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SubNavItem {
  title: string;
  path: string;
  badge?: string;
  description?: string;
}

interface HorizontalSubNavProps {
  items: SubNavItem[];
  title?: string;
}

const HorizontalSubNav: React.FC<HorizontalSubNavProps> = ({ items, title }) => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {title && (
          <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">{title}</h2>
        )}
        
        {/* Mobile View - Grid Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={`flex items-center justify-between p-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group ${
                  isActivePath(item.path)
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/10'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-border bg-card'
                } focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-muted-foreground mt-1">{item.description}</span>
                  )}
                </div>
                {item.badge && (
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-medium px-2 py-1 bg-muted/80 hover:bg-muted transition-colors ml-2"
                  >
                    {item.badge}
                  </Badge>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop View - Horizontal Scroll */}
        <div className="hidden md:block">
          <ScrollArea className="w-full">
            <div className="flex gap-4 min-w-max pb-2">
              {items.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap hover:scale-105 group min-w-max ${
                    isActivePath(item.path)
                      ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/10'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent'
                  } focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2`}
                >
                  <span className="relative">
                    {item.title}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                      isActivePath(item.path) ? 'bg-primary scale-x-100' : 'bg-primary scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </span>
                  {item.badge && (
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-medium px-2 py-1 bg-muted/80 hover:bg-muted transition-colors"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </NavLink>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSubNav;
