'use client';

import { useQuery } from "@tanstack/react-query";
import { TelegramApi } from "../models";
import { useState } from "react";


export const useMe = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { refetch: refetchUserData, isLoading, data: userData } = useQuery({
        queryKey: ['telegramMe'],
        queryFn: async () => {
          try {
            const response = await TelegramApi.telegram.me();
            console.log('response', response);
    
            if (response.success && response.user) {
              console.log('👤 User data fetched successfully:', response.user);
              setIsAuthenticated(true);
            } else {
              console.error('❌ Failed to fetch user data:', response.error);
              setIsAuthenticated(false);
            }
    
            return response;
          } catch (error) {
            console.error('❌ Error fetching user data:', error);
            setIsAuthenticated(false);
            throw error;
          }
        },
        enabled: false, // Don't run automatically
        retry: false,
      });

      return {
        isAuthenticated,
        refetchUserData,
        isLoading,
        userData,
      };
};
