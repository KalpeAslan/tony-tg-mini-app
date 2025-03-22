import { axiosInstance } from '@/configs/axios.config';
import { 
  TelegramAuthWebAppRequest, 
  TelegramAuthResponse, 
  TelegramMeResponse, 
  TelegramReferralLinkResponse,
} from './telegram-model';

const mockInitData = 'user=%7B%22id%22%3A2141458316%2C%22first_name%22%3A%22Aslan%22%2C%22last_name%22%3A%22K%22%2C%22username%22%3A%22AslanKlp%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FYMjDdDh-FpF17bp-Bt6sJc5tRzTh8cEJETegYHsLxfU.svg%22%7D&chat_instance=3658466365686639738&chat_type=private&auth_date=1742043657&signature=Ek6F_OaMqClEBwa2FVMyYqDdVzgXd_RzL4-4w6Mb_IfOAxmwOgEAx_xDYlIBjZPjTDJSSBImVs_OM_DixEgYBw&hash=7012ce6c49dca618978e3a7a9967a24595c2878c401fd4dd19d9ea4157fc27e4'

export const TelegramApi = {
  auth: {
    webApp: async (data: TelegramAuthWebAppRequest): Promise<TelegramAuthResponse> => {
      try {
        // data.initData = mockInitData
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
  }
}; 