import { axiosInstance } from '@/configs/axios.config';
import { 
  TelegramAuthWebAppRequest, 
  TelegramAuthResponse, 
  TelegramMeResponse, 
  TelegramReferralLinkResponse,
  TelegramProcessStartAppRequest,
  TelegramProcessStartAppResponse
} from './telegram-model';

export const TelegramApi = {
  auth: {
    webApp: async (data: TelegramAuthWebAppRequest): Promise<TelegramAuthResponse> => {
      try {
        const response = await axiosInstance.post('/telegram/auth/web-app', data);
        return response.data;
      } catch (error) {
        console.error('Error in Telegram WebApp authentication:', error);
        throw error;
      }
    }
  },
  telegram: {
    me: async (): Promise<TelegramMeResponse> => {
      try {
        const response = await axiosInstance.get('/telegram/me');
        return response.data;
      } catch (error) {
        console.error('Error fetching Telegram user data:', error);
        throw error;
      }
    },
    getReferralLink: async (): Promise<TelegramReferralLinkResponse> => {
      try {
        const response = await axiosInstance.get('/telegram/referral-link');
        return response.data;
      } catch (error) {
        console.error('Error fetching Telegram referral link:', error);
        throw error;
      }
    },
    processStartApp: async (data: TelegramProcessStartAppRequest): Promise<TelegramProcessStartAppResponse> => {
      try {
        const response = await axiosInstance.post('/telegram/process-startapp', data);
        return response.data;
      } catch (error) {
        console.error('Error processing Telegram startapp parameter:', error);
        throw error;
      }
    }
  }
}; 