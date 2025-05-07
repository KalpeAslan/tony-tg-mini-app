import { useClientOnce } from '@/hooks/use-client-once';
import {
  isTMA,
  type LaunchParams,
  mockTelegramEnv,
  parseInitData,
  retrieveLaunchParams,
  ThemeParams,
} from '@telegram-apps/sdk-react';

interface Props {
  devMock?: boolean;
  initDataRaw?: string;
}

const themeParams: ThemeParams = {
  accentTextColor: '#6ab2f2',
  bgColor: '#17212b',
  buttonColor: '#5288c1',
  buttonTextColor: '#ffffff',
  destructiveTextColor: '#ec3942',
  headerBgColor: '#17212b',
  hintColor: '#708499',
  linkColor: '#6ab3f3',
  secondaryBgColor: '#232e3c',
  sectionBgColor: '#17212b',
  sectionHeaderTextColor: '#6ab3f3',
  subtitleTextColor: '#708499',
  textColor: '#f5f5f5',
};

/**
 * Mocks Telegram environment in development mode.
 */
export function useTelegramMock(props: Props): void {
  const mockDevData = () => {
    if (!sessionStorage.getItem('env-mocked') && isTMA('simple')) {
      return;
    }

    // Determine which launch params should be applied. We could already
    // apply them previously, or they may be specified on purpose using the
    // default launch parameters transmission method.
    let lp: LaunchParams | undefined;
    try {
      lp = retrieveLaunchParams();
    } catch (e) {
      const initDataRaw = new URLSearchParams([
        [
          'user',
          JSON.stringify({
            id: 99281932,
            first_name: 'Andrew',
            last_name: 'Rogue',
            username: 'rogue',
            language_code: 'en',
            is_premium: true,
            allows_write_to_pm: true,
          }),
        ],
        ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
        ['auth_date', '1716922846'],
        ['start_param', 'debug'],
        ['chat_type', 'sender'],
        ['chat_instance', '8428209589180549439'],
        ['signature', '6fbdaab833d39f54518bd5c3eb3f511d035e68cb'],
      ]).toString();

      lp = {
        themeParams,
        initData: parseInitData(initDataRaw),
        initDataRaw,
        version: '8',
        platform: 'tdesktop',
      };
    }

    sessionStorage.setItem('env-mocked', '1');
    mockTelegramEnv(lp);
  };

  const mockRealData = () => {
    const initDataRaw = props.initDataRaw;
    console.log('initDataRaw', initDataRaw);
    if (!initDataRaw) {
      return;
    }

    const lp = {
      initData: parseInitData(initDataRaw),
      initDataRaw,
      version: '8',
      platform: 'tdesktop',
      themeParams,
    };

    sessionStorage.setItem('env-mocked', '1');
    mockTelegramEnv(lp);
  };

  useClientOnce(() => {
    if (!props.devMock) {
      mockRealData();
    }

    return mockDevData();
  });
}
