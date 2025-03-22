/**
 * Interface for Invite data structure
 */
export interface Invite {
  id: string;
  inviter: Invitee;
  inviterId: string;
  invitee?: Invitee;
  inviteeId?: string;
  isAccepted: boolean;
  telegramUsername?: string;
  rewardAmount?: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface for User with invite relationships
 */
export interface Invitee {
  id:               string;
  photoUrl:         string;
  firstName:        string;
  lastName:         string;
  isPremium:        boolean;
  telegramId:       string;
  telegramUsername: string;
  referralCode:     string;
  referrerId:       string;
  createdAt:        Date;
  updatedAt:        Date;
}

/**
 * Interface for the invites response
 */
export interface InvitesResponse {
  success: boolean;
  invites?: Invite[];
  error?: string;
} 