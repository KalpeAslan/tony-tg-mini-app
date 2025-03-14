import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider as NextThemeProvider } from '@/providers';
import { WalletProvider } from '@/lib/context/WalletContext';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { IconDefs } from '@/components/ui/icons';
import { TelegramProvider } from '@/modules/core';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ErrorBoundary>
          <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeProvider>
              <TelegramProvider>
                <WalletProvider>
                  <IconDefs />
                  {children}
                </WalletProvider>
              </TelegramProvider>
            </ThemeProvider>
          </NextThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
