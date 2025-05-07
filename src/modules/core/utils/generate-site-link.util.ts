import { appConfig } from '@/configs';

export const generateSiteLink = (accessToken: string, initDataRaw: string) => {
  return `${appConfig.siteUrl}/?accessToken=${encodeURIComponent(accessToken)}&initDataRaw=${encodeURIComponent(
    initDataRaw
  )}`;
};
