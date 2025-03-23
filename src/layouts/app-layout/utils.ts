import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

export const findWrapElement = () => document.getElementById('wrap');

export const makeStick = (isPurple: boolean) => {
  const lp = retrieveLaunchParams();

    // Some versions of Telegram don't need the classes above.
    if (['macos', 'tdesktop', 'weba', 'web', 'webk'].includes(lp.platform)) {
      // return;
    }
  
    document.body.classList.add('mobile-body');
    const wrapElement = findWrapElement();
    wrapElement?.classList.add('mobile-wrap');
  
    const contentElement = document.getElementById('content');
    contentElement?.classList.add('mobilec-content');
  };
  

  export const handleBgColor = (isPurple: boolean) => {
    const wrapElement = findWrapElement();
    if (isPurple) {
      wrapElement?.classList.remove('content_yellow');
      wrapElement?.classList.add('content_purple');
    } else {
      wrapElement?.classList.remove('content_purple');
      wrapElement?.classList.add('content_yellow');
    }
  };