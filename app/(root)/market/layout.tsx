import React from 'react';
import { MFooter, MHeader} from '@/components/market/shared/m-pages'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MHeader/>
      {children}
      <MFooter/>
    </div>
  );
};

export default RootLayout;
