import { axiosInstance } from '@/configs/axios.config';
import { 
  PaymentInvoiceRequest, 
  StarsPaymentInvoiceResponse, 
  TonPaymentInvoiceResponse 
} from './payments-model';

export const PaymentsApi = {
  stars: {
    invoice: async (data: PaymentInvoiceRequest): Promise<StarsPaymentInvoiceResponse> => {
      try {
        const response = await axiosInstance.post('/payments/stars/invoice', data);
        return response.data;
      } catch (error) {
        console.error('Error creating stars payment invoice:', error);
        throw error;
      }
    }
  },
  ton: {
    invoice: async (data: PaymentInvoiceRequest): Promise<TonPaymentInvoiceResponse> => {
      try {
        const response = await axiosInstance.post('/payments/ton/invoice', data);
        return response.data;
      } catch (error) {
        console.error('Error creating TON payment invoice:', error);
        throw error;
      }
    }
  }
}; 