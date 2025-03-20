import { axiosInstance } from '@/configs/axios.config';
import { BoostResponse, SingleBoostResponse, UserActiveBoostsResponse } from './bosts-model';

export const BoostsApi = {
  boosts: {
    getAll: async (): Promise<BoostResponse> => {
      try {
        const response = await axiosInstance.get('/bosts');
        return response.data;
      } catch (error) {
        console.error('Error fetching boosts:', error);
        throw error;
      }
    },
    
    getById: async (id: string): Promise<SingleBoostResponse> => {
      try {
        const response = await axiosInstance.get(`/bosts/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching boost with id ${id}:`, error);
        throw error;
      }
    },
    
    getUserActive: async (): Promise<UserActiveBoostsResponse> => {
      try {
        const response = await axiosInstance.get('/bosts/user/active');
        return response.data;
      } catch (error) {
        console.error('Error fetching user active boosts:', error);
        throw error;
      }
    }
  }
};