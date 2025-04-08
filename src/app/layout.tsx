import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider as NextThemeProvider, QueryProvider } from '@/providers';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { IconDefs } from '@/components/ui/icons';
import { TelegramProvider } from '@/modules/core';
import { TgAuthProvider } from '@/modules/core';
import { AppLayout } from '@/layouts';
import { AppWrapper } from '@/lib/components';
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
        {/* <script src="https://unpkg.com/vconsole/dist/vconsole.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // VConsole will be exported to \`window.VConsole\` by default.
            var vConsole = new window.VConsole();
          `,
          }}
        /> */}
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?22"
          data-telegram-login="tony_dev_bot"
          data-size="large"
          data-onauth="onTelegramAuth(user)"
          data-request-access="write"
        ></script>
      </head>
      <body>
        <ErrorBoundary>
          <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryProvider>
              <TelegramProvider>
                <IconDefs />
                <TgAuthProvider>
                  <AppWrapper>
                    <AppLayout>
                      {children}
                    </AppLayout>
                  </AppWrapper>
                </TgAuthProvider>
              </TelegramProvider>
            </QueryProvider>
          </NextThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
