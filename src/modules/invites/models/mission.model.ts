export interface Mission {
  id: number;
  title: string;
  description: string;
  expReward: number;
  type: 'daily' | 'one-time';
  isCompleted: boolean;
  socialPlatform: string;
  actionType: string;
  url?: string;
}

export interface CompleteMissionRequest {
  missionId: number;
}

export type MissionResponse = Mission[];