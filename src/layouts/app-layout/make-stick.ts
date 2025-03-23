import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

export const makeStick = (isPurple: boolean) => {
  const lp = retrieveLaunchParams();

    // Some versions of Telegram don't need the classes above.
    if (['macos', 'tdesktop', 'weba', 'web', 'webk'].includes(lp.platform)) {
      // return;
    }
  
    document.body.classList.add('mobile-body');
    const wrapElement = document.getElementById('wrap');
    if (wrapElement) {
      wrapElement.classList.add('mobile-wrap');
      if (isPurple) {
        wrapElement.classList.add('content_purple');
      } else {
        wrapElement.classList.add('content_yellow');
      }
    }
  
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.classList.add('mobilec-content');
    }
  };
  