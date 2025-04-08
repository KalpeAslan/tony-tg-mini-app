export interface DailyCheckInResponse {
  success: boolean;
  streak: number;
  amount: number;
  message?: string;
  canCheckIn?: boolean;
}

export interface DailyCheckInRequest {
  // Empty body as per requirements
}

export * from './daily-check-in-model';
export * from './daily-check-in-api'; 