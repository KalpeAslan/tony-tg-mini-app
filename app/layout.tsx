import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { ThemeProvider as NextThemeProvider } from '@/components/theme-provider';
import { WalletProvider } from '@/lib/context/WalletContext';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tony Wallet',
  description: 'Your gateway to the Tony ecosystem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeProvider>
              <WalletProvider>
                {children}
              </WalletProvider>
            </ThemeProvider>
          </NextThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
