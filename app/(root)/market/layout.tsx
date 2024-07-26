import React from 'react';
import { MHeader} from '@/components/market/shared/m-pages'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MHeader/>
      {children}
    </div>
  );
};

export default RootLayout;
