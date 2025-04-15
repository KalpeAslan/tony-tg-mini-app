/**
 * Interface for Arcade Stats response
 */
export interface ArcadeStats {
  id: number;
  userId: string;
  playsLeft: number;
  tickets: number;
  lastPlayRefillTime: string;
  timeUntilNextPlay: {
    hours: number;
    minutes: number;
  };
}

/**
 * Interface for Arcade Stats response wrapper
 */
export type ArcadeStatsResponse = ArcadeStats;

/**
 * Interface for Arcade Tickets Balance response
 */
export interface ArcadeTicketsBalance {
  tickets: number;
}

/**
 * Interface for Arcade Tickets Balance response wrapper
 */
export interface ArcadeTicketsBalanceResponse {
  success: boolean;
  balance?: ArcadeTicketsBalance;
  error?: string;
}

/**
 * Interface for Arcade Game Start response
 */
export interface ArcadeGameStartResponse {
  success: boolean;
  message: string;
  tickets: number;
  error?: string;
}

/**
 * Interface for Arcade Game Finish request
 */
export interface ArcadeGameFinishRequest {
  isWin: boolean;
}

/**
 * Interface for Arcade Game Finish response
 */
export interface ArcadeGameFinishResponse {
  success: boolean;
  error?: string;
}

/**
 * Interface for Arcade Next Play response
 */
export interface ArcadeNextPlay {
  message: string;
  hours: number;
  minutes: number;
}

/**
 * Interface for Arcade Next Play response wrapper
 */
export interface ArcadeNextPlayResponse {
  success: boolean;
  nextPlay?: ArcadeNextPlay;
  error?: string;
}

/**
 * Interface for Arcade Tickets Use request
 */
export interface ArcadeTicketsUseRequest {
  amount: number;
}

/**
 * Interface for Arcade Tickets Use response
 */
export interface ArcadeTicketsUseResponse {
  success: boolean;
  amount?: number;
  error?: string;
} 