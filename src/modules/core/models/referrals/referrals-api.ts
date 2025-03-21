import { axiosInstance } from '@/configs/axios.config';
import { InvitesResponse } from './referrals-model';

export const ReferralsApi = {
  invites: {
    getInvites: async (): Promise<InvitesResponse> => {
      try {
        const response = await axiosInstance.get('/referrals/invites');
        return response.data;
      } catch (error) {
        console.error('Error fetching referral invites:', error);
        throw error;
      }
    }
  }
}; 