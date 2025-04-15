import { axiosInstance } from '@/configs/axios.config';
import { CompleteMissionRequest, MissionResponse } from '../models/mission.model';

export const MissionApi = {
  getAll: async (): Promise<MissionResponse> => {
    try {
      const response = await axiosInstance.get('/missions');
      return response.data;
    } catch (error) {
      console.error('Error fetching all missions:', error);
      throw error;
    }
  },

  getDaily: async (): Promise<MissionResponse> => {
    try {
      const response = await axiosInstance.get('/missions/daily');
      return response.data;
    } catch (error) {
      console.error('Error fetching daily missions:', error);
      throw error;
    }
  },

  getOneTime: async (): Promise<MissionResponse> => {
    try {
      const response = await axiosInstance.get('/missions/one-time');
      return response.data;
    } catch (error) {
      console.error('Error fetching one-time missions:', error);
      throw error;
    }
  },

  complete: async (data: CompleteMissionRequest): Promise<MissionResponse> => {
    try {
      const response = await axiosInstance.post('/missions/complete', data);
      return response.data;
    } catch (error) {
      console.error('Error completing mission:', error);
      throw error;
    }
  },
}; 