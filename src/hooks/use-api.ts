import { useQuery, useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/configs';

// Example query hook
export const useGetData = <T>(url: string, queryKey: string[]) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await axiosInstance.get<T>(url);
      return response.data;
    },
  });
};

// Example mutation hook
export const usePostData = <T, D>(url: string) => {
  return useMutation({
    mutationFn: async (data: D) => {
      const response = await axiosInstance.post<T>(url, data);
      return response.data;
    },
  });
};

// Example PUT mutation hook
export const usePutData = <T, D>(url: string) => {
  return useMutation({
    mutationFn: async (data: D) => {
      const response = await axiosInstance.put<T>(url, data);
      return response.data;
    },
  });
};

// Example DELETE mutation hook
export const useDeleteData = <T>(url: string) => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete<T>(url);
      return response.data;
    },
  });
}; 