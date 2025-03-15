import { axiosInstance } from '@/configs/axios.config';
import { TelegramAuthWebAppRequest, TelegramAuthResponse } from './telegram-model';

export const TelegramApi = {
  auth: {
    webApp: async (data: TelegramAuthWebAppRequest): Promise<TelegramAuthResponse> => {
      try {
        const response = await axiosInstance.post('/auth/web-app', data);
        return response.data;
      } catch (error) {
        console.error('Error in Telegram WebApp authentication:', error);
        throw error;
      }
    }
  }
}; 