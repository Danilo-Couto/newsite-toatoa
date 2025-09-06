import { createContext, useState, useContext, ReactNode } from 'react';

interface ClickContextType {
  clickCount: number;
  incrementClickCount: () => void;
}

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export const ClickProvider = ({ children }: { children: ReactNode}) => {
  const [clickCount, setClickCount] = useState<number>(0);

  const incrementClickCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <ClickContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickContext = (): ClickContextType => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error('useClickContext must be used within a ClickProvider');
  }
  return context;
};
