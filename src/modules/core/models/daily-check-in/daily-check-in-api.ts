import { axiosInstance } from '@/configs/axios.config';
import { DailyCheckInRequest, DailyCheckInResponse } from './daily-check-in-model';

export const DailyCheckInApi = {
  checkIn: {
    post: async (): Promise<DailyCheckInResponse> => {
      try {
        const response = await axiosInstance.post('/daily-check-in');
        return response.data;
      } catch (error) {
        console.error('Error in daily check-in:', error);
        throw error;
      }
    },
    get: async (): Promise<DailyCheckInResponse> => {
      try {
        const response = await axiosInstance.get('/daily-check-in');
        return response.data;
      } catch (error) {
        console.error('Error fetching daily check-in status:', error);
        throw error;
      }
    },
  },
}; 