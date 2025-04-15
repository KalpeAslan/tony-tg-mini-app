import { axiosInstance } from '@/configs/axios.config';
import {
  ArcadeStatsResponse,
  ArcadeTicketsBalanceResponse,
  ArcadeGameStartResponse,
  ArcadeGameFinishRequest,
  ArcadeGameFinishResponse,
  ArcadeNextPlayResponse,
  ArcadeTicketsUseRequest,
  ArcadeTicketsUseResponse,
} from './arcade-model';

export const ArcadeApi = {
  stats: {
    get: async (): Promise<ArcadeStatsResponse> => {
      try {
        const response = await axiosInstance.get('/arcade/stats');
        return response.data;
      } catch (error) {
        console.error('Error fetching arcade stats:', error);
        throw error;
      }
    }
  },
  tickets: {
    getBalance: async (): Promise<ArcadeTicketsBalanceResponse> => {
      try {
        const response = await axiosInstance.get('/arcade/tickets/balance');
        return response.data;
      } catch (error) {
        console.error('Error fetching arcade tickets balance:', error);
        throw error;
      }
    },
    use: async (data: ArcadeTicketsUseRequest): Promise<ArcadeTicketsUseResponse> => {
      try {
        const response = await axiosInstance.post('/arcade/tickets/use', data);
        return response.data;
      } catch (error) {
        console.error('Error using arcade tickets:', error);
        throw error;
      }
    }
  },
  game: {
    start: async (): Promise<ArcadeGameStartResponse> => {
      try {
        const response = await axiosInstance.post('/arcade/game/start');
        return response.data;
      } catch (error) {
        console.error('Error starting arcade game:', error);
        throw error;
      }
    },
    finish: async (data: ArcadeGameFinishRequest): Promise<ArcadeGameFinishResponse> => {
      try {
        const response = await axiosInstance.post('/arcade/game/finish', data);
        return response.data;
      } catch (error) {
        console.error('Error finishing arcade game:', error);
        throw error;
      }
    }
  },
  nextPlay: {
    get: async (): Promise<ArcadeNextPlayResponse> => {
      try {
        const response = await axiosInstance.get('/arcade/next-play');
        return response.data;
      } catch (error) {
        console.error('Error fetching next play time:', error);
        throw error;
      }
    }
  }
}; 