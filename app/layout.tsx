import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BoboJoy',
  description:
    '🍔🍫🛍🍉💊 Закажите еду и продукты из ресторанов, магазинов, базаров и аптек поблизости. Бургеры, пицца, лаваши, суши, сладости, напитки из лучших ресторанов Узбекистана на завтрак, обед и ужин к вашей двери от 30 минут.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
