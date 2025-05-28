import React from 'react';

export const Tabs = ({ children, defaultValue, className = '' }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab, className = '' }) => {
  return (
    <div className={`flex ${className}`}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { activeTab, setActiveTab });
      })}
    </div>
  );
};

export const TabsTrigger = ({ 
  children, 
  value, 
  activeTab, 
  setActiveTab, 
  className = '' 
}) => {
  return (
    <button
      className={`px-4 py-2 ${activeTab === value ? 'bg-gray-100' : ''} ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, activeTab, className = '' }) => {
  return activeTab === value ? (
    <div className={className}>
      {children}
    </div>
  ) : null;
};
