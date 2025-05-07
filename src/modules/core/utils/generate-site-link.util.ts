import { appConfig } from '@/configs';

export const generateSiteLink = (accessToken: string, initDataRaw: string) => {
  return `${appConfig.siteUrl}/?accessToken=${accessToken}&initDataRaw=${initDataRaw}`;
};
