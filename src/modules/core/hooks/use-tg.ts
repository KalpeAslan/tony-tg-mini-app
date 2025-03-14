import { useSignal, initData } from '@telegram-apps/sdk-react';

export const useTg = () => {
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  console.log('initDataRaw', initDataRaw);
  console.log('initDataState', initDataState);
};
